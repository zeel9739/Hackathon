import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Noodless from "../../Images/noodless.png";
import { NavLink } from "react-router-dom";
import Show from "../../Images/Show.png";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import Tag from "../Tutorial/tags";
import "./recipe.css";
import { SpaRounded } from "@material-ui/icons";
import { Checkbox } from "@mui/material";
import axios from "../../axios";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

export default function BasicCard({
  img,
  time,
  recipeName,
  Ingredients,
  item,
  desc,
  channeName,
}) {
  const [toggle, setToggle] = useState(false);
  const addWishList = async (id) => {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log("getLocalData.userId", getLocalData.userId);

    //  console.log("Wishlisssst",payload);
    const payload = { recipeId: id };
    await axios
      .post(`/recipe/addfavourite/${getLocalData.userId}`, payload)
      .then((res) => {
        setToggle(!toggle);
      })
      .catch((error) => {
        //  toast.error(error.message);
      });

    async function removeWhishList(payload) {
      await axios
        .post(`/recipe/removefavourite/${getLocalData.userId}`, payload)
        .then((res) => {
          setToggle(!toggle);
        })
        .catch((error) => {
          //  toast.error(error.message);
        });
    }

    console.log("id", id);
  };
  return (
    <>
      <div
        className="card"
        style={{
          borderRadius: "20px",
          boxShadow: "rgb(246 135 18 / 16%) 0px 10px 25px 2px",
          borderColor: "white",
          marginBottom: "10px",
        }}
      >
        <div className="card-body">
          <div
            className="d-flex"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <img
                src={img}
                alt={recipeName}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "15px",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="ms-2">
              <div
                className="fw-bolder"
                style={{ color: "#F68712", letterSpacing: "1px" }}
              >
                {channeName}
              </div>
              <div>
                {" "}
                <span className="fw-bolder"> {recipeName}</span>
              </div>
              <div>
                <span
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    webkitLineClamp: "3",
                    webkitBoxOrient: "vertical",
                    fontFamily: "Red Hat Display",
                    letterSpacing: "0.11em",
                    fontSize: 13,
                  }}
                >
                  {desc}
                </span>{" "}
              </div>
            </div>
            <div>
              <Checkbox
                icon={<FavoriteBorder style={{ color: "#FF9800" }} />}
                checkedIcon={<Favorite style={{ color: "#FF9800" }} />}
                onChange={() => addWishList(item._id)}

                // setWishlist(payload);
              />
            </div>
          </div>

          <div className="fw-bolder" style={{ letterSpacing: "0.05rem" }}>
            <div className="my-2">
              <span className="fw-bolder">Ingredients</span>
            </div>
            {/* <Grid container spacing={1}>
                    {Data.Tag.map(
                      (ing, i) => (
                        console.log(ing, "ing"),
                        (
                          <Grid item key={i}>
                            <Tag name={ing} />
                          </Grid>
                        )
                      )
                    )}
                  </Grid> */}
            {/* <Button style={styles.btnIngre}>+ 8 More</Button> */}
            <Grid container spacing={1}>
              {Ingredients &&
                Ingredients?.length !== 0 &&
                Ingredients.map((ingredient, index) => {
                  return (
                    <Grid item key={index}>
                      <Tag name={ingredient.name} />
                    </Grid>
                  );
                })}
              <span>
                <Button
                  style={{
                    color: "#A6A5A5",
                    letterSpacing: "0.11em",
                    fontWeight: "bold",
                    display: "flex",
                    background: " #E5E5E5",
                    borderRadius: "5px",
                    fontSize: "13px",
                    lineHeight: "20px",
                    marginRight: "6px",
                    marginTop: "6px",
                    padding: "8px 11px",
                    fontFamily: "Red Hat Display",
                    textTransform: "capitalize",
                    marginLeft: 7,
                    marginTop: 8,
                  }}
                >
                  {`+ 8 More`}
                </Button>
              </span>
            </Grid>
          </div>

          <div>
            <div className="d-flex justify-content-between">
              <NavLink
                to="/receipes/tutorial"
                state={item._id}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      boxShadow: "none",
                      height: "35px",
                      color: "white",
                      textTransform: "capitalize",
                      letterSpacing: "0.11em",
                      backgroundColor: "#FF9800",
                      fontFamily: "Red Hat Display",
                      borderRadius: 35,
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                      width: "max-content",
                      marginTop: 20,
                      paddingRight: "11px",
                      paddingLeft: "6px",
                    }}
                    variant="contained"
                    startIcon={
                      <SlowMotionVideoIcon
                        style={{ fontSize: 30, marginRight: "3px" }}
                      />
                    }
                  >
                    Watch Tutorial
                  </Button>
                </div>
              </NavLink>

              <div
                style={{
                  marginLeft: "10px",
                  color: "#bfbfbf",
                  display: "flex",
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <WatchLaterOutlinedIcon className="me-1 " fontSize="12px" />
                {time} mins
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="col-sm-9"
          style={{
            background: "#FFFFFF",
            boxShadow: " 0px 10px 25px 2px rgba(246, 135, 18, 0.16)",
            borderRadius: " 20px",
            padding: "20px",
          }}
        >
          <Grid
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={img}
                alt={recipeName}
                style={{ width: "100px", height: "100px" }}
              />
              <div style={{ paddingLeft: 20 }}>
                <Typography
                  style={{
                    fontSize: "20px",
                    letterSpacing: "-0.02em",
                    color: "#000000",
                    fontFamily: "Red Hat Display",
                    letterSpacing: "0.11em",
                    fontWeight: "bold",
                  }}
                >
                  {recipeName}
                </Typography>
                <div>
                  <Typography
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      webkitLineClamp: "3",
                      webkitBoxOrient: "vertical",
                      fontFamily: "Red Hat Display",
                      letterSpacing: "0.11em",
                      fontSize: 13,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginTop: "1em",
            }}
          >
            Ingredients
          </div>
          <div
            className="card-body"
            style={{ display: "flex", alienItem: "center", flexWrap: "wrap" }}
          >
            {Ingredients &&
              Ingredients?.length !== 0 &&
              Ingredients.map((ingredient, index) => {
                return (
                  <section key={index} style={{ margin: "0.25em" }}>
                    <span
                      style={{
                        padding: "0.5em",
                        backgroundColor: "rgb(255, 234, 194)",
                        color: "rgb(255, 152, 0)",
                        borderRadius: "5px",
                        display: "inline-block",
                      }}
                    >
                      {ingredient.name}
                    </span>
                  </section>
                );
              })}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink
                to="/receipes/tutorial"
                state={item._id}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      boxShadow: "none",
                      height: "35px",
                      color: "white",
                      textTransform: "capitalize",
                      letterSpacing: "0.11em",
                      backgroundColor: "#FF9800",
                      fontFamily: "Red Hat Display",
                      borderRadius: 35,
                      alignItems: "center",
                      display: "flex",
                      fontWeight: "bold",
                      width: "max-content",
                      marginTop: 20,
                    }}
                    variant="contained"
                    startIcon={
                      <SlowMotionVideoIcon
                        style={{ fontSize: 30, marginRight: "5px" }}
                      />
                    }
                  >
                    Watch Tutorial
                  </Button>
                </div>
              </NavLink>

              <div
                style={{
                  marginLeft: "10px",
                  color: "#bfbfbf",
                  display: "flex",
                  marginTop: 20,
                }}
              >
                <WatchLaterOutlinedIcon />
                {time} mins
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
// import Grid from "@mui/material/Grid";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import Noodless from "../../Images/noodless.png";
// import { NavLink } from "react-router-dom";
// import Show from "../../Images/Show.png";
// import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
// import Tag from "../Tutorial/tags";
// import "./recipe.css";
// import { SpaRounded } from "@material-ui/icons";

