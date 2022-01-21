import TitleWithTip from "./TitleWithTip";
import { Tooltip, Button, Input, Space } from "antd";
import {
  PlusCircleOutlined,
  SearchOutlined,
  ClearOutlined,
  CheckOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import titleTips from "../../module/titleTips";
import React from "react";

const { BioProjectTip } = titleTips;

/**
 * 获取RPS表格列的方法，方便传参进行一些个性化
 * @param {Boolean} allowSearchGene 是否允许筛选geneSymbol
 */
function getTUMATableColumns(allowSearchGene) {
  /**
   * 搜索TUMA结果展示表格的columns，目前用于search页和browse页，抽取以保持统一设置
   */
  const tumaTableColumns = [
    // { title: <TitleWithTip title="RPS ID" tooltip={<RPSIdTip />} />, dataIndex: "rpsId", key: "rpsId", render: (text, item, index) => <a target="_blank" href={`./#/rpsDetail/${item.rpsId}`} >{text}</a> },
    {
      title: "Tuma ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <span>{text}</span>,
    },

    {
      title: "Study",
      dataIndex: "study",
      key: "study",
      render: (text) => <span>{text || "-"}</span>,
    },
    {
      title: <TitleWithTip title="Project" tooltip={<BioProjectTip />} />,
      dataIndex: "project",
      key: "project",
      render: (text) => <span>{text || "-"}</span>,
    },
    {
      title: "Assay",
      dataIndex: "assay",
      key: "assay",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Samples",
      dataIndex: "samples",
      key: "samples",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Cancers",
      dataIndex: "cancers",
      key: "cancers",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Treatment",
      dataIndex: "treatment",
      key: "treatment",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Response",
      dataIndex: "response",
      key: "response",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Treatment Subtype",
      dataIndex: "treatmentSubtype",
      key: "treatmentSubtype",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Geographic Location",
      dataIndex: "geographicLocation",
      key: "geographicLocation",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Instrument",
      dataIndex: "instrument",
      key: "instrument",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Antibiotics",
      dataIndex: "antibiotics",
      key: "antibiotics",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Timepoint",
      dataIndex: "timepoint",
      key: "timepoint",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Patient ID",
      dataIndex: "patientId",
      key: "patientId",
      render: (text) => <span>{text}</span>,
    },

    // {
    //   title: "RNA type",
    //   dataIndex: "rnaType",
    //   key: "rnaType",
    //   render: (text) => <span>{text || "-"}</span>,
    // },
    // {
    //   title: "RNA type",
    //   dataIndex: "rnaType",
    //   key: "rnaType",
    //   render: (text) => <span>{text || "-"}</span>,
    // },
    // {
    //   title: "RNA type",
    //   dataIndex: "rnaType",
    //   key: "rnaType",
    //   render: (text) => <span>{text || "-"}</span>,
    // },
    // {
    //   title: "RNA type",
    //   dataIndex: "rnaType",
    //   key: "rnaType",
    //   render: (text) => <span>{text || "-"}</span>,
    // },
  ];

  return tumaTableColumns;
}

export default getTUMATableColumns;
