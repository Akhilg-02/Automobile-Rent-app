import car2 from "../../Images/cars11.png";
//import carImg from "../../Images/car2.jpg";
import "../../Css/experiance.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography,Container } from "@mui/material";

const Experiance = () => {
  return (
    <Container className="expBox">
      <Grid container owSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
          <img className="expImg" src={car2} alt="NO iMG" />
        </Grid>
        <Grid item xs={5} className="expTypo">
          <Typography variant="h2">Rent the highest caliber Automobile</Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, modi. Saepe, facere porro 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Experiance;
