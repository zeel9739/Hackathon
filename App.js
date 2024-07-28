import React from "react";
import { makeStyles } from "@mui/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Account from "./components/Account/index";
import SignUp from "./components/SignUPIN/Signup";
import Signin from "./components/SignUPIN/Signin";
import Filter from "./components/Filter/index";
import FilterList from "./components/Filter-List/Filterlist";
import FilterPage from "./components/FilterPage/FilterPage";
import Channel from "./components/Channel/Index";
import ChannelCreate from "./components/Channel/CreateChannel";
import Tutorial from "./components/Tutorial";
import Morerecipe from "./components/Tutorial/Morerecipe";
import Admin from "./components/Admin Panel/Index";
import SucessSignIn from "./components/SignUPIN/SucessSignIn";
import { Provider } from "react-redux";
import Store from "./store/store";

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
    <Provider store={Store}>
      <Routes>
        <Route path="/" exact element={<Signin />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/account" exact element={<Account />} />
        <Route path="/filter/favorites" element={<FilterPage />} />
        <Route path="/filter/list" element={<FilterList />} />
        <Route path="/filter/index" element={<Filter />} />
        <Route path="/channel" element={<Channel />} />
        <Route path="/channel/create" element={<ChannelCreate />} />
        <Route path="/receipes/tutorial" element={<Tutorial />} />
        <Route path="/Morerecipe" element={<Morerecipe />} />
        <Route path="/AdminPanal" exact element={<Admin />} />
        <Route path="/SignUPIN/SucessSignIn" element={<SucessSignIn />} />
        {/* <Route path="/FilterIndex" element={<FilterIndex />} /> */}
      </Routes>
    </Provider>
  );
};

export default App;
