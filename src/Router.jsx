import React from "react";
import { Schedule } from "./components/Schedule";
import { Switch, Route, Redirect } from "react-router-dom";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/schedule" component={Schedule}></Route>
      <Redirect from="/" to="schedule" />
    </Switch>
  );
};
