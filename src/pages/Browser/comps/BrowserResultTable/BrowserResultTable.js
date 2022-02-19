import React, { useState } from "react";
import { Table, Form, Select, Checkbox, Spin, Tree } from "antd";
import REST from "../../../../module/RESTApi";
import InnerCard from "../../../components/InnerCard/InnerCard";
import utils from "../../../../module/utils";
import getTUMATableColumns from "../../../components/TUMATableColumn";
import TitleWithTip from "../../../components/TitleWithTip";
import titleTips from "../../../../module/titleTips";
import renderTableTotal from "../../../components/renderTableTotal";
import SelectTag from "../../../components/SelectTag";
import { BulbOutlined, SettingOutlined } from "@ant-design/icons";

function BrowserResultTable(props) {
  const CancersList = ["Melanoma", "RCC", "NSCLC", "GI"];

  const { params = {} } = props;

  const [tableDatas, updateData] = useState([]);
  const [pagination, updatePagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [isLoading, updateLoading] = useState(false);
  const [tumaIdFilterActivited, updateTumaIdFilter] = useState(false); // 这里是用来记录当前geneSymbol的filter是否启用的flag

  /**
   * 搜索TUMA信息
   */
  function getTUMAList(partParams, pagination) {
    let url = `/browse/search`;
    let params = {
      // 从传入的参数中读取给接口的传参
      tumaId: partParams.tumaId || undefined,
      study: partParams.study || undefined,
      project: partParams.project || undefined,
      assay: partParams.assay || undefined,
      samples: partParams.samples || undefined,
      cancers: partParams.cancers || undefined,
      treatment: partParams.treatment || undefined,
      sex: partParams.sex || undefined,
      age: partParams.age || undefined,
      response: partParams.response || undefined,
      treatmentSubtype: partParams.treatmentSubtype || undefined,
      geographicLocation: partParams.geographicLocation || undefined,
      instrument: partParams.instrument || undefined,
      antibiotics: partParams.antibiotics || undefined,
      timepoint: partParams.timepoint || undefined,
      patientId: partParams.patientId || undefined,
    };

    if (pagination.total) {
      // 如果已经有了total值（即本次请求数据是翻页），则传该参数降低后端压力
      params.hasCountTotal = true;
    }

    // 单独控制分页相关的参数
    params.pageSize = pagination.pageSize;
    params.pageNo = pagination.current;

    updateLoading(true);
    REST.post(url, params).then((res) => {
      updateLoading(false);
      let newDataList = utils.addKeyForArray(res.data.result);
      updateData(newDataList);
      updatePagination({ ...pagination, total: pagination.total || res.data.total });
    });
  }

  React.useEffect(() => {
    getTUMAList(params, { current: 1, pageSize: 10, total: 0 });
  }, [params]);

  function LabelHeader(props) {
    const { title } = props;
    return (
      <React.Fragment>
        <SettingOutlined />
        <span style={{ fontWeight: "bold", marginLeft: "5px", fontSize: "18px" }}>{title}</span>
      </React.Fragment>
    );
  }

  return (
    <InnerCard title="browse result" icon={<BulbOutlined />}>
      <Form.Item label={<LabelHeader title="Cancers" />} name="organism">
        <Select placeholder="All" mode="multiple" tagRender={SelectTag}>
          {CancersList.map((value, index) => {
            return (
              <Select.Option value={value} key={index}>
                {value}
              </Select.Option>
            );
          })}
        </Select>
      </Form.Item>
      <div className="browse-result-table-wrap">
        <Spin spinning={isLoading}>
          <Table
            columns={getTUMATableColumns(true)}
            dataSource={tableDatas}
            pagination={{ position: ["topRight", "bottomRight"], showTotal: renderTableTotal, ...pagination }}
            onChange={(pagination, filters, sorter) => {
              console.log("filter", filters);
              if (filters.geneName) {
                // 这里处理一下filter的逻辑
                params.geneName = filters.geneName[0];
                if (!tumaIdFilterActivited) {
                  // 如果此前未启用filter，则
                  getTUMAList(params, { current: 1, pageSize: 10, total: 0 }); // 强制回到第一页，清除total数值
                  updateTumaIdFilter(true); // 将该filter记录为已开启
                } else {
                  // 如果已经启用filter，则一切正常
                  getTUMAList(params, pagination);
                }
              } else {
                // 无filter
                params.geneName = undefined;
                if (tumaIdFilterActivited) {
                  // 如果此前记录开启了filter
                  updateTumaIdFilter(false); // 此时记录filter为已关闭
                  getTUMAList(params, { current: 1, pageSize: 10, total: 0 }); // 强制回到第一页，清除total数值
                } else {
                  getTUMAList(params, pagination);
                }
              }
            }}
            scroll={{ x: true }}
          />
        </Spin>
      </div>
    </InnerCard>
  );
}

export default BrowserResultTable;
