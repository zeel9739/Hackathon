import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Modal } from "@mui/material";
import axios from "../../axios";
import "../Channel/ChannelComponet/AccountList";
import moment from "moment";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "58%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000000",
  p: 2.5,
  paddingRight: 2,
  borderRadius: 2,
  width: 300,
};

const DeleteButton = ({
  isdeleteModalVisibal,
  setIsdeleteModalVisibal,
  isEdit,
  setIsEdit,
  open,
  setOpen,
  handleEditOpenModal,
  handleDeleteOpenModal,
  handleDeleteClose,
  handalDeleteModalYesBtn,
  handalDeleteModalNoBtn,
}) => {
  const [rows, setRows] = useState();
  // useEffect(() => {
  //   axios.get("http://localhost:3000/recipe").then((res) => {
  //     let modified = res.data.products.map((product) => ({
  //       ...product,
  //       id: product._id,
  //     }));
  //     setRows(modified);
  //     modified.map((date) => {
  //       const timeDate = new Date(date.time);
  //       console.log(timeDate, "timeDate");
  //       moment(timeDate).format("DD/MM/YYYY");
  //     });
  //   });
  // }, []);

  return (
    <>
      <Button
        variant="outline-primary"
        type="button"
        style={styles.deleteBtn}
        onClick={handleDeleteOpenModal}
        startIcon={<DeleteForeverIcon />}
      >
        Delete
      </Button>

      <div style={styles.marginLeftDiv}>
        <Modal
          open={isdeleteModalVisibal}
          onClose={handleDeleteClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <span style={styles.areYouText}>Are you sure, want to delete?</span>
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
                  onClick={(_id) => handalDeleteModalYesBtn(_id)}
                >
                  Yes
                </Button>
              </ButtonGroup>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default DeleteButton;

const styles = {
  deleteBtn: {
    fontSize: "19px",
    letterSpacing: "0.11em",
    fontWeight: "Bold",
    fontFamily: "Red Hat Display",
    backgroundColor: "#ED0000",
    color: "#FFFFFF",
    textTransform: "capitalize",
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
};
