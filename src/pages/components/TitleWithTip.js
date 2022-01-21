import { Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";

/**
 * 封装表格标题显示tooltip组件
 */
export default function TitleWithTip(props) {
  const { title, tooltip, color } = props;

  return (
    <div
      style={{
        whiteSpace: "nowrap",
        fontWeight: "bold",
        display: "inline-block",
      }}>
      {title}
      {tooltip ? (
        <Tooltip title={tooltip} color={color || "#3f3f3f"}>
          {" "}
          <QuestionCircleFilled />
        </Tooltip>
      ) : null}
    </div>
  );
}
