import React from "react";
import { Typography, Space, Form, Select, Button, Card, Input } from "antd";
import pic1 from "../../imgs/browser/1.PNG";
import pic2 from "../../imgs/browser/2.PNG";
import pic3 from "../../imgs/browser/3.PNG";

import "./browser.scss";

const { Text, Link, Title, Paragraph } = Typography;

const { Option } = Select;

function Browser() {
  const selectList = [
    { label: "Gene symbol", value: "geneName" },
    { label: "Gene ID", value: "geneId" },
    { label: "Transcript ID", value: "transcriptId" },
    { label: "Condensate", value: "condensate" },
    { label: "Organism", value: "organism" },
    { label: "LLPS ID", value: "llpsId" },
    { label: "RPS ID", value: "rpsId" },
  ];

  return (
    <div className="browser-content">
      <div className="browser-content-container">
        <div className="browser-content-left">
          <div className="activ-wrap">
            <Form style={{ width: "100%" }}>
              <Form.Item noStyle name="type">
                <Select className="select-wrap browserpage-comps main-select">
                  {selectList.map((item, index) => (
                    <Option key={index} value={item.value}>
                      {item.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Input
                placeholder="input placeholder"
                className="input-wrap browserpage-comps"
              />
              <Form.Item noStyle>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="search-btn browserpage-comps"
                >
                  Go
                </Button>
              </Form.Item>
            </Form>
          </div>

          <Space className="browser-content-text-wrap" direction="vertical">
            <Title>
              Welcome to <span className="browser-tuma-logo">TUMA!</span>
            </Title>
            <Paragraph>
              <Text strong>The Tumor Microbiome Analysor </Text>
              <Text type="danger">
                This 1s an example of the introduction of this database
              </Text>{" "}
              TUMA advances science and health by providing access to tumor
              related <Text underline>microoganism</Text> (virus and bacteria)
              information and tools of the metagenomic data processing,
              visualization.
            </Paragraph>
            <Paragraph>
              With the advent of next-generation sequencing, we have an
              unprecedented ability to study tumor and host genomes as well as
              those of the vast array of microorganisms that exist within living
              organisms. Evidence now suggests that these microbes may confer
              susceptibility to certain cancers and may also influence response
              to therapeutics. there is growing interest in targeting these
              microbes in the treatment of cancer and other diseases. Yet
              complexities exist, and a deeper understanding of host-
              <Text underline>microbiome </Text> interactions is critical to
              realization of the full potential of such approaches.
            </Paragraph>
          </Space>
        </div>
        {/* 右侧图片 */}
        <div className="browser-content-picture">
          <h1>Statistics</h1>
          <div>
            <h2>Studies</h2>
            <img src={pic1} />
          </div>
          <div>
            <h2>CancerTypes</h2>
            <img src={pic2} />
          </div>
          <div>
            <h2>Therapies</h2>
            <img src={pic3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browser;
