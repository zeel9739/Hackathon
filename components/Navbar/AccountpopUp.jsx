import React, {useEffect, useState} from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import {MenuBook} from "@mui/icons-material";
import {Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import axios from "axios";

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const account = (url) => {
    window.location.href = url;
  };

  const redirect = (url) => {
    window.location.href = url;
  };
  // =============== get api =====================
  const [getOneUser, setGetOneUser] = useState([]);

  const getOneUserApi = (username) => {
    axios.get(`http://localhost:3004/user/get/byusername/${username}`).then((resp) => {
      // setGetOneUser(resp.data.category);
    });
  };

  useEffect(() => {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    getOneUserApi();
  }, []);

  return (
    <React.Fragment>
      <Box style={styles.mainBox}>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar style={styles.avatarImg} src='/img/15.png' />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 5px #FF980029)",
            mt: 1,
            "& .MuiAvatar-root": {
              width: 60,
              height: 60,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenu-list": {
              bgcolor: "#ff9800",
              borderRadius: "5px",
              color: "white",
              fontFamily: "Red Hat Display",
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#ff9800",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem style={styles.menuItem}>
          <Avatar src='/img/15.png' />
        </MenuItem>
        {/* <MenuItem style={styles.menuItem}>
          <Typography variant='h7' style={styles.usernameDiv}>
            {getOneUser?.username}
          </Typography>
        </MenuItem> */}
        {/* <MenuItem style={styles.menuItem}>
          <Typography variant='h11'>{getOneUser?.email}</Typography>
        </MenuItem> */}
        <label
          style={{
            fontSize: 15,
            color: "#FFFFFF",
            fontFamily: "Red Hat Display",
            letterSpacing: "0.11em",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {JSON.parse(localStorage.getItem("decoded"))?.email || ""}{" "}
        </label>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <label
            style={{
              fontSize: 15,
              color: "#FFFFFF",
              // fontFamily: "Red Hat Display",
              letterSpacing: "0.11em",
              fontFamily: "bold",
            }}
          >
            {localStorage.getItem("username") || ""}
          </label>
        </div>

        <Divider variant='middle' />
        <MenuItem onClick={() => account("/Account?tab=Account")}>
          <ListItemIcon>
            <Settings fontSize='small' style={styles.colorView} />
          </ListItemIcon>
          Account Settings
        </MenuItem>
        {/* <NavLink to='/channel' style={styles.navLink}>
          <MenuItem>
            <ListItemIcon>
              <MenuBook fontSize='small' style={styles.colorView} />
            </ListItemIcon>
            My Recipes
          </MenuItem>
        </NavLink> */}
        <MenuItem onClick={() => redirect("/")}>
          <ListItemIcon>
            <Logout fontSize='small' style={styles.colorView} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  avatarImg: {
    width: 45,
    height: 45,
  },
  menuItem: {
    justifyContent: "center",
  },
  colorView: {
    color: "#ffffff",
  },
  navLink: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
  usernameDiv: {
    // fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontFamily: "bold",
  },
};