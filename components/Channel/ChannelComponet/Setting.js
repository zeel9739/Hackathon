// import { Delete } from "@mui/icons-material";
// import { Button, ButtonGroup, Modal } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState } from "react";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   bgcolor: "background.paper",
//   border: "2px solid #000000",
//   p: 2.5,
//   paddingRight: 2,
//   borderRadius: 2,
//   width: 300,
// };

// export default function Setting() {
//   const [isdeleteModalVisibal, setIsdeleteModalVisibal] = useState(false);

//   //============ Delete button ============//
//   const handleDeleteOpen = () => setIsdeleteModalVisibal(true);
//   const handleDeleteClose = () => setIsdeleteModalVisibal(false);

//   //============ Yes-No handal button ============//
//   const handalDeleteModalYesBtn = () => {
//     setIsdeleteModalVisibal(false);
//   };
//   const handalDeleteModalNoBtn = () => {
//     setIsdeleteModalVisibal(false);
//   };
//   return (
//     <div>
//       <div style={styles.mainSettingDiv}>
//         <div className="row">
//           <div className="col-sm-8">
//             <div style={styles.content}>
//               <span style={styles.settingText}>Channel Settings</span>
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div className="d-grid gap-2 d-md-flex justify-content-md-end">
//               <Button
//                 onClick={handleDeleteOpen}
//                 variant="outline-primary"
//                 type="button"
//                 style={styles.deleteBtn}
//                 startIcon={<Delete />}
//               >
//                 Delete Channel
//               </Button>
//             </div>
//           </div>
//         </div>
//         <Modal
//           open={isdeleteModalVisibal}
//           onClose={handleDeleteClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <span style={styles.areYouText}>Are you sure, want to delete?</span>
//             <div style={styles.modalBtn}>
//               <ButtonGroup disableElevation variant="outlined">
//                 <Button
//                   onClick={() => handalDeleteModalNoBtn()}
//                   style={styles.noBtn}
//                 >
//                   No
//                 </Button>
//                 <Button
//                   onClick={() => handalDeleteModalYesBtn()}
//                   style={styles.yesBtn}
//                 >
//                   Yes
//                 </Button>
//               </ButtonGroup>
//             </div>
//           </Box>
//         </Modal>
//       </div>
//       <div style={styles.mainDiv} />
//       <div style={styles.paddingDiv}>
//         <div className="row">
//           <div className="col" style={styles.marginDiv}>
//             <label className="form-label" style={styles.channelName}>
//               Channel Name:
//             </label>
//             <input
//               type="name"
//               id="name"
//               className="form-control"
//               style={styles.channelNameInput}
//             />
//           </div>
//         </div>

//         <div>
//           <div tyle={styles.channelNameInputDiv}>
//             <label className="form-label" style={styles.channelName}>
//               Channel Description:
//             </label>
//             <div className="input-group">
//               <textarea
//                 className="form-control"
//                 id="Description"
//                 rows="5"
//                 style={styles.channelNameInput}
//               ></textarea>
//             </div>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-sm-8">
//             <div style={styles.channelNameDiv}>
//               <span style={styles.channelName}>Tutorials:</span>
//               <input
//                 style={styles.tutorialsInput}
//                 className="form-control"
//                 type="text"
//                 value="46"
//                 disabled
//                 readonly
//               />
//             </div>
//           </div>

