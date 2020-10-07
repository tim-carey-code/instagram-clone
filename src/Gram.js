import React from "react";
import "./Gram.css";
import GramHeader from "./GramHeader";
import GramFooter from "./GramFooter";
import GramMeida from "./GramMedia";
import { makeStyles } from "@material-ui/core";

function Gram() {
  return (
    <div className="allGrams">
      <GramHeader />
      <GramMeida />
      <GramFooter />
    </div>
  );
}

export default Gram;
