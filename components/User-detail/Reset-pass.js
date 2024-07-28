// // import React from 'react';
// // import './reset.css';
// // import { TextField, Typography, Button } from "@mui/material";
// // import Grid from '@mui/material/Grid';
// // import { styled } from '@mui/material/styles';
// // import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// // import ResetImage from "../../Image/Reset Pass.png";

// // const Item = styled(Paper)(({ theme }) => ({
// //     ...theme.typography.body2,
// //     padding: theme.spacing(1),
// //     textAlign: 'center',
// //     color: theme.palette.text.secondary,
// // }));

// // export default function Account() {
// //     return (
// //         <Box sx={{ flexGrow: 1, padding: '30px 0px 0px 30px' }} >

// //             <Grid container spacing={4}>
// //                 <Grid item xs={12} sm={12} md={12}>

// //                     <h1 className='up' > Reset Your Password</h1>

// //                 </Grid>

// //                 <Grid item xs={12} sm={6} md={6}>
// //                     <div className='bottom'>
// //                         <div className='left'>
// //                             <Typography variant='h5'>
// //                                 Old Password
// //                             </Typography>
// //                             <TextField variant="outlined" id="password" type="password"
// //                                 position="absolute" style={{
// //                                     width: "404px", border: "1px solid #FF9800",
// //                                     boxSizing: "border-box", borderRadius: "5px"
// //                                 }}
// //                             />
// //                             <Typography style={{
// //                                 fontSize: '12px', letterSpacing: "0.08em",
// //                                 color: "#FF9800", marginLeft: "178px"
// //                             }}
// //                             >Forget Password? Recover by Email
// //                             </Typography>
// //                             <Typography variant='h5'>
// //                                 New Password
// //                             </Typography>
// //                             <TextField fullwidth variant="outlined" id="password" type="password"
// //                                 position="absolute" style={{
// //                                     width: "404px", border: "1px solid #FF9800",
// //                                     boxSizing: "border-box", borderRadius: "5px"
// //                                 }} />
// //                             <Typography variant='h5' mt="11px">
// //                                 Confirm Password
// //                             </Typography>
// //                             <TextField fullwidth variant="outlined" id="password" type="password"
// //                                 position="absolute" style={{
// //                                     width: "404px", border: "1px solid #FF9800",
// //                                     boxSizing: "border-box", borderRadius: "5px"
// //                                 }} />

// //                             <div className='btn'>
// //                                 <Button type="cancel" variant="outlined" style={{
// //                                     border: "1px solid #FF9800",
// //                                     marginTop: '20px',
// //                                     boxSizing: "border-box", borderRadius: "5px",
// //                                     fontSize: "14px", color: "#FF9800",
// //                                     letterSpacing: "-0.03em"
// //                                 }}>Cancel</Button>
// //                                 <Button type="save" variant="contained" style={{
// //                                     background: "#FF9800", borderRadius: "5px",
// //                                     marginTop: '20px',
// //                                     fontSize: '14px', letterSpacing: '-0.03em',
// //                                     color: '#FFFFFF', marginLeft: '14px'
// //                                 }}>Save</Button>

// //                             </div>
// //                         </div>

// //                     </div>
// //                 </Grid>
// //                 <Grid item xs={12} sm={6} md={6}>
// //                     <img src={ResetImage} />
// //                 </Grid>
// //             </Grid>

// //         </Box>
// //     );
// // }

// import React from "react";
// import "./index.css";
// import { TextField, Typography, Button } from "@mui/material";
// import Grid from "@mui/material/Grid";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import InputField from "../InputField/index"
// import ResetImage from "../../Images/pass.png";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

// export default function Account() {
//     return (
//         <div style={{ padding: 30 }}>
//             <div style={{ marginTop: 40 }}>
//                 <h2 style={{ fontFamily: "Red Hat Display", letterSpacing: "0.11em" }} className="up"> Reset Your Password</h2>
//             </div>

//             <div className="row" style={{ marginTop: 30 }}>
//                 <div className="col-sm-6">
//                     <InputField label="Old Password" variant="outlined" type="password" />
//                     <Typography
//                         style={{
//                             fontSize: "12px",
//                             letterSpacing: "0.11em",
//                             color: "#FF9800",
//                             fontFamily: 'Red Hat Display',
//                             display: 'flex',
//                             justifyContent: 'flex-end'
//                         }}
//                     >
//                         Forget Password? Recover by Email
//                     </Typography>

//                     <InputField label="New Password" variant="outlined" type="NewPassword" />
//                     <InputField label="Confirm Password" variant="outlined" type="ConPassword" />

