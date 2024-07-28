import React from "react";
import { Button } from "@mui/material";

const Tag = ({ name }) => {
  const renderTag = () => {
    switch (name) {
      case "+3 More":
        return <Button style={styles.btnMainName}>{name}</Button>;
      default:
        return (
          <Button style={styles.btnName} variant="container">
            {name}
          </Button>
        );
    }
  };
  return <>{renderTag()}</>;
};
export default Tag;

const styles = {
  btnMainName: {
    color: "#A6A5A5",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    display: "flex",
    background: " #E5E5E5",
    borderRadius: "5px",
    fontSize: "13px",
    lineHeight: "20px",
    marginRight: "6px",
    marginTop: "6px",
    fontFamily: "Red Hat Display",
    textTransform: "capitalize",
  },
  btnName: {
    background: "#FFEAC2",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    // display: "flex",
    borderRadius: "5px",
    fontSize: "13px",
    // lineHeight: "20px",
    marginRight: "6px",
    marginTop: "6px",
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    textTransform: "capitalize",
  },
};
