import { makeStyles } from "@material-ui/core";
import React from "react";
import "./GramMedia.css";

const useStyles = makeStyles((theme) => ({}));

function GramMedia() {
  return (
    <div className="gram__media">
      <img
        src="https://i.pinimg.com/originals/e5/4c/1f/e54c1fd885ea54051e3f059134313ce3.jpg"
        alt="posted by user at time "
      />
    </div>
  );
}

export default GramMedia;
