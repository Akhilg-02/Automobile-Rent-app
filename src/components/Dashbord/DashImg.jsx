import carImg from "../../Images/car3.png"
//import carImg from "../../Images/car2.jpg";
import "../../Css/dashImg.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const DashImg = () => {
  return (
   <Box className="box">
      <Grid container owSpacing={1} olumnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3} className="box1">
        <Typography variant="h4">
          Lorem ipsum dolor sit amet.
        

        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.

        </Typography>
        </Grid>
        <Grid item xs={9}>
          <img  className="imgBox" src={carImg} alt="NO iMG" />
        </Grid>
      </Grid>
     </Box>
  );
};

export default DashImg;
