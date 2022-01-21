import { Card } from "antd";
import React from "react";

import "./contentCard.scss";

/**
 * 二次封装antd的Card组件，方便统一管理卡片样式
 */
export default function ContentCard(props) {
  const {
    title,
    icon,
    wrapStyle,
    tableMode, // 如果该值为true，代表需要显示为表格的特殊样式调整，如去除一些不必要的padding
    disableCard, // 如果该值为true，代表极少数的情况下，需要去掉card组件，改为直接展示内容
  } = props;

  // 渲染卡片头部的方法
  function renderCardTitle() {
    if (!title) {
      return null;
    } else {
      return (
        <div className="contentcard-title-wrap tuma-theme-color tuma-theme-bdcolor">
          {icon}
          <span className="contentcard-title-text">{title}</span>
        </div>
      );
    }
  }

  const cardHeadStyle = {
    border: "none",
    paddingLeft: "0px",
  };

  if (disableCard) {
    return <React.Fragment>{props.children}</React.Fragment>;
  } else {
    return (
      <Card title={renderCardTitle()} headStyle={cardHeadStyle} style={wrapStyle} className={"card-wrap card-wrap-shadow card-wrap-border " + (tableMode ? "card-nopadding" : "")}>
        {props.children}
      </Card>
    );
  }
}
