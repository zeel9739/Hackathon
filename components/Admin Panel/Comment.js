import { InputBase, makeStyles, Toolbar } from "@material-ui/core";
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import img from "../../Images/AdminBack.png";
import DeleteButton from "./DeleteButton";
import axios from "axios";
import not from "../../Images/not.png";

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
    padding: theme.spacing(0, 1.5),
    marginLeft: 0,
    borderRadius: "30px",
    color: "#BFBFBF",
    height: "60%",
    border: "0.5px solid #ff9800",
    background: "#FFFFFF",
    width: "130%",
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
export default function Comment() {
  const classes = useStyles();
  const [iscomment, setComment] = useState();
  const getComments = () => {
    axios
      .get(`http://localhost:3004/comment/get/Allcomment`)
      .then((respComment) => {
        console.log("respComment=========>", respComment);
        setComment(respComment.data);
      });
  };
  useEffect(() => getComments(), []);

  const userList = [
    {
      id: 1,
      Comment:
        "You are Great Chef makes my Day Delightful. It was Very Yummy and Test...",
      Username: "Abc_123",
    },
    {
      id: 2,
      Comment:
        "You are Great Chef makes my Day Delightful. It was Very Yummy and Test...",
      Username: "Abc_123",
    },
  ];

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
      .delete(`http://localhost:3004/comment/delete/comment/${deleteRecipe}`)
      .then((delData) => {
        console.log("DeleteCamment===>", delData);
        getComments();
      });
    setIsdeleteModalVisibal(false);
  };
  const handalDeleteModalNoBtn = () => {
    setIsdeleteModalVisibal(false);
  };

  // ============ Search =======================

  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const [foundUsers, setFoundUsers] = useState(iscomment);

  useEffect(() => {
    setFoundUsers(iscomment);
  }, [iscomment]);

  const onChangeHandeler = (e) => {
    console.log("iscomment onChangeHandeler", iscomment);
    const keyword = e.target.value;
    console.log("bhavy", keyword);

    if (keyword !== "") {
      const results = iscomment.filter((user) => {
        console.log(user, "user");
        return user?.comment.toLowerCase().startsWith(keyword?.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(iscomment);
      // If the text field is empty, show all users
    }

    setText(keyword);
  };

  return (
    <div style={sectionStyle}>
      <div>
        <Toolbar className={classes.toolbar}>
          <div className={classes.search}>
            <img height="21" width="19" src="/img/Search.svg" alt="" />
            <InputBase
              style={styles.InputBaseDiv}
              placeholder="comment id"
              className={classes.input}
              value={text}
              onChange={onChangeHandeler}
            ></InputBase>
            {/* <Button
              style={styles.btnDiv}
              variant="contained"
              className="css-button-shadow-border-sliding--green"
              startIcon={
                <img src="/img/wfilter.svg" height={17} width={17} alt="" />
              }
            >
              Get All
            </Button> */}
          </div>
        </Toolbar>

        <div className="table-responsive" style={styles.boxDiv}>
          <table className="table">
            <thead className="text-center">
              <tr>
                {/* <th className='align-middle' scope='col'></th> */}
                <th
                  className="align-middle"
                  scope="col"
                  style={styles.headerDiv}
                >
                  Comment
                </th>
                <th
                  className="align-middle"
                  scope="col"
                  style={styles.headerDiv}
                >
                  User Name
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

            {console.log(foundUsers, "foundUsers")}
            {foundUsers && foundUsers.length > 0 ? (
              foundUsers.map(
                (item) => (
                  console.log(item, "item1111111111111111111"),
                  (
                    <tbody>
                      <tr key={item?._id}>
                        {/* <td className='align-middle'>{item.id}</td> */}
                        <td className="align-middle" style={styles.mapDiv}>
                          {item?.comment}
                        </td>
                        <td className="align-middle" style={styles.mapDiv}>
                          {item?.user?.username}
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
                            handalDeleteModalYesBtn={handalDeleteModalYesBtn}
                            handalDeleteModalNoBtn={handalDeleteModalNoBtn}
                          />
                        </td>
                      </tr>
                    </tbody>
                  )
                )
              )
            ) : (
              <tbody>
                <tr>
                  <td></td>

                  <td>
                    <img src={not} alt="not" height={"250px"} width={"250px"} />
                  </td>
                  <td></td>
                </tr>
              </tbody>
            )}
          </table>
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
    //   width: "65%",
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
    width: "354px",
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
    borderRadius: "30px",
    height: "33px",
    color: "white",
    marginRight: "-8px",
    fontFamily: "Red Hat Display",
    fontSize: "19px",
    textTransform: "capitalize",
    letterSpacing: "0.11em",
    width: "22%",
  },
};
