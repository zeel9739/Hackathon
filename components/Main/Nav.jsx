import { AppBar, Button, InputBase, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import Navicons from "../Navbar/Navicons";
import Leftbar from "../Navbar/Leftbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from '../../axios';
import { useEffect } from "react";
import { SelectUnstyledContext } from "@mui/base";

const useStyles = makeStyles((theme) => ({
    serchData: {
        background: "#fff",
        zIndex: "1",
        borderRadius: "22px",
        border: "1px solid #ffa700"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-around",
        marginTop: "15px",
        flexWrap: "column"
    },
    dropSuggest: {
        display: "flex",
        height: "50px",
        flexWrap: "wrap",
        overflowY: "auto"
    },
    img: {
        height: "40px",
        width: "115px",
        alignItems: "center",
        marginRight: theme.spacing(10),
    },
    search: {
        fontfamily: "'Red Hat Display', sans-serif",
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0.5, 1.5),
        marginLeft: 0,
        backgroundColor: alpha(theme.palette.common.white, 1),
        borderRadius: "30px",
        color: "#BFBFBF",
        border: "0.5px solid #ff9800",
        paddingLeft: "1em",
    },
    input: {
        marginLeft: theme.spacing(1),
        width: "100%",
        color: "white",
    },
}));

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [recipe, setRecipe] = useState();
    const [inputSearch, setInputSearch] = useState();
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');


    console.log("aaaaa======>", inputSearch);


    // const getSearchApi = () => {
    //   axios
    //   .get(`/recipe/searchrecipe/${inputSearch}`)
    //   .then((data) => {
    //     // setInputSearch(data);
    //     console.log("Serch", data);
    //   })
    //   .catch((error) => console.log(error.message));
    // };



    const recipeApi = () => {
        axios
            .get("/recipe/getall/recipes")
            .then((data) => {
                setRecipe(data.data.recipes);
                console.log("recipe+++++++++++++++++++++++++++++++++", data.data.recipes);
            })
            .catch((error) => console.log(error.message));
    };

    useEffect(() => {
        // getSearchApi();
        recipeApi();
    }, []);

    const onChangeHandeler = (rname) => {
        let matches = []
        console.log(rname, "rname")
        if (rname.length > 0) {
            matches = recipe?.filter(user => {
                console.log(user, "---------------");
                const regex = new RegExp(`${rname}`, "m")
                return user?.value?.rname.match(regex)
            })
        }
        console.log(matches, "matches");
        console.log(matches, "matches");
        setSuggestions(matches)
        setText(rname)
    }
    const classes = useStyles();

    return (
        <AppBar
            style={{
                boxShadow: "none",
                backgroundColor: "white",
                height: "12vh",
            }}
            position='static'
        >

            <div className="d-flex justify-content-between mt-3 p-2 flex-wrap" >
                <div className="ms-2 d-flex">
                    <Leftbar />
                    <NavLink
                        to='/'
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <img className={classes.img} src='/img/logo.svg' alt='' />
                    </NavLink>
                </div>
                {/* <div className={classes.serchData}>
                    <div className={classes.search}>
                        <img height='21' width='19' src='/img/Search.svg' alt='' />
                        <InputBase
                            style={{
                                fontFamily: "Red Hat Display",
                                fontSize: "17px",
                                textTransform: "capitalize",
                                fontWeight: "bold",
                                letterSpacing: "0.11em",
                                paddingLeft: "0.17em",
                                color: "#AEAEAE",
                            }}
                            placeholder='Search Recipe...'
                            className={classes.input}
                            value={text}
                            onChange={(e) => onChangeHandeler(e.target.value)}
                        />

                        <NavLink
                            to='/filter/index'

                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                style={{
                                    boxShadow: "none",
                                    borderRadius: "30px",
                                    paddingRight: "25px",
                                    paddingLeft: "25px",
                                    height: "33px",
                                    color: "white",
                                    marginRight: "-8px",
                                    fontFamily: "Red Hat Display",
                                    fontSize: "19px",
                                    textTransform: "capitalize",
                                    letterSpacing: "0.11em",
                                }}
                                variant='contained'
                                className='css-button-shadow-border-sliding--green'
                                startIcon={<img src='/img/wfilter.svg' height={17} width={17} alt='' />}
                            >
                                Filter
                            </Button>
                        </NavLink>
                    </div>
                    <div >

                        <div className="px-3 py-2">
                            {suggestions &&
                                suggestions.map((name, i) => (
                                    // <ui className={classes.dropSuggest} key={i}><span> {name?.rname}</span></ui>
                                    <NavLink to='/receipes/tutorial'
                                        className="fs-5"
                                        state={name?.value?._id} style={{ color: "black", textDecoration: "none" }}>
                                        <div key={i} style={{ borderBottom: "1px solid black" }}><span>{name?.value?.rname}</span></div>
                                    </NavLink>
                                ))}
                        </div>
                    </div>



                </div> */}

                {/* {isLogin?<Navicons/>:<Signbtn/>} */}
                <div>

                    <Navicons />
                </div>

                {/* <Signbtn /> */}
            </div>

            {/* <Signbtn /> */}

        </AppBar>
    );
};

export default Navbar;
