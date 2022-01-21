import React, { lazy } from "react";
import { Layout, BackTop } from "antd";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import { createHashHistory } from "history";

import HeaderNav from "./HeaderNav";
import "./footer.scss";
import { menuItemList, adminRoutes } from "./HeaderNav";

import Home from "../pages/Home/Home";
import Help from "../pages/Help/Help";
import Search from "../pages/Search/Search";
import Download from "../pages/Download/Download";
import Browser from "../pages/Browser/Browser";
import Contact from "../pages/Contact/Contact";

const { Header, Footer, Content } = Layout;

function Index() {
  // const history = createHashHistory();

  return (
    <React.Fragment>
      {" "}
      <Layout>
        <Router>
          {/* <Header>
          </Header> */}
          <HeaderNav />
          <Content
            style={{
              minHeight: "100%",
            }}>
            <BackTop />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Help" element={<Help />} />
              <Route path="/Browser" element={<Browser />} />
              <Route path="/Search" element={<Search />} />
              <Route path="/Download" element={<Download />} />
              <Route path="/Contact" element={<Contact />} />
              {/* <Route path="*" element={<Home />} /> */}
              <Route path="*" element={<Navigate to="/Home" />} />
              <Route />
            </Routes>
          </Content>
          <Footer className="tuma-footer">TUMA © 2021 The Ren Lab. All Rights Reserved</Footer>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
