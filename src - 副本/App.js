import "./App.css";
import React from "react";

import Frame from "./router/Index";
import { Switch, Route, Redirect } from "react-router-dom";
import { adminRoutes } from "./router/HeaderNav";

function App() {
  return (
    <Frame>
      <Switch>
        {adminRoutes.map((route) => {
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
        })}
      </Switch>
    </Frame>
  );
}

export default App;
