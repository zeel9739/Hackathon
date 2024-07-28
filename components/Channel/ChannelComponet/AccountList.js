import React, { useEffect, useState } from "react";
import Emoji from "../../../Images/Emoji.svg";
import Avatar from "../../../Images/Avatar.svg";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Button } from "@mui/material";
// import back from "../../../Images/back.png";
import "./AccountList.css";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import CommentIcon from "@mui/icons-material/Comment";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";

export default function AccountList(props) {
  // =============== get api =====================
  const [getOneUser, setGetOneUser] = useState([]);

  useEffect(() => {
    getoneUser();
  }, []);

  const getoneUser = (username) => {
    axios
      .get(`http://localhost:3004/user/get/byusername/${username}`)
      .then((resp) => {
        console.log("resp user ===============", resp);
        setGetOneUser(resp.data.user);
      });
  };

  console.log(props);
  return (
    <div>
      <div style={{ height: "90vh" }}>
        <div
          style={{
            height: "100%",
            borderRight: "1px solid #000000",
            borderTop: "1px solid #000000",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            paddingTop: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
              }}
            >
              <img src={Emoji} alt="Emoji" height={"100%"} width={"100%"} />
            </div>
            <div
              style={{
                height: 150,
                width: 150,
              }}
            >
              <img src={Avatar} alt="Avatar" height={"100%"} width={"100%"} />
            </div>
          </div>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              marginTop: 10,
            }}
          >
            <span
              style={{
                fontSize: 18,
                color: "#FF9800",
                fontFamily: "Red Hat Display",
                letterSpacing: "0.11em",
                fontWeight: "bold",
              }}
            >
              {JSON.parse(localStorage.getItem("decoded")).email || ""}{" "}
            </span>
            <span
              style={{
                fontSize: 15,
                color: "#FF9800",
                // fontFamily: "Red Hat Display",
                letterSpacing: "0.11em",
                fontFamily: "bold",
              }}
            >
              {localStorage.getItem("username") || ""}
            </span>
          </div>

          <div
            style={{
              marginTop: 30,
            }}
          >
            <div
              style={{
                backgroundColor: "#A6A5A5",
                height: "0.5px",
                width: "100%",
              }}
            />
            <ListItemButton
              style={{
                height: 50,
              }}
              className={`allContentHover ${
                props.tab === "Content" && "bgColor"
              }`}
              onClick={() => props.setTab("Content")}
            >
              <ListItemIcon>
                <PlaylistPlayIcon
                  fontSize="large"
                  className={`${
                    props.tab === "Content" && "text-white"
                  } simple`}
                />
              </ListItemIcon>
              <span
                className={`${props.tab === "Content" && "text-white"} simple`}
              >
                Content
              </span>
            </ListItemButton>

            <div
              style={{
                backgroundColor: "#A6A5A5",
                height: "0.5px",
                width: "100%",
              }}
            />

            <ListItemButton
              style={{
                height: 50,
              }}
              className={`allContentHover ${
                props.tab === "Playlist" && "bgColor"
              }`}
              onClick={() => props.setTab("Playlist")}
            >
              <ListItemIcon>
                <PlaylistAddCheckIcon
                  fontSize="large"
                  className={`${
                    props.tab === "Playlist" && "text-white"
                  } simple`}
                />
              </ListItemIcon>
              <span
                className={`${props.tab === "Playlist" && "text-white"} simple`}
              >
                playlist
              </span>
            </ListItemButton>

            <div
              style={{
                backgroundColor: "#A6A5A5",
                height: "0.5px",
                width: "100%",
              }}
            />

            <ListItemButton
              style={{
                height: 50,
              }}
              className={`allContentHover ${
                props.tab === "Comments" && "bgColor"
              }`}
              onClick={() => props.setTab("Comments")}
            >
              <ListItemIcon>
                <CommentIcon
                  fontSize="large"
                  alt="preview"
                  className={`${
                    props.tab === "Comments" && "text-white"
                  } simple`}
                />
              </ListItemIcon>
              <span
                className={`${props.tab === "Comments" && "text-white"} simple`}
              >
                Comments
              </span>
            </ListItemButton>

            <div
              style={{
                backgroundColor: "#A6A5A5",
                height: "0.5px",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            {/* <Button
              style={{
                textTransform: "capitalize",
                fontSize: 18,
                color: "#FF9800",
                fontFamily: "Red Hat Display",
                letterSpacing: "0.11em",
                fontWeight: "bold",
              }}
              onClick={() => (window.location.href = "/")}
              startIcon={<KeyboardBackspaceIcon  fontSize='large' />}
            >
              Back
            </Button> */}
            <button
              fontSize="10"
              size="large"
              style={{ borderRadius: 30 }}
              className="css-button-sliding-to-left--green"
              onClick={() => (window.location.href = "/channel")}
            >
              <KeyboardBackspaceIcon fontSize="small" />
              <span className="ps-2">Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
