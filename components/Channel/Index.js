import React, { useRef, useState } from "react";
import VideoChannelContect from "./VideoChannelContent";
import ChannelPlaylist from "./ChannelPlaylist";
import TutorialComments from "./TutorialComments";
import AccountList from "./ChannelComponet/AccountList";
import {
  alpha,
  AppBar,
  Button,
  IconButton,
  InputBase,
  Modal,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Search, Settings } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import UploadRecipe from "./ChannelComponet/UploadRecipe";
import RkitchenLogo from "../../Images/RkitchenLogo.svg";
import settings from "../../Images/settings.png";
import masterchef from "../../Images/masterchef.png";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import Setting from "../../components/Channel/ChannelComponet/Setting";
import { NavLink } from "react-router-dom";
import AccountMenu from "../Navbar/AccountpopUp";
import LoaderBody from "../loaderMain/LoaderBody";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },
  img: {
    height: "50px",
    width: "150px",
    alignItems: "center",
    marginRight: theme.spacing(10),
  },
  search: {
    fontfamily: "'Red Hat Display', sans-serif",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1.5),
    marginRight: theme.spacing(20),
    marginLeft: 0,
    backgroundColor: alpha(theme.palette.common.white, 1),
    borderRadius: "30px",
    color: "#BFBFBF",
    width: "45%",
    height: "60%",
    border: "0.5px solid #ff9800",
  },
  input: {
    marginLeft: theme.spacing(1),
    width: "100%",
    color: "black",
  },
}));

const Index = ({}) => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  // useEffect(()=>{
  // setTimeout(() => {
  //   setLoading(false);
  // }, 2500);
  const [tab, setTab] = useState("Content");
  const classNamees = useStyles();
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useState(false);
  const [contentList, setContentList] = useState(undefined);
  const childRef = useRef(null);

  const renderTabContent = () => {
    switch (tab) {
      case "Content":
        return (
          <VideoChannelContect
            tab={tab}
            ref={childRef}
            contentList={contentList}
          />
        );
      case "Playlist":
        return <ChannelPlaylist tab={tab} />;
      case "Comments":
        return <TutorialComments tab={tab} />;
      default:
        return null;
    }
  };

  //============ Create button ============//
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseBtn = () => {
    setOpen(false);
  };
  const successData = (arg) => {
    console.log("arg", arg);
    if (arg) setContentList(arg);
    handleCloseBtn();
    //  console.log('childRef.current', childRef.current, childRef.current?.forceUpdate)
    //  if(childRef.current) {console.log('forceUpdate');childRef.current.forceUpdate()}
  };
  //============ Setting button ============//
  const handleSettimgOpen = () => {
    setSetting(true);
  };
  const handleSettingClose = () => {
    setSetting(false);
  };
  return (
    <>
      {loading && <LoaderBody />}
      {!loading && (
        <div style={styles.mainDiv}>
          <AppBar style={styles.appBarDiv} position="static">
            <Toolbar className={classNamees.toolbar}>
              <div>
                <NavLink to="/channel">
                  <img
                    style={styles.toolbarImg}
                    className={classNamees.img}
                    src={RkitchenLogo}
                    alt="RkitchenLogo"
                  />
                </NavLink>
              </div>
              {/* <div className={classNamees.search}>
                <Search />
                <InputBase
                  placeholder="Search In Your Kitchen ..."
                  className={classNamees.input}
                />
              </div> */}

              {/* <Tooltip title="Setting">
                <IconButton
                  onClick={handleSettimgOpen}
                  fontSize="large"
                  aria-label="Add"
                >
                  <img src={settings} height="31" width="31" alt="settings" />
                </IconButton>
              </Tooltip>
               <Modal
                open={setting}
                onClose={handleSettingClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Setting />
              </Modal>  */}
              <div className="d-flex">
                {loading ? (
                  <LoaderBody />
                ) : (
                  <div>
                    <button
                      onClick={() => handleOpenModal()}
                      // variant='outlined'
                      // startIcon={}
                      className="css-button-sliding-to-top--green"
                    >
                      <NoteAddIcon fontSize="small" />
                      <span className="ms-2">Create</span>
                    </button>
                    <Modal
                      open={open}
                      onClose={handleCloseBtn}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <UploadRecipe
                        onSuccess={successData}
                        handleCloseModalBtn={() => handleCloseBtn()}
                        isloader={setLoading}
                      />
                    </Modal>
                  </div>
                )}

                <IconButton fontSize="large" aria-label="Add">
                  <AccountMenu />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <div style={styles.accountListMainDiv}>
            <div style={styles.widthDiv}>
              <AccountList tab={tab} setTab={setTab} />
            </div>
            <div style={styles.renderTabContentDiv}>{renderTabContent()}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Index;

const styles = {
  mainDiv: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#FFF4E4",
  },
  appBarDiv: {
    boxShadow: "none",
    backgroundColor: "white",
    height: "10vh",
  },
  toolbarImg: {
    heigth: "50px",
    width: "125px",
  },
  createBtn: {
    boxShadow: "none",
    height: "33px",
    width: "130px",
    color: "black",
    border: "2px solid black",
    fontSize: "19px",
    letterSpacing: "0.11em",
    fontWeight: "Bold",
    fontFamily: "Red Hat Display",
  },
  accountListMainDiv: {
    display: "flex",
    flexDirection: "row",
  },
  widthDiv: {
    width: "20%",
  },
  renderTabContentDiv: {
    width: "100%",
  },
};
