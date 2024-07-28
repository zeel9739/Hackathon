import React, {useState} from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "./List";
import RecipelyDetail from "../../Constant/RecipelyDetail";
import recipebg from "../../Images/recipebg.png";
import Navbar from "../../components/Main/Navbar";

const sectionStyle = {
  height: "100vh",
  backgroundImage: `url(${recipebg})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
};

export default function Filterlist() {
  return (
    <Box style={sectionStyle}>
      <Grid container>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <div style={styles.lineDiv} />
        <Grid item md={3}></Grid>
        <Grid item md={9} style={styles.gridRiht}>
          <div style={styles.mainDiv}>
            {RecipelyDetail.recipelyDetails.map((reciIteam) => {
              console.log("iten : ", reciIteam);
              return <List key={reciIteam.id} detail={reciIteam} />;
            })}
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  gridRiht: {
    paddingTop: "10px",
    height: "600px",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  mainDiv: {
    marginRight: "10px",
  },
  lineDiv: {
    backgroundColor: "#BFBFBF",
    height: 1,
    width: "100%",
  },
};
