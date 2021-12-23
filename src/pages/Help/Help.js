import React, { useRef, useState } from "react";

import { Typography, Menu } from "antd";
import {
  UnorderedListOutlined,
  DatabaseOutlined,
  FunnelPlotOutlined,
  BulbOutlined,
} from "@ant-design/icons";

import "./help.scss";

const { Title, Paragraph, Text } = Typography;
const { SubMenu } = Menu;

const titleStyle = {
  color: "#08979c",
};

function Help() {
  function Navigation() {
    return (
      <div>
        11111111111111
        <Menu mode="inline">
          <Menu.Item
            key={"tuma-help-introduction"}
            icon={<UnorderedListOutlined />}
          >
            <LinkTitle title="Introduction to TUMA" />
          </Menu.Item>
          <SubMenu
            key={"tuma-help-usage"}
            icon={<BulbOutlined />}
            title={<LinkTitle title="Usage of TUMA" />}
          >
            <Menu.Item key={"tuma-help-usage-browser"}>
              <LinkTitle title="Browser" />
            </Menu.Item>
            <Menu.Item key={"tuma-help-usage-datasets"}>
              <LinkTitle title="Datasets" />
            </Menu.Item>
            <Menu.Item key={"tuma-help-usage-analyze"}>
              <LinkTitle title="Analyze" />
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }

  // 封装导航栏title
  function LinkTitle(props) {
    const { title } = props;
    return (
      <span style={{ fontSize: "14px" }} title={title}>
        {title}
      </span>
    );
  }

  return (
    <div className="tuma-help-wrap">
      <div className="tuma-help-content">
        <div className="tuma-help-content-left">
          <Typography>
            <Title style={titleStyle}>Introduction to TUMA</Title>
            <Paragraph style={{ fontSize: "20px" }}>
              The Tumor Microbiome Analysor This 1s an example of the
              introduction of this database TUMA advances science and health by
              providing access to tumor related microoganism (virus and
              bacteria) information and tools of the metagenomic data
              processing, visualization. With the advent of next-generation
              sequencing, we have an unprecedented ability to study tumor and
              host genomes as well as those of the vast array of microorganisms
              that exist within living organisms. Evidence now suggests that
              these microbes may confer susceptibility to certain cancers and
              may also influence response to therapeutics. there is growing
              interest in targeting these microbes in the treatment of cancer
              and other diseases. Yet complexities exist, and a deeper
              understanding of host-microbiome interactions is critical to
              realization of the full potential of such approaches.
            </Paragraph>

            <Title style={titleStyle}>Usage of TUMA</Title>
            <Paragraph>
              TUMA provides a user-friendly web interface that contains four
              modules: Browse, Search, Blast, and Download.
            </Paragraph>

            <Title level={3} style={titleStyle}>
              Browser
            </Title>

            <Title level={3} style={titleStyle}>
              Datasets
            </Title>

            <Title level={3} style={titleStyle}>
              Analyze
            </Title>
          </Typography>
        </div>
        <div className="tuma-help-content-right">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

export default Help;
