import {makeStyles} from "@mui/styles";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  ListItemIcon,
  Button,
} from "@mui/material";
import {useState} from "react";
import {NavLink} from "react-router-dom";

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
  bottomData: {
    position: "absolute",
    bottom: "0",
  },
}));

const Leftbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton
        edge='start'
        style={styles.iconBtn}
        aria-label='open drawer'
        onClick={() => setOpen(true)}
        fontSize='large'
      >
        <img src='/img/listicon.svg' height={26} width={26} alt='' />
      </IconButton>
      <SwipeableDrawer anchor='left' open={open} onClose={() => setOpen(false)} onOpen={() => {}}>
        <div className={classes.list}>
          <Box textAlign='center' p={2}>
            <img className={classes.img} src='/img/logo.svg' alt='' />
          </Box>
          <List>
          <NavLink to='/home' style={styles.navLinkDiv}>
            <ListItem button onClick={() => {}}>
              <ListItemIcon className={classes.drawericon}>
                <img src='/img/overview.svg' height='25' width='25' alt='' />
              </ListItemIcon>
              <ListItemText primary={"Overview"} className={classes.drawertext} />
            </ListItem>
            </NavLink>
            <NavLink to='/Morerecipe' style={styles.navLinkDiv}>
            <ListItem button onClick={() => {}}>
              <ListItemIcon className={classes.drawericon}>
                <img src='/img/recipes.svg' height='25' width='25' alt='' />
              </ListItemIcon>
              <ListItemText primary={"Recipes"} className={classes.drawertext} />
            </ListItem>
            </NavLink>
            <NavLink to='/filter/index' style={styles.navLinkDiv}>
              <ListItem button onClick={() => {}}>
                <ListItemIcon className={classes.drawericon}>
                  <img src='/img/Ofilter.svg' height='28' width='28' alt='' />
                </ListItemIcon>
                <ListItemText primary={"Filter"} className={classes.drawertext} />
              </ListItem>
            </NavLink>

            <NavLink to='/filter/favorites' style={styles.navLinkDiv}>
              <ListItem button onClick={() => {}}>
                <ListItemIcon className={classes.drawericon}>
                  <img src='/img/Ofavorite.svg' height='25' width='25' alt='' />
                </ListItemIcon>
                <ListItemText primary={"Favorite"} className={classes.drawertext} />
              </ListItem>
            </NavLink>
            <NavLink to='/account' style={styles.navLinkDiv}>
              <ListItem button onClick={() => {}}>
                <ListItemIcon className={classes.drawericon}>
                  <img src='/img/settings.svg' height='25' width='25' alt='' />
                </ListItemIcon>
                <ListItemText primary={"Settings"} className={classes.drawertext} />
              </ListItem>
            </NavLink>
          </List>
          <div className={classes.bottomData}>
            <img className={classes.makeimg} src='/img/bucket.svg' alt=''></img>
            {/* <NavLink to='/channel' style={styles.navLinkDiv}>
              <Button
                className={classes.uploadbtn}
                style={styles.btnUpload}
                variant='contained'
                size='small'
              >
                Upload Now
              </Button>
            </NavLink> */}
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
};
