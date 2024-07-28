import {Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import BasicCard from "../../Receipes";
import Noodle from "./../../../Images/noodle.png";
import Ingredients from "../../Receipes/Ingredients";
import {NavLink} from "react-router-dom";
import {useState,useEffect} from 'react';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  cards: {
    background: "#FFFFFF",
    filter: "drop-shadow(0px 2px 9px #FF980029)",
    borderRadius: "20px",
    height: "421px",
  },
}));

const Recipe = () => {
  const classes = useStyles();

  const [recipe, setRecipe] = useState([]);
  console.log("recipe------->",recipe);
  useEffect(() => {
    axios("http://localhost:3004/recipe/getall/recipes", {
    })
      .then((res) => {
        console.log("res.data.recipes",res.data)
        setRecipe(res.data.recipes);
      })
      // .catch((error) => console.log(error));


  }, [])

  return (
    <div>
      <div  className='container'>

      <div
        className='row'
        style={{
          justifyContent: "space-between",
          display: "flex",
          marginLeft: 70,
          marginRight: 70,
          marginTop: 20,
        }}
      >
        <div className='col-sm'>
          <Grid
            item
            xs={8}
            marginTop={1}
            container
            direction='row'
            justifyContent='flex-start'
            alignItems='flex-start'
          >
            <Typography
              style={{
                color: "#7A7A7A",
                fontSize: "18px",
              }}
            >
              Recipes:
            </Typography>
          </Grid>
        </div>

        <div className='col-sm'>
          <Grid item container direction='row' justifyContent='flex-end'>
            <NavLink to='/Morerecipe'>
              <Typography className='css-button-sliding-to-left--grey text-center'>
                View more
              </Typography>
            </NavLink>
          </Grid>
        </div>
      </div>
      </div>
      <div className='container'>
        <div className="row">
        <div style={styles.mainDiv} className="row">
        {recipe.slice(0,3).map((item, index) => (


          <div className="col-4" key={index} style={styles.marginDiv}>
            <BasicCard
              className="col-sm"
              img={item?.value?.Rpic}
              recipeName={item.value.rname}
              desc={item.value.desc}
              time={item.value.ctime}
              Ingredients={item.value.ingre}
              item={item.value}
            />
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;

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
};