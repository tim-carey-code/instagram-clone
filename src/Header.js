import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import MessageIcon from "@material-ui/icons/Message";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { ClickAwayListener, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },

  headerIcons: {
    padding: "8px",
    color: "black",
  },
}));

function Header() {
  const classes = useStyles();
  const [navIconClicked, setNavIconClicked] = useState(false);

  function handleNavIconClick() {
    setNavIconClicked(true);
  }

  const handleNavClickAway = () => {
    setNavIconClicked(false);
  };
  return (
    <div>
      <header className="header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png
          "
          alt="instagram logo"
        />
        <div className="header__search">
          <form className="header__searchForm">
            <SearchIcon fontSize="small" />
            <input type="text" placeholder="Search" />
          </form>
        </div>
        <ClickAwayListener onClickAway={handleNavClickAway}>
          <div className="header__icons">
            <Link to="/">
              <IconButton size={"small"}>
                <HomeOutlinedIcon className={classes.headerIcons} />
              </IconButton>
            </Link>

            <Link to="/messages">
              <IconButton size={"small"}>
                <MessageOutlinedIcon className={classes.headerIcons} />
              </IconButton>
            </Link>

            <IconButton onClick={handleNavIconClick} size={"small"}>
              <ExploreOutlinedIcon className={classes.headerIcons} />
            </IconButton>
            <IconButton onClick={handleNavIconClick} size={"small"}>
              <FavoriteBorderIcon className={classes.headerIcons} />
            </IconButton>

            <div className="header__avatar">
              <IconButton size={"small"}>
                <Link to="/login">
                  <Avatar
                    className={classes.small}
                    src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/70977448_462064461068931_1725536328445067264_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=y3PDEIbz1gEAX-_EZgA&oh=5781b169cb18ef20ea8f11ca3101d61c&oe=5FA4E739"
                  />
                </Link>
              </IconButton>
            </div>
          </div>
        </ClickAwayListener>
      </header>
    </div>
  );
}

export default Header;
