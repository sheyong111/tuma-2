// import { withRouter } from "react-router";
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import utils from "../module/utils";

import "./headerNav.scss";

import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import Help from "../pages/Help/Help";
import Browser from "../pages/Browser/Browser";
import Download from "../pages/Download/Download";
import Contact from "../pages/Contact/Contact";

export const menuItemList = [
  {
    path: "/home",
    component: Home,
    title: "Home",
  },
  {
    path: "/browser",
    component: Browser,
    title: "Browser",
  },
  {
    path: "/search",
    component: Search,
    title: "Search",
  },
  {
    path: "/download",
    component: Download,
    title: "Download",
  },
  {
    path: "/help",
    component: Help,
    title: "Help",
  },
  {
    path: "/contact",
    component: Contact,
    title: "Contact",
  },
];

function HeaderNav() {
  //点击菜单的回调
  function onClickMenuNew(path) {
    utils.routeToPage(path);
  }

  return (
    <React.Fragment>
      <div style={{ height: "64px" }} />
      <div className={"headernav-wrap " + "rps-theme-bgcolor"}>
        <div className="headernav-logo">RPS</div>
        {menuItemList.map((item, index) => {
          return (
            <div
              className={"headernav-item-wrap" + " rps-theme-bgcolor"}
              onClick={() => onClickMenuNew(item.path)}
              key={index}
            >
              {/* item.icon */}
              <span>{item.title}</span>
            </div>
          );
        })}
        <div
          className={"headernav-item-wrap" + " rps-theme-bgcolor"}
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
