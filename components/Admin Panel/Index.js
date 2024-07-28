// import React from 'react';
// import Adminslide from './Adminslide';
// import User from './User';

// const Admin=()=>{
//     return(
//         <>
//             <div style={styles.mainDiv}>
//                 <div style={styles.mainSub}>
//                      <Adminslide/>
//                 </div>
//                  <div style={styles.mainDiv}><User/></div>
//              </div>
//         </>
//     )
// }
// export default Admin

// const styles = {
//   mainDiv: {
//     width: "100%",
//     height: "100vh",
//     display: "flex",
//   },
//   mainSub: {
//     width: "15%",
//     minWidth: "15em",
//     background:'black'
//   },
//   subDiv: {
//     width: "85%",
//   },
//   slide: {
//     padding: "15px",
//   },
// };
import React, { useState } from "react";
import Adminslide from "./Adminslide";
import User from "./User";
import Channel from "./Channel";
import Recipe from "./Recipe";
import Comment from "./Comment";
import Ingredients from "./Ingredients";
import Avatar from "./Avatar";
const Index = () => {
  const [tab, setTab] = useState("User");

  const renderTabContent = () => {
    console.log(tab);
    switch (tab) {
      case "User":
        return <User tab={tab} />;
      case "Channel":
        return <Channel tab={tab} />;
      case "Recipe":
        return <Recipe tab={tab} />;
      case "Comment":
        return <Comment tab={tab} />;
      case "Ingredients":
        return <Ingredients tab={tab} />;
      case "Avatar":
        return <Avatar tab={tab} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={styles.mainDiv}>
        <div style={styles.mainSub}>
          <Adminslide tab={tab} setTab={setTab} />
        </div>
        <div style={styles.mainDiv}>{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Index;
const styles = {
  mainDiv: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  mainSub: {
    width: "20%",
    minWidth: "15em",
    backgroundColor: "black",
  },
  subDiv: {
    width: "80%",
  },
  slide: {
    padding: "15px",
  },
};
