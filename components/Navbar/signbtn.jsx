import {Button, ButtonGroup} from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  GroupBtn: {},
}));

const Signbtn = () => {
  const classes = useStyles();

  const redirect = (url) => {
    window.location.href = url;
  };

  return (
    <ButtonGroup disableElevation variant='outlined' className={classes.GroupBtn}>
      {/* <Link to="/login"> */}
      <Button onClick={() => redirect("/signin")} style={styles.signInBtn}>
        Sign In
      </Button>
      {/* </Link> */}

      <Button onClick={() => redirect("/signup")} style={styles.signUpBtn}>
        Sign Up
      </Button>
    </ButtonGroup>
  );
};

export default Signbtn;

const styles = {
  signInBtn: {
    border: "0.5px solid #ff9800",
    borderRadius: "30px 0px 0px 30px",
  },
  signUpBtn: {
    border: "0.5px solid #ff9800",
    borderRadius: "0px 30px 30px 0px",
  },
};
