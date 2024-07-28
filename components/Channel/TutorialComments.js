// import React, {useState} from "react";
// import {IconButton} from "@mui/material";
// import Group from "../../Images/Group.png";

// export default function TutorialComments() {

//   const list = [
//     {
//       id: 1,
//       Image: require("../../Images/masterchef1.png"),
//       Comment: "Royal Forked Commented on Paneer Kadhai:",
//       SubComment:
//         "You are Great Chef makes my Day Delightful.It was Very Yummy and Test, i made this Recipe twice and it was owsum",
//       ImageRecipe: require("../../Images/PaneerKadhai2.png"),
//       Time: "02:45",
//       Date: "12/12/21",
//     },
//     {
//       id: 2,
//       Image: require("../../Images/Cup.png"),
//       Comment: "Bowl Commented on Matar Paneer:",
//       SubComment:
//         "You are Great Chef makes my Day Delightful.It was Very Yummy and Test, i made this Recipe twice and it was owsum",
//       ImageRecipe: require("../../Images/PaneerKadhai2.png"),
//       Time: "02:45",
//       Date: "12/12/21",
//     },
//   ];
//   return (
//     <div>
//       <div style={styles.mainDiv} />
//       <div style={styles.tutorialDiv}>
//         <span style={styles.tutorialText}>Tutorial Comments</span>
//       </div>
//       <div className='col'>
//         <div className='table-responsive'>
//           <table className='table' style={styles.tableDiv}>
//             <thead>
//               <tr className='align-middle'>
//                 <th>User</th>
//                 <th>Comment</th>
//                 <th>On Recipe</th>
//                 <th>Time</th>
//                 <th>Visibility</th>
//               </tr>
//             </thead>
//             <tbody>
//               {list.map((item) => (
//                 <tr key={item.id}>
//                   <td className='align-middle'>
//                     <img src={item.Image} alt='preview' height={"70px"} width={"70px"} />
//                   </td>

//                   <td className='align-middle'>
//                     <div style={styles.tdDiv}>
//                       <span style={styles.commentText}>{item.Comment}</span>
//                       <span style={styles.subCommentText}>{item.SubComment}</span>
//                     </div>
//                   </td>
//                   <td className='align-middle'>
//                     <img src={item.ImageRecipe} alt='preview' height={"70px"} width={"70px"} />
//                   </td>
//                   <td className='align-middle'>
//                     <div>
//                       <span style={styles.timeText}>{item.Time}</span>
//                     </div>
//                     <span style={styles.dateText}>{item.Date}</span>
//                   </td>
//                   <td className='align-middle'>
//                     <select
//                       style={styles.selectDiv}
//                       className='form-select-indicator-color'
//                       form='true'
//                     >
//                       <option value=''>Hidden</option>
//                       <option value='1'>Show</option>
//                     </select>
//                   </td>
//                   <td className='align-middle'>
//                     <IconButton fontSize='large' aria-label='Add'>
//                       <img
//                         src={Group}
//                         height={"25px"}
//                         width={"25px"}
//                         alt='Group'
//                       />
//                     </IconButton>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { width } from "@mui/system";
import "./ChannelComponet/AccountList.css";
import axios from "axios";
import moment from "moment";

