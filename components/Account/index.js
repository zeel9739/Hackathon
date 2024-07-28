import React, {useState} from "react";
import Info from "./Info";
import Slidebar from "./Slidebar";
import Password from "./Password";
import Notification from "./Notification";
import img from '../../Images/DD.png'
// import Slide from "./Slide";

const Index = () => {
  const [tab, setTab] = useState("Account");
  const [selectedImage, setSelectedImage] = useState(img);


  const abc = (image) => {
    setSelectedImage(image)
  }

  const renderTabContent = () => {
    console.log(tab);
    switch (tab) {
      case "Account":
        return <Info tab={tab} selectedImage={abc}/>;
      case "Password":
        return <Password tab={tab} />;
      case "Notification":
        return <Notification tab={tab} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={styles.mainDiv}>
        {/* <div style={styles.mainSub}>
          <Slidebar tab={tab} setTab={setTab} />
        </div>
        <div style={styles.subDiv}>{renderTabContent()}</div> */}

        <div style={styles.slide}>
          <Slidebar tab={tab} setTab={setTab} selectedImage={selectedImage}/>
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
    width: "25%",
    minWidth: "15em",
  },
  subDiv: {
    width: "800%",
  },
  slide: {
    width:'20%'
  },
};
