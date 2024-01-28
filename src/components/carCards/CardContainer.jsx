import { Container, Grid } from "@mui/material";
import Cards from "./CardData";
import car1 from "../../Images/car2.jpg";

const cars = [
  {
    name: "volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air condition",
    img: car1,
  },
  {
    name: "volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air condition",
                 
    img: car1,
  },
  {
    name: "volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air condition",
    img: car1,
  },
  {
    name: "Maruti",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air condition",
    img: car1,
  },
  {
    name: "Nissan",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air condition",
    img: car1,
  },
  {
    name: "Nissan",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air condition",
    img: car1,
  },
];

const CardContainer = () => {
  return (
    <Container style={{marginLeft:"12vw"}}>
      <Grid container spacing={2}>
        {cars.map((data, ind) => {
          return (
            <Grid key={ind} item xs={12} md={6} lg={4}>
              <Cards data={data} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardContainer;
