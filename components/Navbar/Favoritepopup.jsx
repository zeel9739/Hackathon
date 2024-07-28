import * as React from "react";
import {useState, useEffect} from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {Add, Remove} from "@mui/icons-material";
import Show from "../../Images/Show.png";
import axios from "../../axios";

import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import {
  Button,
  ButtonGroup,
  Grid,
  List,
  ListItem,
  ListItemText,
  Rating,
  Typography,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import {NavLink} from "react-router-dom";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Store from "../../store/store";
import {useSelector} from "react-redux";
export default function Favorite() {
  const [wishlist, setWishlist] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const favourite = useSelector((state) => state.wishlist.favourite);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);

    axios.get(`/recipe/getfavourite/${getLocalData.userId}`).then((res) => {
      setWishlist(res.data.users.favourite);
      Store.dispatch({type: `${favourite ? "TOGGLE_FALSE" : "TOGGLE_TRUE"}`});
    });
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //---------------------------Remove  Wishlist ----------------------------
  let channelIdDecord = localStorage.getItem("decoded");
  let getLocalData = JSON.parse(channelIdDecord);

  const removeWishlist = (payload) => {
    axios
      .post(`/recipe/removefavourite/${getLocalData.userId}`, {recipeId: payload})
      .then((res) => {
        Store.dispatch({type: `${favourite ? "TOGGLE_FALSE" : "TOGGLE_TRUE"}`});
        //  toast.success("Success Notification !", res.data.acknowledged
      })
      .catch((error) => {
        //  toast.error(error.message);
      });
  };

  const fav = [
    {
      id: 2,
      img: require("../../Images/AA.png"),
      name: "hbvhbfhdbvg",
      time: "1",
      subTime: "1 hover",
    },
  ];

  return (
    <React.Fragment>
      <Box style={styles.mainBox}>
        <Tooltip title='Favourite'>
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <img src='/img/favorite.svg' height='35' width='35' alt='' />
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
            height: "300px",
            overflow: "scroll",

            filter: "drop-shadow(0px 2px 5px #FF980029)",
            mt: 1,
            "& .MuiIcon-root": {
              width: 60,
              height: 60,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenu-list": {
              bgcolor: "#ff9800",
              borderRadius: "5px",
              fontFamily: "'Red Hat Display', sans-serif",
              color: "white",
            },
            "& .MuiTypography-body2": {
              maxWidth: "100px",
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
        <NavLink to='/filter/favorites' style={styles.navLink}>
          <MenuItem>
            <ListItemText>
              <Typography fontFamily='Red Hat Display' letterSpacing='0.11em' fontSize={20}>
                Favourite
              </Typography>
            </ListItemText>
            <ListItemIcon>
              <img src='/img/Wfavourite.svg' height='30' width='30' alt='' />
            </ListItemIcon>
          </MenuItem>
        </NavLink>

        <div style={{borderBottom: "1px solid"}}></div>
        {/* <MenuItem> */}
        {/* <Grid container direction xs="5">
                    <Grid item container direction xs="12"> */}
        {/* <ListItemIcon> */}
        {/* <Grid item xs={2}>
                            <img src="/img/32.png" alt="" height="70px" width="70px" />
                            </Grid> */}
        {/* </ListItemIcon> */}
        {/* <ListItemText> */}
        {/* <Grid item xs={8}>
                            <Typography variant="body1" marginLeft={1} fontFamily='Red Hat Display' letterSpacing="0.11em" fontWeight="Bold">
                                Paneer Kadhai
                            </Typography> */}
        {/* </ListItemText> */}
        {/* <ButtonGroup size="small"  >
                            <Button variant='contained' style={{ backgroundColor: "white", boxShadow: "none", height: "22px", width: "7px", color: '#ff9800' }}><Add fontSize='small' /></Button>
                            <Button variant='outlined' style={{ borderColor: "white", boxShadow: "none", height: "22px", width: "7px", color: 'white' }}><Remove /> </Button>
                        </ButtonGroup> */}
        {/* <Typography variant="body2" marginLeft={1} fontFamily='Red Hat Display' letterSpacing="0.11em" sx={{ Width: 400 }}>
                            Cooking Time:<AccessTime fontSize='small' /> 1 hour
                        </Typography>
                        </Grid>
                        <Grid item xs={2}> */}
        {/* <ListItemIcon> */}
        {/* <img src="/img/recipe.png" alt="" height="70px" width="70px" /> */}
        {/* </ListItemIcon> */}
        {/* </Grid> */}
        {/* </Grid> */}
        {/* </Grid> */}
        {/* </MenuItem> */}
        {wishlist?.map((item) => (
          <div style={{borderBottom: "1px solid white"}}>
            <div className='d-flex mx-3 my-2'>
              <div>
                <img
                  src={item.Rpic}
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "30px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className='d-flex flex-column fw-bold'>
                <span>
                  <span className='fs-5 ms-2'> {item.rname}</span>
                  {/* <sub className='ms-1'>
                  <span>
                    <Rating
                      style={{color: "white", borderColor: "white"}}
                      name='read-only'
                      readOnly
                      size='small'
                      value={4}
                    />
                  </span>
                  <span className='text-white'>(69)</span>
                </sub> */}
                </span>
                <span className='ms-2 fw-bolder'>
                  <span style={{letterSpacing: "0.11rem"}}>Time :</span>
                  <span style={{letterSpacing: "0.11rem"}} className='ms-2'>
                    <WatchLaterOutlinedIcon />
                    <span className='ms-2'>{item.ctime} mins</span>
                  </span>
                </span>
                <span className='ms-2'>
                  <span></span>
                </span>
              </div>

              <div className='fw-bolder'>
                <div className='text-end mb-4 '>
                  <span style={{border: "1px solid", borderRadius: "5px"}}>
                    <Remove onClick={() => removeWishlist(item._id)} fontSize='small' />
                  </span>
                </div>
                <div>
                <NavLink
                to='/receipes/tutorial'
                state={item._id}
                style={{
                  textDecoration: "none",
                }}
              >
                  <Button
                    style={{
                      boxShadow: "none",
                      height: "30px",
                      color: "#FF9800",
                      textTransform: "capitalize",
                      letterSpacing: "0.11em",
                      backgroundColor: "#FF9800",
                      fontFamily: "Red Hat Display",
                      borderRadius: 35,
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                      width: "max-content",
                      background: "white",
                      padding: "5px",
                    }}
                  >
                    <SlowMotionVideoIcon />
                    <span className='ms-1 fs-6'> Watch Tutorial</span>
                  </Button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Menu>
    </React.Fragment>
  );
}
const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    overflowX: "hidden",
    overflowY: "auto",
    // minHeight:"200px";
    // max-height:250px
  },
  boxDiv: {
    width: 400,
  },
  listDiv: {
    height: 80,
  },
  addBtn: {
    backgroundColor: "white",
    boxShadow: "none",
    height: "25px",
    width: "7px",
    color: "#ff9800",
  },
  removeBtn: {
    borderColor: "white",
    boxShadow: "none",
    height: "25px",
    width: "7px",
    color: "white",
  },
  secondaryBtn: {
    height: "65px",
    borderRadius: "50px",
    color: "white",
    border: "2px solid white",
  },
  recipeImg: {
    borderRadius: "50px",
  },
  navLink: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
};