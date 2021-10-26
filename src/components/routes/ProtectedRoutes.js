import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../../WEBAPI";

function PrivateRoute({ component: Component, ...restOfProps }) {
  const user = getUser();
  const isAuthenticated = user.authority === 1 ? true : false;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
