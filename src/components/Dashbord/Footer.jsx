import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import AdbIcon from "@mui/icons-material/Adb";


import "../../Css/footer.css";

const Footer = () => {
  return (
    <Box id="footer">
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {/* Website Information */}
        <Grid item xs={12} md={3}>
          {/* <img src="your-logo.png" alt="Website Logo" /> */}
          <AdbIcon x={{flexGrow: 1, display: { xs: "none", md: "flex" }, r: 1 }} />
          <Typography
            variant="h6"
            oWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              r: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            AUTOMOBILE
          </Typography>
          <br />
          <br />
          <Typography>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. normal
            distribution of letters, as opposed to using 'Content here.
          </Typography>

          {/* ------ */}
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
            <Fab color="secondary" aria-label="edit">
              <EditIcon />
            </Fab>
            <Fab variant="extended">
              <NavigationIcon/>
              {/* Navigate sx={{ mr: 1 }} */}
            </Fab>
            <Fab aria-label="like">
              <FavoriteIcon />
            </Fab>
          </Box>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={3}>
          <Box ml={8}>
            <Typography variant="h5">Quick Links</Typography>
            <a>Home</a>
            <br />
            <a>About Us</a>
            <br />
            <a>Services</a>
          </Box>
        </Grid>

        {/* Services */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5">Services</Typography>
          Wedding Rides
          <br />
          Corporate Rides
          <br />
          Executive Rides
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5">Contact Us</Typography>
          <Box style={{ display: "flex", marginTop: "3vh" }}>
            <Box mr={3}>
              <PhoneIcon style={{ fontSize: "30px" }} />
            </Box>
            <Box>
              <Typography variant="body1">
                <Typography variant="body2">Phone Number</Typography>
                +91 123-4567-890
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: "flex", marginTop: "3vh" }}>
            <Box mr={3}>
              <EmailIcon style={{ fontSize: "30px" }} />
            </Box>
            <Box>
              <Typography variant="body1">
                <Typography variant="body2">Email Address</Typography>
                email@example.com.
              </Typography>
            </Box>
          </Box>
          <Box style={{ display: "flex", marginTop: "3vh" }}>
            <Box mr={3}>
              <RoomIcon style={{ fontSize: "30px" }} />
            </Box>
            <Box>
              <Typography variant="body1">
                <Typography variant="body2">Customer Satisfaction</Typography>
                2746 Victoriya Park Avenue, Toronto, Ontario M2J 4A8, New York
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
