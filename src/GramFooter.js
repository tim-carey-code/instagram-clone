import React, { useState } from "react";
import "./GramFooter.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { makeStyles, styled } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconPadding: {
    paddingRight: "5px",
    display: "flex",
    flexDirection: "row",
  },
  margin: {
    margin: theme.spacing(1),
  },

  favoriteIcon: {
    color: "black",
  },
  favoriteIconChange: {
    color: "red",
  },
}));

function GramFooter() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [likeIconColor, setLikeIconColor] = useState("black");

  function handleLikeClick() {
    if (count === 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div className="gram__footer">
      <div className="gram__footerIcons">
        <button onClick={handleLikeClick}>
          <FavoriteBorderIcon
            onClick={handleLikeClick}
            className={classes.favoriteIcon}
          />
        </button>
        <ChatBubbleOutlineIcon className={classes.iconPadding} />
      </div>

      <div className="gram__footerLikes">
        <small>{count} likes</small>
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
