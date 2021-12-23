import React, { lazy } from "react";
import { Layout, BackTop } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderNav from "./HeaderNav";
import "./footer.scss";
import { menuItemList, adminRoutes } from "./HeaderNav";

import Home from "../pages/Home/Home";
import Help from "../pages/Help/Help";
import Browser from "../pages/Browser/Browser";
import Analyze from "../pages/Analyze/Analyze";
import Datasets from "../pages/Datasets/Datasets";
import Tutorials from "../pages/Tutorials/Tutorials";
import Contact from "../pages/Contact/Contact";

// const { Header, Footer, Content } = Layout;

// const Home = lazy(() => import("../pages/Home/Home"));
// const Browser = lazy(() => import("../pages/Browser/Browser"));
// const Help = lazy(() => import("../pages/Help/Help"));
// const Analyze = lazy(() => import("../pages/Analyze/Analyze"));
// const Datasets = lazy(() => import("../pages/Datasets/Datasets"));
// const Tutorials = lazy(() => import("../pages/Tutorials/Tutorials"));

const { Header, Footer, Content } = Layout;

function Index() {
  return (
    <Layout>
      <Router>
        <Header
          style={{
            height: "200px",
            padding: "0px",
            display: "flex",
          }}
        >
          <HeaderNav />
        </Header>
        <Content
          style={{
            backgroundColor: "#ececec",
            minHeight: "100%",
            paddingBottom: "200px",
          }}
        >
          <BackTop />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/browser" element={<Browser />} />
            <Route path="/analyze" element={<Analyze />} />
            <Route path="/datasets" element={<Datasets />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/contact" element={<Contact />} />
            {/* {menuItemList.map((route) => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact}
                    render={(routeProps) => {
                      return <route.component {...routeProps} />;
                    }}
                  />
                );
              })} */}
            <Route />
          </Routes>
        </Content>
        <Footer className="tuma-footer">
          TUMA © 2021 The Ren Lab. All Rights Reserved
        </Footer>
      </Router>
    </Layout>
  );
}

export default Index;
