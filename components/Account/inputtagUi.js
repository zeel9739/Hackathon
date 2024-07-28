import {TextField} from "@mui/material";

import {styled} from "@mui/material/styles";

export const CssTextField = styled(TextField)({
  "& label": {
    color: "#FF9800",
  },
  // "& input": {
  //   color: "#FF9800",
  // },
  // "& .MuiOutlinedInput-input":{
  //   color:"#FF9800",
  // },
  "& label.Mui-focused": {
    color: "#FF9800",
  },
  "& .MuiFormHelperText-root": {
    color: "#FF9800",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FF9800",
    },
    "&:hover fieldset": {
      borderColor: "#FF9800",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF9800",
    },
  }
});
