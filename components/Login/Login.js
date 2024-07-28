import React from "react";
import {Grid, Paper, TextField, Checkbox, Button, Typography, Link} from "@mui/material";
import {FormControlLabel} from "@mui/material";
import Facebook from "../../Image/Facebook.png";
import Google from "../../Image/Google.png";
import Instragram from "../../Image/Instagram.png";
import homeimage from "./Tomato.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import "./login.css";
const Login = () => {
  const paperStyle = {
    width: "347px",
    height: "352px",
    top: "135px",
    left: "434px",
    radius: "10px",
    padding: "25px",
  };

  return (
    <div
      className='container'
      style={{
        backgroundImage: `url(${homeimage})`,
      }}
    >
      <Grid className='paper'>
        <Paper elevation={10} style={paperStyle}>
          <Typography
            align='center'
            style={{
              fontWeight: "400px",
              fontSize: "30px",
              fontWeight: "bold",
              lineHeight: "20px",
              paddingBottom: "20px",
            }}
          >
            Login
          </Typography>
          <TextField
            fullwidth
            variant='standard'
            id='email'
            placeholder='Enter Email Address'
            autoComplete='email'
            position='absolute'
            InputProps={{
              disableUnderline: "true",
              startAdornment: (
                <InputAdornment position='start'>
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            }}
            style={{
              background: "#F8F8F8",
              border: "1px solid #A6A5A5",
              boxSizing: "border-box",
              borderRadius: "30px",
              width: "345px",
              height: "45px",
              paddingLeft: "0.65em",
              justifyContent: "center",
            }}
          />
          <br /> <br />
          <TextField
            fullwidth
            variant='standard'
            id='Password'
            type='password'
            placeholder='Password'
            position='absolute'
            InputProps={{
              disableUnderline: "true",
              startAdornment: (
                <InputAdornment position='start'>
                  <LockOutlinedIcon />
                </InputAdornment>
              ),
            }}
            style={{
              background: "#F8F8F8",
              border: "1px solid #A6A5A5",
              boxSizing: "border-box",
              borderRadius: "30px",
              width: "345px",
              height: "45px",
              paddingLeft: "0.65em",
              justifyContent: "center",
            }}
          />
          <div className='link-wrapper'>
            <div>
              <FormControlLabel
                className='remember-me-checkbox'
                control={<Checkbox name='checkedB' />}
                label='Remember Me'
                id='abc'
                style={{
                  color: "#A6A5A5",
                  marginLeft: "1em",
                }}
              />
            </div>
            <Typography>
              <Link
                href='#'
                style={{
                  fontSize: "12px",
                  color: "#A6A5A5",
                }}
              >
                Forget Password?
              </Link>{" "}
            </Typography>
          </div>
          <Button
            type='sumbit'
            variant='contained'
            style={{
              boxSizing: "border-box",
              borderRadius: "30px",
              border: "1px solid #FF9800",
              background: "#FF9800",
              display: "flex",
              margin: "10px 20px 20px 80px",
              width: "178px",
              height: "45px",
            }}
          >
            Login
          </Button>
          <div className='socialicon'>
            <img
              src={Facebook}
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <img
              src={Google}
              style={{
                width: "30px",
                height: "30px",
              }}
            />
            <img
              src={Instragram}
              style={{
                width: "30px",
                height: "30px",
              }}
            />
          </div>
          <Typography
            style={{
              fontSize: "15px",
              fontFamily: "SeoulNamsan",
              letterSpacing: "0.08em",
              color: "#A6A5A5",
              margin: "2em 5px 10px 36px",
            }}
          >
            If You Don't have an Account
            <Link
              href='#'
              style={{
                fontSize: "15px",
                fontFamily: "SeoulNamsan",
                letterSpacing: "0.09em",
                color: "#A6A5A5",
              }}
            >
              Sign Up
            </Link>{" "}
          </Typography>
          <br />
        </Paper>
      </Grid>
    </div>
  );
};
export default Login;
