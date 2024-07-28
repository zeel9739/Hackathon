import {ArrowForward} from "@mui/icons-material";
import {Button, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {NavLink} from "react-router-dom";
import "./../../components/buttonCss.css";
const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
  },
}));

const Filter = () => {
  const classes = useStyles();
  return (
    <div className='row' style={{margin: 10}}>
      <div
        className='col-sm'
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <Grid item container>
          <Grid item marginTop={4} marginLeft={5}>
            <img className={classes.img} src='/img/keyword.svg' width={600} height={400} alt='' />
          </Grid>
        </Grid>
      </div>

      <div
        className='col-sm'
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid item container direction='row' alignItems='center'>
          <Grid item container direction='row' justifyContent='start' alignItems='center'>
            <Grid item container direction='row' justifyContent='flex-start' alignItems='center'>
              <Typography
                fontFamily='Red Hat Display'
                variant='h4'
                fontWeight='Bold'
                letterSpacing='0.11em'
                marginLeft={6}
              >
                As per your Choice,
              </Typography>
              <Typography
                fontFamily='Red Hat Display'
                variant='h5'
                fontWeight='Bold'
                letterSpacing='0.19em'
                marginLeft={6}
                color='#ff9800'
              >
                Filter Ingredient With Category
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction='row'
              justifyContent='flex-end'
              alignItems='center'
              marginRight={15}
              marginTop={1}
            >
              <NavLink
                to='/filter/index'
                style={{
                  textDecoration: "none",
                }}
              >
                <button
                  // style={{
                  //   boxShadow: "none",
                  //   borderRadius: "30px",
                  //   color: "white",
                  //   letterSpacing: "0.11em",
                  //   fontFamily: "Red Hat Display",
                  //   fontWeight: "Bold",
                  //   textTransform: "capitalize",
                  //   fontSize: "1.1em"
                  // }}
                  className='css-button-arrow--orange'
                  // variant='contained'
                  // endIcon={<ArrowForward />}
                >
                  Go To Filter
                </button>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Filter;
