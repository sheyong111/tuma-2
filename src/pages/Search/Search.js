import { Form, Table, Button, Spin, message } from "antd";
import { useParams } from "react-router";
import React, { useState } from "react";
import { BulbOutlined, SearchOutlined } from "@ant-design/icons";
import SearchForm from "./comps/SearchForm";
import ContentCard from "../components/ContentCard/ContentCard";
import REST from "../../module/RESTApi";
import utils from "../../module/utils";
import getTUMATableColumns from "../components/TUMATableColumn";
import renderTableTotal from "../components/renderTableTotal";

import "./search.scss";

export default function Search(props) {
  const [LLPSList, updateLLPSList] = useState([
    {
      // 加着测试用的
      id: "tuma_1",
      study: "Gopalakrishnan_2018",
      project: "PRJEB22893",
      assay: "WGS",
      samples: "ERR2162200",
      cancers: "Melanoma",
      treatment: "AnTi-PD1",
      sex: "Male",
      age: "88",
      response: "NR",
      treatmentSubtype: "PD1 monotherapy",
      geographicLocation: "USA",
      instrument: "Illumina HiSeq 2000",
      antibiotics: "NA",
      timepoint: "T0",
      patientId: "109865",
    },
  ]);
  const [pagination, updatePagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [firstSearchDone, updateFirstTime] = useState(false); // 如果直接点进页面，不要加载结果表格，直到用户执行第一次搜索
  const [isLoading, updateLoading] = useState(false);
  const { type, keyWords } = useParams();
  const [form] = Form.useForm();

  function getFormInitValue() {
    let initValues = {};
    if (type === "condensate" || type === "organism") {
      initValues[type] = [keyWords];
    } else if (type === "llpsId" || type === "rpsId") {
      initValues[type] = keyWords;
    } else {
      initValues.keyWordType = type;
      initValues.keyWord = keyWords;
    }
    return initValues;
  }

  /**
   * 搜索TUMA信息
   */
  function getLLPSList(partParams, pagination) {
    // 在这个节点判断一下用户到底有没有输入东西，没有就不给看，虽然好像很没有意义
    console.log(partParams);
    let hasData = false;
    Object.keys(partParams).forEach((key, index) => {
      // 遍历输入参数对象，如果有东西，则设置hasDataflag为true
      if (partParams[key] && !(Array.isArray(partParams[key]) && partParams[key].length === 0)) {
        hasData = true;
      }
    });
    if (!hasData) {
      message.error("Please select a builder and input/select value(s) to get started");
      return false;
    }

    let url = `/search`;
    let params = {
      // 从传入的参数中读取给接口的传参，这里还是一个一个进行读取，方便在这里进行各种奇葩数据修改需求，如果新加字段记得一定在这里处理下
      organism: partParams.organism || undefined,
    };

    if (pagination.total) {
      // 如果已经有了total值（即本次请求数据是翻页），则传该参数降低后端压力
      params.hasCountTotal = true;
    }

    // 单独控制分页相关的参数
    params.pageSize = pagination.pageSize;
    params.pageNo = pagination.current;
    updateLoading(true);
    REST.post(url, params)
      .then((res) => {
        updateLoading(false);
        if (res.code == "200") {
          let newDataList = utils.addKeyForArray(res.data.result);

          updateLLPSList(newDataList);
          updatePagination({
            ...pagination,
            total: pagination.total || res.data.total,
          });
          updateFirstTime(true); // 执行了搜索后，再显示结果表格
        }
      })
      .catch((err) => {
        updateLoading(false);
      });
  }

  // 点击search时的回调
  function onFinish(formData) {
    console.log(formData);
    // console.log(form.getFieldValue());
    if (formData.pmid) {
      formData.pmid = formData.pmid.trim(); // 除去用户输入的首尾两端的多余空格
    }
    let newPagination = {
      // 改变参数后的查询总是回到第一页，并需要重新请求total值
      current: 1,
      pageSize: pagination.pageSize,
      total: 0,
    };
    getLLPSList(formData, newPagination);
  }

  // 分页改变时的回调
  function onChangePage(pagination, filters, sorter) {
    console.log(pagination);
    getLLPSList(form.getFieldsValue(), pagination);
  }

  return (
    <div className="search-wrap">
      <div className="rps-theme-title-main" style={{ paddingBottom: "50px" }}>
        {/* Search */}
      </div>
      <ContentCard
        // title="Search builder"
        title="Search"
        wrapStyle={{ marginBottom: "25px" }}
        icon={<SearchOutlined />}>
        <Form
          form={form}
          name="searchForm"
          onFinish={onFinish}
          /* initialValues={getFormInitValue()} */
          labelCol={{
            lg: { span: 5 },
            xl: { span: 4 },
            xxl: { span: 6 },
          }}
          wrapperCol={{
            lg: { span: 19 },
            xl: { span: 20 },
            xxl: { span: 18 },
          }}>
          <SearchForm form={form} initBuilders={[type || "cancers"]} isLoading={isLoading} />
          {/* <div className="llps-search-btn-wrap" >
                        <Form.Item noStyle >
                            <Button type="primary" htmlType="submit" loading={isLoading} icon={<SearchOutlined />} size="large" >Search</Button>
                        </Form.Item>
                    </div> */}
        </Form>
      </ContentCard>

      <ContentCard title="Search result" icon={<BulbOutlined />}>
        <div className="llps-result-table-wrap">
          <Spin spinning={isLoading}>
            <Table
              columns={getTUMATableColumns(false)}
              dataSource={LLPSList}
              pagination={{
                position: ["topRight", "bottomRight"],
                showTotal: renderTableTotal,
                ...pagination,
              }}
              onChange={onChangePage}
              scroll={{ x: true }}
              rowClassName="rps-table-row"
              onHeaderRow={() => {
                return {
                  className: "rps-table-row",
                };
              }}
            />
          </Spin>
        </div>
      </ContentCard>
    </div>
  );
}
