import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Messages from "./Messages";
import ReportUser from "./ReportUser";
import "./App.css";

function app() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/messages">
            <Messages />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default app;
