import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import {ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import SettingsIcon from "@mui/icons-material/Settings";

const useStyles = makeStyles((theme) => ({}));

export default function NotificationMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const msg = (url) => {
    window.location.href = url;
  };

  return (
    <React.Fragment>
      <Box style={styles.mainBox}>
        <Tooltip title='Notifications'>
          <IconButton
            onClick={handleClick}
            // size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <img src='/img/notification.svg' height='35' width='35' alt='' />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 5px #FF980029)",
            mt: 1,
            "& .MuiIcon-root": {
              width: 60,
              height: 60,
              ml: -0.5,
              mr: 1,
            },
            "& .MuiMenu-list": {
              bgcolor: "#ff9800",
              borderRadius: "5px",
              fontFamily: "'Red Hat Display', sans-serif",
              color: "white",
            },
            "& .MuiTypography-body2": {
              maxWidth: "100px",
            },

            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "#ff9800",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{
          horizontal: "right",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <MenuItem>
          <ListItemText>
            <Typography fontFamily='Red Hat Display' letterSpacing='0.11em' fontSize={20}>
              Notifications
            </Typography>
          </ListItemText>
          <SettingsIcon
            onClick={() => msg("/Account?tab=Notification   ")}
            style={styles.settingIcon}
          />
        </MenuItem>

        <Divider />

        <MenuItem>
          <ListItemIcon>
            <img src='/img/32.png' alt='' height='70px' width='70px' />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant='body1'
              marginLeft={1}
              fontFamily='Red Hat Display'
              letterSpacing='0.11em'
              fontWeight='Bold'
            >
              Royal Forked Commented on Paneer Kadhai:
            </Typography>
            <Typography
              variant='body1'
              marginLeft={1}
              gutterBottom
              noWrap
              style={styles.textWidth}
              fontFamily='Red Hat Display'
              letterSpacing='0.11em'
            >
              You are Great Chef makes my Day Delightful. It was Very Yummy and Test...
            </Typography>
            <Typography fontSize='9px' color='#D3D3D3' marginLeft={1}>
              1 min ago
            </Typography>
          </ListItemText>
          <ListItemIcon>
            <img src='/img/recipe.png' alt='' height='70px' width='70px' />
          </ListItemIcon>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <img src='/img/15.png' alt='' height='70px' width='70px' />
          </ListItemIcon>
          <ListItemText>
            <Typography variant='body1' gutterBottom marginLeft={1}>
              Royal Forked Commented on Paneer Kadhai:
            </Typography>
            <Typography
              variant='body1'
              gutterBottom
              marginLeft={1}
              className={classes.typo}
              noWrap
              style={styles.textWidth}
            >
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without relying on meaningful
              content.
            </Typography>
            <Typography fontSize='9px' color='#D3D3D3' marginLeft={1}>
              1 min ago
            </Typography>
          </ListItemText>
          <ListItemIcon>
            <img src='/img/noodle.png' alt='' height='70px' width='70px' />
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

const styles = {
  mainBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  settingIcon: {
    height: "25",
    width: "25",
    color: "#FFFFFF",
  },
  textWidth: {
    maxWidth: 400,
  },
};
