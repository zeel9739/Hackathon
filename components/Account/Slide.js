import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Emoji from "../../Images/emojii.png";
import Avatar from "../../Images/avatar back.png";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: "250px",
  },
  img: {
    height: "40px",
    width: "120px",
    marginTop: "15px",
  },
  drawericon: {
    marginLeft: theme.spacing(6),
  },

  drawertext: {
    marginLeft: theme.spacing(-2),
    color: "#ff9800",
    fontFamily: "Red Hat Display,Sans Serif",
  },
  makeimg: {
    width: "250px",
    height: "236px",
  },
}));

const Leftbar = ({ setTab }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
        edge="start"
        style={styles.iconBtn}
        aria-label="open drawer"
        onClick={() => setOpen(true)}
        fontSize="large"
      >
        <img src="/img/listicon.svg" height={26} width={26} alt="" />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => {}}
      >
        <div className={classes.list}>
          <Box textAlign="center" p={2}>
            <NavLink to="/home">
              <img className={classes.img} src="/img/logo.svg" alt="" />
            </NavLink>
          </Box>
          <List>
            <div style={styles.sideDiv}>
              <div style={styles.imgDiv}>
                <img src={Emoji} alt="Emoji" height={"60%"} width={"60%"} />
              </div>
              <img src={Avatar} alt="Avatar" height={"60%"} width={"60%"} />
            </div>{" "}
            <br />
            <ListItemText
              primary={"Account Name"}
              className={classes.drawertext}
              style={{
                textAlign: "center",
              }}
            />
            <ListItem button onClick={() => setTab("Account")}>
              <ListItemIcon className={classes.drawericon}>
                <img src="/img/account.svg" height="29" width="29" alt="" />
              </ListItemIcon>
              <ListItemText
                primary={"Account"}
                className={classes.drawertext}
              />
            </ListItem>
            <ListItem button onClick={() => setTab("Password")}>
              <ListItemIcon className={classes.drawericon}>
                <img src="/img/password.svg" height="29" width="29" alt="" />
              </ListItemIcon>
              <ListItemText
                primary={"Password"}
                className={classes.drawertext}
              />
            </ListItem>
          </List>
          <div className="text-center" style={styles.butBlack}>
            <button
              fontSize="10"
              size="large"
              // style={styles.button}
              className="css-button-sliding-to-left--green"
              onClick={() => (window.location.href = "/home")}
            >
              <ArrowBackIcon fontSize="small" />
              <span className="ps-2">Back</span>
            </button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Leftbar;

const styles = {
  iconBtn: {
    color: "#ff9800",
  },
  navLinkDiv: {
    textDecoration: "none",
  },
  btnUpload: {
    borderRadius: "6px",
    color: "#ff9800",
    backgroundColor: "white",
    fontSize: "11px",
    marginLeft: "55px",
    boxShadow: "none",
    bottom: 65,
  },
  sideDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    textTransform: "capitalize",
    color: "#ff9800",
    letterSpacing: "0.11em",
    fontSize: "1.25em",
    fontFamily: "Red Hat Display",
    fontWeight: "Bold",
  },
  imgDiv: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
  },
  butBlack: {
    marginTop: "50px",
  },
};
