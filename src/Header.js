import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import InputAdornment from "@material-ui/core/InputAdornment";
import Avatar from "@material-ui/core/Avatar";
import Input from "@material-ui/core/Input";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <header className="header">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png
          "
          alt="instagram logo"
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div className="header__icons">
          <HomeOutlinedIcon fontSize="large" />
          <MessageOutlinedIcon fontSize="large" />
          <ExploreOutlinedIcon fontSize="large" />
          <FavoriteBorderIcon fontSize="large" />
          <Avatar
            className={classes.small}
            src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/70977448_462064461068931_1725536328445067264_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=y3PDEIbz1gEAX-_EZgA&oh=5781b169cb18ef20ea8f11ca3101d61c&oe=5FA4E739"
          />
        </div>

        <Input />
      </header>
    </div>
  );
}

export default Header;
