import React, { lazy } from "react";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import HeaderNav from "./HeaderNav";
import { adminRoutes } from "./HeaderNav";

import Home from "../pages/Home/Home";
import Help from "../pages/Help/Help";
import Browser from "../pages/Browser/Browser";
import Analyze from "../pages/Analyze/Analyze";
import Datasets from "../pages/Datasets/Datasets";
import Tutorials from "../pages/Tutorials/Tutorials";

// const { Header, Footer, Content } = Layout;

// const Home = lazy(() => import("../pages/Home/Home"));
// const Browser = lazy(() => import("../pages/Browser/Browser"));
// const Help = lazy(() => import("../pages/Help/Help"));
// const Analyze = lazy(() => import("../pages/Analyze/Analyze"));
// const Datasets = lazy(() => import("../pages/Datasets/Datasets"));
// const Tutorials = lazy(() => import("../pages/Tutorials/Tutorials"));

const { Header, Footer, Content } = Layout;

const routes = adminRoutes.filter((route) => route.isShow);

function Index(props) {
  return (
    <Layout>
      <Header style={{ backgroundColor: "#2d2a2a", display: "flex" }}>
        header
        <Menu
          mode="horizontal"
          style={{ backgroundColor: "#2d2a2a", color: "#fff" }}
        >
          {routes.map((route) => {
            return (
              <Menu.Item
                key={route.path}
                onClick={(p) => props.history.push(p.key)}
              >
                {route.title}
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default withRouter(Index);
