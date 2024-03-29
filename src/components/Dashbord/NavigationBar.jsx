import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ListItemText,
} from "@mui/material";
import {
  AppContainer,
  AppbarHeader,
  LogoImage,
  MyList,
} from "../../theme/navBar";
import IconButton from "@mui/material/IconButton";
import logo from "../../Images/logoNew.png";
import avatar from "../../Images/avatar.webp";
import { Link, animateScroll as scroll } from "react-scroll";
import { onAuthStateChanged, signOut } from "firebase/auth";

import "../../Css/navbar.css";
import Login from "../SignUp/Login";
import { useLogin } from "../Contexts/LoginContext";
import { fireAuth } from "../firebase/fireBase-config";

const settings = ["Profile", "Account", "Logout"];

const style = {
  marginRight: "7vw",
};

function NavigationBar({ loginHandleClickOpen }) {
  const [navBar, setNavBar] = useState(false);
  const { isLoggedIn, login, logout } = useLogin();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
      setIsLoading(false);
      if (user) {
        login();
      } else {
        logout();
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, [login, logout]);

  const handleLogout = async () => {
    try {
      await signOut(fireAuth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const navScroller = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  const handelCars = () => {
    navigate("/cars");
  };

  const handelHome = () => {
    navigate("/");
  };

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // primaryTypographyProps={{style:null}} {navBar ? "navbar active" : "navbar"}
  if (isLoading) {
    return <div>Loading...</div>;
  }
  window.addEventListener("scroll", navScroller);

  return (
    <>
      <AppContainer container className={navBar ? "navbar active" : "navbar"}>
        <AppbarHeader>
          <LogoImage src={logo} alt="logo" onClick={handelHome} />
        </AppbarHeader>
        <MyList id="navList" type="row">
          <Link to="home" smooth={true} duration={500}>
            <ListItemText
              primaryTypographyProps={{ style: style }}
              primary="Home"
            />
          </Link>
          <Link onClick={handelCars} smooth={true} duration={500}>
            <ListItemText
              primaryTypographyProps={{ style: style }}
              primary="Car"
            />
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <ListItemText
              primaryTypographyProps={{ style: style }}
              primary="Service"
            />{" "}
          </Link>
          <Box>
            <ListItemText>
              {isLoggedIn ? null : <Login />}
              {/* <Login /> */}
            </ListItemText>
          </Box>
        </MyList>
        <Box sx={{ flexGrow: 0, marginRight: "1vw" }} ml={2}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="emy Sharp" src={avatar} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={
                  setting === "Logout" ? handleLogout : handleCloseUserMenu
                }
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </AppContainer>
    </>
  );
}
export default NavigationBar;
