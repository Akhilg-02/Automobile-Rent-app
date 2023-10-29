import carImg from "../../Images/car3.png";
//import carImg from "../../Images/car2.jpg";
import "../../Css/header.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Box className="box">
      <Grid container owSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Box style={{marginTop:"30vh",marginLeft:"7vh"}}>
          <Grid item xs={7} className="box1">
          <Typography variant="h2">Rent the highest caliber Automobile</Typography>
          <Typography variant="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, modi. Saepe, facere porro 
          </Typography>
        </Grid>
        </Box>
        
        <Grid item xs={5}>
          <img className="imgBox" src={carImg} alt="NO iMG" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
