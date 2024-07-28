import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, IconButton, Modal } from "@mui/material";
import axios from "axios";
import "../Channel/ChannelComponet/AccountList";
import moment from "moment";
import { Box } from "@mui/system";

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

const DeleteIcon = (props) => {
  const {
    isdeleteModalVisibal,
    setIsdeleteModalVisibal,
    isEdit,
    setIsEdit,
    open,
    setOpen,
    handleDeleteOpenModal,
    setDeleteIngradient,
    deleteType,
    handleDeleteClose,
    deleteIngradient,
    handalDeleteModalYesBtnIngredients,
    handalCategoryDeleteModalYesBtnCategory,
    handalDeleteModalYesBtn,
    handalDeleteModalNoBtn,
    name,
  } = props;
  console.log("deleteTypedeleteType", deleteType);

  return (
    <>
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
                <Button style={styles.btnNo} onClick={handalDeleteModalNoBtn}>
                  No
                </Button>
                {/* <Button style={styles.btnYes} onClick={handalDeleteModalYesBtn}> */}
                {deleteType === "Ingredient" ? (
                  <Button
                    style={styles.btnYes}
                    onClick={() =>
                      handalDeleteModalYesBtnIngredients(deleteIngradient)
                    }
                  >
                    Yes
                  </Button>
                ) : (
                  <Button
                    style={styles.btnYes}
                    onClick={() =>
                      handalCategoryDeleteModalYesBtnCategory(deleteIngradient)
                    }
                  >
                    Yes
                  </Button>
                )}
              </ButtonGroup>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default DeleteIcon;

const styles = {
  deleteBtn: {
    color: "#ED0000",
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
