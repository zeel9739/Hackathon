import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Filter from "../Filter/Filter";
import RecipelyDetail from "../../Constant/RecipelyDetail";
import Vegetable from "../../Images/Vegetable.png";
import Milk from "../../Images/Milk.png";
import ClearIcon from "@mui/icons-material/Clear";
import FilterType from "./Filter-Type";
import Navbar from "../../components/Main/Navbar";
import Tag from "../Filter/Tag";
import { toast } from "react-toastify";
import Store from "../../store/store";
// import {useSelector} from 'react-redux';

import { useSelector } from "react-redux";
export default function MainFilter() {
  const [mainData, setMainData] = useState([]);
  const [recipe, setRecipe] = useState([]);
  //const [dispayRecipe, setDispayRecipe] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLike, setIsLike] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [userId, setUserId] = useState("");
  const [toggle, setToggle] = useState(false);
  const [types, setTypes] = useState([
    {
      id: 1,
      isMore: false,
      category_name: "Vegetables & Greens",
      photo: Vegetable,
      arr: [
        {
          id: 1,
          typeId: 1,
          name: "Onion",
          isActive: true,
        },
        {
          id: 2,
          typeId: 1,
          name: "Garlic",
          isActive: false,
        },
        {
          id: 3,
          typeId: 1,
          name: "Tomato",
          isActive: false,
        },
        {
          id: 4,
          typeId: 1,
          name: "Carrot",
          isActive: false,
        },
        {
          id: 5,
          typeId: 1,
          name: "Gingerroot",
          isActive: false,
        },
        {
          id: 6,
          typeId: 1,
          name: "Cucumber",
          isActive: false,
        },
        {
          id: 8,
          typeId: 1,
          name: "RedChill",
          isActive: false,
        },
        {
          id: 9,
          typeId: 1,
          name: "Turnip",
          isActive: false,
        },
        {
          id: 10,
          typeId: 1,
          name: "Beans",
          isActive: false,
        },
        {
          id: 11,
          typeId: 1,
          name: "Chicken",
          isActive: false,
        },
        {
          id: 12,
          typeId: 1,
          name: "Water",
          isActive: false,
        },
        {
          id: 13,
          typeId: 1,
          name: "Lameon",
          isActive: false,
        },
        {
          id: 14,
          typeId: 1,
          name: "Potato",
          isActive: false,
        },
        {
          id: 15,
          typeId: 1,
          name: "Pumpkin",
          isActive: false,
        },
        {
          id: 16,
          typeId: 1,
          name: "Radish",
          isActive: false,
        },
        {
          id: 17,
          typeId: 1,
          name: "leave",
          isActive: false,
        },
        {
          id: 18,
          typeId: 1,
          name: "carrot",
          isActive: false,
        },
        {
          id: 19,
          typeId: 1,
          name: "Green",
          isActive: false,
        },
      ],
    },
    {
      id: 2,
      isMore: false,
      category_name: "Dairy & Eggs",
      photo: Milk,
      arr: [
        {
          id: 1,
          typeId: 2,
          name: "Butter",
          isActive: false,
        },
        {
          id: 2,
          typeId: 2,
          name: "Egg",
          isActive: false,
        },
        {
          id: 3,
          typeId: 2,
          name: "Milk",
          isActive: false,
        },
        {
          id: 4,
          typeId: 2,
          name: "Saur Cream",
          isActive: false,
        },
        {
          id: 5,
          typeId: 2,
          name: "Cream",
          isActive: false,
        },
        {
          id: 6,
          typeId: 2,
          name: "Mayonise",
          isActive: false,
        },
        {
          id: 67,
          typeId: 2,
          name: "Panner",
          isActive: false,
        },
        {
          id: 7,
          typeId: 2,
          name: "Chiken",
          isActive: false,
        },
        {
          id: 8,
          typeId: 2,
          name: "Butter",
          isActive: false,
        },
        {
          id: 9,
          typeId: 2,
          name: "Coco",
          isActive: false,
        },
        {
          id: 10,
          typeId: 2,
          name: "Cheeese",
          isActive: false,
        },
        {
          id: 11,
          typeId: 2,
          name: "Mater",
          isActive: false,
        },
        {
          id: 12,
          typeId: 2,
          name: "Cream",
          isActive: false,
        },
        {
          id: 13,
          typeId: 2,
          name: "Icecream",
          isActive: false,
        },
        {
          id: 14,
          typeId: 2,
          name: "Turnip",
          isActive: false,
        },
        {
          id: 15,
          typeId: 2,
          name: "Rise",
          isActive: false,
        },
      ],
    },
  ]);
  const [filterList, setFilterList] = useState([]);

  const favourite = useSelector((state) => state.wishlist.favourite);
  //---------------------------getALL Category with incredients API--------------------
  const categoryApi = () => {
    axios
      .get("/ingredient/getallingredient/byallcategory")
      .then((data) => {
        setMainData(data.data);
        // console.log("allincredient", data.data);
      })
      .catch((error) => console.log(error.message));
  };
  //---------------------------------------Filter API---------------------------------------
  const filterApi = (payload) => {
    console.log("call api filter", JSON.parse(JSON.stringify(recipe)));
    axios
      .post(`/ingredient/filter/list`, payload)
      .then((respppp) => {
        //  setFilter(respppp.data.recipes);
        console.log("@@@", respppp.data.recipes);
        setRecipe(respppp.data.recipes);
      })
      .catch((error) => console.log(error.message));
  };
  //------------------------------ PostWishlist--------------------------------------------------
  let channelIdDecord = localStorage.getItem("decoded");
  let getLocalData = JSON.parse(channelIdDecord);
  console.log(
    getLocalData.userId,
    "getLocalDatagetLocalData+++++++++++++++++++++++++++"
  );
  // setUserId(getLocalData.userId);
  const payload = { ...wishlist };

  async function addWhishList(payload) {
    await axios
      .post(`/recipe/addfavourite/${getLocalData.userId}`, payload)
      .then((res) => {
        setToggle(!toggle);
      })
      .catch((error) => {
        //  toast.error(error.message);
      });
  }

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

  //-------------------------------------------Get All Wishlist ------------------------------------

  const getAllWishlist = () => {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log(
      getLocalData.userId,
      "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    );

    axios
      .get(`/recipe/getfavourite/${getLocalData.userId}`)
      .then((res) => {
        console.log("WishList*******", res.data.users.favourite);
        setWishlist(res?.data?.users?.favourite);
      })
      .catch((error) => console.log(error.message));
  };
  // useEffect(() => getAllWishlist(), []);

  //----------------------------------------------get allRecipe ------------------------------------
  const getAllRecipes = () => {
    axios
      .get("/recipe/getall/recipes")
      .then((respp) => {
        console.log("ALL RECIPE *******", respp.data.recipes);
        setRecipe(respp?.data?.recipes);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getAllWishlist();
  }, [favourite, toggle]);
  useEffect(() => {
    getAllWishlist();
    getAllRecipes();
    categoryApi();
  }, []);
  useEffect(() => {
    console.log("mainData", mainData);
    if (mainData) {
      let allincredientById = [];
      let allincredientByFilter = [];
      const allincredient = mainData.map((item) => {
        const ingredient = item.arr;
        allincredientByFilter = [...allincredientByFilter, ...ingredient];
      });

      console.log("allincredient", allincredient);

      const activeIncredient = allincredientByFilter.filter((item) => {
        return item.isActive;
      });
      console.log("activeIncredient", activeIncredient);
      const allId = activeIncredient.map((item) => {
        const id = item.id;
        allincredientById = [...allincredientById, id];
      });
      console.log("allId", allId);

      console.log("allincredientById", allincredientById);
      if (allincredientById && allincredientById.length > 0) {
        filterApi({ dataarr: allincredientById });
      } else if (allincredientById.length === 0) {
        getAllRecipes();
      }
    }
  }, [mainData]);

  var filalList = [];
  const filterTag = mainData?.map((type) => {
    console.log("type", type);
    let tagData = type.arr.filter((tag) => {
      return tag.isActive;
    });
    tagData = tagData.map((item) => {
      return { ...item, categoryId: type.id };
    });
    // console.log("tagData", tagData);
    filalList = [...filalList, ...tagData];
    return filalList;
  });

  const onFilterClick = (objId, tagId) => {
    console.log("onDFFilter", objId, tagId);
    let dummyTypes = mainData?.map((item) => {
      if (item.id === objId) {
        let value = item.arr.map((tagItem) => {
          if (tagItem.id === tagId) {
            return {
              ...tagItem,
              isActive: !tagItem.isActive,
            };
          }
          return tagItem;
        });
        return {
          ...item,
          arr: value,
        };
      }
      return item;
    });
    setMainData(dummyTypes);
  };

  const onClearAll = () => {
    let dummyTypes = mainData?.map((item) => {
      let value = item.arr.map((tagItem) => {
        return {
          ...tagItem,
          isActive: false,
        };
      });
      return { ...item, arr: value };
    });
    console.log("clearll", dummyTypes);
    setMainData(dummyTypes);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Navbar />
        </Grid>
        <div style={styles.lineDiv} />
        <Grid item md={3} style={styles.GridLetf}>
          <FilterType
            mainData={mainData}
            setMainData={setMainData}
            onFilterClick={onFilterClick}
          />
        </Grid>
        <Grid item md={9} style={styles.GridRight}>
          <div style={styles.divMain}>
            <Stack direction="row" spacing={1} style={styles.stackDiv}>
              {console.log("filalList", filalList)}
              {filalList?.map((filterTag) => (
                <Button
                  key={filterTag.id}
                  // onClick={() =>
                  //   onFilterClick(filterTag.categoryId, filterTag.id)
                  // }
                  style={styles.btnClick}
                  variant="container"
                >
                  {filterTag.name}
                  <span>
                    <ClearIcon
                      onClick={(e) => {
                        console.log("filterTYPEiiD", filterTag.categoryId);
                        console.log("filteriiD", filterTag.id);
                        // e.stopPropagation();
                        onFilterClick(filterTag.categoryId, filterTag.id);
                      }}
                    />
                  </span>
                </Button>
              ))}
            </Stack>
            <Button
              type="clearfilter"
              variant="outlined"
              onClick={onClearAll}
              // onClick={ () =>categoryApi()}
              style={styles.btnClear}
            >
              Clear Filter
            </Button>
          </div>
          {recipe?.map((reciIteam) => {
            return (
              <Filter
                isLike={isLike}
                wishlist={wishlist}
                setWishlist={(id, checked) => {
                  if (checked) {
                    addWhishList({
                      recipeId: id,
                    });
                  } else {
                    removeWhishList({
                      recipeId: id,
                    });
                  }
                }}
                key={reciIteam?._id}
                detail={reciIteam.value}
                detailChannel={reciIteam}
              />
            );
          })}
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  btnClear: {
    border: "1px solid #FF9800",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#FF9800",
  },
  btnClick: {
    background: "#FF9800",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    display: "flex",
    borderRadius: "5px",
    fontSize: "13px",
    lineHeight: "20px",
    marginRight: "6px",
    marginTop: "6px",
    color: "#FFFFFF",
    fontFamily: "Red Hat Display",
    textTransform: "capitalize",
  },
  GridLetf: {
    maxHeight: "88vh",
    overflowY: "scroll",
  },
  GridRight: {
    padding: "10px",
    height: "88vh",
    overflowY: "scroll",
  },
  divMain: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  stackDiv: {
    width: "86%",
    flexWrap: "wrap",
  },
  lineDiv: {
    backgroundColor: "#BFBFBF",
    height: 1,
    width: "100%",
  },
};
