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
import firebase from "./firebase";
import "./Header.css";
import { IconButton } from "@material-ui/core";
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
  const user = firebase.auth().currentUser;
  let name, email, photoUrl, uid, emailVerified;

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

          <IconButton size={"small"}>
            <ExploreOutlinedIcon className={classes.headerIcons} />
          </IconButton>
          <IconButton size={"small"}>
            <FavoriteBorderIcon className={classes.headerIcons} />
          </IconButton>

          <div className="header__avatar">
            <IconButton size={"small"}>
              <Link to="/login">
                <Avatar className={classes.small} src={user?.photoURL} />
              </Link>
            </IconButton>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
