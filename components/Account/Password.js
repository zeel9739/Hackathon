import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Typography, Button, InputAdornment, IconButton } from "@mui/material";
import ResetImage from "../../Images/pass.png";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import * as Yup from "yup";
import { CssTextField } from "../Account/inputtagUi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function ConfirmPassword() {
  //============ Old Password ============//
  const [oldPasswordvalues, setOldPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const oldHandleClickShowPassword = () => {
    setOldPasswordValues({
      ...oldPasswordvalues,
      showPassword: !oldPasswordvalues.showPassword,
    });
  };

  const oldHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //============ New Password ============//
  const [newPasswordvalues, setnewPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const newHandleClickShowPassword = () => {
    setnewPasswordValues({
      ...newPasswordvalues,
      showPassword: !newPasswordvalues.showPassword,
    });
  };

  const newHandleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //============ Comfirm Password ============//
  const [confirmPasswordvalues, setConfirmPasswordValues] = useState({
    password: "",
    showPassword: false,
  });

  const confirmHandleClickShowPassword = () => {
    setConfirmPasswordValues({
      ...confirmPasswordvalues,
      showPassword: !confirmPasswordvalues.showPassword,
    });
  };

  const confirmHandleMouseDownPassword = (index) => {
    index.preventDefault();
  };

  //============ Password Validation ============//
  const formSchema = Yup.object().shape({
    oldPwd: Yup.string().required("Please enter valid old password"),
    password: Yup.string()
      .required("Please enter new password")
      .min(8, "Password must be at 8 char long")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPwd: Yup.string()
      .required("Please enter confirm password")
      .oneOf([Yup.ref("password")], "Passwords does not match")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  //============ Set Password Value ============//
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    let channelIdDecord = localStorage.getItem("decoded");
    let getLocalData = JSON.parse(channelIdDecord);
    console.log(getLocalData, "userId");
    console.log();
    let settData = JSON.stringify(data, null, 4);
    console.log(data, "settData");
    let sendData = {
      password: data.oldPwd,
      newpassword: data.password,
    };
    console.log(sendData, "sendData");
    axios
      .post(
        `http://localhost:3004/user/post/resetPassword/${getLocalData.userId}`,
        sendData
      )
      .then((resp) => {
        console.log(resp);
        toast.success("sign up success fuliy", {
          position: "top-right",
        });
        setIsOldPassword("");
        setIsPassword("");
      })
      .catch((error) => {
        console.log("Error", error);
      });
    return false;
  }

  const [isconfirmPwd, setIsConfirmPwd] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isOldPassword, setIsOldPassword] = useState("");

  // const submitPwd = () => {
  //   const pwdDetails = {
  //     "Old Password": oldPasswordvalues,
  //     "New Password": newPasswordvalues,
  //   };
  //   console.log(pwdDetails);

  // };

  return (
    <div className="container mt-5">
      <div style={styles.mainDiv}>
        <h2 style={styles.bigText} className="up">
          {" "}
          Reset Your Password
        </h2>
      </div>

      <div style={styles.styleDiv} className="row">
        <div className="col-sm-6">
          <div>
            {/* <Typography style={styles.passwordText} >
              Old Password
            </Typography> */}
            <CssTextField
              id="outlined-multiline-flexible"
              label="Old Password"
              type={oldPasswordvalues.showPassword ? "text" : "password"}
              onChange={(e) => setIsOldPassword(e.target.value)}
              name="oldPwd"
              {...register("oldPwd")}
              className={`form-control ${errors.oldPwd ? "is-invalid" : null}`}
              style={styles.passwordInput}
            />
            <InputAdornment position="start" style={styles.inputAdornmentDiv}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={oldHandleClickShowPassword}
                onMouseDown={oldHandleMouseDownPassword}
                style={styles.IconBtn}
              >
                {oldPasswordvalues.showPassword ? (
                  <Visibility />
                ) : (
                  <VisibilityOff />
                )}
              </IconButton>
            </InputAdornment>
            {/* <Typography style={styles.forgetText}>
              Forget Password? Recover by Email
            </Typography> */}
            <div className="invalid-feedback">{errors.oldPwd?.message}</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              {/* <Typography style={styles.passwordText} >
                New Password
              </Typography> */}
              <CssTextField
                id="outlined-multiline-flexible"
                label="New Password"
                type={newPasswordvalues.showPassword ? "text" : "password"}
                onChange={(e) => setIsPassword(e.target.value)}
                name="password"
                {...register("password")}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                style={styles.passwordInput}
              />
              <InputAdornment position="start" style={styles.inputAdornmentDiv}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={newHandleClickShowPassword}
                  onMouseDown={newHandleMouseDownPassword}
                  style={styles.IconBtn}
                >
                  {newPasswordvalues.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="mt-3">
              {/* <Typography style={styles.passwordText}>
                Confirm Password
              </Typography> */}
              <CssTextField
                id="outlined-multiline-flexible"
                label="Confirm Password"
                type={confirmPasswordvalues.showPassword ? "text" : "password"}
                onChange={(e) => setIsConfirmPwd(e.target.value)}
                name="confirmPwd"
                {...register("confirmPwd")}
                className={`form-control ${
                  errors.confirmPwd ? "is-invalid" : ""
                }`}
                style={styles.passwordInput}
              />
              <InputAdornment position="start" style={styles.inputAdornmentDiv}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={confirmHandleClickShowPassword}
                  onMouseDown={confirmHandleMouseDownPassword}
                  style={styles.IconBtn}
                >
                  {confirmPasswordvalues.showPassword ? (
                    <Visibility />
                  ) : (
                    <VisibilityOff />
                  )}
                </IconButton>
              </InputAdornment>
              <div className="invalid-feedback">
                {errors.confirmPwd?.message}
              </div>
            </div>

            <div
              className="d-grid gap-2 d-md-flex justify-content-md-end"
              style={styles.marginTopDiv}
            >
              <Button
                style={styles.cancelBtn}
                variant="outline-primary"
                type="button"
              >
                Cancel
              </Button>
              <Button
                style={styles.saveBtn}
                // onClick={submitPwd}
                variant="secondary"
                type="submit"
                value="Submit"
              >
                Save
              </Button>
            </div>
          </form>
        </div>

        <div className="col-sm-4">
          <img src={ResetImage} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  mainDiv: {
    marginTop: 40,
  },
  bigText: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  styleDiv: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
  },
  passwordText: {
    color: "#FF9800",
    fontSize: "18px",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  passwordInput: {
    borderColor: "#FF9800",
    height: 50,
  },
  inputAdornmentDiv: {
    justifyContent: "flex-end",
  },
  IconBtn: {
    marginBottom: 50,
    marginRight: 30,
    color: "#ff9800",
  },
  forgetText: {
    fontSize: "12px",
    letterSpacing: "0.11em",
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "5px",
  },
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
};
