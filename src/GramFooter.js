import React from "react";
import "./GramFooter.css";
import TextField from "@material-ui/core/TextField";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { Input, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconPadding: {
    paddingRight: "5px",
  },
}));

function GramFooter() {
  const classes = useStyles();
  return (
    <div className="gram__footer">
      <div className="gram__footerIcons">
        <FavoriteBorderIcon className={classes.iconPadding} />
        <ChatBubbleOutlineIcon />
      </div>
      <p className="gram__footerLikes">100 likes</p>
      <div className="gram__footerText">
        <p>Username</p>
        <span>
          <strong>Commenter</strong>
          <p>this is a comment</p>
        </span>
        <small>7 hours ago</small>
      </div>
      <hr />
      <div className="gram__post">
        <Input defaultValue={"Add a Post..."} disableUnderline={true}>
          <TextField />
        </Input>
      </div>
    </div>
  );
}

export default GramFooter;
