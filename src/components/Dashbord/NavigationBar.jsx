import {useState} from "react";
import { Box, Grid, Typography,AppBar,Toolbar,Menu,Container,Avatar,Button,Tooltip,MenuItem, ListItemText  } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { AppContainer, AppbarHeader, LogoImage, MyList } from "../../theme/navBar";

import "../../Css/navbar.css";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavigationBar() {

  const [navBar,setNavBar] = useState(false);

  const navigate = useNavigate()

  const navScroller = ()=>{
    if(window.scrollY >= 80){
      setNavBar(true);
    }
    else{
      setNavBar(false)
    }
  }

  window.addEventListener("scroll",navScroller)
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (

    <>
    <AppContainer container className={navBar?"navbar active":"navbar"}>
      <AppbarHeader>
        <LogoImage/>
      </AppbarHeader>
      <MyList id="navList" type="row">
        <ListItemText onClick={null} primaryTypographyProps={{style:null}} primary="Home"/>
        <ListItemText onClick={null} primary="Home"/>
        <ListItemText onClick={null} primary="Home"/>
      </MyList>

    </AppContainer>
    </>
    // <AppBar position="static" style={{backgroundColor:"#333333"}}>
    //   <Container maxWidth="xl">
    //     <Toolbar disableGutters>
    //       <AdbIcon x={{flexGrow: 1, display: { xs: "none", md: "flex" }, mr: 1 }} />
    //       <Typography
    //         variant="h6"
    //         noWrap
    //         component="a"
    //         href="#app-bar-with-responsive-menu"
    //         sx={{
    //           mr: 2,
    //           flexGrow: 120,
    //           display: { xs: "none", md: "flex" },
    //           fontFamily: "monospace",
    //           fontWeight: 700,
    //           letterSpacing: ".3rem",
    //           color: "inherit",
    //           textDecoration: "none",
    //         }}
    //       >
    //         AUTOMOBILE
    //       </Typography>

    //       <Box sx={{ flexGrow: 20, display: { xs: "none", md: "flex" } }}>
    //         <Box>
    //         <Link to="/">Home</Link>
    //         </Box>
    //         <Box>
    //         <Link to="/cars">Cars</Link>
    //         </Box>
    //         <Box>
    //         <Link to="/services">Services</Link>
    //         </Box>
    //       </Box>

    //       <Box sx={{ flexGrow: 0 }}>
    //         <Tooltip title="Open settings">
    //           <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //             <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //           </IconButton>
    //         </Tooltip>
    //         <Menu
    //           sx={{ mt: "45px" }}
    //           id="menu-appbar"
    //           anchorEl={anchorElUser}
    //           anchorOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: "top",
    //             horizontal: "right",
    //           }}
    //           open={Boolean(anchorElUser)}
    //           onClose={handleCloseUserMenu}
    //         >
    //           {settings.map((setting) => (
    //             <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //               <Typography textAlign="center">{setting}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //       </Box>
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
}
export default NavigationBar;
