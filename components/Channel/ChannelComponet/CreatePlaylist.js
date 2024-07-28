import { Button, Input } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Uploadimg from "../../../Images/Uploadimg.png";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import "./AccountList.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "62%",
  bgcolor: "background.paper",
  // height: '85vh',
  // overflow: "auto"
  borderRadius: "10px",
};

export default function CreatePlaylist({
  handalCancel,
  isloader,
  onSuccessPlayList,
  handalCreatePlayList,
  isEditChanelPlayList,
  isImage,
  setIsImage,
  list,
  setUser,
  user,
  isname,
  setISName,
}) {
  // const [isname, setISName] = useState();
  const [playlist, setPlaylist] = useState([]);
  const [recipeImg, setRecipeImg] = useState([]);
  const [isImg, setISImag] = useState([]);
  useEffect(() => {
    getPlayListApi();
  }, []);

  const getPlayListApi = () => {
    // isloader(true);
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log(
      getLocalData.channelId,
      "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    );
    // console.log(recipeTutorial);
    // axios
    //   .post(
    //     `http://localhost:3004/playlist/post/playlist/${getLocalData.channelId}`,
    //     { ...user, recipes: recipeTutorial }
    //   )
    //   .then((res) => {
    //     console.log(res, "res-------------------------------------");
    //     // setPlaylist(res.data.createdPlaylist);
    //   });
    axios
      .get(
        `http://localhost:3004/recipe/getrecipe/bychannel/${getLocalData?.channelId}`
      )
      .then((resp) => {
        console.log(
          "qqq=======================>playlist",
          resp.data.recipes.recipe_ids
        );
        setRecipeImg(resp.data?.recipes?.recipe_ids);
        // onSuccessPlayList(resp.data?.recipes?.recipe_ids);
        // isloader(false);
      });

    // axios.get(`http://localhost:3004/recipe/getall/recipes`).then((resp) => {
    //   console.log("qqq=======================>", resp.data?.recipes);
    //   setRecipeImg(resp.data?.recipes);
    // });
  };

  // ===================== PlayList Post api ==================

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    setUser({
      ...user,
      [name]: value,
    });
  };
  console.log(user, "useruser");
  console.log(isImg, "useruser");

  const addInList = (r) => {
    if (
      user.recipes.filter((d) => d !== r).findIndex((isIn) => isIn === r) > -1
    ) {
      // setRecipeTutorial(user.recipes.filter((d) => d !== r));
      setUser((prev) => ({
        ...prev,
        recipes: user.recipes.filter((d) => d !== r),
      }));
    } else {
      user.recipes.push(r);
      setUser((prev) => ({
        ...prev,
        recipes: user.recipes,
      }));
      // recipeTutorial.push(r);
      // setRecipeTutorial(user.recipes);
    }
  };

  const onHandaleCheck = (e) => {
    let option = user.recipes;
    if (e.target.checked) {
      option.push(e.target.name);
    } else {
      let index = option.indexOf(e.target.name);
      option.splice(index, 1);
    }
    setUser({
      ...user,
      recipes: option,
    });
  };
  console.log(user, "user");
  return (
    <Box sx={style}>
      <div style={{ marginTop: 20 }}>
        <span style={styles.MainText}>
          {isEditChanelPlayList ? "Edit Playlist" : "Create Playlist"}
        </span>
      </div>
      <div style={styles.lineView} />
      <div className="row" style={styles.paddingDiv}>
        <div className="col-sm-4">
          <label style={styles.normalText} className="form-label">
            Playlist Name:
          </label>
          {/* {console.log("8888888888888888", user.data?.Playlist?.name)} */}
          <input
            type="text"
            id="name"
            name="name"
            value={user?.data?.Playlist?.name}
            onChange={(e) => handleChange(e)}
            className="form-control"
            style={styles.inputDiv}
          />
          <span style={styles.normalText}>Upload Playlist Photo:</span>

          {isImage ? (
            <>
              {isEditChanelPlayList ? (
                <Card
                  sx={{
                    height: "20vh",
                    // width: "37.1vh",
                    boxShadow: "none",
                    border: "1px solid orange",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="142vh"
                    // width="290vh"
                    image={isImage}
                    alt="Uploadimg"
                  />
                </Card>
              ) : (
                <Card
                  sx={{
                    height: "20vh",
                    // width: "37.1vh",
                    boxShadow: "none",
                    border: "1px solid orange",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="142vh"
                    // width="290vh"
                    image={
                      isImage && isImage !== ""
                        ? URL.createObjectURL(isImage) || ""
                        : ""
                    }
                    alt="Uploadimg"
                  />
                </Card>
              )}
            </>
          ) : (
            <label htmlFor="contained-button-file">
              <Input
                style={styles.inputImg}
                accept="image/*"
                multiple
                type="file"
                name="photo"
                id="contained-button-file"
                value={user?.photo}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setUser({
                    ...user,
                    photo: event.target.files[0].name,
                  });
                  setIsImage(event.target.files[0]);
                }}
              />

              <Card
                sx={{
                  height: "20vh",
                  // width: "37.1vh",
                  marginTop: "-31px",
                  boxShadow: "none",
                  border: "1px solid orange",
                }}
              >
                <CardMedia
                  component="img"
                  height="142vh"
                  // width="290vh"
                  image={Uploadimg}
                  alt="Uploadimg"
                />
              </Card>
            </label>
          )}
        </div>
        <div className="col-sm-8">
          <span style={styles.createText}>Select Tutorials:</span>

          <div
            className="img"
            style={{
              height: "55vh",
              overFlow: "auto",
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              overflow: "auto",
              justifyContent: "space-around",
            }}
          >
            {recipeImg.map((item, id) => (
              <div
                key={item._id}
                onChange={(e) => handleChange(e)}
                value={user.recipes}
              >
                <Card
                  sx={{
                    margin: 1,
                    padding: 1,
                    height: "25.3vh",
                    width: "35.5vh",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="120px"
                    width="250px"
                    image={item.Rpic}
                  />
                  <div style={styles.chchboxAndName}>
                    <div style={{ flexWrap: "wrap" }}>
                      <span style={styles.nameText}>{item.rname}</span>
                    </div>
                    {/* <input type={'checkbox'} id={item.rname} name={item.rname} checked={}/> */}
                    <Checkbox
                      onClick={() => {
                        // setUser({
                        //   ...user,
                        //   recipesid: item.value?._id,
                        // });
                        addInList(item._id);
                      }}
                      value={
                        user.recipes?.findIndex((r) => r === item._id) > -1
                      }
                      style={styles.checkboxDiv}
                    />
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="d-grid gap-2 d-md-flex justify-content-md-end"
        style={styles.marginTopDiv}
      >
        <Button
          style={styles.cancelBtn}
          variant="outline-primary"
          onClick={handalCancel}
          type="button"
        >
          Cancel
        </Button>
        <Button
          style={styles.uploadBtn}
          variant="secondary"
          onClick={handalCreatePlayList}
          type="button"
        >
          {isEditChanelPlayList ? "Update" : "Create Playlist"}
        </Button>
      </div>
    </Box>
  );
}

const styles = {
  URLimg: {
    width: "100%",
    borderRadius: 5,
  },
  imgUploadDiv: {
    // height: 130,
  },
  inputImg: {
    visibility: "hidden",
  },
  cancelBtn: {
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
  uploadBtn: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  marginTopDiv: {
    marginTop: 20,
    paddingLeft: 35,
    paddingRight: 35,
    marginBottom: 30,
  },
  createText: {
    fontSize: 30,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: 1000,
  },
  normalText: {
    fontSize: 19,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  inputDiv: {
    width: "100%",
    borderColor: "#FF9800",
    marginBottom: 20,
  },
  nameText: {
    fontSize: 20,
    color: "#000000",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    flexWrap: "wrap",
    width: "10%",
  },
  checkboxDiv: {
    color: "#FF9800",
    marginBottom: "25px",
  },
  lineView: {
    background: "#000000",
    height: "1px",
    marginTop: 20,
  },
  MainText: {
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 30,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  paddingDiv: {
    marginTop: 30,
    paddingLeft: 35,
    paddingRight: 35,
  },
  chchboxAndName: {
    display: "flex",
    justifyContent: "space-between",
  },
};
