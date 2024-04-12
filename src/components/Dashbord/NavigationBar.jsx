import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../Css/navbar.css";
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
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import avatar from "../../Images/avatar.webp";
import logo from "../../Images/logoNew.png";

import Login from "../SignUp/Login";
import { useLogin } from "../Contexts/LoginContext";
import { fireAuth } from "../firebase/fireBase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const settings = ["Profile", "Account", "Logout"];

export const LogoImage = styled("img")(({ src }) => ({
  scr: `url(${src})`,
  width: "20vw",
  height: "40vh",
  marginLeft:"-4%",
}));


const NavigationBar = () => {
  const [navBar, setNavBar] = useState(false);
  const { isLoggedIn, login, logout } = useLogin();
  const [isLoading, setIsLoading] = useState(true);
  const [click, setClick] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleClick = () => setClick(!click);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  window.addEventListener("scroll", navScroller);
  return (
    <nav className={navBar ? "navbar active" : "navbar"}>
      <div className="nav-container">
        <NavLink exact to="/" className="nav-logo">
          <LogoImage src={logo} alt="logo"/>
        </NavLink>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/cars"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Cars
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact-us"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">{isLoggedIn ? null : <Login />}</li>
        </ul>
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
      </div>
    </nav>
  );
};

export default NavigationBar;
