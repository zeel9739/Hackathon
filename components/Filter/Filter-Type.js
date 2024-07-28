import * as React from "react";
import {styled} from "@mui/material/styles";
import Card from "@mui/material/Card";
import {Button, Stack, Grid, Collapse} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {useState, useEffect} from "react";
import axios from "../../axios";

const ExpandMore = styled((props) => {
  const {expand, ...other} = props;
  return <IconButton {...other} />;
})(({theme, expand}) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function FilterType({mainData, setMainData, onFilterClick}) {
  const handleMoreClick = (id) => {
    const dummyTypes = [...mainData];
    const typeIndex = dummyTypes.findIndex((item) => {
      return item.id === id;
    });
    if (typeIndex > -1) {
      dummyTypes[typeIndex].isMore = !dummyTypes[typeIndex].isMore;
      setMainData(dummyTypes);
    }
  };
  return (
    <div style={styles.mainDiv}>
      {mainData?.map((type) => {
        // console.log("item: ", type);
        // console.log("photos",type.arr.photo);
        return (
          <Card key={type.id} style={styles.card}>
            <div style={styles.divlogo}>
              <img height={"80px"} width={"80px"} src={type.photo} alt='img' />
              <div style={styles.divTypo}>
                <Typography style={styles.typoTitle}>{type.category_name}</Typography>
                <Typography style={styles.typoLength}>
                  {`1/${type.arr.length} ingredients`}
                </Typography>
              </div>
              <IconButton onClick={() => handleMoreClick(type.id)} size='small'>
                {type.isMore ? (
                  <ExpandMoreIcon fontSize='inherit' />
                ) : (
                  <ExpandLessIcon fontSize='inherit' />
                )}
              </IconButton>
            </div>
            <CardContent style={styles.cardContent}>
              {!type.isMore && (
                <Stack direction='row' spacing={2}>
                  <Grid container>
                    {type.arr.slice(0, 5).map((tag) => (
                      <Button
                        key={tag.id}
                        onClick={() => {
                          // console.log(`type`, type)
                          onFilterClick(type.id, tag.id);
                        }}
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                        style={tag.isActive ? styles.isactive : styles.isNotActive}
                        variant='container'
                      >
                        {tag.name}
                      </Button>
                    ))}

                    <Button onClick={() => handleMoreClick(type.id)} style={styles.btnIngre}>
                      {`+${type.arr.length - 5} More`}
                    </Button>
                  </Grid>
                </Stack>
              )}
              <Collapse in={type.isMore} timeout='auto' unmountOnExit>
                <CardContent>
                  <Stack direction='row' spacing={2}>
                    <Grid container>
                      {type.arr.map((moreTag) => (
                        <Button
                          key={moreTag.id}
                          onClick={() => onFilterClick(type.id, moreTag.id)}
                          onSubmit={(e) => {
                            e.preventDefault();
                          }}
                          style={moreTag.isActive ? styles.isactive : styles.isNotActive}
                          variant='container'
                        >
                          {moreTag.name}
                        </Button>
                      ))}
                    </Grid>
                  </Stack>
                </CardContent>
              </Collapse>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
const styles = {
  mainDiv: {
    padding: "10px",
    boxShadow: "9px",
  },
  card: {
    maxWidth: 335,
    background: "#FFFFFF",
    boxShadow: " 0px 2px 9px rgba(0, 0, 0, 0.25)",
    borderRadius: "12px",
    marginBottom: "20px",
  },
  divlogo: {
    margin: "10px 10px 0px 10px",
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #BFBFBF",
    paddingBottom: "5px",
    justifyContent: "space-between",
  },
  divTypo: {
    display: "flex",
    flexDirection: "column",
  },
  typoTitle: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "17px",
    color: "#FF9800",
    marginRight: "35px",
  },
  typoLength: {
    fontWeight: "500",
    fontSize: "9px",
    lineHeight: "25px",
    letterSpacing: "-0.03em",
    color: "#A6A5A5",
  },
  cardContent: {
    padding: "8px",
  },
  btnIngre: {
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
  isactive: {
    background: "#FF9800",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    display: "flex",
    borderRadius: "5px",
    fontSize: "13px",
    lineHeight: "20px",
    marginRight: "6px",
    marginTop: "6px",
    color: "#FFFFFF",
    fontFamily: "Red Hat Display",
    textTransform: "capitalize",
  },
  isNotActive: {
    background: "#FFEAC2",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    display: "flex",
    borderRadius: "5px",
    fontSize: "13px",
    lineHeight: "20px",
    marginRight: "6px",
    marginTop: "6px",
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    textTransform: "capitalize",
  },
};
