import React from "react";
import Header from "./Header";
import Gram from "./GramHeader";
import ReportUser from "./ReportUser";
import GramMedia from "./GramMedia";
import "./App.css";
import GramFooter from "./GramFooter";

function app() {
  return (
    <div className="app">
      <Header />
      <Gram />
      <GramMedia />
      <GramFooter />
      <Gram />
      <GramMedia />
      <GramFooter />
    </div>
  );
}

export default app;