//           <div className="col-sm-4">
//             <div
//               className="d-grid gap-2 d-md-flex justify-content-md-end"
//               style={styles.btnDiv}
//             >
//               <Button
//                 variant="outline-primary"
//                 type="button"
//                 style={styles.cancelBtn}
//               >
//                 Cancel
//               </Button>
//               <Button variant="secondary" type="button" style={styles.saveBtn}>
//                 Save Changes
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   content: {
//     display: "flex",
//     alignItems: "center",
//   },
//   settingText: {
//     fontSize: 23,
//     color: "#FF9800",
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//     fontWeight: "bold",
//   },
//   deleteBtn: {
//     color: "black",
//     fontSize: "19px",
//     letterSpacing: "0.11em",
//     fontWeight: "Bold",
//     fontFamily: "Red Hat Display",
//     backgroundColor: "#ED0000",
//     color: "#FFFFFF",
//     textTransform: "capitalize",
//   },
//   areYouText: {
//     fontSize: 22,
//     color: "#FF9800",
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//   },
//   modalBtn: {
//     display: "flex",
//     justifyContent: "flex-end",
//   },
//   noBtn: {
//     border: "1px solid #000000",
//     fontSize: 15,
//     color: "#FFFFFF",
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//     backgroundColor: "#FF9800",
//     height: 30,
//   },
//   yesBtn: {
//     border: "1px solid #000000",
//     fontSize: 15,
//     color: "#FF9800",
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//     height: 30,
//   },
//   mainDiv: {
//     backgroundColor: "#000000",
//     height: "1px",
//   },
//   paddingDiv: {
//     padding: 30,
//   },
//   marginDiv: {
//     marginBottom: 10,
//   },
//   channelName: {
//     fontSize: 23,
//     color: "#FF9800",
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//   },
//   channelNameInput: {
//     borderColor: "#000000",
//     backgroundColor: "#FFF4E4",
//   },
//   tutorialsInput: {
//     border: "1px solid #000000",
//     width: "7%",
//   },
//   cancelBtn: {
//     fontSize: 20,
//     color: "#FF9800",
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//     backgroundColor: "#FFFFFF",
//     borderColor: "#FF9800",
//     marginRight: 15,
//     textTransform: "capitalize",
//     border: "1px solid #FF9800",
//     fontWeight: "bold",
//   },
//   saveBtn: {
//     color: "#FFFFFF",
//     backgroundColor: "#FF9800",
//     borderColor: "#FF9800",
//     fontSize: 20,
//     fontFamily: "Red Hat Display",
//     letterSpacing: "0.11em",
//     fontStyle: "normal",
//     textTransform: "capitalize",
//     fontWeight: "bold",
//   },
//   mainSettingDiv: {
//     padding: 30,
//   },
//   channelNameInputDiv: {
//     marginTop: 5,
//   },
//   channelNameDiv: {
//     display: "flex",
//     alignItems: "center",
//     marginTop: 20,
//   },
//   btnDiv: {
//     marginTop: 20,
//   },
// };
import React, {useState} from "react";
import Box from "@mui/material/Box";
import {Button, ButtonGroup, Modal} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/ArrowBack";
import {CssTextField} from "../../Account/inputtagUi";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "66%",
  bgcolor: "background.paper",
  borderRadius: 2,
};
const styleCuston = {
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
export default function BasicModal({setSetting}) {
  //============ Set Channel Value ============//

  const [isChannelDelete, setIsChannelDelete] = useState();
  const [isChannelDescriptionDelete, setIsChannelDescriptionDelete] = useState();

  const handaldeleteChannel = () => {
    setSetting(false);
    const channelDetails = {
      "Channel Name": isChannelDelete,
      "Channel Description": isChannelDescriptionDelete,
    };
    console.log(channelDetails);
  };

  const handalCancel = () => {
    setSetting(false);
  };

  const [settingModal, setSettingModal] = useState();
  const handleSettingOpen = () => {
    setSettingModal(true);
  };
  const handleSettingClose = () => {
    setSettingModal(false);
  };
  return (
    <div>
      <Box sx={style}>
        <div style={styles.inputDiv}>
          <div class='row' style={styles.deleteText}>
            <div class='col-sm'>
              <div className='col-sm-8'>
                <div style={styles.content}>
                  <span style={styles.settingText}>Channel Settings</span>
                </div>
              </div>
            </div>

            <div class='col-sm'>
              <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
                <Button
                  variant='outline-primary'
                  type='button'
                  style={styles.deleteBtn}
                  onClick={handleSettingOpen}
                  startIcon={<DeleteForeverIcon />}
                >
                  Delete Channel
                </Button>

                <div style={styles.marginLeftDiv}>
                  <Modal
                    hideBackdrop
                    open={settingModal}
                    onClose={handleSettingClose}
                    aria-labelledby='child-modal-title'
                    aria-describedby='child-modal-description'
                  >
                    <Box
                      sx={{
                        ...styleCuston,
                      }}
                    >
                      <span style={styles.areyouText}>Are you sure, want to delete?</span>
                      <div style={styles.deleteDiv}>
                        <ButtonGroup disableElevation variant='outlined'>
                          <Button style={styles.noBtn} onClick={() => handleSettingClose()}>
                            No
                          </Button>
                          <Button style={styles.yesBtn} onClick={(i) => handleSettingClose(i)}>
                            Yes
                          </Button>
                        </ButtonGroup>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.lineView} />
        <div style={styles.inputDiv}>
          <div className='row'>
            <div className='col-sm-9'>
              <CssTextField
                label='Channel Name:'
                style={styles.input}
                onChange={(e) => setIsChannelDelete(e.target.value)}
                type='ChannelName'
                id='ChannelName'
                className='form-control'
              />
            </div>
            <div class='col-sm'>
              <div style={styles.channelNameDiv}>
                <span style={styles.channelName}>Tutorials:</span>
                <input
                  style={styles.tutorialsInput}
                  className='form-control'
                  type='text'
                  value='46'
                  disabled
                  readonly
                />
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 5,
            }}
          >
            <label style={styles.textLabel} className='form-label'>
              Channel Description:
            </label>
            <div className='input-group'>
              <textarea
                style={styles.input}
                onChange={(e) => setIsChannelDescriptionDelete(e.target.value)}
                className='form-control'
                type='Description'
                id='Description'
                rows='5'
              ></textarea>
            </div>
          </div>

          <div class='col-sm' style={styles.btnDiv}>
            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
              <Button
                onClick={handalCancel}
                variant='outline-primary'
                type='button'
                style={styles.cancelBtn}
              >
                Cancel
              </Button>

              <Button
                onClick={handaldeleteChannel}
                variant='secondary'
                type='button'
                style={styles.saveBtn}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
