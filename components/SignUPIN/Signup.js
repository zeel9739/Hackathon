import React, { useState } from "react";
import Button from "@mui/material/Button";
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
import { AlternateEmail } from "@mui/icons-material";
import { IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const sectionStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${img})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
};
export default function SignUp() {
  let navigate = useNavigate();
  const [isSingUpEmail, setIsSingUpEmail] = useState("");
  const [isSingUpPassword, setIsSingUpPassword] = useState("");
  const [isSingUpUsername, setIsSingUpUsername] = useState("");
  const [loding, setLoading] = useState(false);
  const [chacked, setChecked] = useState("");
  const [click, setClick] = useState("");
  const [validation, setValidation] = useState({
    email: "",
    username: "",
    password: "",
  });

  const validate = () => {
    if (
      isSingUpEmail === "" ||
      isSingUpUsername === "" ||
      isSingUpPassword === ""
    ) {
      setClick(true);
      return false;
    }
  };

  const signUpApi = (e) => {
    e.preventDefault();
    const isValide = validate();
    if (isValide) {
      console.log("isValide", isValide);
    }
    // console.log("data===>", data);
    console.log(isSingUpEmail, "isSingUpEmailisSingUpEmailisSingUpEmail");
    if (chacked === "channel") {
      const data = {
        channelname: isSingUpUsername,
        email: isSingUpEmail,
        password: isSingUpPassword,
      };
      console.log("data", data);

      axios
        .post("http://localhost:3004/channel/signup/channel", data)
        .then((resp) => {
          console.log("Response---------", resp);
          // var tokenDecode = resp?.data?.token;
          // var decoded = jwt_decode(tokenDecode);
          // let strige = JSON.stringify(decoded);
          // console.log(decoded, "decoded++++++++++++++++");
          // localStorage.setItem("decoded", strige);
          setIsSingUpEmail("");
          setIsSingUpPassword("");
          setIsSingUpUsername("");
          setChecked("");
          navigate(`/`);
          if (!resp) {
            toast.error("Email or Password Wrong", {
              position: "top-right",
            });
          }
        })
        .catch((error) => {
          console.log("Error", error);
          toast.error("Email or Password Wrong", {
            position: "top-right",
          });
        });
    } else {
      const data = {
        email: isSingUpEmail,
        password: isSingUpPassword,
        username: isSingUpUsername,
      };

      console.log("data", data);
      // console.log('res', await axios.post("http://localhost:3004/user/signup/user", data))
      // return
      axios
        .post("http://localhost:3004/user/signup/user", data)
        .then((resp) => {
          console.log("Response", resp);
          // var tokenDecode = resp?.data?.token;
          // var decoded = jwt_decode(tokenDecode);
          // let strige = JSON.stringify(decoded);
          // console.log(decoded, "decoded++++++++++++++++");
          // localStorage.setItem("decoded", strige);
          toast.success("sign up success fuliy", {
            position: "top-right",
          });
          setIsSingUpEmail("");
          setIsSingUpPassword("");
          setIsSingUpUsername("");
          setChecked("");
          navigate(`/`);
          if (!resp) {
            toast.error("Email or Password Wrong", {
              position: "top-right",
            });
          }
        })
        .catch((error) => {
          console.log("Error", error);
          toast.error("Email or Password Wrong", {
            position: "top-right",
          });
        });
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // console.log({
  //   //   email: data.get("email"),
  //   //   password: data.get("password"),
  //   // });
  // };
  const msg = (url) => {
    window.location.href = url;
  };

  // ===================== Password hide & show =====================

  const [passwordvalues, setPasswordValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const oldHandleClickShowPassword = () => {
    setPasswordValues({
      ...passwordvalues,
      showPassword: !passwordvalues.showPassword,
    });
  };
  const [type, setType] = useState();
  const signHandelChanges = (e) => {
    let value = e.target.value;
    setType(value);
    setChecked(value);
  };
  const oldHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div style={sectionStyle}>
      <Container component="main" style={styles.mainContainer}>
        <CssBaseline />
        <Box sx={styles.box}>
          <Typography
            sx={{
              mt: 3,
              mb: 1,
            }}
            component="h1"
            fontWeight="normal"
            style={styles.typography}
          >
            SignUp
          </Typography>
          <Box
            component="form"
            noValidate
            // onSubmit={handleSubmit}
            sx={{
              mt: 3,
            }}
            style={styles.boxmargin}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} style={styles.textfieldGrid}>
                <TextField
                  onChange={(e) => setIsSingUpEmail(e.target.value)}
                  value={isSingUpEmail}
                  fullWidth
                  id="email"
                  variant="standard"
                  placeholder="Enter Email Address"
                  autoComplete="email"
                  position="absolute"
                  error={click && isSingUpEmail === ""}
                  helperText={
                    click && isSingUpEmail === "" ? "Please Enter Email" : ""
                  }
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  style={styles.textfield}
                />
              </Grid>
              <Grid item xs={12} style={styles.textfieldGrid}>
                <TextField
                  onChange={(e) => setIsSingUpUsername(e.target.value)}
                  value={isSingUpUsername}
                  required
                  fullWidth
                  id="username"
                  variant="standard"
                  placeholder="Username"
                  name="username"
                  position="absolute"
                  error={click && isSingUpUsername === ""}
                  helperText={
                    click && isSingUpUsername === "" ? "Please Enter Name" : ""
                  }
                  InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <AlternateEmail />
                      </InputAdornment>
                    ),
                  }}
                  style={styles.textfield}
                />
              </Grid>
              <Grid item xs={12} style={styles.textfieldGrid}>
                <TextField
                  onChange={(e) => setIsSingUpPassword(e.target.value)}
                  value={isSingUpPassword}
                  type={passwordvalues.showPassword ? "text" : "password"}
                  required
                  variant="standard"
                  fullWidth
                  name="password"
                  placeholder="Password"
                  position="absolute"
                  id="password"
                  autoComplete="new-password"
                  error={click && isSingUpPassword === ""}
                  helperText={
                    click && isSingUpPassword === ""
                      ? "Please Enter Password"
                      : ""
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
                  style={styles.textfield}
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
                <div className="fw-bolder fs-5">Sign up as</div>
                <div className="form-check form-check-inline fw-bolder">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="channel"
                    color="#FF9800"
                    onChange={signHandelChanges}
                    checked={chacked === "channel"}
                    // style={{color: "orange"}}
                  />
                  <span
                    style={{ fontWidth: "bold" }}
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
                    value="option2"
                    color="#FF9800"
                    checked={chacked === "option2"}
                    onChange={signHandelChanges}

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
            <section style={styles.select}>
              {/* <NavLink to='/SignUPIN/SucessSignIn'> */}
              <button
                onClick={signUpApi}
                type="submit"
                variant="contained"
                sx={{
                  mt: 0,
                  mb: 1,
                }}
                // style={styles.button}
                className="css-button-sharp--sign-in"
              >
                Sign Up
              </button>
              {/* </NavLink> */}
            </section>
            {/* <section style={styles.imgSection}>
              <a href='https://www.facebook.com/'>
                <img src={Facebook} alt='Facebook' style={styles.social} />
              </a>
              <a href='https://www.google.com/'>
                <img src={Google} alt='Google' style={styles.social} />
              </a>
              <a href='https://www.instagram.com/'>
                <img src={Instagram} alt='Instagram' style={styles.social} />
              </a>
            </section> */}
            <Grid
              container
              justifyContent="center"
              margin="1em 0"
              style={styles.links}
            >
              <Grid item>
                {" "}
                If You Have Account?
                <Link
                  href="#"
                  variant="body2"
                  style={styles.line}
                  onClick={() => msg("/")}
                >
                  Sign In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
const styles = {
  maindiv: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
  },
  mainContainer: {
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
  boxmargin: {
    marginTop: "0.5em",
  },
  textfield: {
    background: "#F8F8F8",
    border: "1px solid #A6A5A5",
    boxSizing: "border-box",
    borderRadius: "30px",
    width: "345px",
    height: "45px",
    justifyContent: "center",
    paddingLeft: "1em",
    fontFamily: "Red Hat Display",
  },
  grid: {
    paddingTop: "0.1em",
    justifyContent: "left",
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
  select: {
    display: "flex",
    justifyContent: "center",
    margin: "0.5em 0",
    marginTop: 10,
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
  social: {
    height: "62px",
    width: "62px",
  },
  line: {
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.11em",
    color: "#A6A5A5",
    marginLeft: "0.11em",
  },
  links: {
    fontWeight: "normal",
    fontSize: "15px",
    lineHeight: "15px",
    letterSpacing: "0.11em",
    color: "#A6A5A5",
  },
  textfieldGrid: {
    display: "flex",
    justifyContent: "center",
  },
  imgSection: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};
