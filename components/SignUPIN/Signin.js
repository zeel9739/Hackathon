import React, { useEffect, useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import img from "../../Images/Tomato.png";
import Facebook from "../../Images/Facebook.svg";
import Google from "../../Images/Google.svg";
import Instagram from "../../Images/Instagram.svg";
import axios from "axios";
import { IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import jwt_decode from "jwt-decode";
export default function SignUp() {
  let navigate = useNavigate();
  const [isEmail, setIsEmail] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [chacked, setChecked] = useState("");
  const [click, setClick] = useState("");
  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    if (isEmail === "" || isPassword === "") {
      setClick(true);
      return false;
    }
    return true;
  };

  const signIn = async (e) => {
    const isValide = validate();
    if (isValide) {
      // console.log("isValide",isValide)
      console.log(type, "++++++++++++++++++");
      const data = { email: isEmail, password: isPassword };
      console.log("data===>", data);
      if (type === "channel") {
        await axios
          .post("http://localhost:3004/channel/signin/channel", data)
          .then((resp) => {
            console.log("Response1111111111111111111", resp);
            var tokenDecode = resp?.data?.token;
            var decoded = jwt_decode(tokenDecode);
            let strige = JSON.stringify(decoded);
            console.log(decoded, "decoded++++++++++++++++");
            localStorage.setItem("decoded", strige);
            toast.success("sign up success fuliy", {
              position: "top-right",
            });
            setIsEmail(""); //authenticatedUser
            setIsPassword("");
            setChecked("");

            navigate(`/channel`);
          })
          .catch((error) => {
            toast.error("Email or Password Wrong", {
              position: "top-right",
            });
            console.log("Error", error);
          });
      } else {
        await axios
          .post("http://localhost:3004/user/signin/user", data)
          .then((resp) => {
            console.log("Response2222222222222222", resp);
            var tokenDecode = resp?.data?.token;
            var decoded = jwt_decode(tokenDecode);
            let strige = JSON.stringify(decoded);
            console.log(decoded, "decoded++++++++++++++++");
            localStorage.setItem("decoded", strige);
            let channelIdDecord = localStorage.getItem("decoded");
            let getLocalData = JSON.parse(channelIdDecord);
            console.log(getLocalData, "getLocalDatagetLocalData");
            getUserData(getLocalData.userId)
              .then((res) =>
                localStorage.setItem("username", res.data.user.username)
              )
              .catch((error) => console.log(error));

            setIsEmail("");
            setIsPassword("");
            setChecked("");
            toast.success("sign up success fuliy", {
              position: "top-right",
            });
            navigate(`/home`);
            if (getLocalData.email === "recipelyAdmin2022@gmail.com") {
              // navigate("/adminPanal");
            } else {
              // navigate(`/`);
            }
          })
          .catch((error) => {
            toast.error("Email or Password Wrong", {
              position: "top-right",
            });
            console.log("Error", error);
          });
      }
    }
  };
  // setIsEmail("");
  // setIsPassword("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const redirect = (url) => {
    window.location.href = url;
  };

  const getUserData = (userId) => {
    return axios.get(`http://localhost:3004/user/getuser/byid/${userId}`, {
      "Content-Type": "application/json",
    });
  };

  // ===================== Password hide & show =====================

  const [passwordvalues, setPasswordValues] = useState({
    password: "",
    showPassword: false,
  });
  const [type, setType] = useState();

  const oldHandleClickShowPassword = () => {
    setPasswordValues({
      ...passwordvalues,
      showPassword: !passwordvalues.showPassword,
    });
  };
  const signHandelChanges = (e) => {
    let value = e.target.value;
    setType(value);
    setChecked(value);
  };
  const oldHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div style={styles.mainDiv}>
      <Container
        component="main"
        // maxWidth="xs"
        style={styles.subDiv}
      >
        <CssBaseline />
        <Box sx={styles.box}>
          <Typography
            sx={{
              mt: 3,
              mb: 1,
            }}
            // variant="h4"
            component="h1"
            fontWeight="normal"
            style={styles.typography}
          >
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{
              mt: 3,
            }}
            style={styles.boxMargin}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} style={styles.gridItem}>
                <TextField
                  onChange={(e) => setIsEmail(e.target.value)}
                  value={isEmail}
                  required
                  fullWidth
                  id="email"
                  type="text"
                  name="email"
                  variant="standard"
                  placeholder="Enter Email Address"
                  autoComplete="email"
                  position="absolute"
                  error={click && isEmail === ""}
                  helperText={
                    click && isEmail === "" ? "Please Enter Email" : ""
                  }
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={styles.typo}
                />
              </Grid>
              <Grid item xs={12} style={styles.gridItem}>
                <TextField
                  onChange={(e) => setIsPassword(e.target.value)}
                  type={passwordvalues.showPassword ? "text" : "password"}
                  value={isPassword}
                  required
                  fullWidth
                  variant="standard"
                  name="password"
                  placeholder="Password"
                  position="absolute"
                  id="password"
                  autoComplete="new-password"
                  error={click && isPassword === ""}
                  helperText={
                    click && isPassword === "" ? "Please Enter Password" : ""
                  }
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="start"
                        style={styles.inputAdornmentDiv}
                      >
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={oldHandleClickShowPassword}
                          onMouseDown={oldHandleMouseDownPassword}
                          style={styles.IconBtn}
                        >
                          {passwordvalues.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  style={styles.typo}
                />
              </Grid>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  paddingLeft: 30,
                  marginTop: 20,
                  width: "55vh",
                }}
              >
                <div className="fw-bolder fs-5">Sign in as</div>
                <div className="form-check form-check-inline fw-bolder">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="channel"
                    color="#FF9800"
                    onChange={signHandelChanges}
                    // style={{color: "orange"}}
                    checked={chacked === "channel"}
                  />
                  <span
                    style={{ fontWidth: "bolder" }}
                    className="form-check-label"
                    htmlFor="inlineRadio1"
                  >
                    Chef
                  </span>
                </div>
                <label style={{ marginRight: 20 }}>or</label>
                <div className="form-check form-check-inline fw-bolder">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="user"
                    color="#FF9800"
                    onChange={signHandelChanges}
                    checked={chacked === "user"}
                    // style={{color: "orange"}}
                  />
                  <span
                    style={{ fontWidth: "bold" }}
                    className="form-check-label"
                    htmlFor="inlineRadio2"
                  >
                    User
                  </span>
                </div>
              </div>

              {/* <FormControl style={{flexDirecton: "row", display: "flex"}}>
                <FormLabel
                  id='demo-row-radio-buttons-group-label'
                  style={{
                    letterSpacing: "0.11em",
                    color: " #000000",
                    fontFamily: "Red Hat Display",
                  }}
                >
                  Sign in as
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel
                    style={{
                      letterSpacing: "0.11em",
                      color: " #000000",
                      fontFamily: "Red Hat Display",
                    }}
                    value='female'
                    control={<Radio />}
                    label='Chef'
                  /> */}
              {/* <FormLabel
                  id='demo-row-radio-buttons-group-label'
                  style={{
                    letterSpacing: "0.11em",
                    color: " #000000",
                    fontFamily: "Red Hat Display",
                  }}
                >
                  or
                  </FormLabel> */}
              {/* <div>g</div>
                  <FormControlLabel
                    style={{
                      letterSpacing: "0.11em",
                      color: " #000000",
                      fontFamily: "Red Hat Display",
                    }}
                    value='male'
                    control={<Radio />}
                    label='User'
                  />
                </RadioGroup>
              </FormControl> */}

              {/* <Grid item xs={12} style={styles.grid}>
                <FormControlLabel
                  control={<Checkbox value='allowExtraEmails' size='small' color='primary' />}
                  label='Remember Me'
                  style={styles.remember}
                />
                <Typography>
                  <Link href='#' style={styles.link}>
                    Forgot Password?
                  </Link>
                </Typography>
              </Grid> */}
            </Grid>
            <section style={styles.signinBtn}>
              {/* <NavLink to='/'> */}
              <button
                //  onClick={() => redirect("/home")}
                onClick={signIn}
                type="submit"
                variant="contained"
                sx={{
                  mt: 0,
                  mb: 1,
                }}
                // style={styles.button}
                className="css-button-sharp--sign-in"
              >
                Sign In
              </button>
              {/* </NavLink> */}
            </section>
            {/* <section style={styles.section}>
              <a href='https://www.facebook.com/'>
                <img src={Facebook} alt='Facebook' style={styles.icon} />
              </a>
              <a href='https://www.google.com/'>
                <img src={Google} alt='Google' style={styles.icon} />
              </a>
              <a href='https://www.instagram.com/'>
                <img src={Instagram} alt='Instagram' style={styles.icon} />
              </a>
            </section> */}
            <Grid
              container
              justifyContent="center"
              margin="1em 0"
              style={styles.line}
            >
              <Grid item>
                {" "}
                If You Don't Have Account?
                <Link
                  href="#"
                  variant="body2"
                  style={styles.line}
                  onClick={() => redirect("/signup")}
                >
                  Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
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
  },
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  },
  typography: {
    fontWeight: "bold",
    letterSpacing: "0.11em",
    color: " #000000",
    fontFamily: "Red Hat Display",
    fontSize: "32px",
  },
  grid: {
    paddingTop: "0.1em",
    justifyContent: "left",
    display: "flex",
  },
  boxMargin: {
    marginTop: "0.5em",
  },
  typo: {
    background: "#F8F8F8",
    border: "1px solid #A6A5A5",
    boxSizing: "border-box",
    borderRadius: "30px",
    width: "345px",
    height: "45px",
    justifyContent: "center",
    paddingLeft: "1em",
  },
  gridItem: {
    justifyContent: "center",
    display: "flex",
  },
  remember: {
    fontWeight: "normal",
    fontSize: "10px",
    lineHeight: "12px",
    letterSpacing: "0.11em",
    color: "#A6A5A5",
    marginLeft: "2em",
  },
  link: {
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "12px",
    letterSpacing: "0.11em",
    color: "#A6A5A5",
    marginLeft: "5em",
    fontFamily: "Red Hat Display",
  },
  button: {
    width: "178px",
    height: "45px",
    background: "#FF9800",
    border: "1px solid #FF9800",
    boxSizing: "border-box",
    borderRadius: "30px",
    boxShadow: "none",
    color: "white",
    fontFamily: "Red Hat Display",
    fontSize: "15px",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  section: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  icon: {
    height: "62px",
    width: "62px",
  },
  line: {
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.11em",
    color: "#A6A5A5",
  },
  signinBtn: {
    display: "flex",
    justifyContent: "center",
    margin: "0.5em 0",
    marginTop: 10,
  },
  inputAdornmentDiv: {
    justifyContent: "flex-end",
  },
  IconBtn: {
    color: "#A6A5A5",
  },
};
