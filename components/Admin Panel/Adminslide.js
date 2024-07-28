import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { withStyles } from "@mui/styles";
import { Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default class Adminslide extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "Notification",
    };
  }
  a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  }

  handleChange = (event, newValue) => {
    this.props.setTab(newValue);
  };

  CustomTab = withStyles(styles.root, styles.selected)(Tab);
  render() {
    return (
      <seaction style={styles.mainDiv}>
        <seaction style={styles.sections}>
          <section style={styles.widthSection}>
            <section style={styles.sectioninner}>
              <section style={styles.outer}>
                <img className={styles.logoimg} src="/img/Rlogo.svg" alt="" />
              </section>
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
                <Divider style={{ background: "white" }} />
                <this.CustomTab
                  label={
                    <div style={styles.customTab}>
                      <span style={styles.span}>User</span>
                    </div>
                  }
                  value="User"
                />

                <Divider style={{ background: "white" }} />
                <this.CustomTab
                  label={
                    <div style={styles.customTab}>
                      <span style={styles.span}>Channel</span>
                    </div>
                  }
                  value="Channel"
                />
                <Divider style={{ background: "white" }} />
                <this.CustomTab
                  label={
                    <div style={styles.customTab}>
                      <span style={styles.span}>Recipe</span>
                    </div>
                  }
                  value="Recipe"
                />
                <Divider style={{ background: "white" }} />
                <this.CustomTab
                  label={
                    <div style={styles.customTab}>
                      <span style={styles.span}>Comment</span>
                    </div>
                  }
                  value="Comment"
                />
                <Divider style={{ background: "white" }} />
                <this.CustomTab
                  label={
                    <div className="span" style={styles.customTab}>
                      <span style={styles.span}>Ingredients</span>
                    </div>
                  }
                  value="Ingredients"
                />

                <Divider style={{ background: "white" }} />
                <this.CustomTab
                  label={
                    <div className="span" style={styles.customTab}>
                      <span style={styles.span}>Avatar</span>
                    </div>
                  }
                  value="Avatar"
                />

                <Divider style={{ background: "white" }} />
                <div style={{ padding: "50px" }}>
                  {/* <button style={styles.logoutButton}>
                    <LogoutIcon />
                    LogOut
                  </button> */}
                  <NavLink
                    to="/"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <Button
                      variant="outline-primary"
                      type="button"
                      style={styles.logoutButton}
                    >
                      LogOut
                    </Button>
                  </NavLink>
                </div>
              </Tabs>
            </section>
          </section>
        </seaction>
      </seaction>
    );
  }
}
const styles = {
  root: {
    // backgroundColor: "#fff",
    // color: "#ff9800",
    // borderBottom: "1px solid #ddd",
    textTransform: "none",
  },
  selected: {
    // backgroundColor: "#ff9800",
    color: "#fff",
  },
  sections: {
    height: "100vh",
    display: "flex",
    // borderRight: "1px solid #A6A5A5",
    // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
    padding: "25px",
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
  logoutButton: {
    fontSize: "19px",
    letterSpacing: "0.11em",
    fontWeight: "Bold",
    fontFamily: "Red Hat Display",
    backgroundColor: "#FF9800",
    color: "#FFFFFF",
    textTransform: "capitalize",
    borderRadius: 40,
    width: "100%",
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
    marginTop: "10px",
  },
  customTab: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    fontSize: "22px",
  },
  span: {
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
  logoimg: {
    width: "190px",
    height: "190px",
    // padding:'25px',
  },
};
