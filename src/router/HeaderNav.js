// import { withRouter } from "react-router";
import React, { useState } from "react";
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

export const menuItemLists = [
  {
    path: "#/Home",
    component: Home,
    title: "Home",
  },
  {
    path: "#/Browser",
    component: Browser,
    title: "Browser",
  },
  {
    path: "#/Search",
    component: Search,
    title: "Search",
  },
  {
    path: "#/Download",
    component: Download,
    title: "Download",
  },
  {
    path: "#/Help",
    component: Help,
    title: "Help",
  },
  {
    path: "#/Contact",
    component: Contact,
    title: "Contact",
  },
];

function HeaderNav(props) {
  const hashPath = window.location.href;

  const [currentPath, updatePath] = useState(hashPath);

  console.log(window.location.href);
  console.log(window.location.pathname);
  console.log(window.location.pathname);
  console.log(window.location.pathname);
  console.log(window.location.pathname);
  console.log(window.location.pathname);
  console.log(window.location.pathname);
  console.log(window.location.pathname);

  //点击菜单的回调
  function onClickMenuNew(path) {
    utils.routeToPage(path);
  }

  return (
    <React.Fragment>
      <div style={{ height: "64px" }} />
      <div className={"headernav-wrap " + "tuma-theme-bgcolor"}>
        <div className="headernav-logo">TUMA</div>
        {menuItemLists.map((item, index) => {
          return (
            <div
              className={"headernav-item-wrap" + " tuma-theme-bgcolor" + (currentPath.indexOf(item.path.split("#")[1]) > -1 ? "activated tuma-theme-bdcolor-sc tuma-theme-color-sc" : "")}
              onClick={() => onClickMenuNew(item.path)}
              key={index}>
              {/* item.icon */}
              <span>{item.title}</span>
            </div>
          );
        })}
        <div className={"headernav-item-wrap" + " tuma-theme-bgcolor"} onClick={() => window.open("https://renlab.org/")} key={999}>
          <span>{"Renlab"}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderNav;

// +
// (currentPath.indexOf(item.path.split("/")[1]) > -1
//   ? "activated tuma-theme-bdcolor-sc tuma-theme-color-sc"
//   : "")
