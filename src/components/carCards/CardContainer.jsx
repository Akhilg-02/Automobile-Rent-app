import { Container, Grid, Typography, Box  } from "@mui/material";
import car1 from "../../Images/banner.png";
import CardData from "./CardData";
import CarSideBox from "./CarSideBox";

import { useState } from "react";

const cars = [
  {
    name: "volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 100,
    condition: "AC",
    img: car1,
  },
  {
    name: "Hundyai",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "AC",
    img: car1,
  },
  {
    name: "BMW",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "AC",
    img: car1,
  },
  {
    name: "Volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "AC",
    img: car1,
  },
  {
    name: "Nissan",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "AC",
    img: car1,
  },
  {
    name: "Nissan",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "AC",
    img: car1,
  },
];

const CardContainer = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSelectPriceRange = (priceRange) => {
    setSelectedPriceRange(priceRange);
  };
  return (
    <Box style={{display:"flex"}}>
      <Box>
        <CarSideBox 
        onSelectBrand={handleSelectBrand}
        onSelectPriceRange={handleSelectPriceRange}
        />
      </Box>
       <Container style={{ arginLeft: "12vw",justifyContent:"center" }}>
      <Grid container spacing={2}>
        {cars
         .filter((car) => (
          (!selectedBrand || car.name.toLowerCase() === selectedBrand.toLowerCase()) &&
          ((selectedPriceRange === 'low' && car.charge < 600) ||
            (selectedPriceRange === 'high' && car.charge >= 100))
        ))
        .map((data, ind) => {
          return (
            <Grid key={ind} item xs={12} md={6} lg={4}>
              <CardData data={data} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
    </Box>
   
  );
};

export default CardContainer;
