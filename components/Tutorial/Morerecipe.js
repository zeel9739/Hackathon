import React, { useEffect, useState } from "react";
import { Grid, Rating, Stack } from "@mui/material";
import BasicCard from "../../components/Receipes";
import Navbar from "../Main/Navbar";
import Footer from "../Main/Footer";
import "./index.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Tag from "./tags";
import Data from "./RecipyDetailName";
import image from "../../Images/Macaroni Pizza.png";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import Button from "@mui/material/Button";

const Morerecipe = () => {
  const [recipe, setRecipe] = useState([]);
  const [channel, setChannelName] = useState("");

  useEffect(() => {
    axios("http://localhost:3004/recipe/getall/recipes", {})
      .then((res) => {
        // console.log(res, "res____________");
        setRecipe(res.data.recipes);
        // console.log(res, "res____________");
        // res.data.recipes.map((item) => {
        //   item?.chanalename.map((item) => {
        //     console.log(item.channelname, "item");
        //     setChannelName(item.channelname);
        //     // setChannelName((oldArray) => [item.channelname, ...oldArray]);
        //   });
        // });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Grid style={styles.gridDiv}>
        <Navbar />
      </Grid>{" "}
      <div className="container">
        <div style={styles.mainDiv} className="row">
          {recipe.map(
            (item, index) => (
              console.log(item, "item.chanalename333333333333333333333333"),
                (
                  // <div className="col-lg-4" key={index} style={styles.marginDiv}>
                  <span className="col-lg-4 col-md-4 col-sm-12">
                  <BasicCard
                    img={item.value.Rpic}
                    recipeName={item.value.rname}
                    channeName={item.chanalename[0]?.channelname}
                    desc={item.value.desc}
                    time={item.value.ctime}
                    item={item.value}
                    Ingredients={item.value.ingre}
                  />
                </span>
                )
              // </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Morerecipe;

const styles = {
  gridDiv: {
    border: "1px solid #BFBFBF",
    padding: "20px",
  },
  mainDiv: {
    margin: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  marginDiv: {
    marginTop: 30,
  },
  btnIngre: {
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
    fontFamily: "Red Hat Display",
    textTransform: "capitalize",
    padding: "7px 11px",
  },
};
