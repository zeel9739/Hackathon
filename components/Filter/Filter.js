import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Show from "../../Images/Show.png";
import { Typography } from "@mui/material";
import Tag from "../Filter/Tag";
import { NavLink } from "react-router-dom";
import axios from "../../axios";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Filter = (props) => {
  const { setWishlist, detail, item, detailChannel, wishlist, isLike } = props;
  return (
    <Box style={styles.box}>
      <Grid container spacing={2}>
        <Grid item md={5} style={styles.gridLft}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* <div style={styles.divLogo}>  */}
            <img style={styles.image} src={detail.Rpic} />
            <div style={{ paddingLeft: 20 }}>
              <div>
                <Typography style={styles.typoTitle}>{detail.rname}</Typography>
                <div style={styles.divLogo}>
                  <div>
                    <Typography style={styles.desc}>{detail.desc}</Typography>
                    <Typography style={styles.channel}>
                      {detailChannel.chanalename[0]?.channelname}
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div>  */}
        </Grid>
        <Grid item md={4} style={styles.gridMiddle}>
          <Typography style={styles.typoIng}>Ingredients</Typography>
          <div style={styles.btnDiv}>
            <section direction="row" spacing={2}>
              {detail.ingre.slice(0, 9).map((btn, id) => {
                return <Tag key={id} name={btn.name} />;
              })}
              <Button
                style={{
                  color: "#A6A5A5",
                  letterSpacing: "0.11em",
                  fontWeight: "bold",
                  display: "-webkit-inline-box",
                  background: " #E5E5E5",
                  borderRadius: "5px",
                  fontSize: "13px",
                  lineHeight: "20px",
                  marginRight: "6px",
                  marginTop: "6px",
                  padding: "7px 11px",
                  fontFamily: "Red Hat Display",
                  textTransform: "capitalize",
                }}
              >
                {`+ 8 More`}
              </Button>
            </section>
          </div>
        </Grid>
        <Grid item md={3}>
          <div style={styles.gridRht}>
            <Typography pt={1} style={styles.typoTime}>
              Time
            </Typography>
            <Checkbox
              icon={<FavoriteBorder style={styles.favoritCheck} />}
              checkedIcon={<Favorite style={styles.favoritCheck} />}
              checked={
                wishlist.map((list) => list._id).indexOf(detail._id) !== -1
              }
              onChange={(e) => {
                if (e.target.checked) {
                  const payload = {
                    recipeId: detail._id,
                  };
                }
                setWishlist(detail._id, e.target.checked);
              }}
              // value={isLike.findIndex((r) => r === detail?._id) > -1}
            />
          </div>
          <div style={styles.timeIcon}>
            <AccessTimeIcon />
            <Typography style={styles.ctime}>{detail.ctime} mins</Typography>
          </div>
          <div style={styles.mainDiv}>
            <NavLink
              to="/receipes/tutorial"
              state={detail._id}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={styles.btnTime}
                variant="contained"
                startIcon={
                  <SlowMotionVideoIcon
                    style={{ fontSize: 30, marginRight: "3px" }}
                  />
                  //   variant='contained'
                  //   startIcon={<img src={Show} alt='Show' style={{marginTop:"7px"}} />
                }
              >
                Watch Tutorial
              </Button>
            </NavLink>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  box: {
    flexGrow: 1,
    border: "1px solid #FF9800",
    boxSizing: "border-box",
    borderRadius: "20px",
    marginBottom: "20px",
  },
  gridLft: {
    display: "flex",
    alignItems: "center",
    padding: "30px",
  },
  image: {
    height: "150px",
    width: "150px",
    borderRadius: "15px",
    objectFit: "cover",
  },
  channel: {
    fontFamily: "Rounded Mplus 1c",
    fontSize: "15px",
    lineHeight: "25px",
    letterSpacing: "-0.03em",
    color: "#F68712",
    fontWeight: 500,
    fontSize: "18px",
    letterSpacing: "-0.02em",
    marginTop: 10,
  },
  typoTitle: {
    fontWeight: 500,
    fontSize: "18px",
    letterSpacing: "-0.02em",
    color: "#000000",
    marginBottom: 10,
  },
  // typoView: {
  //   fontWeight: "500",
  //   fontSize: "10px",
  //   lineHeight: "25px",
  //   letterSpacing: "-0.03em",
  //   color: "#A6A5A5",
  // },
  gridMiddle: {
    paddingTop: "22px",
  },
  typoIng: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "40px",
    color: "#000000",
  },
  btnDiv: {
    padding: "0px 0px 10px 6px",
  },
  gridRht: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  typoTime: {
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#000000",
  },
  timeIcon: {
    color: "#FF9800",
    display: "flex",
    alignItems: "center",
  },
  ctime: {
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "25px",
  },
  mainDiv: {
    paddingTop: "20px",
  },
  btnTime: {
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
  },
  favoritCheck: {
    color: "#FF9800",
  },
  desc: {
    overflow: "hidden",
    maxWidth: "200px",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    webkitLineClamp: "2",
    webkitBoxOrient: "vertical",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontSize: 13,
  },
};

export default Filter;
