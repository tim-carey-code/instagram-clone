import React from "react";
import "./GramFooter.css";
import TextField from "@material-ui/core/TextField";
import PostAddIcon from "@material-ui/icons/PostAdd";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import {
  Input,
  makeStyles,
  InputAdornment,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconPadding: {
    paddingRight: "5px",
  },
  margin: {
    margin: theme.spacing(1),
  },

  postButton: {
    display: "flex",
    // position: "abosolute",
    fontSize: "11px",
    width: "5px",
    height: "15px",
    // alignItems: "center",
    marginLeft: "520px",
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
      <div className="gram__commentField">
        <form action="">
          <textarea placeholder="Add a post..."></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="hidden__div"></div>
    </div>
  );
}

export default GramFooter;
