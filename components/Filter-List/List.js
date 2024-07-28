import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Button} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Show from "../../Images/Show.png";
import {Typography} from "@mui/material";
import Tag from "../Filter/Tag";

const label = {inputProps: {"aria-label": "Checkbox demo"}};
export default function List({detail}) {
  // console.log("Meman avo", detail.ingredients)
  return (
    <Box sx={styles.mainBox}>
      <Grid container spacing={2}>
        <Grid item md={5} style={styles.gridLft}>
          <div style={styles.divLogo}>
            <img src={detail.logo} />
            <div>
              <Typography style={styles.typoTitle}>{detail.title}</Typography>
              <div style={styles.divLogo}>
                <Stack spacing={1}>
                  <Rating name='size-small' size='small' defaultValue={detail.rating} />
                </Stack>
                <Typography style={styles.typoView}>{detail.view}</Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={4} style={styles.gridMiddle}>
          <Typography style={styles.typoIng}>Ingredients</Typography>
          <div style={styles.btnDiv}>
            <Grid container spacing={1}>
              {detail.ingredients.map((btn) => {
                return <Tag key={btn} name={btn} />;
              })}
            </Grid>
          </div>
        </Grid>
        <Grid item md={3}>
          <div style={styles.gridRht}>
            <Typography pt={1} style={styles.typoTime}>
              Time
            </Typography>
            <Checkbox
              {...label}
              icon={<FavoriteBorder style={styles.favoriteCheck} />}
              checkedIcon={<Favorite style={styles.favoriteCheck} />}
            />
          </div>

          <div style={styles.timeIcon}>
            <AccessTimeIcon />
            <Typography style={styles.time}>{detail.time}</Typography>
          </div>
          <div style={styles.mainDiv}>
            <Button
              style={styles.btnTime}
              variant='contained'
              startIcon={<img src={Show} alt='Show' style={styles.divLogo} />}
            >
              Watch Tutorial
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  mainBox: {
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
  divLogo: {
    display: "flex",
    alignItems: "center",
  },
  typoTitle: {
    fontSize: "20px",
    letterSpacing: "-0.02em",
    color: "#000000",
  },
  typoView: {
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "25px",
    letterSpacing: "-0.03em",
    color: "#A6A5A5",
  },
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
    fontWeight: "bold",
    fontSize: "18px",
    lineHeight: "25px",
    color: "#000000",
  },
  timeIcon: {
    color: "#FF9800",
    display: "flex",
    alignItems: "center",
  },
  time: {
    fontWeight: "bold",
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
  favoriteCheck: {
    color: "#FF9800",
  },
};
