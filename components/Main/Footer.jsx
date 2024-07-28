import {
  DescriptionOutlined,
  FavoriteBorderOutlined,
  FilterAltOutlined,
  ManageAccounts,
} from "@mui/icons-material";
import {Button, Divider, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "153px",
    height: "418px",
  },
  logoimg: {
    width: "190px",
    height: "190px",
  },
  divider: {
    background: "#ffffff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  const msg = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <Grid
        item
        container
        xs={12}
        bgcolor='#000000'
        marginTop={10}
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={2} container justifyContent='flex-start'>
          <img className={classes.img} src='/img/1.png' alt='' />
        </Grid>

        <Grid item container xs={8} spacing={2}>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6} container direction='row' justifyContent='center' alignItems='center'>
              <img className={classes.logoimg} src='/img/Rlogo.svg' alt='' />
            </Grid>

            <Divider
              classes={{
                root: classes.divider,
              }}
              orientation='vertical'
              variant='middle'
              style={{
                color: "#FFFFFF",
                height: "100%",
                border: "1px solid #FFFFFF",
              }}
              flexItem
            />

            <hr />

            <Grid item xs={5} container direction='row' justifyContent='center' alignItems='center'>
              <Grid item xs={3}>
                <Button
                  fontSize='10'
                  size='large'
                  style={{
                    textTransform: "capitalize",
                    color: "#ff9800",
                    letterSpacing: "0.11em",
                    fontFamily: "Red Hat Display",
                    fontWeight: "Bold",
                    fontSize: "1.15em",
                  }}
                  onClick={() => msg("/Account?tab=Account")}
                  startIcon={<img src='/img/account.svg' alt='' height='19px' width='19px' />}
                  disableRipple
                  disableFocusRipple
                >
                  Account
                </Button>
                <NavLink
                  to='/channel/create'
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    fontSize='10'
                    size='large'
                    style={{
                      color: "#ff9800",
                      textTransform: "capitalize",
                      letterSpacing: "0.11em",
                      fontFamily: "Red Hat Display",
                      fontWeight: "Bold",
                      fontSize: "1.15em",
                    }}
                    startIcon={<img src='/img/recipes.svg' alt='' height='21px' width='21px' />}
                    disableRipple
                    disableFocusRipple
                  >
                    Recipes
                  </Button>
                </NavLink>
                <NavLink
                  to='/filter/index'
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    fontSize='10'
                    size='large'
                    style={{
                      textTransform: "capitalize",
                      color: "#ff9800",
                      letterSpacing: "0.11em",
                      fontFamily: "Red Hat Display",
                      fontWeight: "Bold",
                      fontSize: "1.15em",
                    }}
                    startIcon={<img src='/img/Ofilter.svg' alt='' height='21px' width='21px' />}
                    disableRipple
                    disableFocusRipple
                  >
                    Filter
                  </Button>
                </NavLink>
              </Grid>

              <Divider variant='middle' />

              <Grid item xs={3} marginBottom={6}>
                <NavLink
                  to='/filter/favorites'
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    fontSize='10'
                    size='large'
                    style={{
                      textTransform: "capitalize",
                      color: "#ff9800",
                      letterSpacing: "0.11em",
                      fontFamily: "Red Hat Display",
                      fontWeight: "Bold",
                      fontSize: "1.15em",
                    }}
                    startIcon={<img src='/img/Ofavorite.svg' alt='' height='21px' width='21px' />}
                    disableRipple
                    disableFocusRipple
                  >
                    Favorite
                  </Button>
                </NavLink>

                {/* <NavLink
                  to='/channel'
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <Button
                    fontSize='10'
                    size='large'
                    style={{
                      textTransform: "capitalize",
                      color: "#ff9800",
                      letterSpacing: "0.11em",
                      fontFamily: "Red Hat Display",
                      fontWeight: "Bold",
                      fontSize: "1.15em",
                    }}
                    startIcon={<img src='/img/channel.svg' alt='' height='21px' width='21px' />}
                    disableRipple
                    disableFocusRipple
                  >
                    Channel
                  </Button>
                </NavLink> */}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            container
            direction='row'
            justifyContent='center'
            alignItems='flex-end'
          >
            <Grid item xs={3.5} marginBottom={-9}>
              <Typography color='#ff9800' fontFamily='Red Hat display'>
                ©Recipely.All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={2} container justifyContent='flex-end'>
          <img className={classes.img} src='/img/2.png' alt='' />
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
