import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Paper,
  Button,
  Card,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";
import ReplyIcon from "@mui/icons-material/Reply";

import "../../Css/CarSideBox.css";

const CardDetails = () => {
  const location = useLocation();
  const { cardData } = location.state;

  const stars = Array.from({ length: 5 }).map((_, index) => (
    <GradeIcon key={index} style={{ color: "yellow", fontSize: "2rem" }} />
  ));

  const arrow = <ReplyIcon sx={{ transform: "scaleX(-1)" }} />;
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
          Car Details
        </Typography>
      </Box>
      <Box className="" rowSpacing={1} mt={3}>
        <Paper sx={{ width: "70vw", margin: "auto" }} elevation={3}>
          <img src={cardData.img} className="detailImg" alt="no img" />
        </Paper>
      </Box>
      <Box sx={{ width: "75%", margin: "auto" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          mt={4}
        >
          <Grid item xs={6} sx={{ border: "0px solid yellow" }} p={3}>
            <Typography variant="h2" component="div">
              {cardData.name}
            </Typography>
            <Typography variant="h6" component="div" fontSize={38}>
              {cardData.charge}/day
            </Typography>
            <Typography variant="h3" component="div">
              {stars}
            </Typography>
            <Typography variant="body1" component="div">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
              explicabo excepturi cumque maiores doloremque repudiandae sequi
              esse voluptatum deserunt nihil.
            </Typography>

            <Typography variant="body3">
              {arrow}
              Passengers : {cardData.passengers}
            </Typography>
            <br />

            <Typography variant="body3">
              {arrow}
              Type : {cardData.body}
            </Typography>
            <br />

            <Typography variant="body3">
              {arrow}
              Gear : {cardData.type}
            </Typography>
            <br />
            <Typography variant="body3">
              {arrow}
              Condition : {cardData.condition}
            </Typography>
            <br />
          </Grid>
          <Grid item xs={6} sx={{ border: "0px solid red" }} p={3}>
            <Paper elevation={3} style={{ padding: 20 }} >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="First Name" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Last Name" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Phone" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="Address" />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField fullWidth label="City" />
                </Grid>
              </Grid>
              <Grid container justifyContent="center" mt={3}>
                <Grid item>
                  <Button variant="contained" color="primary"
                   sx={{
                   width:"20vw",
                   padding:"1rem"
                  }}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CardDetails;
