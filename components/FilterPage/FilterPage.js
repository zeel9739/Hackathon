import React, { useState, useEffect } from "react";
import { AppBar, Button, IconButton, InputBase, Toolbar } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import RkitchenLogo from "../../Images/RkitchenLogo.svg";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Menu from "../../Images/Menu.png";
import backimg from "../../Images/backimg.png";
import show from "../../Images/Show.png";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
import Navbar from "../Main/Navbar";
import axios from "../../axios";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px",
    marginRight: theme.spacing(50),
  },
  img: {
    heigth: "50px",
    width: "125px",
    alignItems: "center",
    marginRight: theme.spacing(10),
  },
  search: {
    fontfamily: "'Red Hat Display', sans-serif",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1.5),
    marginRight: theme.spacing(20),
    marginLeft: 0,
    backgroundColor: alpha(theme.palette.common.white, 1),
    borderRadius: "30px",
    color: "#BFBFBF",
    width: "55%",
    height: "60%",
    border: "0.5px solid #ff9800",
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "100%",
    color: "black",
  },
  appBar: {},
}));

const FilterPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const list = [
    {
      id: "1",
      Image: require("../../Images/Paneer.png"),
      name: "Paneer kadhai",
      shortName: "Panjabi Tadka",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "2",
      Image: require("../../Images/macaronipizza.png"),
      name: "macaroni pizza",
      shortName: "Swiden Joy",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "3",
      Image: require("../../Images/broccolimicrogreens.png"),
      name: "broccoli microgreens",
      shortName: "Be Wealthy",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "4",
      Image: require("../../Images/Nachos.png"),
      name: "Nachos",
      shortName: "Fortune Cook",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "5",
      Image: require("../../Images/FriedNoodels.png"),
      name: "Fried Noodels",
      shortName: "Fortune Cook",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "6",
      Image: require("../../Images/Paneer.png"),
      name: "Paneer kadhai",
      shortName: "Panjabi Tadka",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "7",
      Image: require("../../Images/macaronipizza.png"),
      name: "macaroni pizza",
      shortName: "Swiden Joy",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "8",
      Image: require("../../Images/broccolimicrogreens.png"),
      name: "broccoli microgreens",
      shortName: "Be Wealthy",
      closeImg: require("../../Images/close.png"),
    },
    {
      id: "9",
      Image: require("../../Images/Nachos.png"),
      name: "Nachos",
      shortName: "Fortune Cook",
      closeImg: require("../../Images/close.png"),
    },
  ];
  //------------------------------------getALL WIshlist----------------------
  const getAllWishlist = () => {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    // console.log(
    //   getLocalData.userId,
    //   "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    // );

    axios.get(`/recipe/getfavourite/${getLocalData.userId}`).then((res) => {
      // console.log("WishList****", res.data.users.favourite);
      setWishlist(res.data.users.favourite);
    });
    // .catch((error) => console.log(error.message));
  };
  useEffect(() => getAllWishlist(), []);

  //-------------------------------Remove Wishlist--------------------------------

  let channelIdDecord = localStorage.getItem("decoded");
  let getLocalData = JSON.parse(channelIdDecord);
  // console.log("getLocalData.userId", getLocalData.userId);

  const removeWishlist = (payload) => {
    // console.log("payload", payload);
    axios
      .post(`/recipe/removefavourite/${getLocalData.userId}`, {
        recipeId: payload,
      })
      .then((res) => {
        // console.log(res, "wishlist-----------------Delet------------------");
        getAllWishlist();
        //  toast.success("Success Notification !", res.data.acknowledged
      })
      .catch((error) => {
        //  toast.error(error.message);
      });
  };

  return (
    <div>
      <Navbar />

      <div>
        <div style={styles.bgImage}>
          <div style={styles.content}>
            {wishlist?.map((item) => (
              <div style={styles.idDiv}>
                <div>
                  {/* <div key={index}> */}
                  {/* <div style={styles.numberDiv}>{item.id}</div> */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <img
                        src={item.Rpic}
                        style={{
                          width: "150px",
                          height: "100px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          display: "flex",
                          width: "82vh",
                          justifyContent: "space-between",
                          paddingLeft: 20,
                        }}
                      >
                        <div style={styles.shortNameDiv}>{item.rname}</div>
                        <div style={styles.iconButtonDiv}>
                          <IconButton style={styles.iconBtn}>
                            <CloseIcon
                              onClick={() => removeWishlist(item._id)}
                            />
                          </IconButton>
                        </div>
                      </div>
                      {/* <div style={styles.ctime}>{item.ctime} mins</div> */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 10,
                          }}
                        >
                          <div
                            style={{
                              letterSpacing: "0.11em",
                              paddingLeft: 20,
                              fontFamily: "Red Hat Display",
                              fontWeight: "bold",
                              letterSpacing: "0.11em",
                              fontSize: 20,
                              marginRight: 10,
                            }}
                          >
                            Time :
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <WatchLaterOutlinedIcon fontSize="small" />
                            <div style={styles.ctime}>{item.ctime} mins</div>
                          </div>
                        </div>

                        <NavLink
                          to="/receipes/tutorial"
                          state={item._id}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <Button
                            style={styles.watchButtonDiv}
                            variant="outlined"
                            startIcon={
                              <img
                                style={styles.watchImg}
                                src={show}
                                alt="show"
                              />
                            }
                          >
                            Watch Now
                          </Button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <div style={styles.lineDiv1}></div>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;

const styles = {
  appBar: {
    boxShadow: "none",
    backgroundColor: "white",
    height: "90px",
  },
  mainDiv: {
    backgroundColor: "black",
    height: "1px",
    width: "100%",
  },
  bgImage: {
    backgroundImage: "url(" + backimg + ")",
    backgroundSize: "cover",
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  content: {
    width: "50%",
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    overflow: "auto",
  },
  idDiv: {
    flexDirection: "row",
    display: "flex",
    marginTop: 10,
    marginBottom: 10,
  },
  numberDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    color: "#000000",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  ctime: {
    fontSize: 18,
    color: "#000000",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    marginLeft: 10,
    // fontWeight: "Bold",
  },
  shortNameDiv: {
    fontFamily: "Red Hat Display",
    fontWeight: "bold",
    letterSpacing: "0.11em",
    fontSize: "26px",
  },
  iconButtonDiv: {
    display: "flex",
    justifyContent: "flex-end",
  },
  iconBtn: {
    color: "#000000",
    height: 40,
    width: 40,
  },
  watchButtonDiv: {
    boxShadow: "none",
    height: "35px",
    color: "white",
    fontFamily: "Red Hat Display",
    fontWeight: "bold",
    letterSpacing: "0.11em",
    backgroundColor: "#FF9800",
    borderRadius: 35,
    alignItems: "center",
    display: "flex",
    marginTop: 20,
  },
  watchImg: {
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 8,
  },
  lineDiv1: {
    backgroundColor: "black",
    // height: "1.6px",
  },
  navLink: {
    textDecoration: "none",
  },
};

{
  /* <div style={styles.mainDiv}>
<div>
  <img src={bigPic} alt="bigPic" style={styles.imgHeight}></img>
</div>

<div>
  <div style={styles.rName}>
    <div style={styles.flexDiv}>
      <span style={styles.rTime}>Time to cook:</span>
      <div style={{ display: "flex", alignSelf: "center" }}>
        <span >
          <AccessTimeIcon style={styles.accessTimeIconImg} />
          15min
        </span>
      </div>
    </div>

    <span style={styles.spanRecipeName}>Panner Kadhai</span>

    <div style={styles.spanDiv}>
      <span style={styles.subSpan}>
        Matar paneer recipe – a popular Indian Curry dish made
        withgreen peas and Indian cottage cheese, is from the
        versatile Northern Indian cuisine that has many different (and
        delicious)variations. I’m sharing our family recipe of a
        flavorful and simple home-style mutter paneer. Pellentesque a
        ligula aliquet, viverra erat sit amet, blandit ligula. For
        very stubborn stains you can mix some baking soda, vinegar and
        <a href="#" style={styles.steps}>
          Read More
        </a>
      </span>
    </div>
  </div>
</div>
</div> 

flexDiv: {
    display: "flex", flexDirection: "row"
  },
  accessTimeIconImg: {
    height: "18px", width: "18px"
  },
  avtarDiv: {
    height: 70, width: 70
  },
  ratingSection: {
    display: "flex"
  },
  paddingBottomDiv: {
    paddingBottom: 25
  }
};*/
}
