import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Messages from "./Messages";
import Login from "./Login";
import firebase from "./firebase";
import ReportUser from "./ReportUser";
import "./App.css";
import { useStateValue } from "./StateProvider";
import Header from "./Header";

function app() {
  const user = firebase.auth().currentUser;
  let name, email, photoUrl, uid, emailVerified;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("user is signed in");
      console.log(user);
    } else {
      console.log("user is signed out");
    }
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            \
            <Header />
            <Login />
          </Route>
          <Route path="/messages">
            <Header />
            <Messages />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default app;
