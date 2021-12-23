import React, { lazy } from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HeaderNav from "./HeaderNav";
import { menuItemList, adminRoutes } from "./HeaderNav";

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

function Index() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Header>
            <HeaderNav />
          </Header>
          <Content>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/help" element={<Help />} />
              <Route path="/browser" element={<Browser />} />
              <Route path="/analyze" element={<Analyze />} />
              <Route path="/datasets" element={<Datasets />} />
              <Route path="/tutorials" element={<Tutorials />} />
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
          <Footer>Footer</Footer>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
