import React, { lazy } from "react";
import { Layout, BackTop } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./footer.scss";
import HeaderNav from "./HeaderNav";

import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Browser from "../pages/Browser/Browser";
import Help from "../pages/Help/Help";
import Download from "../pages/Dowdload/Download";
import Search from "../pages/Search/Search";

const { Header, Content, Footer } = Layout;

function Index() {
  return (
    <React.Fragment>
      <Layout>
        <Router>
          <Header>
            <HeaderNav />
          </Header>
          <Content>
            <BackTop />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/browse" element={<Browser />} />
              <Route path="/help" element={<Help />} />
              <Route path="/download" element={<Download />} />
              <Route path="/search" element={<Search />} />
            </Routes>
          </Content>
          <Footer className="rps-footer">
            RPS © 2021 The Ren Lab. All Rights Reserved
          </Footer>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
