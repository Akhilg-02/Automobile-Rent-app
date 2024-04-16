import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Fab,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import RoomIcon from "@mui/icons-material/Room";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUsPage = () => {
  return (
    <>
      <Box id="carHeader">
        <Typography
          sx={{
            color: "aliceblue",
            textAlign: "center",
          }}
          variant="h2"
        >
          Contact Us
        </Typography>
      </Box>
      <Box style={{ margin: "22vh 0 0 18vw" }}>
        <Grid container spacing={9} ap={5}>
          {/* Left Section */}

          <Grid item xs={12} md={6}>
            <Paper sx={{ padding: "20px", borderRadius: "10px" }}>
              <Typography variant="h5">Get in Touch</Typography>
              <form>
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="First Name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Last Name"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  margin="normal"
                  placeholder="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={6} mt={3}>
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
            <br />
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
            <br />
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
            <br />
            {/* Social Media Icons */}
            <Box sx={{ "& > :not(style)": { m: 1 } }} mt={3}>
              <Fab color="primary" aria-label="Facebook">
                <FacebookTwoToneIcon />
              </Fab>
              <Fab color="secondary" aria-label="Instagram">
                <InstagramIcon />
              </Fab>
              <Fab color="primary" aria-label="Twitter">
                <TwitterIcon />
              </Fab>
              <Fab aria-label="LinkedIn">
                <LinkedInIcon style={{ color: "blue", fontSize: "50px" }} />
              </Fab>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ContactUsPage;

// {
//   /* <TextField
// fullWidth
// margin="normal"
// placeholder="Message"
// multiline
// rows={4}
// variant="outlined"//
// sx={{
//     //ml: -2,
//     '& .MuiOutlinedInput-root': {
//       paddingLeft: 2,
//       '& .MuiOutlinedInput-input': {
//         padding: "5px 0 0 9.8px"
//       },
//     //   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//     //     border: 'none',
//     //   },
//     },
//   }}
// /> */
// }
