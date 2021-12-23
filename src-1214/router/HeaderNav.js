// import { withRouter } from "react-router";
import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import logo from "../imgs/public/logo.PNG";
import "./HeaderNav.scss";

import Home from "../pages/Home/Home";
import Help from "../pages/Help/Help";
import Browser from "../pages/Browser/Browser";
import Analyze from "../pages/Analyze/Analyze";
import Datasets from "../pages/Datasets/Datasets";
import Tutorials from "../pages/Tutorials/Tutorials";
import Contact from "../pages/Contact/Contact";

export const adminRoutes = [
  {
    path: "/home",
    component: Home,
    title: "Home",
  },
  {
    path: "/datasets",
    component: Datasets,
    title: "Datasets",
  },
  {
    path: "/browser",
    component: Browser,
    title: "Browser",
  },
  {
    path: "/tutorials",
    component: Tutorials,
    title: "Tutorials",
  },
  {
    path: "/analyze",
    component: Analyze,
    title: "Analyze",
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
  return (
    <div className="headernav-content">
      <div className="headernav-logo">
        <img src={logo} alt="logo" height="90px" />
      </div>
      <div className="headernav-right">
        <p className="headernav-title">Tumor Microbiome Analysor</p>
        <div className="headernav-item1111">
          {adminRoutes.map((item, index) => {
            return (
              <div className="headernav-item-wrap">
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    // <div className="headernav-wrap">
    //   <div className="headernav-logo">
    //     <img src={logo} alt="logo" height="80px" />
    //   </div>
    //   <div>
    //     <h1 className="headernav-title">Tumor Microbiome Analysor</h1>
    //     <div className="headernav-item1111">
    //       {adminRoutes.map((item, index) => {
    //         return (
    //           <div className="headernav-item-wrap">
    //             <span>{item.title}</span>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
}

export default HeaderNav;

// import Analyze from "../pages/Analyze/Analyze";
// import Browser from "../pages/Browser/Browser";
// import Datasets from "../pages/Datasets/Datasets";
// import Help from "../pages/Help/Help";
// import Home from "../pages/Home/Home";

// export const adminRoutes = [
//   {
//     path: "/home",
//     component: Home,
//   },
//   {
//     path: "/analyze",
//     component: Analyze,
//   },
//   {
//     path: "/browser",
//     component: Browser,
//   },
//   {
//     path: "/datasets",
//     component: Datasets,
//   },
//   {
//     path: "/help",
//     component: Help,
//   },
// ];

// {adminRoutes.map((item, index) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         paddingLeft: "50px",
//         paddingRight: "40px",
//       }}
//     >
//       {/* item.icon */}
//       <span>{item.text}</span>
//     </div>
//   );
// })}
