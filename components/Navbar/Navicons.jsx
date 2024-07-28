import {IconButton, Tooltip} from "@mui/material";
import {makeStyles} from "@mui/styles";
import AccountMenu from "./AccountpopUp";
import Favorite from "./Favoritepopup";
import NotificationMenu from "./Notificationmenu";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icons: {
    display: "flex",
  },
}));

const Navicons = () => {
  const classes = useStyles();
  return (
    <div className={classes.icons}>
      {/* <Tooltip title='Create Channel'>
        <IconButton aria-label='Add'>
        <NavLink
              to='/channel'>
            <img src='/img/add.svg' height='33' width='40' alt='' />
          </NavLink>
        </IconButton>
      </Tooltip> */}
      <Favorite />
      {/* <NotificationMenu /> */}
      <AccountMenu />
    </div>
  );
};

export default Navicons;
