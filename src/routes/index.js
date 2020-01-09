import React from "react";
import { Switch, Route, HashRouter, Redirect } from "react-router-dom";
import Login from "../views/Login";
import Dashboard from "../views/Dashboard";
import New from "../views/New";

import { isAuthenticated } from "../services/authServices";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const PrivateRoutes = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const PublicRoutes = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default function Routes() {
  return (
    <HashRouter>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/new" component={New} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
}
