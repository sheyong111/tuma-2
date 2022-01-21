import { Row, Col, Form, Input, Select, Popover, Button, Space } from "antd";
import { DeleteOutlined, SearchOutlined, SyncOutlined, PlusOutlined } from "@ant-design/icons";

import TitleWithTip from "../../components/TitleWithTip";
import SelectTag from "../../components/SelectTag";

import "./searchForm.scss";
import React, { useState } from "react";
import utils from "../../../module/utils";

export default function SearchForm(props) {
  const { form, initBuilders, isLoading } = props;
  const { Option } = Select;

  const [currentBuilderList, updateCurrentBuilder] = useState(initBuilders || ["cancers"]);

  const labelNameMap = {
    id: "TUMA ID",

    cancers: "Cancers",
    treatmentType: "Treatment subtype",
  };

  const formPropsList = ["cancers", "id", "treatmentType"];

  const CancersList = ["Melanoma", "RCC", "NSCLC", "GI"];
  const TreatmentTypeList = ["PD1 monotherapy", "PD1 Combo"];

  const formItemMap2 = {
    cancers: (
      <Form.Item name="cancers" noStyle>
        <Select mode="multiple" allowClear placeholder="All" style={{ width: "30vw" }} tagRender={SelectTag}>
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
        <Select mode="multiple" allowClear placeholder="All" style={{ width: "30vw" }} tagRender={SelectTag}>
          {TreatmentTypeList.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
    ),

    id: (
      <Form.Item name="cancers" noStyle>
        <Input placeholder={'Please input2, split by ","'} style={{ minWidth: "30vw" }} />
      </Form.Item>
    ),
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
        <Form.Item label={<TitleWithTip title={labelNameMap[propName]} />} labelCol={labelCol} wrapperCol={{ span: 24 }} labelAlign="right">
          <Space>
            {formItemMap2[propName]}
            <Button danger shape="circle" icon={<DeleteOutlined />} type="primary" onClick={onDelete}></Button>
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
            <div key={index} className="search-form-addlist-item" onClick={() => onChange(propName)}>
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
    let initBuilderList = ["cancers"]; // 注意重置表单的时候重置成这个，而非一次性的传入值initBuilders
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
        <Popover trigger="click" placement="bottom" content={<AddBuilderList onChange={addNewBuilder} />}>
          <Button type="primary" icon={<PlusOutlined />} size="large">
            Add New Builder
          </Button>
        </Popover>
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
                <BuilderItem propName={propName} onDelete={() => deleteBuilder(propName, index)} />
              </React.Fragment>
            );
          })
        )}
      </Row>

      <Row justify="center" style={{ marginBottom: "20px" }}>
        <Space>
          <Form.Item noStyle>
            <Button type="primary" htmlType="submit" loading={isLoading} icon={<SearchOutlined />} size="large">
              Search
            </Button>
          </Form.Item>
          <Button type="default" icon={<SyncOutlined />} className="rps-theme-color-sc rps-theme-bdcolor-sc" size="large" onClick={resetAllBuilders}>
            Reset
          </Button>
        </Space>
      </Row>
    </div>
  );
}
