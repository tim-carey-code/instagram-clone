import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { BrowserRouter as Link } from "react-router-dom";
import { ScrollListenerMixin } from "react-scroll-listener";
import "./GramHeader.css";
import {
  Avatar,
  List,
  makeStyles,
  Dialog,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const ITEM_HEIGHT = 48;

const useStyles = makeStyles((theme) => ({
  dialogMenu: {
    backgroundColor: "rgba(var(--b3f, 250, 250, 250), 1)",
    width: "400px",
    textAlign: "center",
  },

  dialogMenuWarning: {
    color: "red",
    fontWeight: "bold",
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
            src={user?.photoURL}
          />
        </div>

        <p className="gram__username">Username</p>
        <div className="gram__dialog">
          <MoreHorizIcon onClick={handleClick} />

          <Dialog onClose={handleClose} open={open}>
            <List className={classes.dialogMenu}>
              <ListItem className={classes.dialogMenuWarning} button divider>
                <ListItemText primary={"Report " + user?.displayName} />
              </ListItem>
              <ListItem className={classes.dialogMenuWarning} button divider>
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
      </main>
    </div>
  );
}

export default GramHeader;