const styles = {
  mainDiv: {
    background: "#ffffff",
    width: "75%",
    opacity: 0.94,
    borderRadius: 10,
    padding: 20,
  },
  btn: {
    textTransform: "capitalize",
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  keyboardBackspaceImg: {
    height: 20,
    width: "100%",
  },
  inputDiv: {
    marginTop: 30,
    paddingLeft: 35,
    paddingRight: 35,
  },
  textLabel: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  input: {
    borderColor: "#FF9800",
    backgroundColor: "#FFF4E4",
  },
  numberText: {
    color: "#BFBFBF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  btnDiv: {
    marginBottom: 35,
    marginTop: 30,
  },
  btnCancel: {
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
  btnCreate: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  content: {
    display: "flex",
    alignItems: "center",
    marginBottom: 15,
  },
  settingText: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  deleteBtn: {
    color: "black",
    fontSize: "19px",
    letterSpacing: "0.11em",
    fontWeight: "Bold",
    fontFamily: "Red Hat Display",
    backgroundColor: "#ED0000",
    color: "#FFFFFF",
    textTransform: "capitalize",
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
  },
  saveBtn: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
  },
  mainSettingDiv: {
    padding: 30,
  },
  channelNameInputDiv: {
    marginTop: 5,
  },
  channelNameDiv: {
    display: "flex",
    alignItems: "center",
    marginTop: 10,
  },
  channelName: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  channelNameInput: {
    borderColor: "#000000",
    backgroundColor: "#FFF4E4",
  },
  tutorialsInput: {
    border: "1px solid #000000",
    width: "25%",
  },
  deleteText: {
    marginBottom: 10,
  },
  lineView: {
    background: "#000000",
    height: "1px",
    marginTop: 20,
    // marginBottom:20
    // marginBottom: 10,
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
};