// const bull = (
//   <Box
//     component="span"
//     sx={{
//       display: "inline-block",
//       mx: "2px",
//       transform: "scale(0.8)",
//     }}
//   >
//     •
//   </Box>
// );

// export default function BasicCard({
//                                     img,
//                                     time,

//                                     recipeName,
//                                     Ingredients,
//                                     item,
//                                     desc,
//                                     channeName,
//                                   }) {
//   return (
//     <>
//       <div>
//         <div
//           className="card"
//           style={{
//             borderRadius: "20px",
//             boxShadow: "rgb(246 135 18 / 16%) 0px 10px 25px 2px",
//             borderColor: "white",
//             marginBottom: "10px",
//           }}
//         >
//           <div className="card-body">
//             <div className="d-flex">
//               <div>
//                 <img
//                   src={img}
//                   alt={recipeName}
//                   style={{
//                     width: "100px",
//                     height: "100px",
//                     borderRadius: "15px",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div>
//               <div className="ms-2">
//                 <div
//                   className="fw-bolder"
//                   style={{ color: "#F68712", letterSpacing: "1px" }}
//                 >
//                   {channeName}
//                 </div>
//                 <div>
//                   {" "}
//                   <span className="fw-bolder"> {recipeName}</span>
//                 </div>
//                 <div>
//                   <span
//                     style={{
//                       overflow: "hidden",
//                       textOverflow: "ellipsis",
//                       display: "-webkit-box",
//                       webkitLineClamp: "3",
//                       webkitBoxOrient: "vertical",
//                       fontFamily: "Red Hat Display",
//                       letterSpacing: "0.11em",
//                       fontSize: 13,
//                     }}
//                   >
//                     {desc}
//                   </span>{" "}
//                 </div>
//               </div>
//             </div>

