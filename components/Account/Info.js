import React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import img1 from "../../Images/A.svg";
import img2 from "../../Images/A1.svg";
import img3 from "../../Images/B.svg";
import img4 from "../../Images/B1.svg";
import img5 from "../../Images/C.svg";
import img6 from "../../Images/D.svg";
import img7 from "../../Images/E.svg";
import img8 from "../../Images/F.svg";
import img9 from "../../Images/G.svg";
import img10 from "../../Images/H.svg";
import img11 from "../../Images/I.svg";
import img12 from "../../Images/J.svg";
import img13 from "../../Images/K.svg";
import img14 from "../../Images/L.svg";
import img15 from "../../Images/M.svg";
import img16 from "../../Images/N.svg";
import img17 from "../../Images/O.svg";
import img18 from "../../Images/P.svg";
import img19 from "../../Images/Q.svg";
import img20 from "../../Images/R.svg";
import img21 from "../../Images/S.svg";
import img22 from "../../Images/T.svg";
import img23 from "../../Images/U.svg";
import img24 from "../../Images/V.svg";
import img25 from "../../Images/W.svg";
import img26 from "../../Images/X.svg";
import img27 from "../../Images/Y.svg";
import img28 from "../../Images/Z.svg";
import img29 from "../../Images/D1.svg";
import img30 from "../../Images/E1.svg";
import { CssTextField } from "../Account/inputtagUi";
import "./index.css";
import Switch from "@mui/material/Switch";

