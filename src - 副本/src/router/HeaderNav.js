import React from "react";
import utils from "../module/utils";
import "./headernav.scss";

import {
  HomeOutlined,
  MailOutlined,
  BookOutlined,
  SearchOutlined,
  PieChartOutlined,
  ThunderboltOutlined,
  LinkOutlined,
  FileSearchOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";

function HeaderNav() {
  const menuItemList = [
    {
      text: "Home",
      icon: <HomeOutlined style={{ fontSize: "20px", marginRight: "5px" }} />,
      path: "/Home",
    },
    {
      text: "Browse",
      icon: (
        <PieChartOutlined style={{ fontSize: "20px", marginRight: "5px" }} />
      ),
      path: "/Browse",
    },
    {
      text: "Search",
      icon: <SearchOutlined style={{ fontSize: "20px", marginRight: "5px" }} />,
      path: "/Search",
    },
    // {
    //   text: "BLAST",
    //   icon: (
    //     <FileSearchOutlined style={{ fontSize: "20px", marginRight: "5px" }} />
    //   ),
    //   path: "/Blast",
    // },
    {
      text: "Help",
      icon: <BookOutlined style={{ fontSize: "20px", marginRight: "5px" }} />,
      path: "/Help",
    },
    {
      text: "Download",
      icon: (
        <CloudDownloadOutlined
          style={{ fontSize: "20px", marginRight: "5px" }}
        />
      ),
      path: "/Download",
    },
    {
      text: "Contact",
      icon: <LinkOutlined style={{ fontSize: "20px", marginRight: "5px" }} />,
      path: "/Contact",
    },
  ];

  //点击菜单的回调
  function onClickMenuNew(path) {
    utils.routeToPage(path);
  }

  return (
    <React.Fragment>
      <div style={{ height: "64px" }} />
      <div className={"headernav-wrap " + "tuma-theme-bgcolor"}>
        {/* <div className='headernav-logo'>RPS</div>
                <Menu onClick={onClickMenu} theme='dark' mode='horizontal' style={{ whiteSpace: "nowrap", fontSize: "20px" }} >
                    {menuItemList.map((item, index) => {
                        return (
                            <Menu.Item key={item.path} >
                                {item.icon}{item.text}
                            </Menu.Item>
                        );
                    })}
                </Menu> */}
        <div className="headernav-logo">TUMA</div>
        {menuItemList.map((item, index) => {
          return (
            <div
              className={"headernav-item-wrap"}
              onClick={() => onClickMenuNew(item.path)}
              key={index}
            >
              {/* item.icon */}
              <span>{item.text}</span>
            </div>
          );
        })}
        <div
          className={"headernav-item-wrap"}
          onClick={() => window.open("https://renlab.org/")}
          key={999}
        >
          {/* item.icon */}
          <span>{"Renlab"}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderNav;
