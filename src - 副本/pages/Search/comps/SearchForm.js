import { Row, Col, Form, Input, Select, Popover, Button, Space } from "antd";
import {
  DeleteOutlined,
  SearchOutlined,
  SyncOutlined,
  PlusOutlined,
} from "@ant-design/icons";
// import matchObj from "../../../module/matchObj";
import organismList from "../../../module/json/organismList.json";
import condensateFunc from "../../../module/condensate";
import rnaSourceList from "../../../module/json/rnaSourceList.json";
import dataSourceList from "../../../module/json/evidenceTypeList.json";
import rnaTypeList from "../../../module/json/rnaTypeList.json";
import TitleWithTip from "../../components/TitleWithTip";
import SelectTag from "../../components/SelectTag";

import "./searchForm.scss";
import React, { useState } from "react";
import utils from "../../../module/utils";

export default function SearchForm(props) {
  const { form, initBuilders, isLoading } = props;
  const { Option } = Select;

  const [currentBuilderList, updateCurrentBuilder] = useState(
    initBuilders || ["geneName"]
  );

  const tooltipsMap = {
    organism: "Select an interested organism of LLPS RNAs.",
    rnaType: "Select either natural or synthetic LLPS RNAs.",
    condensate: "Select an interested condensate that undergoes LLPS.",
    source: "Select the evidence type of LLPS RNAs.",
    rnaSource: "Select either natural or synthetic LLPS RNAs.",
  };

  const labelNameMap = {
    id: "TUMA ID",
    geneName: "Gene symbol",
    // disease: "Disease",
    geneId: "Gene ID",
    // transcriptId: "Transcript ID",
    // organism: "Organism",
    // rnaSource: "Natural/Synthetic",
    // rnaType: "RNA type",
    // condensate: "Condensate",
    // source: "Evidence type",
    // llpsId: "LLPS ID",
    // rpsId: "RPS ID",
    // pmId: "PMID",
    cancers: "Cancers",
    treatmentType: "Treatment subtype",
  };

  const formPropsList = [
    // "geneName",
    // "geneId",
    // "transcriptId",
    // "organism",
    // "rnaSource",
    // "rnaType",
    // "condensate",
    // "disease",
    // "source",
    // "llpsId",
    // "rpsId",
    // "pmId",
    "cancers",
    "id",
    "treatmentType",
  ];

  const CancersList = ["Melanoma", "RCC", "NSCLC", "GI"];
  const TreatmentTypeList = ["PD1 monotherapy", "PD1 Combo"];

  const formItemMap2 = {
    cancers: (
      <Form.Item name="cancers" noStyle>
        <Select
          mode="multiple"
          allowClear
          placeholder="All"
          style={{ width: "30vw" }}
          tagRender={SelectTag}
        >
          {CancersList.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
    ),
    treatmentType: (
      <Form.Item name="treatmentType" noStyle>
        <Select
          mode="multiple"
          allowClear
          placeholder="All"
          style={{ width: "30vw" }}
          tagRender={SelectTag}
        >
          {TreatmentTypeList.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
    ),
    // cancers: (
    //   <Form.Item name="cancers" noStyle>
    //     <Input
    //       placeholder={'Please input1, split by ","'}
    //       style={{ minWidth: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
    id: (
      <Form.Item name="cancers" noStyle>
        <Input
          placeholder={'Please input2, split by ","'}
          style={{ minWidth: "30vw" }}
        />
      </Form.Item>
    ),

    // geneName: (
    //   <Form.Item name="geneName" noStyle>
    //     <Input
    //       placeholder={'Please input gene symbol(s) like NEAT1, split by ","'}
    //       style={{ minWidth: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
    // disease: (
    //   <Form.Item name="disease" noStyle>
    //     <Input
    //       placeholder={"Please input disease name like Alzheimer's disease"}
    //       style={{ minWidth: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
    // geneId: (
    //   <Form.Item name="geneId" noStyle>
    //     <Input
    //       placeholder={
    //         'Please input gene ID(s) like  ENSG00000065526, split by ","'
    //       }
    //       style={{ width: "30vw" }}
    //     />
    //   </Form.Item>
    // ),

    // transcriptId: (
    //   <Form.Item name="transcriptId" noStyle>
    //     <Input
    //       placeholder={
    //         'Please input transcript ID(s) like ENST00000375759, split by ","'
    //       }
    //       style={{ width: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
    // llpsId: (
    //   <Form.Item name="llpsId" noStyle>
    //     <Input
    //       placeholder={'Please input LLPS ID(s) like LLPS_L1_4, split by ","'}
    //       style={{ width: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
    // rpsId: (
    //   <Form.Item name="rpsId" noStyle>
    //     <Input
    //       placeholder={'Please input RPS ID(s) like RPS_L1_4, split by ","'}
    //       style={{ width: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
    // organism: (
    //   <Form.Item name="organism" noStyle>
    //     <Select
    //       mode="multiple"
    //       allowClear
    //       placeholder="All"
    //       style={{ width: "30vw" }}
    //       tagRender={SelectTag}
    //     >
    //       {organismList.map((item, index) => (
    //         <Option key={index} value={item}>
    //           {item}
    //         </Option>
    //       ))}
    //     </Select>
    //   </Form.Item>
    // ),
    // rnaSource: (
    //   <Form.Item name="rnaSource" noStyle>
    //     <Select
    //       mode="multiple"
    //       allowClear
    //       placeholder="All"
    //       style={{ width: "30vw" }}
    //       tagRender={SelectTag}
    //     >
    //       {rnaSourceList.map((item, index) => (
    //         <Option key={index} value={item}>
    //           {item}
    //         </Option>
    //       ))}
    //     </Select>
    //   </Form.Item>
    // ),
    // rnaType: (
    //   <Form.Item name="rnaType" noStyle>
    //     <Select
    //       mode="multiple"
    //       allowClear
    //       placeholder="All"
    //       style={{ width: "30vw" }}
    //       tagRender={SelectTag}
    //     >
    //       {rnaTypeList.map((item, index) => (
    //         <Option key={index} value={item}>
    //           {item}
    //         </Option>
    //       ))}
    //     </Select>
    //   </Form.Item>
    // ),
    // condensate: (
    //   <Form.Item name="condensate" noStyle>
    //     <Select
    //       mode="multiple"
    //       allowClear
    //       placeholder="All"
    //       style={{ width: "30vw" }}
    //       tagRender={SelectTag}
    //     >
    //       {condensateFunc.getSelectList().map((item, index) => (
    //         <Option key={index} value={item}>
    //           {item}
    //         </Option>
    //       ))}
    //     </Select>
    //   </Form.Item>
    // ),
    // source: (
    //   <Form.Item name="source" noStyle>
    //     <Select
    //       mode="multiple"
    //       allowClear
    //       placeholder="All"
    //       style={{ width: "30vw" }}
    //       tagRender={SelectTag}
    //     >
    //       {dataSourceList.map((item, index) => (
    //         <Option key={index} value={item}>
    //           {item}
    //         </Option>
    //       ))}
    //     </Select>
    //   </Form.Item>
    // ),
    // pmId: (
    //   <Form.Item name="pmid" noStyle>
    //     <Input
    //       placeholder={'Please input PMID like "29064502", split by ","'}
    //       style={{ width: "30vw" }}
    //     />
    //   </Form.Item>
    // ),
  };

  // 一个builder组件，统一收归了一些功能和样式
  function BuilderItem(props) {
    const { propName, onDelete } = props;

    const labelCol = {
      span: 8,
      xxl: { span: 6 },
    };

    return (
      <Col span={18}>
        <Form.Item
          label={
            <TitleWithTip
              title={labelNameMap[propName]}
              tooltip={tooltipsMap[propName]}
            />
          }
          labelCol={labelCol}
          wrapperCol={{ span: 24 }}
          labelAlign="right"
        >
          <Space>
            {formItemMap2[propName]}
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              type="primary"
              onClick={onDelete}
            ></Button>
          </Space>
        </Form.Item>
      </Col>
    );
  }

  // 点击新增builder按钮后展示的下拉选项
  function AddBuilderList(props) {
    const { onChange } = props;

    return (
      <div className="search-form-addlist-wrap">
        {formPropsList.map((propName, index) => {
          return (
            <div
              key={index}
              className="search-form-addlist-item"
              onClick={() => onChange(propName)}
            >
              {labelNameMap[propName]}
            </div>
          );
        })}
      </div>
    );
  }

  // 新增builder的方法
  function addNewBuilder(newPropName) {
    if (utils.contain(currentBuilderList, newPropName)) {
      return;
    } else {
      let newBuilderList = [];
      currentBuilderList.forEach((item, index) => {
        // 将旧列表复制给新列表
        newBuilderList.push(item);
      });
      newBuilderList.push(newPropName); // 在新列表末尾添加新增builder
      updateCurrentBuilder(newBuilderList);
    }
  }

  // 重置所有builder的方法
  function resetAllBuilders() {
    let initBuilderList = ["geneName"]; // 注意重置表单的时候重置成这个，而非一次性的传入值initBuilders
    form.resetFields();
    updateCurrentBuilder(initBuilderList);
  }

  /**
   * 点击删除按钮删除一个builder的方法
   * @param {String} propName 被删除的builder的propName
   * @param {Number} index 被删除builder当前位于currentBuilderList列表中的位置
   */
  function deleteBuilder(propName, index) {
    let newBuilderList = [];
    currentBuilderList.forEach((item, index) => {
      // 将旧列表复制给新列表
      newBuilderList.push(item);
    });
    newBuilderList.splice(index, 1);
    form.resetFields([propName]); // 将表单中对应的属性重置
    updateCurrentBuilder(newBuilderList);
  }

  return (
    <div className="search-form-wrap">
      <Row justify="end" style={{ marginBottom: "20px", paddingRight: "15vw" }}>
        <Popover
          trigger="click"
          placement="bottom"
          content={<AddBuilderList onChange={addNewBuilder} />}
        >
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Add New Builder
          </Button>
        </Popover>
        {/* <Col offset={10} >
                    <Button type="primary" size="large" onClick={resetAllBuilders} >Reset</Button>
                </Col> */}
      </Row>

      <Row justify="center" style={{ marginBottom: "20px" }}>
        {currentBuilderList.length === 0 ? (
          <Col span={14}>
            <Button disabled block>
              Please add at least one builder to start.
            </Button>
          </Col>
        ) : (
          currentBuilderList.map((propName, index) => {
            return (
              <React.Fragment key={index}>
                <BuilderItem
                  propName={propName}
                  onDelete={() => deleteBuilder(propName, index)}
                />
              </React.Fragment>
            );
          })
        )}
      </Row>

      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Space>
          <Form.Item noStyle>
            <Button
              type="primary"
              htmlType="submit"
              loading={isLoading}
              icon={<SearchOutlined />}
              size="large"
            >
              Search
            </Button>
          </Form.Item>
          <Button
            type="default"
            icon={<SyncOutlined />}
            className="rps-theme-color-sc rps-theme-bdcolor-sc"
            size="large"
            onClick={resetAllBuilders}
          >
            Reset
          </Button>
        </Space>
      </Row>
    </div>
  );
}
