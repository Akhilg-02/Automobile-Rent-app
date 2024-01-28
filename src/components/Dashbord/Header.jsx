import carImg from "../../Images/banner.png";
//import carImg from "../../Images/car2.jpg";car3
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

import "../../Css/header.css";

const Header = () => {
  return (
    <>
      <Box className="box">
        <Grid container owSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Box style={{ marginTop: "20vh", marginLeft: "6vw" }}>
            <Grid item xs={6} className="box1">
              <Typography variant="h3">
                Rent the highest caliber Automobile
              </Typography>
              <Typography variant="body1">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration slightly believable.
                <br />
                <br />
                <Button variant="contained" className="search-button">
                  Book now &nbsp;&nbsp;
                  <ElectricCarIcon />
                </Button>
              </Typography>
            </Grid>
          </Box>
          <Grid item xs={5}>
            <img className="imgBox" src={carImg} alt="NO iMG" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Header;
