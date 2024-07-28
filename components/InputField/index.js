import React from "react";
import {IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

const InputField = ({label, type = "text", fullwidth = false}) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  return (
    <>
      <Typography
        style={{
          color: "#FF9800",
          fontSize: "18px",
          fontFamily: "Red Hat Display",
          letterSpacing: "0.11em",
        }}
      >
        {label}
      </Typography>
      <input
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        required
        id='password'
        name='password'
        className='form-control'
        style={{
          borderColor: "#FF9800",
          height: 50,
        }}
      />
      <InputAdornment
        position='end'
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          aria-label='toggle password visibility'
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          style={{
            marginBottom: 50,
            marginRight: 30,
            color: "#ff9800",
          }}
        >
          {values.showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    </>
  );
};

export default InputField;
