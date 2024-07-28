import React from "react";
import "./index.css";

const Tag = ({name}) => {
  return (
    <div style={styles.name} variant='contained'>
      {name}
    </div>
  );
};

export default Tag;
const styles = {
  name: {
    backgroundColor: "#FFEAC2",
    color: "#FF9800",
    width: "fit-content",
    display: "flex",
    alignItems: "center",
    padding: "6px",
    borderRadius: "5px",
  },
};
