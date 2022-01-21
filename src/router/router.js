import React, { lazy } from "react";
import { Layout, BackTop } from "antd";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
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
            <Switch>
              <Route path="/Home" component={Home} />
              <Route path="/Help" component={Help} />
              <Route path="/Browser" component={Browser} />
              <Route path="/Search" component={Search} />
              <Route path="/Download" component={Download} />
              <Route path="/Contact" component={Contact} />
              <Redirect to="/Home" />
              <Route />
            </Switch>
          </Content>
          <Footer className="tuma-footer">TUMA © 2021 The Ren Lab. All Rights Reserved</Footer>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default Index;
