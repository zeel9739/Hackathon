import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import axios from "axios";
import "./ChannelComponet/AccountList.css";
import moment from "moment";
import { Box } from "@mui/system";
import EditBtn from "./ChannelComponet/EditBtn";
import { isEmpty } from "lodash";
import UploadRecipe from "./ChannelComponet/UploadRecipe";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import LoaderBody from "../loaderMain/LoaderBody";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000000",
  p: 2.5,
  paddingRight: 2,
  borderRadius: 2,
  width: 300,
};

// const rows = [
//   {
//     id: 1,
//     // Videos:444,
//     Videos: require("../../Images/MatarPaneer2.png"),
//     Name: "Matar Paneer",
//     Date: "08,02,21",
//     Like: "10,000",
//     Comments: "1000",
//     Visibility:false
//   },
//   {
//     id: 2,
//     Videos: require("../../Images/PaneerKadhai2.png"),
//     Name: "Paneer Kadhai",
//     Date: "11,02,21",
//     Like: "9000",
//     Comments: "7500",
//     Visibility:false

//   },
//   {
//     id: 3,
//     Videos: require("../../Images/MatarPaneer2.png"),
//     Name: "Samosas",
//     Date: "18,02,21",
//     Like: "4400",
//     Comments: "500",
//     Visibility:true

//   },
//   {
//     id: 4,
//     Videos: require("../../Images/PaneerKadhai2.png"),
//     Name: "Aloo Gobi",
//     Date: "17,02,21",
//     Like: "5500",
//     Comments: "100",
//     Visibility:false

//   },
//   {
//     id: 5,
//     Videos: require("../../Images/MatarPaneer2.png"),
//     Name: "Naan",
//     Date: "20,02,21",
//     Like: "2500",
//     Comments: "4500",
//     Visibility:false

//   },
//   {
//     id: 6,
//     Videos: require("../../Images/PaneerKadhai2.png"),
//     Name: "Rogan Josh",
//     Date: "05,03,21",
//     Like: "5200",
//     Comments: "5000",
//     Visibility:false

//   },
//   {
//     id: 7,
//     Videos: require("../../Images/MatarPaneer2.png"),
//     Name: "Tomato Soup",
//     Date: "16,03,21",
//     Like: "4300",
//     Comments: "3500",
//     Visibility:false

//   },
//   {
//     id: 8,
//     Videos: require("../../Images/PaneerKadhai2.png"),
//     Name: "Chutney",
//     Date: "22,03,21",
//     Like: "8000",
//     Comments: "4500",
//     Visibility:false

//   },
// ];

