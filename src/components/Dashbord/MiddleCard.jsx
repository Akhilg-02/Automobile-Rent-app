import car2 from "../../Images/cars11.png";
//import carImg from "../../Images/car2.jpg";
import "../../Css/MiddleCard.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Container } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import PaymentIcon from "@mui/icons-material/Payment";
import RoomIcon from "@mui/icons-material/Room";

const MiddleCard = () => {
  return (
    // <Container className="expBox">
    <Box className="expBox">
      <Grid container owSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <img className="expImg" src={car2} alt="NO iMG" />
        </Grid>
        <Grid item xs={6} className="expTypo">
          <Typography variant="h3">
          Feel The Best Experience With Our Rental Deals
          </Typography>
          <Box style={{ display: "flex",marginTop:"5vh" }}>
            <Box mr={3}>
              <GroupsIcon style={{fontSize:"60px"}} />
            </Box>
            <Box>
              <Typography variant="body1">
                <Typography variant="h4">Customer Satisfaction</Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Box>
          <br />
          <Box style={{ display: "flex" }}>
            <Box mr={3}>
              <PaymentIcon style={{fontSize:"60px"}}/>
            </Box>
            <Box>
              <Typography variant="body1">
                <Typography variant="h4">Faster Bookings</Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Box>
          <br />
          <Box style={{ display: "flex" }}>
            <Box mr={3}>
              <RoomIcon style={{fontSize:"60px"}} />
            </Box>
            <Box>
              <Typography variant="body1">
                <Typography variant="h4">Many Pickup Location</Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </Container>
  );
};

export default MiddleCard;
