import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  CardContent,
  Paper,
  CardMedia,
  Card,
} from "@mui/material";

import "../../Css/CarSideBox.css";

const CardDetails = () => {
  const location = useLocation();
  const { cardData } = location.state;
  return (
    <>
    <Box id="carHeader">
      <Typography 
       sx={{
        color:"aliceblue",
        textAlign:"center",   
       }}
      variant="h2">
        Car Details
      </Typography>
    </Box>
    <Box className="" rowSpacing={1} mt={3}>
      <Paper sx={{width:"62vw",margin:"auto", }}  elevation={3}>
        <img src={cardData.img} className="detailImg" alt="no img" />
      </Paper>
        <CardContent>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography gutterBottom variant="h5" component="div">
              {cardData.name}
            </Typography>
            <Typography gutterBottom variant="body4">
              {cardData.ratings}
            </Typography>
          </Box>
          <Box style={{ border: "0px solid red", marginLeft: "2vw" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography variant="body3">{cardData.passengers}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body3">{cardData.body}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body3">{cardData.type}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body3">{cardData.condition}</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Box
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box ml={3}>{cardData.charge}/day</Box>
        </Box>
      {/* </Card> */}
    </Box>
    </>
  );
};

export default CardDetails;
