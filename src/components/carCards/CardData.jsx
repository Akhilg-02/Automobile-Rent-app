import { useState } from "react";
import { Box, Grid, styled, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LineAxisRoundedIcon from "@mui/icons-material/LineAxisRounded";
import PatternRoundedIcon from "@mui/icons-material/PatternRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

import "../../Css/cards.css";

// {
//   name: "volvo",
//   body: "sedan",
//   passengers: 4,
//   type: "manual",
//   ratings: 4.5,
//   charge: 2000,
//   condition: "Air conditioning",
//   img: car1,
// },

const Cards = ({ data }) => {
  //const[state,setState] = useState([])
  return (
    <Box className="cardBox" rowSpacing={1} mt={8}>
      <Card sx={{ maxWidth: 325 }}>
        {/* <CardActionArea> */}
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="body4">
            <GradeRoundedIcon />
            {data.ratings}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Box style={{ border: "0px solid red", marginLeft: "2vw" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography variant="body3" color="text.secondary">
                  <PersonIcon />
                  {data.passengers}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body3" color="text.secondary">
                  <DirectionsCarRoundedIcon />
                  {data.body}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <PatternRoundedIcon />
                <Typography variant="body3" color="text.secondary">
                  {data.type}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <LineAxisRoundedIcon />
                <Typography variant="body3" color="text.secondary">
                  {data.condition}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        {/* </CardActionArea> */}
        <Box
          style={{
            display: "flex",
            arginLeft: "3vw",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <AttachMoneyRoundedIcon />
            {data.charge}/day
          </Box>
          <Box>
            {/* <CardActions> */}
            <Button size="small" color="primary">
              BOOK
            </Button>
            {/* </CardActions> */}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Cards;
