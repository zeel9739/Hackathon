import React from "react";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import User from "./User";
import Channel from "./Channel";
import Recipe from "./Recipe";
import Comment from "./Comment";
import Ingredients from "./Ingredients";
import Avatar from "./Avatar";

const useStyles = makeStyles(() => ({
  // Scrollbar Design
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
      height: "8px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px #C4C4C4",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#ff9800",
      outline: "0px solid black",
    },
  },
  // Scrollbar Design
}));

const App = () => {
  const classNamees = useStyles();
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<User />} />
        <Route path="/Channel" exact element={<Channel />} />
        <Route path="/Recipe" exact element={<Recipe />} />
        <Route path="/Comment" exact element={<Comment />} />
        <Route path="/Ingredients" element={<Ingredients />} />
        <Route path="/Avatar" element={<Avatar />} />
      </Routes>
    </div>
  );
};

export default App;