//                     <div className="d-grid gap-2 d-md-flex justify-content-md-end" style={{ marginTop: 20 }}>
//                         <Button variant="outline-primary" type="button" style={{ color: '#FF9800', backgroundColor: '#FFFFFF', borderColor: '#FF9800', fontSize: 21, fontFamily: 'Red Hat Display', letterSpacing: '0.11em', border: '1px solid #FF9800', textTransform: 'capitalize', height: 45 }}>Cancel</Button>
//                         <Button variant="secondary" type="button" style={{ color: '#FFFFFF', backgroundColor: '#FF9800', borderColor: '#FF9800', fontSize: 21, fontFamily: 'Red Hat Display', letterSpacing: '0.11em', textTransform: 'capitalize', height: 45 }}>Save</Button>
//                     </div>
//                 </div>

//                 <div className="col-sm-4">
//                     <img src={ResetImage} />
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Typography, Button, InputAdornment, IconButton} from "@mui/material";
import ResetImage from "../../Images/pass.png";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import * as Yup from "yup";

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
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      ),
    confirmPwd: Yup.string()
      .required("Please enter confirm password")
      .oneOf([Yup.ref("password")], "Passwords does not match")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      ),
  });

  //============ Set Password Value ============//
  const formOptions = {resolver: yupResolver(formSchema)};
  const {register, handleSubmit, formState} = useForm(formOptions);
  const {errors} = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  const [isconfirmPwd, setIsConfirmPwd] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isOldPassword, setIsOldPassword] = useState("");

  const submitPwd = () => {
    const pwdDetails = {
      "Old Password": isOldPassword,
      "New Password": isPassword,
      "Confirm Password": isconfirmPwd,
    };
    console.log(pwdDetails);
  };

  return (
    <div className='container mt-5'>
      <div style={styles.mainDiv}>
        <h2 style={styles.bigText} className='up'>
          {" "}
          Reset Your Password
        </h2>
      </div>

      <div style={styles.styleDiv} className='row'>
        <div className='col-sm-6'>
          <div>
            <Typography style={styles.passwordText}>Old Password</Typography>
            <input
              type={oldPasswordvalues.showPassword ? "text" : "password"}
              onChange={(e) => setIsOldPassword(e.target.value)}
              name='oldPwd'
              {...register("oldPwd")}
              className={`form-control ${errors.oldPwd ? "is-invalid" : null}`}
              style={styles.passwordInput}
            />
            <InputAdornment style={styles.inputAdornmentDiv}>
              <IconButton
                aria-label='toggle password visibility'
                onClick={oldHandleClickShowPassword}
                onMouseDown={oldHandleMouseDownPassword}
                style={styles.IconBtn}
              >
                {oldPasswordvalues.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
            <Typography style={styles.forgetText}>Forget Password? Recover by Email</Typography>
            <div className='invalid-feedback'>{errors.oldPwd?.message}</div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <Typography style={styles.passwordText}>New Password</Typography>
              <input
                type={newPasswordvalues.showPassword ? "text" : "password"}
                onChange={(e) => setIsPassword(e.target.value)}
                name='password'
                {...register("password")}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                style={styles.passwordInput}
              />
              <InputAdornment style={styles.inputAdornmentDiv}>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={newHandleClickShowPassword}
                  onMouseDown={newHandleMouseDownPassword}
                  style={styles.IconBtn}
                >
                  {newPasswordvalues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              <div className='invalid-feedback'>{errors.password?.message}</div>
            </div>

            <div className='form-group'>
              <Typography style={styles.passwordText}>Confirm Password</Typography>
              <input
                type={confirmPasswordvalues.showPassword ? "text" : "password"}
                onChange={(e) => setIsConfirmPwd(e.target.value)}
                name='confirmPwd'
                {...register("confirmPwd")}
                className={`form-control ${errors.confirmPwd ? "is-invalid" : ""}`}
                style={styles.passwordInput}
              />
              <InputAdornment style={styles.inputAdornmentDiv}>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={confirmHandleClickShowPassword}
                  onMouseDown={confirmHandleMouseDownPassword}
                  style={styles.IconBtn}
                >
                  {confirmPasswordvalues.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
              <div className='invalid-feedback'>{errors.confirmPwd?.message}</div>
            </div>

            <div
              className='d-grid gap-2 d-md-flex justify-content-md-end'
              style={styles.marginTopDiv}
            >
              <Button style={styles.cancelBtn} variant='outline-primary' type='button'>
                Cancel
              </Button>
              <Button
                style={styles.saveBtn}
                onClick={submitPwd}
                variant='secondary'
                type='submit'
                value='Submit'
              >
                Save
              </Button>
            </div>
          </form>
        </div>

        <div className='col-sm-4'>
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
