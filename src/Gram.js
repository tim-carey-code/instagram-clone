import React, { useState } from "react";
import GramDialog from "./GramDialog";
import { makeStyles } from "@material-ui/core/";
import { useAuth } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import "./Gram.css";

const useStyles = makeStyles((theme) => ({
  favoriteIconChange: {
    color: "red",
  },
}));

function Gram(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [likeClicked, setLikedClick] = useState(false);

  function handleLikeCount() {
    if (count === 0) {
      setLikedClick(true);
      setCount(count + 1);
    } else {
      setLikedClick(false);
      setCount(count - 1);
    }
  }

  const user = useAuth();

  return (
    <div className="gram">
      <main>
        <header className="gram__header">
          <div className="gram__avatar">
            <Avatar src={user?.photoURL} />
          </div>
          <GramDialog />
          <p className="gram__username">{user?.displayName}</p>
        </header>
        <div className="gram__body">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Daewonsong.jpg"
            alt=""
          />
        </div>
      </main>
      <footer>
        <div className="gram__footer">
          <div className="gram__footer--option-icons">
            <button onClick={handleLikeCount}>
              {likeClicked ? (
                <FavoriteIcon className={classes.favoriteIconChange} />
              ) : (
                <FavoriteBorderIcon />
              )}
            </button>
            <button>
              <ChatBubbleOutlineIcon />
            </button>
          </div>

          <div className="gram__footer--option">
            <small>{count} likes</small>
          </div>
          <div className="gram__footer--option">
            <h4>{user?.displayName}:</h4>
            <p className="gram__footer--option-post">Users post content</p>
          </div>

          <div className="gram__footer--option">
            <small>7 hours ago</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Gram;
