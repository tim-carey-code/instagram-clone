import React from "react";
import Header from "./Header";
import Gram from "./Gram";
import ReportUser from "./ReportUser";
import "./App.css";

function app() {
  return (
    <div className="app">
      <Header />
      <Gram />
      <Gram />
      <Gram />
    </div>
  );
}

export default app;
