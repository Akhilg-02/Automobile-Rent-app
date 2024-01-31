import { useState } from "react";
import logo from "../../Images/logoNew.png";
import {
  Box,
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import { Route, Routes, useNavigate } from "react-router-dom";
import {
  AppContainer,
  AppbarHeader,
  LogoImage,
  MyList,
} from "../../theme/navBar";
import { Link, animateScroll as scroll } from "react-scroll";

import "../../Css/navbar.css";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const style = {
  marginRight: "7vw",
};

function NavigationBar() {
  const [navBar, setNavBar] = useState(false);

  const navigate = useNavigate();

  const navScroller = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

 
  const [anchorElNav, setAnchorElNav] =useState(null);
  const [anchorElUser, setAnchorElUser] =useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; 
  
  // primaryTypographyProps={{style:null}} {navBar ? "navbar active" : "navbar"}
  
  window.addEventListener("scroll", navScroller);

  return (
    <>
      <AppContainer container className={navBar ? "navbar active" : "navbar"}>
        <AppbarHeader>
          <LogoImage src={logo} alt="logo" />
        </AppbarHeader>
        <MyList id="navList" type="row">
          <Link to="home" smooth={true} duration={500}>
            <ListItemText
              primaryTypographyProps={{ style: style }}
              primary="Home"
            />
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <ListItemText
              primaryTypographyProps={{ style: style }}
              primary="Car"
            />
          </Link>
          <Link to="services" smooth={true} duration={500}>
            <ListItemText
              rimaryTypographyProps={{ style: style }}
              primary="Service"
            />{" "}
          </Link>
        </MyList>
        <Box sx={{ flexGrow: 0 }} ml={2}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
