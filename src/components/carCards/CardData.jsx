import { useNavigate } from "react-router-dom";
import { Box, Grid, styled, Button, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LineAxisRoundedIcon from "@mui/icons-material/LineAxisRounded";
import PatternRoundedIcon from "@mui/icons-material/PatternRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";

const space = {
  display: "flex",
  fontSize: "18px",
  marginTop: "5px",
};

const element = {
  display: "flex",
  gap: "1.7vw",
  fontSize: "1rem",
  marginTop: "5px",
  fontWeight:"bold"
};

const Cards = ({ data, index }) => {
  const navigate = useNavigate();

  const handleBookButtonClick = () => {
    navigate(`/detail/${index}`, { state: { cardData: data } });
  };
  return (
    <Box className="cardBox" rowSpacing={1} ml={3}>
      <Card sx={{ height: "46vh", width: "21vw", adding: "4px" }}>
        <CardMedia
          component="img"
          height="140"
          image={data.img}
          alt="green iguana"
        />
        <CardContent>
          <Box
            style={{ display: "flex", gap: "9vw", justifyContent: "center" }}
          >
            <Typography variant="h5" component="div">
              {data.name}
            </Typography>
            <Typography>
              <span style={space}>
                <GradeRoundedIcon sx={{color:"#FFD700"}} />
                {data.ratings}
              </span>
            </Typography>
          </Box>
          <Box
            style={{
              border: "0px solid red",
              marginLeft: "1.5vw",
              width: "90%",
            }}
          >
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography>
                  <span style={element}>
                    <PersonIcon />
                    {data.passengers}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  <span style={element}>
                    <DirectionsCarRoundedIcon />
                    {data.body}
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <span style={element}>
                  <PatternRoundedIcon />
                  {data.type}
                </span>
                <Typography></Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  <span style={element}>
                    <LineAxisRoundedIcon /> &nbsp;&nbsp;
                    {data.condition}
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1vw",
              fontSize: "1rem",
              marginTop: "5px",
              fontWeight:"bold"
            }}
            mr={3}
          >
            <AttachMoneyRoundedIcon />
            <span style={{ marginTop: "4px" }}>{data.charge}/day</span>
          </Box>
          <Box>
            <Button
              sx={{
                width: "7vw",
                height: "6vh",
                marginLeft: "2vw",
                backgroundColor: "#6A5ACD",
              }}
              variant="contained"
              onClick={handleBookButtonClick}
              size="small"
            >
              BOOK
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Cards;
