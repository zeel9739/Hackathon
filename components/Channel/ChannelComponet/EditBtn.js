import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import imgUpload from "../../../Images/imgUpload.png";
import plus from "../../../Images/plus.png";
import { styled } from "@mui/material/styles";
import { ButtonGroup, MenuItem, OutlinedInput, Select } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { CssTextField } from "../../Account/inputtagUi";
import { fontWeight } from "@mui/system";
import axios from "axios";

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
const styleCuston = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: " #FFEAC2",
  p: 2,
  width: "30%",
};
export default function EditBtn({
  handleCloseModalBtn,
  setIsNameValue,
  setIsDescriptionValue,
  setIsCustomIngredientValue,
  setIsTimeValue,
  setIsLinkValue,
  setIsVisibilityPublicAndPrivateValue,
  setIsPlaylistValue,
  isItem,
  onClickAddBtnItem,
  handaldeleteItem,
  setIsItem,
  selectItem,
  onClickAddStepBtn,
  isStep,
  stepValue,
  setStepValue,
  deleteItem,
  updateItem,
  handleCustomOpen,
  handleCustomClose,
  isCustom,
  setFiles,
  isImage,
  setIsImage,
  files,
  ingredients,
  setIngredients,
  selectedIngredients,
  setSelectedIngredients,
  getIngredients,
  handleIngredientChange,
  isNameValue,
  isLinkValue,
  isDescriptionValue,
  isTimeValue,
  // yash
  getIneRecipeOne,
  ondataupdate,
  isloaderdata,
}) {
  useEffect(() => {
    // setIsImage(getIneRecipeOne.Rpic);
    // selectedIngredients(getIneRecipeOne.ingre?.map((item) => item?.name));
  }, []);
  function handleuploadModalBtn(e) {
    isloaderdata(true);
    const pwdDetails = {
      rname: isNameValue,
      ulink: isLinkValue,
      desc: isDescriptionValue,
      steps: isStep,
      ingre: selectedIngredients,
      // "Custom Ingredient": isCustomIngredientValue,
      ctime: isTimeValue,
      // Visibility: isVisibilityPublicAndPrivateValue,
      // Playlist: isPlaylistValue,
      Rpic: isImage,
    };
    // const formData = new FormData();
    // formData.append("rname", isNameValue);
    // formData.append("ulink", isLinkValue);
    // formData.append("desc", isDescriptionValue);
    // formData.append("steps", isStep);
    // formData.append("ingre", selectedIngredients);
    // formData.append("ctime", isTimeValue);
    // formData.append("Rpic", isImage);
    // debugger;
    axios
      .put(
        `http://localhost:3004/recipe/update/recipe/${getIneRecipeOne._id}`,
        pwdDetails
      )
      .then((update) => {
        console.log("update===>", update);
        ondataupdate(update?.data);
        isloaderdata(false);
      });
  }
  console.log(getIneRecipeOne, "edit111111111111111111111");
  return (
    <Box sx={style}>
      <div>
        <div className="row">
          <div className="col-xl-6">
            <label style={styles.labelText} className="form-label">
              Recipe Name:
            </label>
            {/* <CssTextField
                label='FirstName'
                id='custom-css-outlined-input'
                onChange={this.handleInputChange}
                className='w-100'
              /> */}
            {/* <CssTextField
               className='w-100'
              onChange={(e) => setIsNameValue(e.target.value)}
              label='Recipe Name'
              id='name'
              name='Name'
              helperText="0/30"
              inputProps={{ maxLength: 30 }}
            /> */}
            <input
              style={styles.inputDiv}
              onChange={(e) => setIsNameValue(e.target.value)}
              value={isNameValue}
              type="name"
              id="name"
              name="Name"
              className="form-control"
              maxLength={30}
            />
            <span style={styles.smallText}>0/30</span>
          </div>
          <div className="col-xl-6">
            <label style={styles.labelText} className="form-label">
              Paste If Have YouTube Link:
            </label>
            <input
              style={styles.inputDiv}
              onChange={(e) => setIsLinkValue(e.target.value)}
              value={isLinkValue}
              className="form-control"
              type="text"
              label="YouTube Link"
              id="link"
              name="Link"
              helperText="Paste If Have YouTube Link"
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-8">
            <div className="col-12">
              {/* <input
                   onChange={(e) => setIsDescriptionValue(e.target.value)}
                   id='Description'
                   type='Description'
                   name='Description'
                  className='w-100 '
                  label='Recipe Description'
                  rows={4}
                  multiline
                  inputProps={{ maxLength: 600 }}
                  helperText="0/600"
                /> */}
              <label style={styles.labelText} className="form-label">
                Recipe Description:
              </label>
              <textarea
                style={styles.inputDiv}
                onChange={(e) => setIsDescriptionValue(e.target.value)}
                value={isDescriptionValue}
                className="form-control"
                rows="5"
                id="Description"
                type="Description"
                name="Description"
                maxLength={600}
              ></textarea>
              <span style={styles.smallText}>0/600</span>
            </div>

            <label style={styles.labelText} className="form-label">
              Recipe Steps:
            </label>
            <div className="d-flex mb-1">
              <input
                style={styles.inputDiv}
                id="Steps"
                name="Steps"
                type={"text"}
                label="Recipe Steps"
                className="form-control"
                aria-describedby="button-addon2"
                value={stepValue}
                onChange={(e) => setStepValue(e.target.value)}
              />
              <button
                style={styles.plusBtn}
                onClick={onClickAddStepBtn}
                type="button"
              >
                <img src={plus} alt="plus" />
              </button>
            </div>
            {console.log("isStep", isStep)}
            {isStep.map((item) => (
              <div key={item.id}>
                <div style={styles.buttonGroupDiv}>
                  <div style={styles.roundDiv} />
                  <span style={styles.stepText}>{item}</span>
                  <ButtonGroup
                    disableElevation
                    variant="outlined"
                    className="fw-bolder"
                  >
                    <Button
                      style={styles.editAndDeleteBtn}
                      onClick={() => {
                        updateItem(item);
                      }}
                    >
                      EDIT
                    </Button>
                    <Button
                      style={styles.editAndDeleteBtn}
                      onClick={() => {
                        deleteItem(item);
                      }}
                    >
                      DELETE
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            ))}
            {/* <div>
              <label style={styles.labelText} className='form-label'>
                Ingredients:
              </label>
              <div className='input-group mb-1'>
                <input
                  style={styles.inputDiv}
                  autoCorrect={true}
                  type='text'
                  id='Ingredients'
                  name='Ingredients'
                  className='form-control'
                  aria-describedby='button-addon2'
                  value={isItem}
                  onChange={(e) => setIsItem(e.target.value)}
                />
                <button style={styles.plusBtn} onClick={() => onClickAddBtnItem()} type='button'>
                  <img src={plus} alt='plus' />
                </button>
              </div>

              <div style={styles.modalMainDiv}>
                <div style={styles.modalTextDiv}>
                  <span style={styles.ingredientsText}>Paneer</span>
                  <span style={styles.categoryText}>Category: Milk</span>
                </div>
                <div style={styles.marginLeftDiv}>
                  <Button style={styles.ingredientBtn} onClick={handleCustomOpen} variant='text'>
                    Add Your Custom Ingredient
                  </Button>
                  <Modal
                    hideBackdrop
                    open={isCustom}
                    onClose={handleCustomClose}
                    aria-labelledby='child-modal-title'
                    aria-describedby='child-modal-description'
                  >
                    <Box
                      sx={{
                        ...styleCuston,
                      }}
                    >
                      <span style={styles.boldText}>Add Your Custom Ingredient</span>
                      <input
                        style={styles.ingredientName}
                        onChange={(e) => setIsCustomIngredientValue(e.target.value)}
                        className='form-control'
                        type='text'
                        id='CustomIngredient'
                        name='CustomIngredient'
                        placeholder='Ingredient Name'
                      />
                      <select style={styles.categoryList} className='form-select'>
                        <option value=''>Select Category</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                      </select>
                      <div style={styles.textAndUploadDiv}>

                        <div className='d-grid gap-2 d-md-flex justify-content-md-center'>
                          <Button
                            style={styles.cancelBtn}
                            variant='outline-primary'
                            onClick={handleCustomClose}
                            type='button'
                          >
                            Cancel
                          </Button>
                          <Button
                            style={styles.uploadBtn}
                            variant='secondary'
                            onClick={handleCustomClose}
                            type='button'
                          >
                            Add
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div> */}

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
                  input={<OutlinedInput label="Name" id="demo-multiple-name" />}
                  // MenuProps={MenuProps}
                >
                  {ingredients.map((ingredient) => (
                    <MenuItem key={ingredient.id} value={ingredient.id}>
                      {ingredient.name}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>

            {/* <div style={styles.itemDiv}>
              {selectItem.map((item) => (
                <div key={item.id} style={styles.idDiv}>
                  <Button
                    style={styles.itemBtn}
                    variant="contained"
                    endIcon={
                      <CloseOutlined
                        onClick={() => {
                          handaldeleteItem(item);
                        }}
                      />
                    }
                  >
                    {item}
                  </Button>
                </div>
              ))}
            </div> */}
          </div>
          <div className="col-sm-4">
            {console.log("isImage", isImage, getIneRecipeOne.Rpic)}
            {isImage || getIneRecipeOne.Rpic ? (
              <div style={styles.uploadImgDiv}>
                <img
                  component="span"
                  variant="contained"
                  src={getIneRecipeOne.Rpic}
                  alt="imgUpload"
                  style={styles.URLimg}
                />
              </div>
            ) : (
              <div style={styles.uploadImgDiv}>
                <label htmlFor="contained-button-file">
                  <Input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
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
            )}

            <div style={styles.uploadRecipeTextDiv}>
              <span style={styles.boldText}>Upload Recipe Photo</span>
            </div>

            <div style={styles.cookingDiv}>
              <label style={styles.labelText} className="form-label">
                Cooking Time:
              </label>
              <div>
                {console.log("isTimeValue", isTimeValue)}
                <select
                  style={styles.playListSelectDiv}
                  onChange={(e) => setIsTimeValue(e.target.value)}
                  value={isTimeValue}
                  className="form-select"
                >
                  {/* <option value=''>Playlist</option>
                  <option value='1'>abc</option> */}
                  <option value="10">10 min</option>
                  <option value="15">15 min</option>
                  <option value="20">20 min</option>
                  <option value="25">25 min</option>
                  <option value="30">30 min</option>
                  <option value="35">35 min</option>
                </select>
              </div>
            </div>

            {/* <div style={styles.visibilityDiv}>
              <span style={styles.labelText}>Visibility:</span>
            </div> */}
            {/* <div style={styles.selectDiv}>
              <div style={styles.selectOptionDiv}>
                <select
                  style={styles.selectMainDiv}
                  onChange={(e) =>
                    setIsVisibilityPublicAndPrivateValue(e.target.value)
                  }
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Private</option>
                  <option value="1">Public</option>
                </select>
              </div>

              <div style={styles.playListDiv}>
                <select
                  style={styles.playListSelectDiv}
                  onChange={(e) => setIsPlaylistValue(e.target.value)}
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option value="">Playlist</option>
                  <option value="1">abc</option>
                </select>
              </div>
            </div> */}
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
                onClick={handleuploadModalBtn}
                type="button"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

const styles = {
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
    flexDirection: "row",
    alignItems: "center",
  },
  roundDiv: {
    backgroundColor: "black",
    height: 10,
    width: 10,
    borderRadius: 11,
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
  modalMainDiv: {
    height: 60,
    borderLeft: "1px solid #FF9800",
    borderBottom: "1px solid #FF9800",
    borderRight: "1px solid #FF9800",
  },
  modalTextDiv: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
  ingredientsText: {
    fontSize: 17,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bolder",
  },
  marginLeftDiv: {
    marginLeft: 10,
  },
  ingredientBtn: {
    fontSize: 12,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bolder",
  },
  ingredientName: {
    border: "1px solid #FF9800",
    width: "100%",
    marginTop: 10,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    color: "#000",
    fontWeight: "bolder",
  },
  categoryList: {
    border: "1px solid #FF9800",
    width: "100%",
    marginTop: 10,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    color: "#000",
    fontWeight: "bolder",
  },
  textAndUploadDiv: {
    marginTop: 10,
  },
  photoText: {
    fontSize: 16,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  uploadLabel: {
    backgroundColor: "#BFBFBF",
    padding: 5,
    borderRadius: 4,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  hiddenInput: {
    visibility: "hidden",
  },
  itemDiv: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
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
  uploadImgDiv: {
    backgroundColor: "#C4C4C442",
    height: 150,
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
  boldText: {
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
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  categoryText: {
    fontSize: 17,
    color: "#BFBFBF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bolder",
  },
  marginTopDiv: {
    marginTop: 20,
  },
};
