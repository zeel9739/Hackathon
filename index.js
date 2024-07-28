import {ThemeProvider} from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {theme} from "./theme";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
