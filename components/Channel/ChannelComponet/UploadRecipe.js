import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import imgUpload from "../../../Images/imgUpload.png";
import plus from "../../../Images/plus.png";
import Ellipse from "../../../Images/Ellipse.png";
import { styled } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material";
import axios from "axios";
import { CloseOutlined } from "@mui/icons-material";
import { Modal } from "bootstrap";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import  LoaderBody from '../../loaderMain/LoaderBody';

const Input = styled("input")({
  display: "none",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "80vh",
  bgcolor: "background.paper",
  p: 3,
  overflow: "auto",
};

export default function UploadRecipe({
  handleCloseModalBtn,
  onSuccess,
  isloader,
}) {
  const [isImage, setIsImage] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const [user, setUser] = useState({
    rname: "",
    desc: "",
    steps: "",
    ingre: [],
    ulink: "",
    rpic: "",
    ctime: "",
    path: "",
    visibility: "",
  });

  useEffect(() => getIngredients(), []);

  const getIngredients = () => {
    axios("http://localhost:3004/ingredient/getAll/ingredient")
      .then((res) => {
        if (res.data.length) {
          setIngredients(
            res.data.map((a) => {
              return { name: a.name, id: a._id };
            })
          );
        }
      })
      .catch();
  };

  const handleIngredientChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedIngredients(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    // debugger
    isloader(true);
    const formData = new FormData();

    formData.append("rname", user.rname);
    formData.append("ulink", user.ulink);
    formData.append("desc", user.desc);
    if (isStep.length) {
      let abc = [];
      isStep.forEach((step) => abc.push(step.steps));
      abc.forEach((step, index) => {
        if (index) {
          formData.append(`steps[${index}]`, step);
        } else {
          formData.append("steps[]", step);
        }
      });
    }
    if (selectedIngredients.length) {
      selectedIngredients.forEach((ingredient, index) => {
        if (index) {
          formData.append(`ingre[${index}]`, ingredient);
        } else {
          formData.append("ingre[]", ingredient);
        }
      });
    }

    // formData.append("ingre[]", user.ingre);
    // formData.append("ingre[]", "6231b7155c6ce368ade53c47");
    formData.append("ctime", user.ctime);
    if (isImage) {
      formData.append("Rpic", isImage);
    }
    formData.append("playlistid", "623ace6a64632a479d6ff94a");
    // formData.append("path", "");
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log(
      getLocalData.channelId,
      "getLocalDatagetLocalData11111111111111111111111111111111111"
    );

    axios
      .post(
        `http://localhost:3004/recipe/post/recipe/${getLocalData?.channelId}`,
        formData
      )
      .then((res) => {
        console.log("Response", res);

        handleCloseModalBtn();
        setUser("");
        axios
          .get(
            `http://localhost:3004/recipe/getrecipe/bychannel/${getLocalData?.channelId}`
          )
          .then((res) => {
            console.log(res, "resresresres");
            onSuccess(res.data?.recipes?.recipe_ids);
            // debugger
            isloader(false);
          });
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // console.log(
    //   getLocalData.channelId,
    //   "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    // );
  };

  // ============ Recipe Steps & Delete-Update Button ============//

  const [isStep, setIsStep] = useState([]);
  console.log(isStep, "isStep");

  const onClickAddStepBtn = () => {
    if (user.steps) {
      isStep.push({ steps: user.steps, isEditAble: false });
      setIsStep([...isStep]);
    }
    setUser((prev) => ({ ...prev, steps: "" }));
    // console.log("BtnStep===>", isStep);
    // if (stepValue) {
    //   setIsStep(isStep, isStep.push(stepValue));
    //   setStepValue("");
    // }
  };
  const deleteItem = (name) => {
    setIsStep(
      isStep.filter(function (item) {
        return item.steps !== name;
      })
    );
  };
  const updateItem = (item) => {
    // deleteItem(item);
    setUser((prev) => ({ ...prev, editSteps: item }));
    isStep[isStep.findIndex((data) => data.steps === item)].isEditAble = true;
    setIsStep([...isStep]);
  };
  const updateSteps = (item) => {
    if (user.editSteps) {
      let index = isStep.findIndex((data) => data.steps === item);
      isStep[index].isEditAble = false;
      isStep[index].steps = user.editSteps;
      setIsStep([...isStep]);
    } else {
      deleteItem(item);
    }
  };

  // ============ Ingredients Steps & Delete-Update Button ============//

  const [isIngredients, setIsIngredients] = useState([]);
  console.log(isIngredients, "isIngredients");

  const onClickAddIngredientsBtn = () => {
    if (user.ingre) {
      isIngredients.push({ ingre: user.ingre, isEditAbleIngre: false });
      setIsIngredients([...isIngredients]);
    }
    setUser((prev) => ({ ...prev, ingre: "" }));
    // console.log("BtnStep===>", isIngredients);
    // if (stepValue) {
    //   setIsIngredients(isIngredients, isIngredients.push(stepValue));
    //   setStepValue("");
    // }
  };
  const deleteItemIngredients = (name) => {
    setIsIngredients(
      isIngredients.filter(function (item) {
        return item.ingre !== name;
      })
    );
  };
  const updateIngredientItem = (item) => {
    // deleteItemIngredients(item);
    setUser((prev) => ({ ...prev, editIngredients: item }));
    isIngredients[
      isIngredients.findIndex((data) => data.ingre === item)
    ].isEditAbleIngre = true;
    setIsIngredients([...isIngredients]);
  };
  const updateIngredients = (item) => {
    if (user.editIngredients) {
      let index = isIngredients.findIndex((data) => data.ingre === item);
      isIngredients[index].isEditAbleIngre = false;
      isIngredients[index].ingre = user.editIngredients;
      setIsIngredients([...isIngredients]);
    } else {
      deleteItemIngredients(item);
    }
  };

  return (
    <Box sx={style}>
      <div>
        <>
          <div className="row">
            <div className="col-sm-7">
              <label style={styles.labelText} className="form-label">
                Recipe Name:
              </label>
              <input
                style={styles.inputDiv}
                type="text"
                id="name"
                name="rname"
                className="form-control"
                maxLength={30}
                value={user.rname}
                onChange={(e) => handleChange(e)}
              />
              <span style={styles.smallText}>0/30</span>
            </div>
            <div className="col-sm-5">
              <label style={styles.labelText} className="form-label">
                Paste If Have YouTube Link:
              </label>
              <input
                style={styles.inputDiv}
                type="text"
                id="link"
                className="form-control"
                name="ulink"
                value={user.ulink}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-8">
              <div className="col-12">
                <label style={styles.labelText} className="form-label">
                  Recipe Description:
                </label>
                <textarea
                  style={styles.inputDiv}
                  className="form-control"
                  type="Description"
                  id="Description"
                  name="desc"
                  value={user.resc}
                  onChange={(e) => handleChange(e)}
                  rows="5"
                  maxLength={600}
                ></textarea>
                <span style={styles.smallText}>0/600</span>
              </div>

              <div>
                <label style={styles.labelText} className="form-label">
                  Recipe Steps:
                </label>
                <div className="input-group mb-1">
                  <input
                    style={styles.inputDiv}
                    id="Steps"
                    name="steps"
                    type={"text"}
                    label="Recipe Steps"
                    className="form-control"
                    value={user?.steps}
                    onChange={(e) => handleChange(e)}
                    aria-describedby="button-addon2"
                  />
                  <button
                    style={styles.plusBtn}
                    onClick={onClickAddStepBtn}
                    type="button"
                  >
                    <img src={plus} alt="plus" />
                  </button>
                </div>

                {isStep.map((item, index) => (
                  <div key={index}>
                    <div style={styles.buttonGroupDiv}>
                      <div style={styles.roundDiv} />
                      {item.isEditAble ? (
                        <input
                          type="text"
                          value={user.editSteps}
                          name="editSteps"
                          onChange={handleChange}
                          onBlur={() => updateSteps(item.steps)}
                        />
                      ) : (
                        <span style={styles.stepText}>{item.steps}</span>
                      )}
                      <ButtonGroup
                        disableElevation
                        variant="outlined"
                        className="fw-bolder"
                      >
                        <Button
                          style={styles.editAndDeleteBtn}
                          onClick={() => {
                            updateItem(item.steps);
                          }}
                        >
                          EDIT
                        </Button>
                        <Button
                          style={styles.editAndDeleteBtn}
                          onClick={() => {
                            deleteItem(item.steps);
                          }}
                        >
                          DELETE
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                ))}

                {/* <div style={styles.buttonGroupDiv}>
                  <img src={Ellipse} alt='Ellipse' />
                  <span style={styles.stepText}>First Step...</span>
                  <ButtonGroup disableElevation variant='outlined'>
                    <Button style={styles.editAndDeleteBtn}>EDIT</Button>
                    <Button style={styles.editAndDeleteBtn}>DELETE</Button>
                  </ButtonGroup>
                </div> */}
              </div>

              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={styles.labelText} className="form-label">
                    Ingredients:
                  </label>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    label="Ingredients"
                    value={selectedIngredients}
                    onChange={handleIngredientChange}
                    input={
                      <OutlinedInput label="Name" id="demo-multiple-name" />
                    }
                    // MenuProps={MenuProps}
                  >
                    {ingredients.map((ingredient) => (
                      <MenuItem key={ingredient.id} value={ingredient.id}>
                        {ingredient.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {/*<div className='input-group mb-1'>*/}
                  {/*<input*/}
                  {/*    style={styles.inputDiv}*/}
                  {/*    type='text'*/}
                  {/*    id='Ingredients'*/}
                  {/*    className='form-control'*/}
                  {/*    name='ingre'*/}
                  {/*    value={user.ingre}*/}
                  {/*    onChange={(e) => handleChange(e)}*/}
                  {/*    aria-describedby='button-addon2'*/}
                  {/*  />*/}
                  {/*  <button style={styles.plusBtn} onClick={onClickAddIngredientsBtn} type='button'>*/}
                  {/*    <img src={plus} alt='plus' />*/}
                  {/*  </button>*/}
                  {/*</div>*/}

                  {/*</div>*/}
                  {/*<div style={styles.itemDiv}>*/}
                  {/*              {isIngredients.map((item,index) => (*/}
                  {/*          <div key={index} style={styles.idDiv}>*/}
                  {/*            <Button*/}
                  {/*              style={styles.itemBtn}*/}
                  {/*              variant='contained'*/}
                  {/*              endIcon={*/}
                  {/*                <CloseOutlined*/}
                  {/*                  onClick={() => {*/}
                  {/*                     deleteItemIngredients(item.ingre);*/}
                  {/*                  }}*/}
                  {/*                />*/}
                  {/*              }*/}
                  {/*            >*/}
                  {/*              {item.ingre}*/}
                  {/*            </Button>*/}
                  {/*          </div>*/}
                  {/*            ))}*/}
                  {/* </div>*/}
                  {/* {isIngredients.map((items,index) => (
                  <div key={index}>
                    <div style={styles.buttonGroupDiv}>
                      <div style={styles.roundDiv} />
                      {items.isEditAbleIngre ?
                        <input type="text" value={user.editIngredients} name="editIngredients" onChange={handleChange} onBlur={()=>updateIngredients(items.ingre)} />
                      :
                      <span style={styles.stepText}>{items.ingre}</span>
                      }
                      <ButtonGroup disableElevation variant='outlined' className='fw-bolder'>
                        <Button
                          style={styles.editAndDeleteBtn}
                          onClick={() => {
                            updateIngredientItem(items.ingre);
                          }}
                        >
                          EDIT
                        </Button>
                        <Button
                          style={styles.editAndDeleteBtn}
                          onClick={() => {
                            deleteItemIngredients(items.ingre);
                          }}
                        >
                          DELETE
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                ))} */}
                </div>

                {/* <div>
                <label style={styles.labelText} className='form-label'>
                  Ingredients:
                </label>
                <div className='input-group mb-1'>
                  <input
                    style={styles.inputDiv}
                    type='text'
                    id='Ingredients'
                    className='form-control'
                    name='ingre'
                    value={user.ingre}
                    onChange={(e) => handleChange(e)}
                    aria-describedby='button-addon2'
                  />
                  <button style={styles.plusBtn} type='button'>
                    <img src={plus} alt='plus' />
                  </button>
                </div>
                <div style={styles.buttonGroupDiv}>
                  <img src={Ellipse} alt='Ellipse' />
                  <span style={styles.stepText}>First Ingredients...</span>
                  <ButtonGroup disableElevation variant='outlined'>
                    <Button style={styles.editAndDeleteBtn}>EDIT</Button>
                    <Button style={styles.editAndDeleteBtn}>DELETE</Button>
                  </ButtonGroup>
                </div>
              </div> */}
              </div>
            </div>
            <div className="col-sm-4">
              {isImage ? (
                <div style={styles.uploadImgDiv}>
                  <img
                    component="span"
                    variant="contained"
                    src={URL.createObjectURL(isImage)}
                    alt="imgUpload"
                    style={styles.URLimg}
                  />
                </div>
              ) : (
                <div style={styles.uploadImgDiv}>
                  <div>
                    <label htmlFor="contained-button-file">
                      <Input
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        type="file"
                        name="rpic"
                        value={user.rpic}
                        onChange={(event) => {
                          console.log(event.target.files[0]);
                          setIsImage(event.target.files[0]);
                        }}
                      />
                      <img
                        component="span"
                        variant="contained"
                        src={imgUpload}
                        alt="imgUpload"
                        style={styles.imgUploadDiv}
                      />
                    </label>
                  </div>
                </div>
              )}

              <div style={styles.uploadRecipeTextDiv}>
                <span style={styles.uploadRecipeText}>Upload Recipe Photo</span>
              </div>

              <div style={styles.cookingDiv}>
                <label style={styles.labelText} className="form-label">
                  Cooking Time:
                </label>
                <select
                  id="time"
                  name="ctime"
                  value={user.ctime}
                  className="form-select"
                  style={styles.playListSelectDiv}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="" hidden>
                    --select--
                  </option>
                  <option value="10">10 min</option>
                  <option value="15">15 min</option>
                  <option value="20">20 min</option>
                  <option value="25">25 min</option>
                  <option value="30">30 min</option>
                  <option value="35">35 min</option>
                </select>
                {/* <input style={styles.inputDiv} type='name' id='Time' name='ctime' value={user.ctime} onChange={(e) => handleChange(e)} className='form-control' /> */}
              </div>

              <div
                className="d-grid gap-2 d-md-flex justify-content-md-end"
                style={styles.marginTopDiv}
              >
                <Button
                  style={styles.cancelBtn}
                  variant="outline-primary"
                  onClick={handleCloseModalBtn}
                  type="button"
                >
                  Cancel
                </Button>
                <Button
                  style={styles.uploadBtn}
                  variant="secondary"
                  onClick={onSubmit}
                  type="button"
                >
                  Upload Recipe
                </Button>
              </div>
            </div>
          </div>
        </>
      </div>
    </Box>
  );
}

const styles = {
  idDiv: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
  },
  itemBtn: {
    display: "flex",
    alignSelf: "flex-start",
    backgroundColor: "#FF9800",
    color: "#FFFFFF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
  },
  itemDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  labelText: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  inputDiv: {
    borderColor: "#FF9800",
    fontWeight: "bolder",
  },
  smallText: {
    color: "#BFBFBF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  plusBtn: {
    backgroundColor: "#FF9800",
    border: "1px solid #FF9800",
  },
  buttonGroupDiv: {
    display: "flex",
    alignItems: "center",
  },
  stepText: {
    color: "black",
    fontSize: 17,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    marginLeft: 10,
    marginRight: 10,
  },
  editAndDeleteBtn: {
    border: "1px solid #FF9800",
    color: "#FF9800",
    height: 22,
    fontSize: 13,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bolder",
  },
  uploadImgDiv: {
    backgroundColor: "#C4C4C442",
    height: 150,
    width: "100%",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  URLimg: {
    width: "100%",
    height: 150,
    borderRadius: 5,
  },
  imgUploadDiv: {
    width: "60px",
    height: "60px",
  },
  uploadRecipeTextDiv: {
    display: "flex",
    justifyContent: "center",
  },
  uploadRecipeText: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  cookingDiv: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
  visibilityDiv: {
    display: "flex",
    justifyContent: "center",
  },
  selectDiv: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  selectOptionDiv: {
    marginBottom: "15px",
    marginTop: "10px",
    width: "70%",
  },
  selectMainDiv: {
    color: "#000000",
    borderColor: "#000000",
    backgroundColor: "#FFEAC2",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  playListDiv: {
    width: "70%",
  },
  playListSelectDiv: {
    color: "#000000",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
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
    fontSize: 18,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  marginTopDiv: {
    marginTop: 20,
  },
};
