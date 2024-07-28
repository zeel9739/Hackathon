import React, { useEffect, useReducer, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import CreatePlaylist from "./ChannelComponet/CreatePlaylist";
import carbon from "../../Images/carbon.svg";
import moment from "moment";
import { isEmpty, result, wrap } from "lodash";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
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

export default function VideoChannelContect({ props }) {
  const [createOpen, setCreateOpen] = useState(false);
  const [isdeleteModalVisibal, setIsdeleteModalVisibal] = useState(false);
  const [videoPlayList, setVideoPlayList] = useState([]);
  const [isEditChanelPlayList, setIsEditChanelPlayList] = useState(false);
  const [isImage, setIsImage] = useState("");
  const [playlistShow, setPlayListShow] = useState();
  const [rows, setRows] = useState();
  const [deleteRecipe, setDeletRecipe] = useState([]);
  // console.log('contentList=========>',props.contentList)
  const [loading, setLoading] = useState(false);

  //============ Create New PlayList & Create PlayList Modal ============//
  const handleOpen = () => {
    setCreateOpen(true);
    setUser({
      name: "",
      photo: "",
      recipes: [],
    });
  };
  const handleClose = () => {
    setIsEditChanelPlayList(false);
    setCreateOpen(false);
  };

  //============ Edit Delete Button ============//
  const handleEditPlayListModal = (id) => {
    setIsEditChanelPlayList(true);
    setCreateOpen(true);
    console.log(id, "plylist id");
    // axios.get(`http://localhost:3004/playlist/${id}`).then((getOne) => {
    //   debugger;
    //   if (getOne.status === 200) {
    //     setUser(getOne?.data?.Playlist);
    //     console.log("update===>", getOne);
    //   }
    // });
    axios.get(`http://localhost:3004/playlist/${id}`).then((getOne) => {
      setUser(getOne);
      setIsImage(getOne?.data?.Playlist?.photo);
      // getPlayListApiHandal();
    });
    console.log(setUser(), "user++++++++++++++++");
    // //update api play list
    // axios
    //   .put(`http://localhost:3004/playlist/update/Playlist/${id}`)
    //   .then((data) => {
    //     console.log(data, "data");
    //   });

    // getPlayListApiHandal();
  };
  const handleDeleteOpenBtn = (id) => {
    console.log(id, "deleteId");
    setDeletRecipe(id);
    setIsdeleteModalVisibal(true);
  };
  const handleDeleteCloseBtn = () => {
    setIsdeleteModalVisibal(false);
  };

  //============ Yes-No handal button ============//
  const handalDeleteModalYesBtn = () => {
    setIsdeleteModalVisibal(false);
    console.log(deleteRecipe, "deleteRecipedeleteRecipe");
    axios
      .delete(`http://localhost:3004/playlist/delete/Playlist/${deleteRecipe}`)
      .then((delData) => {
        console.log("update===>", delData);
        getPlayListApiHandal();
      });
  };

  const handalDeleteModalNoBtn = () => {
    setIsdeleteModalVisibal(false);
  };

  //============ handal Create PlayList cancel & Create PlayList button handal ============//
  const [user, setUser] = useState({
    name: "",
    photo: "",
    recipes: [],
  });
  console.log("img=======?", isImage?.name);
  console.log("adsadeqweq24243", user);
  // const [isname, setISName] = useState();
  const [getPlayList, setGetPlaylistApi] = useState();
  const [recipeImg, setRecipeImg] = useState([]);

  const getPlayListApiHandal = () => {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log(
      getLocalData.channelId,
      "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    );
    axios
      .get(
        `http://localhost:3004/playlist/get/AllPlaylist/${getLocalData.channelId}`
      )
      ?.then((respgetPlayList) => {
        console.log(
          "respgetPlayList ====================================",
          respgetPlayList
        );
        setGetPlaylistApi(respgetPlayList?.data?.playlist);
        // setRows(respgetPlayList?.data?.playlist)
        // setPlayListShow(respgetPlayList);
      });
    axios.get(`http://localhost:3004/recipe/getall/recipes`).then((resp) => {
      console.log("qqq=======================>", resp.data?.recipes);
      setRecipeImg(resp.data?.recipes);
    });
  };
  const handalCreatePlayList = async () => {
    console.log("gg==>");
    if (isEditChanelPlayList) {
    } else {
      const list = {
        id: 1,
        image: require("../../Images/Panjabi.png"),
        name: "Panjabi ",
        date: moment().format("DD.MM.YYYY"),
        tutorials: 2,
      };
      // setVideoPlayList(list)
      videoPlayList.push(list);
      console.log("list===>", list);
    }

    setCreateOpen(false);

    // ===================== PlayList Post api ==================
    setLoading(true);

    const formData = new FormData();

    formData.append("name", user.name);
    if (isImage) {
      formData.append("photo", isImage);
    }
    formData.append("recipesid", JSON.stringify(user.recipes));
    console.log(user.recipes, "user.recipesid");
    console.log("formData===>", formData);

    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log(
      getLocalData.channelId,
      "getLocalDatagetLocalData+++++++++++++++++++++++++++"
    );
    // console.log("isname===>", isname);
    await axios
      .post(
        `http://localhost:3004/playlist/post/playlist/${getLocalData.channelId}`,
        formData
      )
      .then((resp) => {
        console.log("ResponsePlayList0000000000000000000", resp);
        let array = getPlayList;
        console.log("array", array);
        // getPlayListApiHandal();
        setLoading(false);
        setUser({
          name: "",
          photo: "",
          recipes: [],
        });
        setCreateOpen(false);
        getPlayListApiHandal();
        //setUser(array);
        // setGetPlaylistApi(array);
      })
      .catch((error) => {
        console.log("Error", error);
      });

    // axios.get(`http://localhost:3004/recipe/getall/recipes`).then((resp) => {
    //   console.log("qqq=======================>", resp.data?.recipes);
    //   setRecipeImg(resp.data?.recipes);
    // });
  };
  const handalCancel = () => {
    setIsEditChanelPlayList(false);
    setUser({
      name: "",
      photo: "",
      recipes: [],
    });
    setIsImage("");
    setCreateOpen(false);
  };

  const list = [
    {
      img: require("../../Images/PaneerKadhai.png"),
      name: "Paneer Kadhai",
    },
    {
      img: require("../../Images/ButterChicken.png"),
      name: "Butter Chicken",
    },
    {
      img: require("../../Images/GajarHalwa.png"),
      name: "Gajar Halwa",
    },
    {
      img: require("../../Images/ChholeBhatore.png"),
      name: "Chhole Bhatore",
    },
    {
      img: require("../../Images/GajarHalwa.png"),
      name: "Gajar Halwa",
    },
    {
      img: require("../../Images/ChholeBhatore.png"),
      name: "Chhole Bhatore",
    },
  ];

  useEffect(() => getPlayListApiHandal(), []);
  // const dataInsert = () => {
  //   setGetPlaylistApi();
  //   handalCancel();
  // };
  const columns = [
    {
      field: "Image",
      headerName: "Playlist",
      width: 500,
      sortable: false,
      renderCell: (params) => (
        <>
          <div className="row" style={{ marginLeft: 10 }}>
            <div className="col-sm" style={styles.mainMapDiv}>
              <div>
                <img
                  src={params.row?.photo}
                  height={"60px"}
                  width={"120px"}
                  style={styles.imageDiv}
                />
              </div>

              <div style={styles.iconBtnDiv}>
                <span style={styles.nameBtn}>{params.row?.name}</span>
                <div>
                  <IconButton fontSize="large" aria-label="Add ">
                    <img src={carbon} height="31" width="31" alt="carbon" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </>
      ),
    },
    {
      field: "Date",
      headerName: "Date",
      width: 300,
      sortable: false,
      renderCell: (comm) => (
        <div>
          <Typography style={styles.commentText}>
            {moment(comm.row.time).format("DD MMM,YYYY hh:mm a")}
          </Typography>
        </div>
      ),
    },
    {
      field: "Tutorials",
      headerName: "Tutorials",
      width: 400,
      sortable: false,
      renderCell: (tut) => (
        <>
          <div>
            <Typography style={styles.commentText}>
              {tut.row?.recipes?.length}
            </Typography>
          </div>
          <div style={styles.buttonGroupDiv} className="col-sm">
            <ButtonGroup disableElevation variant="outlined">
              {/* <Button
                style={styles.editAndDelete}
                onClick={() => handleEditPlayListModal(tut.row._id)}
              >
                Edit
              </Button> */}
              <Button
                style={styles.editAndDelete}
                onClick={() => handleDeleteOpenBtn(tut.row._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
            <Modal
              open={isdeleteModalVisibal}
              onClose={handleDeleteCloseBtn}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <span style={styles.areyouText}>
                  Are you sure, want to delete?
                </span>
                <div style={styles.deleteDiv}>
                  <ButtonGroup disableElevation variant="outlined">
                    <Button
                      style={styles.noBtn}
                      onClick={() => handalDeleteModalNoBtn()}
                    >
                      No
                    </Button>
                    <Button
                      style={styles.yesBtn}
                      onClick={(i) => handalDeleteModalYesBtn()}
                    >
                      Yes
                    </Button>
                  </ButtonGroup>
                </div>
              </Box>
            </Modal>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      {loading ? (
        <LoaderBody />
      ) : (
        <div style={styles.content}>
          <div style={styles.mainDiv} />
          <div>
            <div style={styles.bgDiv}>
              <div style={styles.contentDiv}>
                <div style={styles.widthDiv}>
                  <div style={styles.ChannelDiv}>
                    <span style={styles.ChannelText}>Channel Playlist</span>
                    {!isEmpty(getPlayList) ? (
                      <div>
                        <button
                          className="css-button-fully-rounded--blue"
                          onClick={() => handleOpen()}
                        >
                          Create New PlayList
                        </button>
                      </div>
                    ) : null}
                  </div>

                  <div style={styles.lineDiv} />

                  {isEmpty(getPlayList) ? (
                    <div style={styles.PlayListDiv}>
                      <button
                        onClick={() => handleOpen()}
                        className="css-button-retro--yellow"
                      >
                        <NoteAddIcon
                          fontSize="small"
                          style={{ color: "#FFFFFF" }}
                        />
                        <span
                          className="ms-2"
                          style={{
                            fontFamily: "Red Hat Display",
                            color: "#FFFFFF",
                            letterSpacing: "0.11em",
                          }}
                        >
                          Create PlayList
                        </span>
                      </button>
                    </div>
                  ) : (
                    <DataGrid
                      getRowId={(row) => row._id}
                      className="focusData"
                      rows={getPlayList}
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
              </div>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Modal
              open={createOpen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <CreatePlaylist
                handalCreatePlayList={() => handalCreatePlayList()}
                handalCancel={() => handalCancel()}
                isEditChanelPlayList={isEditChanelPlayList}
                isImage={isImage}
                setIsImage={setIsImage}
                list={list}
                setUser={setUser}
                user={user}
                // onSuccessPlayList={dataInsert}
                // isloader={setLoading}
                // isname={isname}
                // setISName={setISName}
              />
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  dataDiv: {
    fontSize: 20,
    fontFamily: "Red Hat Display",
    color: "#000000",
    letterSpacing: "0.11em",
    height: "75vh",
  },
  mainDiv: {
    backgroundColor: "black",
    height: "1px",
    width: "100%",
  },
  bgDiv: {
    backgroundColor: "#FFF4E4",
  },
  contentDiv: {
    display: "flex",
    flexDirection: "row",
  },
  widthDiv: {
    width: "100%",
  },
  ChannelDiv: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 30,
  },
  ChannelText: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  CreateBtn: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    textTransform: "capitalize",
    fontSize: 20,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  lineDiv: {
    backgroundColor: "black",
    height: "0.5px",
    width: "100%",
  },
  PlayListDiv: {
    display: "flex",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  PlayListBtn: {
    boxShadow: "none",
    height: "40px",
    color: "black",
    border: "1.5px solid black",
    fontSize: 18,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    display: "flex",
    textTransform: "capitalize",
  },
  autoDiv: {
    overflow: "auto",
    height: "75vh",
  },
  table: {
    borderTop: "1px solid #000000",
    borderBottom: "1px solid #000000",
  },
  arrowImg: {
    color: "#000000",
  },
  tdDiv: {
    paddingLeft: 20,
  },
  mainMapDiv: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#FF9800",
    height: "80px",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "300px",
  },
  commentText: {
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontSize: 20,
    // fontWeight: "bold",
  },
  imageDiv: {
    marginRight: 10,
  },
  iconBtnDiv: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
  },
  nameBtn: {
    fontSize: 18,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    // width: "100px",
  },
  buttonGroupDiv: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 70,
  },
  editAndDelete: {
    border: "0.5px solid #000000",
    color: "#000000",
    fontFamily: "Red Hat Display",
    fontWeight: "bold",
    letterSpacing: "0.11em",
    height: 35,
  },
  areyouText: {
    fontSize: 22,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: 500,
  },
  deleteDiv: {
    display: "flex",
    justifyContent: "flex-end",
  },
  noBtn: {
    border: "1px solid #000000",
    fontSize: 15,
    color: "#FFFFFF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: 500,
    backgroundColor: "#FF9800",
    height: 30,
  },
  yesBtn: {
    border: "1px solid #000000",
    fontSize: 15,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: 500,
    height: 30,
  },
  boxDiv: {
    minWidth: 120,
  },
  dateAndtutorialsText: {
    fontSize: 18,
    color: "black",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    display: "flex",
  },
};
