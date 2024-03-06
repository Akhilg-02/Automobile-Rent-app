import {  useNavigate } from "react-router-dom";
import { Box, Grid, styled, Button,Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LineAxisRoundedIcon from "@mui/icons-material/LineAxisRounded";
import PatternRoundedIcon from "@mui/icons-material/PatternRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";


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

const Cards = ({ data,index }) => {
  const navigate = useNavigate();

  const handleBookButtonClick = () => {
    navigate(`/detail/${index}`,{ state: { cardData: data } }); 
  };
  return (
    <Box className="cardBox" rowSpacing={1} ml={3} >
      <Card sx={{ height:"46vh",width:"21vw",adding:"4px" }}>
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Box style={{display:"flex",justifyContent:"space-between"}}>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="body4">
            <GradeRoundedIcon />
            {data.ratings}
          </Typography>
          </Box>
          <Box style={{ border: "0px solid red", marginLeft: "2vw" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography variant="body3" >
                  <PersonIcon /> &nbsp;&nbsp;
                  {data.passengers}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body3" >
                  <DirectionsCarRoundedIcon /> &nbsp;&nbsp;
                  {data.body}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <PatternRoundedIcon /> &nbsp;&nbsp;
                <Typography variant="body3" >
                  {data.type}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <LineAxisRoundedIcon /> &nbsp;&nbsp;
                <Typography variant="body3" >
                  {data.condition}
                </Typography>
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
          <Box ml={3}>
            <AttachMoneyRoundedIcon />&nbsp;&nbsp;
            {data.charge}/day
          </Box>
          <Box>
            <Button
            sx={{width:"7vw",height:"6vh",marginLeft:"2vw",backgroundColor:"#6A5ACD"}}
            variant="contained"
            onClick={handleBookButtonClick}
            size="small">
              BOOK
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Cards;
