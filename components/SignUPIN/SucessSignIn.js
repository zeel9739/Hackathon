import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img from "../../Images/Tomato.png";
import mailsend from "../../Images/mailsend.svg";
import { padding } from "@mui/system";

export default function SucessSignIn() {
  return (
    <div style={styles.mainDiv}>
      <div component='main' style={styles.subDiv}>
        <div sx={styles.box}>
          <div style={styles.mailImg}>
            <img height={'150px'} width={'150px'} src={mailsend} alt='mailsend' />
            <h4 style={styles.mailText}>Email has been sent,</h4>
            <h4 style={styles.mailText}>kindly Activate your Account</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainDiv: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
  },
  subDiv: {
    backgroundColor: "#fff",
    boxShadow: "0px 2px 9px rgba(0,0,0,0.25)",
    borderRadius: "10px",
    width: "412px",
    paddingBottom:20
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  mailImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // display: "flex",
  },
  mailText: {
    fontSize: 23,
    fontFamily: "Red Hat Display",
    fontWeight: "bold",
    letterSpacing: "0.11em",
    color: " #000000",
  },
};
