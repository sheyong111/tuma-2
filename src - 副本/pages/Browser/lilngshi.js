<div className="browser-content">
  <div className="browser-content-container">
    <div className="browser-content-left">
      1111
      <Form>
        <Form.Item>
          <Select>
            {selectList.map((item, index) => (
              <Option key={index} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          {" "}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Space className="browser-content-text-wrap">
        <Title>
          Welcome to <span className="browser-tuma-logo">TUMA!</span>
        </Title>
        <Paragraph>
          <Text strong>The Tumor Microbiome Analysor </Text>
          <Text mark>This 1s an example of the introduction this database</Text>
          TUMA advances science and health by providing access to tumor related{" "}
          <Text underline>microoganism</Text> (virus and bacteria) information
          and tools of the metagenomic dataprocessing, visualization.
        </Paragraph>
        <br />
        <Paragraph>
          With the advent of next generation sequencing, we have an
          unprecedented ability to study tumor and host genomes as well as those
          of the vast array of microorganisms thatexist within living organisms.
          Evidence now suggests that these microbes may confersusceptibility to
          certain cancers and may also influence response to therapeutics.
          thereis growing interest in targeting these microbes in the treatment
          of cancer and otherdiseases. Yet complexities exist, and a deeper
          understanding of host-
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
</div>;
