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
    display: "flex",
    flexDirection: "row",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

function GramFooter() {
  const classes = useStyles();
  return (
    <div className="gram__footer">
      <div className="gram__footerIcons">
        <FavoriteBorderIcon className={classes.iconPadding} />
        <ChatBubbleOutlineIcon className={classes.iconPadding} />
      </div>

      <div className="gram__footerLikes">
        <small>100 likes</small>
      </div>
      <div className="gram__footerUserPost">
        <p>Username of post</p>
        <small>Users post content</small>
      </div>
      <div className="gram__footerComment">
        <span>
          <strong>Commenter</strong>
          <div className="gram__footerCommentContent">
            <small>This is a comment by someone else</small>
          </div>
        </span>
      </div>
      <div className="gram__footerTime">
        <small>7 hours ago</small>
      </div>

      <div className="gram__footerForm">
        <form action="">
          <textarea placeholder="Add a comment..."></textarea>
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
}

export default GramFooter;