export default function VideoChannelContect(props) {
  console.log("contentList", props.contentList);
  const [rows, setRows] = useState(props.contentList || []);
  const [isEdit, setIsEdit] = useState(false);
  const [openCreateRecipe, setOpenCreate] = useState(false);
  const [isdeleteModalVisibal, setIsdeleteModalVisibal] = useState(false);

  const [isNameValue, setIsNameValue] = useState();
  const [isLinkValue, setIsLinkValue] = useState();
  const [isDescriptionValue, setIsDescriptionValue] = useState();
  const [isCustomIngredientValue, setIsCustomIngredientValue] = useState();
  const [isTimeValue, setIsTimeValue] = useState();
  const [
    isVisibilityPublicAndPrivateValue,
    setIsVisibilityPublicAndPrivateValue,
  ] = useState();
  const [isPlaylistValue, setIsPlaylistValue] = useState();
  const [open, setOpen] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [getIneRecipe, setOneRecipe] = useState([]);
  const [deleteRecipe, setDeletRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [dataUpdate, setdataUpdate] = useState([]);

  //============ Edit-Delete ============//

  // =================== edit api ====================
  const handleEditOpenModal = async (id) => {
    // alert(id)
    console.log(id, "id-17-----------------------------------------------");
    axios
      .get(`http://localhost:3004/recipe/getrecipe/${id}`)
      .then((getOneRecipe) => {
        console.log("update===>----------", getOneRecipe.data.value);
        setOneRecipe(getOneRecipe.data.value);
        setIsStep(getOneRecipe.data.value.steps);
        setIsNameValue(getOneRecipe.data.value.rname);
        setIsLinkValue(getOneRecipe.data.value.ulink);
        setIsDescriptionValue(getOneRecipe.data.value.desc);
        setIsTimeValue(getOneRecipe.data?.value?.ctime);
        setIsImage(getOneRecipe.data?.value?.Rpic);
        let selecetdData = getOneRecipe?.data?.value?.ingre?.map((item) => {
          return item?._id;
        });
        setSelectedIngredients(selecetdData);
      });

    setIsEdit(true);
    setOpen(true);
  };
  const dataUpdate = () => {
    handleCloseBtn();
    getRecipeApi();
  };
  const handleDeleteOpenModal = (id) => {
    console.log(id, "deleteId");
    setDeletRecipe(id);
    setIsdeleteModalVisibal(true);
  };
  const handleDeleteClose = () => setIsdeleteModalVisibal(false);

  //============ Yes-No handal button ============//
  const handalDeleteModalYesBtn = () => {
    setIsdeleteModalVisibal(false);
    setLoading(true);
    console.log(deleteRecipe, "deleteRecipedeleteRecipe");
    axios
      .delete(`http://localhost:3004/recipe/delete/recipe/${deleteRecipe}`)
      .then((delData) => {
        console.log("update===>", delData);
        getRecipeApi();
        setLoading(false);
      });
  };
  const handalDeleteModalNoBtn = () => {
    setIsdeleteModalVisibal(false);
  };

  //============ Edit Button ============//
  const handleCloseBtn = () => {
    const pwdDetails = {
      rname: isNameValue,
      ulink: isLinkValue,
      desc: isDescriptionValue,
      steps: stepValue,
      ingre: isItem,
      // "Custom Ingredient": isCustomIngredientValue,
      ctime: isTimeValue,
      Rpic: isImage,
      // Visibility: isVisibilityPublicAndPrivateValue,
      // Playlist: isPlaylistValue,
    };
    console.log(pwdDetails);

    setOpen(false);
    setIsEdit(false);
  };
  const successDataAll = () => {
    setOpenCreate(false);
    getRecipeApi();
  };
  const handleCloseBtnCreateRescipe = () => {
    setOpenCreate(false);
  };
  const handleOpenModal = () => {
    setOpenCreate(true);
  };

  const onAddReceipe = () => {
    handleCloseBtnCreateRescipe();
    getRecipeApi();
  };
  //============ Ingredients Plus Button ============//
  const [isItem, setIsItem] = useState("");
  const [selectItem, setSelectItem] = useState([]);

  const onClickAddBtnItem = () => {
    console.log("BtnIngredients===>", selectItem);
    if (isItem) {
      setSelectItem(selectItem, selectItem.push(isItem));
      setIsItem("");
    }
  };
  const handaldeleteItem = (e) => {
    const name = e;
    setSelectItem(
      selectItem.filter(function (item) {
        return item !== name;
      })
    );
  };

  // ============ Recipe Steps & Delete-Update Button ============//

  const [isStep, setIsStep] = useState([]);
  const [stepValue, setStepValue] = useState("");

  const onClickAddStepBtn = () => {
    console.log("BtnStep===>", isStep);
    if (stepValue) {
      setIsStep(isStep, isStep.push(stepValue));
      setStepValue("");
    }
  };

  const deleteItem = (e) => {
    const name = e;
    setIsStep(
      isStep.filter(function (item) {
        return item !== name;
      })
    );
  };
  const updateItem = (item) => {
    deleteItem(item);
    setStepValue(item);
  };

  //   //============ Add Your Custom Ingredient Modal ============//
  const [isCustom, setIsCustom] = useState();
  const [isImage, setIsImage] = useState();
  const [files, setFiles] = useState();

  const handleCustomOpen = () => {
    setIsCustom(true);
  };
  const handleCustomClose = () => {
    setIsCustom(false);
  };

  useEffect(() => {
    getRecipeApi();
    getIngredients();
  }, [props.contentList?.length]);

  const getRecipeApi = async () => {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    // console.log(
    //   getLocalData.channelId,
    //   "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    // );
    await axios
      .get(
        `http://localhost:3004/recipe/getrecipe/bychannel/${getLocalData?.channelId}`
      )
      .then((res) => {
        // console.log(
        //   res?.data?.recipes,
        //   "res.data.recipes88888888888888888888;"
        // );
        let modified = res.data.recipes?.recipe_ids?.map((product) => ({
          ...product,
          id: product?._id,
        }));
        setRows(modified);
      });
  };

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

  console.log(rows, "rows");
  const handleChange = (event) => {
    let { name, value } = event.target;
    let index = rows.findIndex((product) => product.id === name);
    rows[index].visibility = value;
    setRows([...rows]);
  };
  const columns = [
    {
      field: "Videos",
      headerName: "Videos",
      type: "text",
      width: 190,
      renderCell: (Videos) => (
        <img src={Videos.row.Rpic} style={styles.imgDiv} alt="recipe photos" />
      ),
      sortable: true,
    },
    {
      field: "rname",
      headerName: "Name",
      type: "text",
      width: 200,
      sortable: true,
    },
    {
      field: "time",
      headerName: "Date",
      width: 160,
      sortable: true,
      renderCell: (timeDateFor) => (
        <div>{moment(timeDateFor.row.time).format("DD MMM,YYYY hh:mm a")}</div>
      ),
    },
    {
      field: "Comments",
      headerName: "Comments",
      width: 150,
      sortable: true,
    },
    {
      sortable: false,
      width: 200,
      field: "Action",
      headerName: "Action",
      renderCell: (btn) => (
        <div className="col-sm" value={btn} name={btn}>
          <div style={styles.btnDiv}>
            <ButtonGroup>
              <Button
                style={styles.btnEdit}
                onClick={() => handleEditOpenModal(btn.row._id)}
              >
                Edit
              </Button>
              <Button
                style={styles.btnDelete}
                onClick={() => handleDeleteOpenModal(btn.row._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
            <Modal
              open={isdeleteModalVisibal}
              onClose={handleDeleteClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <span style={styles.areYouText}>
                  Are you sure, want to delete?
                </span>
                <div style={styles.btngroupDiv}>
                  <ButtonGroup disableElevation variant="outlined">
                    <Button
                      style={styles.btnNo}
                      onClick={() => handalDeleteModalNoBtn()}
                    >
                      No
                    </Button>
                    <Button
                      style={styles.btnYes}
                      onClick={() => handalDeleteModalYesBtn()}
                    >
                      Yes
                    </Button>
                  </ButtonGroup>
                </div>
              </Box>
            </Modal>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {loading ? (
        <LoaderBody />
      ) : (
        <div>
          <div style={styles.MainDiv}>
            <div style={styles.LineView}></div>
            <div style={styles.marginDiv}>
              <span style={styles.channelText}>Channel Content</span>
            </div>
            <div style={styles.lineDiv} />

            {isEmpty(rows) ? (
              <div className="d-flex justify-content-center mt-5">
                <button
                  className="css-button-retro--yellow"
                  onClick={() => handleOpenModal()}
                  // variant='outlined'
                  // startIcon={}
                >
                  <NoteAddIcon fontSize="small" />
                  <span className="ms-2">Create Recipe</span>
                </button>
                <Modal
                  open={openCreateRecipe}
                  onClose={handleCloseBtnCreateRescipe}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <div>
                    <UploadRecipe
                      handleCloseModalBtn={handleCloseBtnCreateRescipe}
                      onSuccess={onAddReceipe}
                      isloader={setLoading}
                    />
                  </div>
                </Modal>
              </div>
            ) : (
              <DataGrid
                getRowId={(row) => row._id}
                className="focusData"
                rows={rows}
                columns={columns}
                disableColumnMenu
                disableColumnFilter
                disableSelectionOnClick
                disableColumnSelector
                pageSize={4}
                rowsPerPageOptions={[5]}
                rowHeight={95}
                style={styles.dataDiv}
              />
            )}
          </div>

          <Modal
            open={open}
            onClose={handleCloseBtn}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div>
              <EditBtn
                //yash edit
                getIneRecipeOne={getIneRecipe}
                handleCloseModalBtn={() => handleCloseBtn()}
                setIsNameValue={setIsNameValue}
                isNameValue={isNameValue}
                setIsDescriptionValue={setIsDescriptionValue}
                isDescriptionValue={isDescriptionValue}
                setIsCustomIngredientValue={setIsCustomIngredientValue}
                setIsTimeValue={setIsTimeValue}
                isTimeValue={isTimeValue}
                setIsLinkValue={setIsLinkValue}
                isLinkValue={isLinkValue}
                setIsVisibilityPublicAndPrivateValue={
                  setIsVisibilityPublicAndPrivateValue
                }
                setIsPlaylistValue={setIsPlaylistValue}
                isItem={isItem}
                setIsItem={setIsItem}
                selectItem={selectItem}
                setSelectItem={setSelectItem}
                onClickAddBtnItem={() => onClickAddBtnItem()}
                handaldeleteItem={(item) => handaldeleteItem(item)}
                onClickAddStepBtn={() => onClickAddStepBtn()}
                isStep={isStep}
                stepValue={stepValue}
                setStepValue={setStepValue}
                deleteItem={(item) => deleteItem(item)}
                updateItem={(item) => updateItem(item)}
                handleCustomOpen={() => handleCustomOpen()}
                handleCustomClose={() => handleCustomClose()}
                isCustom={isCustom}
                setFiles={setFiles}
                isImage={isImage}
                setIsImage={setIsImage}
                files={files}
                ingredients={ingredients}
                setIngredients={setIngredients}
                selectedIngredients={selectedIngredients}
                setSelectedIngredients={setSelectedIngredients}
                getIngredients={() => getIngredients()}
                ondataupdate={dataUpdate}
                isloaderdata={setLoading}
                handleIngredientChange={(event) =>
                  handleIngredientChange(event)
                }
              />
            </div>
          </Modal>
        </div>
      )}
    </>
  );
}

const styles = {
  lineDiv: {
    backgroundColor: "black",
    height: "0.5px",
    width: "100%",
  },
  channelText: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  marginDiv: {
    margin: 30,
  },
  LineView: {
    height: "1px",
    background: "#000000",
  },
  btnDiv: {
    display: "flex",
    alignItems: "center",
  },
  btnEdit: {
    border: "0.5px solid #000000",
    color: "#000000",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    height: 40,
  },
  btnDelete: {
    border: "0.5px solid #000000",
    color: "#000000",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    height: 40,
  },
  areYouText: {
    fontSize: 22,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  btngroupDiv: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btnNo: {
    border: "1px solid #000000",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    backgroundColor: "#FF9800",
    height: 30,
  },
  btnYes: {
    border: "1px solid #000000",
    fontSize: 15,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    height: 30,
  },
  boxDiv: {
    minWidth: 120,
  },
  text: {
    fontSize: 18,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  dataDiv: {
    fontSize: 20,
    fontFamily: "Red Hat Display",
    color: "#000000",
    letterSpacing: "0.11em",
    height: "75vh",
  },
  MainDiv: {
    height: 450,
    width: "100%",
  },
  imgDiv: {
    marginLeft: 10,
    width: "70%",
    height: "80%",
  },
};
