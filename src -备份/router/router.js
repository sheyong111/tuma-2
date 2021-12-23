import React, { lazy } from "react";
import { Layout, BackTop } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
  return (
    <React.Fragment>
      {" "}
      <Layout>
        <Router>
          <Header>
            <HeaderNav />
          </Header>
          <Content
            style={{
              minHeight: "100%",
            }}
          >
            <BackTop />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/help" element={<Help />} />
              <Route path="/browser" element={<Browser />} />
              <Route path="/search" element={<Search />} />
              <Route path="/contact" element={<Contact />} />
              <Route />
            </Routes>
          </Content>
          <Footer className="tuma-footer">
            TUMA © 2021 The Ren Lab. All Rights Reserved
          </Footer>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
