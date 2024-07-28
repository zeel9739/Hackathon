import React, {useEffect, useState} from "react";
import {NavLink, useLocation} from "react-router-dom";
import axios from "axios";
import moment from "moment";
import VideoPlayer from "react-video-js-player";
import YouTube from "react-youtube";

import "./index.css";
import Tag from "./tags";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";

import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import {TextField} from "@mui/material";

import Emoji from "../../Images/emojii.png";
import Avatar from "../../Images/avatar back.png";

const BasicGrid = () => {
  const [text, setText] = useState();
  const [ratingValue, setRatingValue] = useState(0);
  const [comment, setComment] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [allRecipes, setAllRecipes] = useState(null);
  const [steps, setSteps] = useState();
  let location = useLocation();

  //===============================Get Comment=================================
  const getComments = (recipeId) => {
    axios(`http://localhost:3004/comment/getCommentRecipe/${recipeId}`, {
      "Content-Type": "application/json",
    })
      .then((res) => {
        setComment(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllRecipes = () => {
    axios
      .get("http://localhost:3004/recipe/getall/recipes")
      .then((res) => {
        console.log(res, "ok+++++++++++++++++++++++++++++");
        setAllRecipes(res.data.recipes);
      })
      .catch((error) => console.log(error));
  };

  // ===================== Get All Recipe =========================
  const getRecipe = (recipeId) => {
    axios(`http://localhost:3004/recipe/get/tutorial/${recipeId}`, {
      "Content-Type": "application/json",
    })
      .then((res) => {
        console.log("@@@@ABC", res.data.recipe);
        setRecipe(res.data.recipe);
        setSteps(res.data.recipe.steps);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (location.state) {
      getComments(location.state);
      getRecipe(location.state);
      getAllRecipes();
    }
  }, []);

  // ========================Comment===============================================

  const onClickAddBtnItem = () => {
    axios
      .post(
        `http://localhost:3004/comment/post/comment/${
          JSON.parse(localStorage.getItem("decoded")).userId
        }`,
        {
          userid: JSON.parse(localStorage.getItem("decoded")).userId,
          recipeid: recipe?._id,
          comment: text,
          // rating: ratingValue,
          // visibility: "true",
        },
        {
          "Content-Type": "application/json",
        },
      )
      .then((res) => getComments(recipe?._id))
      .catch((error) => console.log(error));

    setText("");
    setRatingValue(0);
  };

  const onClickRemove = () => {
    setText("");
  };

  const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    display: "flex",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div style={styles.mainDivPadding}>
        <div style={styles.mainDiv}>
          <div>
            {/* <img src={recipe?.Rpic} alt="bigPic" style={styles.imgHeight}></img> */}
            <YouTube videoId={recipe?.ulink.split("=")[1]} opts={{width: 700, height: 400}} />
            {/*<VideoPlayer*/}
            {/*  src={recipe?.value.ulink}*/}
            {/*  poster={recipe?.value.Rpic}*/}
            {/*  width="700"*/}
            {/*  height="400"*/}
            {/*/>*/}
          </div>
          <div style={styles.rName}>
            <div style={styles.flexDiv}>
              <span style={styles.rTime}>Time to cook:</span>
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <span>
                  <AccessTimeIcon style={styles.accessTimeIconImg} />
                  {recipe?.ctime} min
                </span>
              </div>
            </div>

            <span style={styles.spanRecipeName}>{recipe?.rname}</span>

            <div style={styles.spanDiv}>
              <span style={styles.subSpan}>{recipe?.desc}</span>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-sm-8'>
            <p className='stepname' style={styles.RightGrid}>
              Steps:
              <br />
            </p>
            {steps &&
              steps.length &&
              steps.map((step, index) => (
                <span key={index} className='steps' style={styles.mapIngre}>
                  {index + 1} {step}
                  <br />
                  <br />
                </span>
              ))}

            <div style={styles.RightGridMain}>
              <div style={styles.RightGridSub}>
                <div style={styles.sub}>
                  <img src={Emoji} alt='Emoji' height={"100%"} width={"100%"} />
                </div>
                <div style={styles.img}>
                  <img src={Avatar} alt='Avatar' height={"100%"} width={"100%"} />
                </div>
              </div>
              <Grid item xs={11}>
                <div style={styles.rate}>
                  <Stack spacing={2} style={styles.rateStar}>
                    {localStorage.getItem("username")}
                  </Stack>

                  <div className='form-floating'>
                    <TextField
                      id='outlined-multiline-flexible'
                      label='Leave a Comment...'
                      className='w-100'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>

                  <div
                    className='d-grid gap-2 d-md-flex justify-content-md-end'
                    style={styles.commentDiv}
                  >
                    <Button
                      variant='outline-primary'
                      type='button'
                      style={styles.cancelButton}
                      onClick={() => onClickRemove()}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => onClickAddBtnItem()}
                      variant='secondary'
                      type='button'
                      style={styles.CommnetButton}
                    >
                      Comment
                    </Button>
                  </div>
                </div>
              </Grid>
            </div>

            <Grid container rowSpacing={1.5}>
              {comment.map((data, i) => {
                return (
                  <Grid item xs={12} key={i}>
                    <Item>
                      <div style={styles.leftGridItem}>
                        <div style={styles.itemMainDiv}>
                          <img src={Emoji} alt='Emoji' height={"100%"} width={"100%"} />
                        </div>
                        <div style={styles.avtarDiv}>
                          <img src={Avatar} alt='Avatar' height={"100%"} width={"100%"} />
                        </div>
                      </div>
                      <section style={styles.leftSection}>
                        <section style={styles.leftSubSection}>
                          <section style={styles.ratingSection}>
                            {data?.user?.username}
                            <section style={styles.leftRateSection}>
                              {moment(data.time).format("HH:MM A")};{", "}
                              {moment(data.date).format("MM/DD/YYYY")};
                            </section>
                          </section>
                          <section style={styles.leftRateSubSection}>{data.comment}</section>
                        </section>
                      </section>
                    </Item>
                  </Grid>
                );
              })}
            </Grid>
          </div>

          <div className='col-sm-4'>
            <Grid className='reciplyDetail'>
              <br />
              <div>
                <div style={styles.paddingBottomDiv}>
                  <span className='stepname' style={styles.stepName}>
                    Ingredients
                  </span>
                </div>
                <Grid container spacing={1}>
                  {recipe?.ingre &&
                    recipe.ingre.map((ing, i) => (
                      <Grid item key={i}>
                        <Tag name={ing.name} />
                      </Grid>
                    ))}
                </Grid>
              </div>

              <div className='based'>
                <span style={styles.based}>Based On The Food You Like</span>
              </div>
              <div style={{ }}>
                <div
                  style={{
                    height: "300px",
                    overflow: "scroll",
                    width: "fitContent",
                    overflowX: "hidden",
                  }}
                >
                  {allRecipes &&
                    allRecipes.length &&
                    allRecipes.map((item) => (
                      <div
                        className='recipyimg'
                        key={item.id}
                        onClick={() => {
                          getRecipe(item.value._id);
                          getComments(item.value._id);
                        }}
                      >
                        <img src={item.value.Rpic} width={100} height={100} alt='recipyname1' />
                        <div className='recipymain'>
                          <span style={styles.recipyMainSpan} className='recipyname1'>
                            {item.value.rname}
                          </span>
                          <div style={styles.recipyMainSubSpan} className='recipyanme2'>
                            {item.value.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
                <NavLink to='/Morerecipe' style={styles.moreRecipyLink}>
                  <Button type='submit' variant='contained' style={styles.buttonSeeMore}>
                    See More
                    <ArrowForwardIcon />
                  </Button>
                </NavLink>
              </div>
            </Grid>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
const styles = {
  mainDivPadding: {
    padding: 50,
  },
  mainDiv: {
    justifyContent: "row",
    display: "flex",
  },
  imgHeight: {
    width: "750px",
    height: "70vh",
  },
  rName: {
    backgroundColor: "#FFEAC2",
    padding: 30,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  rTime: {
    fontSize: 18,
    color: "#ff9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  rmin: {
    fontSize: 18,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  spanRecipeName: {
    fontSize: 35,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  spanDiv: {
    overflow: "auto",
    height: "90%",
  },
  subSpan: {
    fontSize: 18,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  steps: {
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontSize: 18,
  },
  RightGrid: {fontFamily: "Red Hat Display", letterSpacing: "0.11em"},
  mapIngre: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  RightGridMain: {display: "flex", flexDirection: "row"},
  RightGridSub: {
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 65,
    width: 65,
    borderRadius: 65,
  },
  sub: {position: "absolute", height: 40, width: 40},
  img: {height: 60, width: 60},
  rate: {padding: "5px"},
  rateStar: {paddingBottom: "10px", color: "#FF9800"},
  commentlabel: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  commentDiv: {marginTop: 20},
  cancelButton: {
    color: "#FF9800",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    border: "1px solid #FF9800",
    textTransform: "capitalize",
    height: 45,
  },
  CommnetButton: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  leftGridItem: {
    backgroundColor: "#FF9800",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    height: 70,
    width: 70,
    borderRadius: 70,
  },
  itemMainDiv: {
    position: "absolute",
    height: 50,
    width: 50,
  },
  leftSection: {
    flexGrow: 1,
    boxSizing: "border-box",
    paddingLeft: "0.75em",
  },
  leftSubSection: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
  },
  leftRateSection: {
    display: "flex",
    justifyContent: "flex-end",
    fontSize: "1em",
    color: "#bfbfbf",
    marginLeft: "10px",
  },
  leftRateSubSection: {
    display: "flex",
    // justifyContent: "flex-start",
    fontSize: "16px",
    letterSpacing: "0.11em",
    fontStyle: "Red Hat Display",
    color: "#000000",
    fontWeight: 600,
    textAlign: "left",
  },
  stepName: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  based: {
    color: "#7A7A7A",
    fontWeight: "bold",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  recipyMainSpan: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    whiteSpace: "nowrap",
  },
  recipyMainSubSpan: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    webkitLineClamp: "3",
    webkitBoxOrient: "vertical",
  },
  moreRecipyLink: {textDecoration: "none"},
  buttonSeeMore: {
    width: " 35%",
    background: "#FF9800",
    border: "1px solid #FF9800",
    borderRadius: "30px",
    alignItems: "center",
    marginLeft: "150px",
    padding: "8px",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    marginTop:6
  },
  flexDiv: {
    display: "flex",
    flexDirection: "row",
  },
  accessTimeIconImg: {
    height: "18px",
    width: "18px",
  },
  avtarDiv: {
    height: 70,
    width: 70,
  },
  ratingSection: {
    display: "flex",
  },
  paddingBottomDiv: {
    paddingBottom: 25,
  },
};

export default BasicGrid;
