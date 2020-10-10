import React from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { useAuth } from "./firebase";

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

function GramDialog(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const { onClose, selectedValue } = props;
  const user = useAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };
  return (
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

          <ListItem className={classes.dialogMenu} onClick={handleClose} button>
            <ListItemText primary="Cancel" />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}

export default GramDialog;
