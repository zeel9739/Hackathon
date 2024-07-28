import React from "react";
import Tabs from "@mui/material/Tabs";
import Emoji from "../../Images/emojii.png";
import Avatar from "../../Images/avatar back.png";
import Tab from "@mui/material/Tab";
import { withStyles } from "@mui/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
import img1 from "../../Images/A.svg";
import img2 from "../../Images/A1.svg";
import img3 from "../../Images/B.svg";
import img4 from "../../Images/B1.svg";
import img5 from "../../Images/C.svg";
import img6 from "../../Images/D.svg";
import img7 from "../../Images/E.svg";
import img8 from "../../Images/F.svg";
import img9 from "../../Images/G.svg";
import img10 from "../../Images/H.svg";
import img11 from "../../Images/I.svg";
import img12 from "../../Images/J.svg";
import img13 from "../../Images/K.svg";
import img14 from "../../Images/L.svg";
import img15 from "../../Images/M.svg";
import img16 from "../../Images/N.svg";
import img17 from "../../Images/O.svg";
import img18 from "../../Images/P.svg";
import img19 from "../../Images/Q.svg";
import img20 from "../../Images/R.svg";
import img21 from "../../Images/S.svg";
import img22 from "../../Images/T.svg";
import img23 from "../../Images/U.svg";
import img24 from "../../Images/V.svg";
import img25 from "../../Images/W.svg";
import img26 from "../../Images/X.svg";
import img27 from "../../Images/Y.svg";
import img28 from "../../Images/Z.svg";
import img29 from "../../Images/D1.svg";
import img30 from "../../Images/E1.svg";
export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "Notification",
      user: null,
    };

    // state = {
    //   getOneUser: [],
    // };
  }
  a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  componentDidMount() {
    axios("http://localhost:3000/user/getbyuserName/nirav8", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("Response===>", response.data.User);
        this.setState({
          user: response.data.User,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (event, newValue) => {
    this.props.setTab(newValue);
  };

  images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
  ];

  CustomTab = withStyles(styles.root, styles.selected)(Tab);
  render() {
    console.log(this.props.selectedImage, "user");
    return (
      <seaction style={styles.mainDiv}>
        <seaction style={styles.seaction}>
          <section style={styles.widthSection}>
            <section style={styles.sectioninner}>
              <section style={styles.outer}>
                <div textAlign="center" p={2} style={styles.imgDivMain}>
                  <NavLink to="/home">
                    <img style={styles.logoDiv} src="/img/logo.svg" alt="" />
                  </NavLink>
                </div>
              </section>

              <div style={styles.sideDiv}>
                {/* <div style={styles.imgDiv}> */}
                <img
                  src={
                    this.props.selectedImage ||
                    JSON.parse(localStorage.getItem("info"))?.avtpic
                  }
                  alt="Emoji"
                  style={styles.imgeRound}
                />
              </div>
              {/* <img src={Avatar} alt='Avatar' height={"100%"} width={"100%"} /> */}
              {/* </div> */}
              <label style={styles.label}>
                {localStorage.getItem("username") || ""}
              </label>
              <label style={styles.label1}>
                {JSON.parse(localStorage.getItem("decoded")).email || ""}{" "}
              </label>
            </section>
            <section>
              <Tabs
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "blue",
                    display: "none",
                  },
                }}
                orientation="vertical"
                variant="scrollable"
                value={this.props.tab}
                onChange={this.handleChange}
                aria-label="Vertical tabs example"
              >
                <Divider />
                <this.CustomTab
                  label={
                    <div style={styles.customTab}>
                      <img
                        src="/img/account.svg"
                        height="29"
                        width="29"
                        alt=""
                      />
                      <span style={styles.spanTxtx}>Account</span>
                    </div>
                  }
                  value="Account"
                />
                <Divider />
                <this.CustomTab
                  label={
                    <div style={styles.customTab}>
                      <img
                        src="/img/password.svg"
                        height="29"
                        width="29"
                        alt=""
                      />
                      <span style={styles.spanTxtx}>Password</span>
                    </div>
                  }
                  value="Password"
                />
                <Divider />
                {/* <this.CustomTab
                  label={
                    <div className='span' style={styles.customTab}>
                      <img src='/img/notifications.svg' height='29' width='29' alt='' />
                      <span style={styles.spanTxtx}>Notifications</span>
                    </div>
                  }
                  value='Notification'
                />
                <Divider /> */}
              </Tabs>
            </section>
            <div style={styles.backBtnDiv}>
              <button
                fontSize="10"
                size="large"
                // style={styles.button}
                className="css-button-sliding-to-left--green"
                style={styles.backbtn}
                onClick={() => (window.location.href = "/home")}
              >
                <KeyboardBackspaceIcon fontSize="small" />
                <span className="ps-2">Back</span>
              </button>
            </div>
          </section>
        </seaction>
      </seaction>
    );
  }
}
const styles = {
  root: {
    backgroundColor: "#fff",
    color: "#ff9800",
    borderBottom: "1px solid #ddd",
    textTransform: "none",
  },
  imgeRound: {
    borderRadius: "80px",
    height: "150px",
    width: "150px",
    objectFit: "cover",
  },
  selected: {
    backgroundColor: "#ff9800",
    color: "#fff",
  },
  seaction: {
    height: "100vh",
    display: "flex",
    borderRight: "1px solid #A6A5A5",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  sectioninner: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "1em",
  },
  outer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    textTransform: "capitalize",
    color: "#ff9800",
    letterSpacing: "0.11em",
    fontSize: "1.25em",
    fontFamily: "Red Hat Display",
    fontWeight: "Bold",
  },
  sideDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: "#ff9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "10px",
  },
  label1: {
    fontSize: "0.85em",
    color: "#ff9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    marginBottom: "10px",
  },
  customTab: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
  },
  backBtnDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  backbtn: {
    borderRadius: 30,
  },
  spanTxtx: {
    textTransform: "capitalize",
    color: "#ff9800",
    letterSpacing: "0.11em",
    fontSize: "1em",
    fontFamily: "Red Hat Display",
    fontWeight: "Bold",
    marginLeft: "20px",
  },
  mainDiv: {
    width: "100vw",
    height: "100vh",
  },
  widthSection: {
    width: "100%",
  },
  imgDiv: {
    position: "absolute",
  },
  logoDiv: {
    height: "40px",
    width: "120px",
    marginTop: "15px",
    marginBottom: "15px",
  },
  imgDivMain: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
};