//             <div className="fw-bolder" style={{ letterSpacing: "0.05rem" }}>
//               <div className="my-2">
//                 <span className="fw-bolder">Ingredients</span>
//               </div>
//               {/* <Grid container spacing={1}>
//                     {Data.Tag.map(
//                       (ing, i) => (
//                         console.log(ing, "ing"),
//                         (
//                           <Grid item key={i}>
//                             <Tag name={ing} />
//                           </Grid>
//                         )
//                       )
//                     )}
//                   </Grid> */}
//               {/* <Button style={styles.btnIngre}>+ 8 More</Button> */}
//               <Grid container spacing={1}>
//                 {Ingredients &&
//                 Ingredients?.length !== 0 &&
//                 Ingredients.map((ingredient, index) => {
//                   return (
//                     <Grid item key={index}>
//                       <Tag name={ingredient.name} />
//                     </Grid>
//                   );
//                 })}
//                 <span>
//                   <Button
//                     style={{
//                       color: "#A6A5A5",
//                       letterSpacing: "0.11em",
//                       fontWeight: "bold",
//                       display: "flex",
//                       background: " #E5E5E5",
//                       borderRadius: "5px",
//                       fontSize: "13px",
//                       lineHeight: "20px",
//                       marginRight: "6px",
//                       marginTop: "6px",
//                       padding: "7px 11px",
//                       fontFamily: "Red Hat Display",
//                       textTransform: "capitalize",
//                     }}
//                   >
//                     {`+ 8 More`}
//                   </Button>
//                 </span>
//               </Grid>
//             </div>

//             <div>
//               <div className="d-flex justify-content-between">
//                 <NavLink
//                   to="/receipes/tutorial"
//                   state={item._id}
//                   style={{
//                     textDecoration: "none",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                     }}
//                   >
//                     <Button
//                       style={{
//                         boxShadow: "none",
//                         height: "35px",
//                         color: "white",
//                         textTransform: "capitalize",
//                         letterSpacing: "0.11em",
//                         backgroundColor: "#FF9800",
//                         fontFamily: "Red Hat Display",
//                         borderRadius: 35,
//                         alignItems: "center",
//                         display: "flex",
//                         fontWeight: "bold",
//                         width: "max-content",
//                         marginTop: 20,
//                         paddingRight: "11px",
//                         paddingLeft: "6px",
//                       }}
//                       variant="contained"
//                       startIcon={
//                         <SlowMotionVideoIcon
//                           style={{ fontSize: 30, marginRight: "3px" }}
//                         />
//                       }
//                     >
//                       Watch Tutorial
//                     </Button>
//                   </div>
//                 </NavLink>

//                 <div
//                   style={{
//                     marginLeft: "10px",
//                     color: "#bfbfbf",
//                     display: "flex",
//                     marginTop: 20,
//                     alignItems: "center",
//                   }}
//                 >
//                   <WatchLaterOutlinedIcon className="me-1 " fontSize="12px" />
//                   {time} mins
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
