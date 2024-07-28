import { makeStyles, Toolbar } from "@material-ui/core";
import { PhotoCamera } from "@mui/icons-material";
import { Button, Input, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import img from "../../Images/AdminBack.png";
import DeleteButton from "./DeleteButton";
import AddTaskIcon from "@mui/icons-material/AddTask";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "50px",
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
export default function Avatar() {
  const classes = useStyles();
  const userList = [
    {
      id: 1,
      Avatar: require("../../Images/AA.png"),
      Name: "Chef",
    },
    {
      id: 2,
      Avatar: require("../../Images/BB.png"),
      Name: "Royal cuisine",
    },
    {
      id: 3,
      Avatar: require("../../Images/CC.png"),
      Name: "Kitchen",
    },
    {
      id: 4,
      Avatar: require("../../Images/DD.png"),
      Name: "Lady Chef",
    },
    {
      id: 5,
      Avatar: require("../../Images/EE.png"),
      Name: "Bowl",
    },
    {
      id: 6,
      Avatar: require("../../Images/FF.png"),
      Name: "Veg Recipes",
    },
  ];

  const [getAvatar, setGetAvatar] = useState([]);

  const getAvatarApi = () => {
    axios.get("http://localhost:3004/avatar/getAll/avt")?.then((respAvatar) => {
      console.log("respAvatar", respAvatar);
      setGetAvatar(respAvatar.data.Avatar);
    });
  };

  useEffect(() => {
    getAvatarApi();
  }, []);

  // ========================== Delete Button Comp.===========================

  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const [isdeleteModalVisibal, setIsdeleteModalVisibal] = useState(false);
  const [deleteRecipe, setDeletRecipe] = useState([]);

  //============ Edit-Delete ============//
  const handleEditOpenModal = () => {
    setIsEdit(true);
    setOpen(true);
  };

  const handleDeleteOpenModal = (id) => {
    console.log(id, "deleteId");
    setDeletRecipe(id);
    setIsdeleteModalVisibal(true);
  };
  const handleDeleteClose = () => setIsdeleteModalVisibal(false);

  //============ Yes-No handal button ============//
  const handalDeleteModalYesBtn = () => {
    console.log(deleteRecipe, "deleteUser=============>");
    axios
      .delete(`http://localhost:3004/avatar/deleteAvatar/${deleteRecipe}`)
      .then((delData) => {
        console.log("DeleteAvtar===>", delData);
        getAvatarApi();
      });
    setIsdeleteModalVisibal(false);
  };
  const handalDeleteModalNoBtn = () => {
    setIsdeleteModalVisibal(false);
  };

  // ================== post Api  ===================4

  const [avtarName, setAvatarName] = useState("");
  const [photo, setPhoto] = useState(null);

  const addAvatar = () => {
    const formData = new FormData();
    formData.append("avtname", avtarName);
    formData.append("avtpic", photo);

    axios
      .post("http://localhost:3004/avatar/post/avt", formData)
      .then((resp) => {
        getAvatarApi();
        setAvatarName("");
        setPhoto(null);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  return (
    <div style={sectionStyle}>
      <div>
        <div>
          <Toolbar className={classes.toolbar}>
            <div className="box" style={{ padding: 10, borderRadius: 7 }}>
              <div class="row sm-12">
                <div className="col-sm-6">
                  <TextField
                    id="filled-basic"
                    InputProps={{ disableUnderline: true }}
                    variant="filled"
                    label="Category name"
                    className="namebox"
                    value={avtarName}
                    onChange={(e) => setAvatarName(e.target.value)}
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

                <div class="col-sm-3">
                  <Button
                    style={styles.btnDiv}
                    onClick={addAvatar}
                    variant="contained"
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
                  <th className="align-middle" scope="col"></th>
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Avatar
                  </th>
                  <th
                    className="align-middle"
                    scope="col"
                    style={styles.headerDiv}
                  >
                    Name
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
                {getAvatar?.map((item) => (
                  <tr key={item._id}>
                    <th className="align-middle" style={styles.mapidDiv}>
                      {item.id}
                    </th>
                    <th className="align-middle">
                      <img src={item?.avtpic} style={styles.imgeRound} />
                    </th>
                    <td className="align-middle" style={styles.mapDiv}>
                      {item?.avtname}
                    </td>
                    <td className="align-middle">
                      <DeleteButton
                        isdeleteModalVisibal={isdeleteModalVisibal}
                        setIsdeleteModalVisibal={setIsdeleteModalVisibal}
                        isEdit={isEdit}
                        setIsEdit={setIsEdit}
                        open={open}
                        setOpen={setOpen}
                        handleEditOpenModal={handleEditOpenModal}
                        handleDeleteOpenModal={() =>
                          handleDeleteOpenModal(item?._id)
                        }
                        handleDeleteClose={handleDeleteClose}
                        handalDeleteModalYesBtn={() =>
                          handalDeleteModalYesBtn()
                        }
                        handalDeleteModalNoBtn={handalDeleteModalNoBtn}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  boxDiv: {
    background: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    height: "450px",
    // width: "65%",
  },
  imgeRound: {
    borderRadius: "80px",
    height: "60px",
    width: "60px",
    objectFit: "cover",
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
    paddingRight: 80,
  },

  //
  UploadBtn: {
    background: "#E5E5E5",
    textTransform: "capitalize",
    borderRadius: 0,
    width: "94%",
    height: "56px",
    letterSpacing: "0.11em",
    fontSize: "1.2em",
    fontFamily: "Red Hat Display",
    fontWeight: "Bold",
    color: "grey",
    boxShadow: "none",
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
};
