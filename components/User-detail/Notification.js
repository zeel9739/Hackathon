import React from "react";
import "./index.css";
import {Switch, Button} from "@mui/material";
import NotifiImage from "../../Images/notification.png";

export default function Detail() {
  const label = {inputProps: {"aria-label": "Switch demo"}};
  return (
    <div style={styles.mainPaddingDiv}>
      <div style={styles.mainDiv}>
        <h2 style={styles.bigText} className='up'>
          {" "}
          Notifications
        </h2>
      </div>

      <div className='row' style={styles.styleDiv}>
        <div className='col-sm-6'>
          <Switch {...label} style={styles.switchDiv} />
          <span style={styles.textSwitch}> All this Notification </span> <br />
          <Switch {...label} style={styles.switchDiv} />
          <span style={styles.textSwitch}>Get Notification in this Browser </span>
          <br />
          <Switch {...label} defaultChecked style={styles.switchDiv} />
          <span style={styles.textSwitch}>Recommended Recipes </span>
          <br />
          <Switch {...label} defaultChecked style={styles.switchDiv} />
          <span style={styles.textSwitch}>Comments on My Recipes </span>
          <br />
          <div
            className='d-grid gap-2 d-md-flex justify-content-md-end'
            style={styles.marginTopDiv}
          >
            <Button style={styles.cancelBtn} variant='outline-primary' type='button'>
              Cancel
            </Button>
            <Button style={styles.saveBtn} variant='secondary' type='button'>
              Save
            </Button>
          </div>
        </div>

        <div className='col-sm-4'>
          <img src={NotifiImage} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  marginTopDiv: {
    marginTop: 20,
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
  saveBtn: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  switchDiv: {
    color: "#FF9800",
  },
  textSwitch: {
    fontSize: 20,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  mainDiv: {
    marginTop: 40,
  },
  bigText: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  mainPaddingDiv: {
    padding: 30,
  },
  styleDiv: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
};
