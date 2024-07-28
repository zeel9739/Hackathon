import React, { useState } from "react";
import Bg from "../../Images/Bg.jpg";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/ArrowBack";
import { CssTextField } from "../Account/inputtagUi";

export default function CreateChannel() {
  //============ Set Channel Value ============//

  const [isChannelName, setIsChannelName] = useState();
  const [isChannelDescription, setIsChannelDescription] = useState();

  const handalCreatChannel = () => {
    const channelDetails = {
      "Channel Name": isChannelName,
      "Channel Description": isChannelDescription,
    };
    console.log(channelDetails);
  };

  const handalRemoveChannel = () => {
    // setIsChannelDescription('')
  };

  return (
    <div>
      <div style={styles.bgDiv}>
        <div style={styles.mainDiv}>
          <div>
            <Button
              style={styles.btn}
              onClick={() => (window.location.href = "/home")}
              startIcon={
                <KeyboardBackspaceIcon style={styles.keyboardBackspaceImg} />
              }
            >
              {" "}
              Back{" "}
            </Button>
          </div>

          <div style={styles.inputDiv}>
            <div className="row">
              <div className="col-sm-7">
                {/* <label style={styles.textLabel} className="form-label">Channel Name:</label> */}
                <CssTextField
                  label="Channel Name:"
                  style={styles.input}
                  onChange={(e) => setIsChannelName(e.target.value)}
                  type="ChannelName"
                  id="ChannelName"
                  className="form-control"
                  maxLength={30}
                />
                <span style={styles.numberText}>0/30</span>
              </div>
            </div>

            <div
              style={{
                marginTop: 5,
              }}
            >
              {/* <label style={styles.textLabel} className='form-label'>
                Channel Description:
              </label> */}
              <div className="input-group">
                <CssTextField
                  // style={styles.input}
                  onChange={(e) => setIsChannelDescription(e.target.value)}
                  className="w-100"
                  type="Description"
                  label="Description"
                  id="Description"
                  rows={5}
                  inputProps={{ maxLength: 600 }}
                />
              </div>
              <span style={styles.numberText}>0/1000</span>
            </div>
          </div>

          <div
            className="d-grid gap-2 d-md-flex justify-content-md-end"
            style={styles.btnDiv}
          >
            <Button
              onClick={handalRemoveChannel}
              style={styles.btnCancel}
              variant="outline-primary"
              type="button"
            >
              Cancel
            </Button>
            <NavLink
              to="/channel"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                onClick={handalCreatChannel}
                style={styles.btnCreate}
                variant="secondary"
                type="button"
              >
                Create Channel
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bgDiv: {
    backgroundImage: "url(" + Bg + ")",
    backgroundSize: "cover",
    height: "100vh",
    color: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
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
    marginTop: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  textLabel: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  input: {
    borderColor: "#FF9800",
  },
  numberText: {
    color: "#BFBFBF",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  btnDiv: {
    marginTop: 20,
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
};