import _ from "underscore";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        _id: "",
        Bio: null,
        Phone: null,
        Email: null,
        username: null,
        channelName: null,
      },
      error: {
        Bio: false,
        Phone: false,
        Email: false,
        username: false,
        channelName: false,
      },

      selectedImage: null,
      chunkSize: 9,
      chunkImages: [],
      activeGroup: 0,
      images: [],
      // value: null,
    };
    this.setSelectedImage = this.setSelectedImage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    //   axios.get(`http://localhost:3000/user/getbyuserName/nirav8`).then((resp) => {
    //   this.setState({resp});
    //   console.log("reso", resp);
    // });
    const userId = JSON.parse(localStorage.getItem("decoded"))?.userId;
    if (userId) {
      axios
        .get(`http://localhost:3004/user/getuser/byid/${userId}`)
        .then((resp) => {
          if (resp?.data?.user) {
            this.setState({
              data: {
                _id: resp.data.user._id,
                Bio: resp.data.user.bio,
                Phone: resp.data.user.phone_no,
                Email: resp.data.user.email,
                username: resp.data.user.username,
                channelName: resp.data.user.name,
              },
            });
          }
        });
    }
    /* this.setState({
      data: {
        ...this.state.data, _id: JSON.parse(localStorage.getItem('decoded'))?.userId,
        username: localStorage.getItem('username'),
        Email: JSON.parse(localStorage.getItem('decoded'))?.email
      }
    }) */

    // this.setState({
    //   chunkImages: _.chunk(this.images || [], this.state.chunkSize),
    // });

    this.getall();
  }
  // getall = () => {
  //   axios.get("http://localhost:3004/avatar/getAll/avt").then((resp) => {
  //     console.log("avatarrrrrrrrrrrrrr", resp.data.Avatar);
  //     // this.images=resp.data.Avatar.avtpic;
  //     resp.data.Avatar.map((item) => {
  //       this.setState({ images: { ...item.avtpic } });
  //     });
  //   });
  // };
  handleInputChange(field, event) {
    this.setState({
      data: { ...this.state.data, [field]: event.target.value },
    });
  }
  getall = async () => {
    await axios.get("http://localhost:3004/avatar/getAll/avt").then((resp) => {
      console.log(resp, "resprespresp");
      //   console.log("avtpic", resp?.data?.Avatar);
      //  this.images=  resp?.data?.Avatar.map((item) => {
      // console.log(item.avtpic);
      // this.setState({
      //   chunkImages: resp?.data?.Avatar.map((item) => {
      //     return item.avtpic
      //   })
      // });
      let imagesAll = resp.data.Avatar.map((item) => item.avtpic);
      console.log(
        "chunks",
        _.chunk(this.state.images || [], this.state.chunkSize)
      );
      this.setState({
        images: imagesAll,
        chunkImages: _.chunk(imagesAll || [], this.state.chunkSize),
      });
      // this.setState({chunkImages:resp?.data?.Avatar.avtpic});
      // this.setState({images: item});
      //  return item.avtpic
      // })
      // this.setState({images:resp.data.Avatar})
      // console.log(this.images,'this.images');

      // this.images=resp.data.Avatar.avtpic;
      // resp.data.Avatar.map((item) => {
      //   console.log(item.avtpic,"resp.data.Avatar");
      //   this.setState({images:{...item.avtpic}})
      // })
    });
  };
  submit() {
    // debugger
    console.warn(this.state);
    this.setState({
      error: {
        ...this.state.error,
        Bio: !this.isEmpty(this.state.data.Bio),
        Phone: !this.isEmpty(this.state.data.Phone),
        Email: !this.isEmpty(this.state.data.Email),
        username: !this.isEmpty(this.state.data.username),
        channelName: !this.isEmpty(this.state.data.channelName),
      },
    });
    setTimeout(() => {
      console.log(this.state.error);
      let set = new Set(Object.values(this.state.error));

      if (!set.has(true)) {
        let data = {
          _id: this.state.data._id,
          email: this.state.data.Email,
          username: this.state.data.username,
          name: this.state.data.channelName,
          bio: this.state.data.Bio,
          phone_no: this.state.data.Phone,
          // avtpic: this.state.selectedImage,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: data,
        };
        console.log("DataDataDataDataDataDataDataDataData", requestOptions);
        axios
          .post("http://localhost:3004/user/update/user", data)
          .then((res) => {
            console.log("resresresresresresresres", res);
          });
        window.location.reload();
        /*  axios.post("http://localhost:3004/user/update/user", data).then((res) => {
           console.log("resresresresresresresres", res);
         }) */
      }
    }, 250);
  }

  isEmpty(text) {
    return !!text;
  }

  validateEmail(params) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return params ? re.test(String(params).toLowerCase()) : true;
  }

  styles = makeStyles((theme) => ({
    indicator: {
      backgroundColor: "green",
      height: "10px",
      top: "45px",
    },
    tabsWrapper: {
      height: "60px",
      background: "lightgreen",
    },
  }));

  setSelectedImage(index) {
    console.log(index, "index");
    this.setState({
      selectedImage: index,
    });

    this.props.selectedImage(index);
  }

  render() {
    console.log(this.state);
    const { children, value, index, ...other } = this.props;
    const label = { inputProps: { "aria-label": "Switch demo" } };

    return (
      <div>
        <div style={styles.mainDiv}>
          <div style={styles.submain}>
            {/* <div style={styles.sub}>
              {this.state.selectedImage ? (
                <img src={this.state.selectedImage} alt='img1' style={styles.img} />
              ) : (
                <CameraAltOutlinedIcon
                  className='remove_circle_outline'
                  color='disabled'
                  style={styles.outLineImage}
                />
              )}
            </div>
            <label style={styles.label}>Upload Your Picture</label> */}
            {/* <span
              style={styles.label}
              role='button'
              onClick={() => {
                this.setState({
                  selectedImage: "",
                });
              }}
            >
              Remove
            </span> */}
          </div>
          <div style={styles.labelDiv}>
            <label style={styles.pickDiv}>Pick Avatar:</label>
            <div className="subDiv">
              <div>
                {this.state.chunkImages[this.state.activeGroup] &&
                this.state.chunkImages[this.state.activeGroup].slice(0, 4) ? (
                  <div className="characterRow" style={styles.avtarDiv}>
                    {this.state.chunkImages[this.state.activeGroup].map(
                      (image, index) => (
                        <img
                          style={styles.imgDiv}
                          key={index}
                          className="m-2"
                          src={image}
                          alt={image}
                          onClick={() => this.setSelectedImage(image)}
                        />
                      )
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {this.state.chunkImages[this.state.activeGroup + 1] &&
                this.state.chunkImages[this.state.activeGroup + 1].slice(
                  0,
                  4
                ) ? (
                  <div className="characterRow" style={styles.avtarDiv}>
                    {this.state.chunkImages[this.state.activeGroup + 1].map(
                      (image, index) => (
                        <img
                          key={index}
                          className="m-2"
                          src={image}
                          alt={image}
                          onClick={() => this.setSelectedImage(image)}
                        />
                      )
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              className="d-flex justify-content-center mb-3"
              style={styles.prevNextDiv}
            >
              <button
                className="css-button-arrow"
                onClick={() => {
                  if (this.state.activeGroup > 1) {
                    this.setState({
                      activeGroup: this.state.activeGroup - 2,
                    });
                  }
                }}
              >
                Prev
              </button>
              <button
                className="ms-2 css-button-arrow--orange-right"
                onClick={() => {
                  if (
                    this.state.chunkImages[this.state.activeGroup + 1]
                      .length === this.state.chunkSize
                  ) {
                    this.setState({
                      activeGroup: this.state.activeGroup + 2,
                    });
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div style={styles.infoDiv}>
          <div className="row">
            <div className="col-xl-6 my-2 col-md-6 col-lg-6 col-sm-12">
              <CssTextField
                required
                label="Channel Name"
                value={this.state.data.channelName}
                id="custom-css-outlined-input"
                onChange={(e) => this.handleInputChange("channelName", e)}
                className="w-100"
                error={this.state.error.channelName}
                {...(this.state.error.channelName && {
                  helperText: "Channel Name can not empty.",
                })}
              />
            </div>
            <div className="col-xl-6 my-2 col-md-6 col-lg-6 col-sm-12">
              <CssTextField
                required
                id="outlined-multiline-flexible"
                label="@username"
                onChange={(e) => this.handleInputChange("username", e)}
                style={styles.input}
                className="w-100"
                value={this.state.data.username}
                error={this.state.error.username}
                {...(this.state.error.username && {
                  helperText: "Username can not empty.",
                })}
              />
            </div>
            <div className="col-xl-6 my-2 col-md-6 col-lg-6 col-sm-12">
              <CssTextField
                required
                id="outlined-multiline-flexible"
                label="Email"
                onChange={(e) => this.handleInputChange("Email", e)}
                style={styles.input}
                value={this.state.data.Email}
                className="w-100"
                error={
                  this.state.error.Email ||
                  !this.validateEmail(this.state.data.Email)
                }
                {...(this.state.error.Email && {
                  helperText: "Email can not empty.",
                })}
                {...(!this.validateEmail(this.state.data.Email) && {
                  helperText: "Email must be email.",
                })}
              />
            </div>
            <div className="col-xl-6 my-2 col-md-6 col-lg-6 col-sm-12">
              <CssTextField
                required
                id="outlined-multiline-flexible"
                label="Phone"
                onChange={(e) => this.handleInputChange("Phone", e)}
                style={styles.input}
                className="w-100"
                value={this.state.data.Phone}
                error={this.state.error.Phone}
                {...(this.state.error.Phone && {
                  helperText: "Phone can not empty.",
                })}
              />
            </div>
            <div className="col-xl-12 gy-2 col-md-12 col-lg-12 col-sm-12">
              <div style={styles.marginDiv}>
                <CssTextField
                  required
                  onChange={(e) => this.handleInputChange("Bio", e)}
                  id="outlined-multiline-flexible"
                  className="form-control"
                  label="Bio"
                  rows={4}
                  multiline
                  style={styles.bioTextarea}
                  value={this.state.data.Bio}
                  error={this.state.error.Bio}
                  {...(this.state.error.Bio && {
                    helperText: "Bio can not empty.",
                  })}
                />
              </div>
            </div>

            {/* <div
              className="d-grid gap-2 d-md-flex justify-content-md-start"
              style={styles.btndiv}
            >
              <Switch {...label} style={styles.switchDiv} />
              <span style={styles.textSwitch}> Get Notification </span> <br />
            </div> */}
          </div>
        </div>

        <div className="d-flex justify-content-end" style={styles.formButton}>
          <button className="css-button-rounded--greenCancel" type="button">
            Cancel
          </button>
          <button
            onClick={() => this.submit()}
            className="css-button-sharp--blue ms-2"
            type="submit"
            value="Submit"
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}
export default App;

const styles = {
  formButton: {
    paddingRight: "30px",
  },
  mainDiv: {
    height: "260px",
    display: "flex",
    // marginLeft: "15px",
    paddingTop: "20px",
  },
  submain: {
    display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-evenly",
    alignItems: "center",
    // padding: "1em",
    boxSizing: "border-box",
  },
  sub: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    backgroundColor: "#C4C4C4",
    height: "100%",
    width: "90%",
    marginBottom: 10,
  },
  img: {
    height: "100%",
    width: "100%",
  },
  outLineImage: {
    width: "65px",
    height: "48.75px",
  },
  label: {
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
  },
  labelDiv: {
    flexGrow: 1,
    // padding: "1em",
    // boxSizing: "border-box",
  },
  pickDiv: {
    color: "#FF9800",
    marginLeft: "40px",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-evenly",
    margin: "0.5em 1em",
  },
  subDiv: {
    // display: "flex",
    // justifyContent: "space-evenly",
    // margin: "0.5em 1em",
    background: "#FFEAC2",
  },
  infoDiv: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 20,
    height: "300px",
  },
  infoLabel: {
    color: "#FF9800",
    fontSize: "18px",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  input: {
    borderColor: "#FF9800",
    height: 45,
  },
  labelBio: {
    fontSize: "18px",
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  bioTextarea: {
    borderColor: "#FF9800",
  },
  button: {
    color: "#FF9800",
    backgroundColor: "#FFFFFF",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    border: "1px solid #FF9800",
    textTransform: "capitalize",
    height: 45,
  },
  buttonSave: {
    color: "#FFFFFF",
    backgroundColor: "#FF9800",
    borderColor: "#FF9800",
    fontSize: 21,
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
    textTransform: "capitalize",
    height: 45,
  },
  btndiv: {
    marginTop: 20,
  },
  mainSectionDiv: {
    width: "100%",
  },
  marginDiv: {
    marginTop: 10,
  },
  switchDiv: {
    color: "#FF9800",
  },
  textSwitch: {
    fontSize: 20,
    color: "#FF9800",
    fontFamily: "Red Hat Display",
    letterSpacing: "0.11em",
  },
  prevNextDiv: {
    marginTop: 20,
  },
  avtarDiv: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  imgDiv: {
    // background:'red',
    // marginLeft:20,
    // marginRight:20
    borderRadius: "50px",
    height: "60px",
    width: "60px",
    objectFit: "cover",
  },
};
