import { Container, Grid, Typography  } from "@mui/material";
import car1 from "../../Images/banner.png";
import DashboardCarData from "./DashboardCarData";

const dashCards = [
  {
    name: "Wedding Rides",
    charge:"$ 200/Day",
    img: car1,
  },
  {
    name: "Coporate Rides",
    charge: "$ 200/Day",
    img: car1,
  },
  {
    name: "Executive Rides",
    charge: "$ 200/Day",
    img: car1,
  },
];

const CardContainer = () => {
  return (
    <Container style={{ marginLeft: "12vw" }} id="services">
       <Typography mt={8} className="headField" gutterBottom variant="h3" component="div">
         Services We Offered
      </Typography>
      <Grid container spacing={2}>
        {dashCards.map((data, ind) => {
          return (
            <Grid key={ind} item xs={12} md={6} lg={4}>
              <DashboardCarData data={data} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardContainer;
