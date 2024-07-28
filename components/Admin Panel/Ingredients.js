import { makeStyles, Toolbar } from "@material-ui/core";
import { Button, IconButton, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import img from "../../Images/AdminBack.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { PhotoCamera, Upload } from "@mui/icons-material";
import "./AdminPanel.css";
import DeleteIcon from "./DeleteIcon";
import AddTaskIcon from "@mui/icons-material/AddTask";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px",
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "100%",
    color: "white",
  },
  search: {
    fontfamily: "'Red Hat Display', sans-serif",
    display: "flex",
    alignItems: "center",
    marginLeft: 0,
    color: "#BFBFBF",
    height: "60%",
    borderRadius: 7,
    background: "#FFFFFF",
    width: "130%",
  },
  textField: {
    background: "#E5E5E5",
    borderRadius: "7px 0px 0px 7px",
    width: "107%",
    fontfamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
}));
const sectionStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
};
export default function Ingredients() {
  const classes = useStyles();
  const userList = [
    {
      id: 1,
      ingredientName: "Ghee",
      category: "Milk",
    },
    {
      id: 2,
      ingredientName: "Tomatos",
      category: "Veges",
    },
  ];
  const categoryList = [
    {
      id: 1,
      Category: "Milk",
      ingredientno: 10,
    },
    {
      id: 2,
      Category: "Veges",
      ingredientno: 20,
    },
  ];

  const foodCategory = [
    { label: "Milk" },
    { label: "Veges" },
    { label: "Fruit" },
    { label: "Cereals" },
    { label: "Beans" },
  ];

  const [getIngradient, setGetIngradient] = useState([]);
  const [getCatagory, setGetCatagory] = useState([]);
  const [getCata, setGetCatago] = useState([]);
  const [value, setValue] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [length, setLength] = useState(null);
  const [deleteIngradient, setDeleteIngradient] = useState("");
  const [deleteType, setDeleteType] = useState("");

  const getIngradientApi = () => {
    axios
      .get("http://localhost:3004/ingredient/getAll/ingredient")
      .then((respIngresdient) => {
        setGetIngradient(respIngresdient?.data);

        let format = {};
        if (respIngresdient.data?.length) {
          respIngresdient.data.forEach((ingre) => {
            if (ingre?.category?._id && !format[ingre?.category?._id]) {
              format = { ...format, [ingre?.category?._id]: 1 };
            } else {
              format = {
                ...format,
                [ingre?.category?._id]: format[ingre?.category?._id] + 1,
              };
            }
          });
        }

        setLength(format);
      });
  };

  const getCatagoryApi = () => {
    axios
      .get("http://localhost:3004/category/getAll/category")
      .then((respCategory) => {
        setGetCatagory(respCategory.data.category);
        setGetCatago(
          respCategory.data.category.map((data) => {
            return { label: data.name, id: data._id };
          })
        );
      })
      .catch();
  };

  useEffect(() => {
    getIngradientApi();
    getCatagoryApi();
  }, []);

  // ================= Delete Icon ===========================

  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [isdeleteModalVisibal, setIsdeleteModalVisibal] = useState(false);

  //============ Edit-Delete ============//

  const handleDeleteOpenModal = (id, type) => {
    setDeleteType(type);
    setDeleteIngradient(id);
    setIsdeleteModalVisibal(true);
  };
  const handleDeleteClose = () => setIsdeleteModalVisibal(false);

  //============ Yes-No handal button ============//
  const handalDeleteModalYesBtn = async (id) => {
    axios
      .delete(`http://localhost:3004/ingredient/deleteingredient/${id}`)
      .then((delUser) => {
        getIngradientApi();
      }, []);
    setIsdeleteModalVisibal(false);
  };

  const handalDeleteModalNoBtn = () => {
    setIsdeleteModalVisibal(false);
  };

  const handalCategoryDeleteModalYesBtnCategory = (id) => {
    axios
      .delete(`http://localhost:3004/category/deletecategory/${id}`)
      .then((delCategory) => {
        getIngradientApi();
        getCatagoryApi();
      }, []);
    setIsdeleteModalVisibal(false);
  };

  const handalDeleteModalYesBtnIngredients = (id) => {
    axios
      .delete(`http://localhost:3004/ingredient/delete/ingredient/${id}`)
      .then((DeleteIngredient) => {
        getIngradientApi();
      }, []);
    setIsdeleteModalVisibal(false);
  };

  // ================== add btn api ===================
  const [isIngredient, setIsIngredient] = useState("");

  const addApi = () => {
    const data = { name: isIngredient, categoryId: value.id };
    axios
      .post("http://localhost:3004/ingredient/post/ingredient", data)
      .then((resp) => {
        getIngradientApi();
        setIsIngredient("");
        setValue(null);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const addCategoryApi = () => {
    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("photo", photo);

    axios
      .post("http://localhost:3004/category/post/category", formData)
      .then((resp) => {
        getCatagoryApi();
        setCategoryName("");
        // setPhoto(null)
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  console.log(getIngradient);
  console.log(getCatagory);
  return (
    <>
      {isdeleteModalVisibal && (
        <DeleteIcon
          deleteType={deleteType}
          deleteIngradient={deleteIngradient}
          isdeleteModalVisibal={isdeleteModalVisibal}
          setIsdeleteModalVisibal={setIsdeleteModalVisibal}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          open={open}
          setOpen={setOpen}
          handleDeleteOpenModal={handleDeleteOpenModal}
          handleDeleteClose={handleDeleteClose}
          handalDeleteModalYesBtnIngredients={
            handalDeleteModalYesBtnIngredients
          }
          handalCategoryDeleteModalYesBtnCategory={
            handalCategoryDeleteModalYesBtnCategory
          }
          handalDeleteModalNoBtn={handalDeleteModalNoBtn}
        />
      )}
      <div style={sectionStyle}>
        <div>
          <Toolbar className={classes.toolbar}>
            <div className="box" style={{ padding: 10, borderRadius: 7 }}>
              <div
                className="row sm-12"
                style={{ justifyContent: "space-evenly", display: "flex" }}
              >
                <div className="col-sm-5">
                  <TextField
                    TextField
                    id="filled-basic"
                    InputProps={{ disableUnderline: true }}
                    variant="filled"
                    label="Ingredient Name"
                    className={classes.textField}
                    onChange={(e) => setIsIngredient(e.target.value)}
                    value={isIngredient}
                  />
                </div>

                <div className="col-sm-4">
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={getCata}
                    style={{
                      background: "#E5E5E5",
                      borderRadius: 0,
                      width: "109%",
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        label="category"
                      />
                    )}
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                  />
                </div>

                <div className="col-sm-3">
                  <Button
                    style={styles.btnDiv}
                    variant="contained"
                    onClick={() => addApi()}
                    startIcon={<AddTaskIcon />}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </Toolbar>

          <div className="table-responsive" style={styles.boxDiv}>
            <table className="table">
              <thead>
                <tr>
                  {/* <th className='align-middle' scope='col'></th> */}
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Ingredient
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Category
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {getIngradient?.map((item, key) => (
                  <tr key={item?._id}>
                    {/* <th className='align-middle'>{item?._id}</th> */}
                    <th className="align-middle" style={styles.mapDiv}>
                      {item?.name}
                    </th>
                    <th className="align-middle" style={styles.mapDiv}>
                      {item?.category?.name}
                    </th>
                    <th className="align-middle">
                      <IconButton>
                        <DeleteForeverIcon
                          style={styles.deleteBtn}
                          onClick={() =>
                            handleDeleteOpenModal(item._id, "Ingredient")
                          }
                          fontSize="large"
                          aria-label="Add"
                        />
                      </IconButton>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: 30 }}>
          <Toolbar className={classes.toolbar}>
            <div className="box" style={{ padding: 10, borderRadius: 7 }}>
              <div className="row sm-12">
                <div className="col-sm-6">
                  <TextField
                    id="filled-basic"
                    InputProps={{ disableUnderline: true }}
                    variant="filled"
                    label="Category name"
                    className="namebox"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>

                <div className="col-sm-3">
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => setPhoto(e.target.files[0])}
                    />
                    <Button
                      variant="contained"
                      component="span"
                      style={styles.UploadBtn}
                      startIcon={<PhotoCamera fontSize="large" />}
                    >
                      Photo
                    </Button>
                  </label>
                </div>

                <div className="col-sm-3">
                  <Button
                    onClick={addCategoryApi}
                    style={styles.btnDiv}
                    variant="contained"
                    startIcon={<AddTaskIcon />}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </Toolbar>

          <div
            className="table-responsive"
            style={{
              background: "#FFFFFF",
              padding: 10,
              borderRadius: 10,
              height: "450px",
            }}
          >
            <table className="table">
              <thead>
                <tr>
                  {/* <th className='align-middle' scope='col'></th> */}
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Category
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Ingredients
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {getCatagory.map((item, index) => (
                  <tr key={item._id}>
                    {/* <th className='align-middle' style={styles.mapidDiv}>
                    {item.id}
                  </th> */}
                    <th className="align-middle" style={styles.mapDiv}>
                      {item.name}
                    </th>
                    <td className="align-middle" style={styles.mapDiv}>
                      {length?.[item._id] || 0}
                    </td>
                    <td className="align-middle">
                      <IconButton>
                        <DeleteForeverIcon
                          style={styles.deleteBtn}
                          onClick={() =>
                            handleDeleteOpenModal(item._id, "Category")
                          }
                          fontSize="large"
                          aria-label="Add"
                        />
                      </IconButton>
                      {/* <DeleteIcon
                      name="Aaaaaaaaaaaaaa"
                      key={item._id}
                      isdeleteModalVisibal={isdeleteModalVisibal}
                      setIsdeleteModalVisibal={setIsdeleteModalVisibal}
                      isEdit={isEdit}
                      setIsEdit={setIsEdit}
                      open={open}
                      setOpen={setOpen}
                      handleDeleteOpenModal={handleDeleteOpenModal}
                      handleDeleteClose={handleDeleteClose}
                      handalDeleteModalYesBtn={() =>
                        handalCategoryDeleteModalYesBtnCategory(item?._id)
                      }
                      handalDeleteModalNoBtn={handalDeleteModalNoBtn}
                    /> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
const styles = {
  boxDiv: {
    background: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    display: "flex",
    margin: "30px",
    height: "450px",
  },
  headerDiv: {
    color: "#FF9800",
    fontSize: 18,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  mapDiv: {
    fontSize: 18,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  InputBaseDiv: {
    fontFamily: "Red Hat Display",
    fontSize: "17px",
    textTransform: "capitalize",
    fontWeight: "bold",
    letterSpacing: "0.11em",
    paddingLeft: "0.17em",
    color: "#AEAEAE",
    background: "#FFFFFF",
    width: "100%",
    height: "39px",
  },
  btnDiv: {
    boxShadow: "none",
    color: "white",
    backgroundColor: "#B6DE16",
    fontFamily: "Red Hat Display",
    fontSize: "19px",
    textTransform: "capitalize",
    letterSpacing: "0.11em",
    width: "100%",
    height: "100%",
    borderRadius: "0px 7px 7px 0px",
  },
  uploadLabel: {
    padding: 5,
    borderRadius: 4,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    border: "1px solid #000000",
    width: "30%",
  },
  UploadBtn: {
    background: "#e8e8e8",
    textTransform: "capitalize",
    borderRadius: 0,
    width: "95%",
    height: "56px",
    letterSpacing: "0.11em",
    fontSize: "1.2em",
    fontFamily: "Red Hat Display",
    fontWeight: "Bold",
    color: "grey",
    boxShadow: "none",
  },
  deleteBtn: {
    color: "red",
  },
};
