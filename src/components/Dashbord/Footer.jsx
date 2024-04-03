import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import Fab from "@mui/material/Fab";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../Images/logoNew.png";

import "../../Css/footer.css";

const Footer = () => {
  return (
    <Box id="footer">
      <Box ml={4}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* Website Information */}
          <Grid item xs={12} md={3}>
            <br />
            <img src={logo} alt="Website Logo"/>
            <br />
            <br />
            <Typography style={{ position: "relative" }} mt={2.5}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. normal
              distribution of letters, as opposed to using 'Content here.
            </Typography>

            {/* ------ */}
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab color="primary" aria-label="add">
                <FacebookTwoToneIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit">
                <InstagramIcon />
              </Fab>
              <Fab  color="primary" >
                <TwitterIcon />
              </Fab>
              <Fab aria-label="like" >
                <LinkedInIcon style={{ color:"blue", fontSize:"50px"}} />
              </Fab>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Box ml={8}>
              <Typography variant="h5">Quick Links</Typography>
              <br />
              <a>Home</a>
              <br /><br />
              <a>About Us</a>
              <br /><br />
              <a>Services</a>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5">Services</Typography>
            <br />
            Wedding Rides
            <br /><br />
            Corporate Rides
            <br /><br />
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
                   Victoriya Park Avenue, Pune
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