export default function TutorialComments() {
  const [recipes, setRecipes] = useState([]);
  const [recipesDetail, setRecipesDetail] = useState(null);
  const [commentDetail, setCommentDetail] = useState(null);
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
    {
      field: "Image",
      headerName: "User",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Typography style={styles.commentText}>{params.row.Image}</Typography>
      ),
    },
    {
      field: "Comment",
      headerName: "Comment",
      width: 500,
      sortable: false,
      renderCell: (comm) => (
        <Typography style={styles.commentText}>{comm.row.Comment}</Typography>
      ),
    },
    {
      field: "ImageRecipe",
      headerName: "On Recipe",
      width: 170,
      sortable: false,
      renderCell: (params) => (
        <img src={params.row.ImageRecipe} style={styles.RecImgDiv} />
      ),
    },
    {
      field: "Time",
      headerName: "Time",
      width: 110,
      sortable: false,
    },
    {
      field: " ",
      headerName: " ",
      width: 200,
      sortable: false,
      renderCell: (Visibil) => (
        <div style={styles.selectdiv}>
          {/* <div>
            <FormControl sx={{ minWidth: 100 }}>
              <InputLabel id="demo-simple-select-label">visibility</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Visibility"
                name={Visibil.row.id}
                value={Visibil.row.visibility}
                // onChange={handleChange}
              >
                <MenuItem value={true}>Public</MenuItem>
                <MenuItem value={false}>Private</MenuItem>
              </Select>
            </FormControl>
          </div> */}
          <div
            style={{
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              fontSize="large"
              aria-label="Add"
              style={styles.iconeBtn}
            >
              <DeleteForeverIcon
                style={styles.deleteImg}
                onClick={() => deleteComment(Visibil.row.id)}
              />
            </IconButton>
          </div>
        </div>
      ),
    },
    // {
    //   field: " ",
    //   headerName: " ",
    //   width: 50,
    //   sortable: false,
    //   renderCell: (style) => (

    //   ),
    // },
  ]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => calculateData(), [recipes, recipesDetail, commentDetail]);

  const getData = () => {
    axios
      .get(
        `http://localhost:3004/channel/getchannel/byid/${
          JSON.parse(localStorage.getItem("decoded")).channelId
        }`
      )
      ?.then((resp) => {
        setRecipes(resp.data.channel.recipe_ids);
        if (resp.data.channel.recipe_ids.length) {
          resp.data.channel.recipe_ids.forEach((recipe) => {
            getRecipe(recipe);
            getComments(recipe);
          });
        }
      });
  };

  const calculateData = () => {
    if (recipesDetail && commentDetail) {
      let formatedData = [];

      Object.keys(recipesDetail).map((recipe) => {
        if (commentDetail[recipe]?.length) {
          commentDetail[recipe].forEach((comment) => {
            formatedData.push({
              id: comment.id,
              Image: comment.user,
              Comment: comment.comment,
              ImageRecipe: recipesDetail[recipe]?.Rpic,
              Time: moment(recipesDetail[recipe]?.time).format("HH:mm"),
              Date: moment(recipesDetail[recipe]?.time).format("DD/MM/YYYY"),
            });
          });
        }
      });

      setData(formatedData);
    }
  };

  const getRecipe = (recipeId) => {
    axios(`http://localhost:3004/recipe/get/tutorial/${recipeId}`, {
      "Content-Type": "application/json",
    })
      .then((res) => {
        setRecipesDetail((prev) => {
          return {
            ...prev,
            [recipeId]: res.data.recipe,
          };
        });
      })
      .catch((error) => console.log(error));
  };

  const getComments = (recipeId) => {
    axios(`http://localhost:3004/comment/getCommentRecipe/${recipeId}`, {
      "Content-Type": "application/json",
    })
      .then((res) => {
        setCommentDetail((prev) => {
          return {
            ...prev,
            [recipeId]: res.data.map((comment) => {
              return {
                id: comment._id,
                comment: comment.comment,
                user: comment.user.username,
              };
            }),
          };
        });
      })
      .catch((error) => console.log(error));
  };

  const deleteComment = (commentId) => {
    axios
      .delete(`http://localhost:3004/comment/delete/comment/${commentId}`, {
        "Content-Type": "application/json",
      })
      .then((res) => {
        getData();
      })
      .catch((error) => console.log(error));
  };

  console.log(commentDetail);
  console.log(recipesDetail);
  return (
    <div style={styles.content}>
      <div style={styles.mainDiv} />
      <div style={styles.tutorialDiv}>
        <span style={styles.tutorialText}>Tutorial Comments</span>
      </div>

      <DataGrid
        rows={data}
        columns={columns}
        disableColumnSelector
        disableSelectionOnClick
        disableColumnMenu
        pageSize={4}
        rowsPerPageOptions={[5]}
        rowHeight={90}
        style={styles.dataDiv}
      />
    </div>
  );
}

const styles = {
  content: {
    height: 450,
    width: "100%",
  },
  ImgDiv: {
    marginLeft: 10,
    width: "60px",
  },
  RecImgDiv: {
    width: "60px",
    alignItem: "center",
    justifyContent: "center",
    display: "flex",
  },
  selectdiv: {
    display: "flex",
    flexDirection: "row",
  },
  iconeBtn: {
    marginLeft: 30,
  },
  deleteImg: {
    color: "red",
    width: 30,
    height: 30,
  },
  dataDiv: {
    fontSize: 20,
    fontFamily: "Red Hat Display",
    color: "#000000",
    letterSpacing: "0.11em",
    height: "75vh",
  },
  mainDiv: {
    height: "1px",
    background: "#000000",
  },
  tutorialDiv: {
    margin: 30,
  },
  tutorialText: {
    fontSize: 23,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  commentText: {
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
};
