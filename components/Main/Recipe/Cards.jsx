import {Grid} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    background: "#FFFFFF",
    filter: "drop-shadow(0px 2px 9px #FF980029)",
    borderRadius: "20px",
    height: "421px",
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid item xs={12} container justifyContent='space-evenly'>
        <Grid item xs={4} className={classes.cards}></Grid>
        <Grid item xs={4} className={classes.cards}></Grid>
        <Grid item xs={4} className={classes.cards}></Grid>
      </Grid>
    </div>
  );
};

export default Cards;
