import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { BrowserRouter as Link } from "react-router-dom";
import { ScrollListenerMixin } from "react-scroll-listener";
import "./GramHeader.css";
import {
  Avatar,
  List,
  makeStyles,
  Menu,
  MenuItem,
  DialogTitle,
  Dialog,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  dialogMenu: {
    backgroundColor: "rgba(var(--b3f, 250, 250, 250), 1)",
    width: "400px",
    textAlign: "center",
  },
}));

class myClass extends ScrollListenerMixin {
  constructor() {
    // can pass config object to constructor
    super({
      host: window, // default host
      delay: 300, // default scroll-end timeout
    });
  }
}

function GramHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const { onClose, selectedValue } = props;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <div>
      <main className="gram__header">
        <div className="gram__avatar">
          <Avatar
            // className={classes.small}
            src="https://scontent-lga3-1.cdninstagram.com/v/t51.2885-19/s150x150/70977448_462064461068931_1725536328445067264_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_ohc=y3PDEIbz1gEAX-_EZgA&oh=5781b169cb18ef20ea8f11ca3101d61c&oe=5FA4E739"
          />
        </div>

        <p className="gram__username">Username</p>
        <div className="gram__dialog">
          <MoreHorizIcon onClick={handleClick} />

          <Dialog onClose={handleClose} open={open}>
            <List className={classes.dialogMenu}>
              <ListItem className={classes.dialogMenu} button divider>
                <ListItemText primary="Report" />
              </ListItem>
              <ListItem className={classes.dialogMenu} button divider>
                <ListItemText primary="Unfollow" />
              </ListItem>

              <ListItem className={classes.dialogMenu} button divider>
                <ListItemText primary="Go to Post" />
              </ListItem>

              <ListItem className={classes.dialogMenu} button divider>
                <ListItemText primary="Share" />
              </ListItem>

              <ListItem className={classes.dialogMenu} button divider>
                <ListItemText primary="Copy Link" />
              </ListItem>

              <ListItem
                className={classes.dialogMenu}
                onClick={handleClose}
                button
              >
                <ListItemText primary="Cancel" />
              </ListItem>
            </List>
          </Dialog>
        </div>

        {/* <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={(Link, handleClose)} to="/report">
            Report User
          </MenuItem>
          <MenuItem onClick={(Link, handleClose)} to="">
            Unfollow User
          </MenuItem>
          <MenuItem onClick={(Link, handleClose)} to="">
            Go To Post
          </MenuItem>
          <MenuItem onClick={handleClose}>Cancel</MenuItem>
        </Menu> */}
      </main>
    </div>
  );
}

export default GramHeader;
