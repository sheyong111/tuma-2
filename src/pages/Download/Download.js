import { FolderOutlined, MonitorOutlined } from "@ant-design/icons";
import { Table, Button } from "antd";
import ContentCard from "../components/ContentCard/ContentCard";
import downloadData from "../../module/json/downloadData.json";
import utils from "../../module/utils";
import TitleWithTip from "../components/TitleWithTip";

import "./download.scss";

export default function Download(props) {
  const { advancedDatasets, basicDatasets } = downloadData;

  function DownloadTable(props) {
    const { data } = props;

    let _data = utils.addKeyForArray(data);

    const columns = [
      { title: "Dataset", dataIndex: "name", key: "name" },
      { title: "Description", dataIndex: "description", key: "description" },
      {
        title: "Download",
        dataIndex: "",
        key: "download",
        render: (text, item, index) => {
          return (
            <Button
              href={`http://tuma.renlab.org/download/${item.name}.zip`}
              download={item.name}
              size="small"
              type="primary"
              style={{ fontSize: "14px" }}
            >
              zip
            </Button>
          );
        },
      },
    ];

    return (
      <Table
        dataSource={_data}
        columns={columns}
        scroll={{ x: true }}
        bordered
        pagination={false}
      />
    );
  }

  return (
    <div className="download-wrap">
      <ContentCard
        title="Basic information"
        icon={<FolderOutlined />}
        wrapStyle={{ marginBottom: "20px" }}
        tableMode={true}
      >
        <DownloadTable data={basicDatasets} />
      </ContentCard>
      <ContentCard
        title={
          <TitleWithTip
            title="Advanced information"
            tooltip={
              "The advanced information are sequence-centered with the unique identifier 'Seq ID'"
            }
          />
        }
        icon={<MonitorOutlined />}
        wrapStyle={{ marginBottom: "20px" }}
        tableMode={true}
      >
        <DownloadTable data={advancedDatasets} />
      </ContentCard>
    </div>
  );
}
