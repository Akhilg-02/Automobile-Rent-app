import { Container, Grid, Typography, Box  } from "@mui/material";
import car1 from "../../Images/banner.png";
import CardData from "./CardData";
import CarSideBox from "./CarSideBox";

import { useState } from "react";

import "../../Css/CarSideBox.css";
import PickupTab from "../Dashbord/PickupTab";

const cars = [
  {
    name: "volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 15,
    condition: "AC",
    img: car1,
  },
  {
    name: "Hundyai",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 20,
    condition: "AC",
    img: car1,
  },
  {
    name: "BMW",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 25,
    condition: "AC",
    img: car1,
  },
  {
    name: "Volvo",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 22,
    condition: "AC",
    img: car1,
  },
  {
    name: "Nissan",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 18,
    condition: "AC",
    img: car1,
  },
  {
    name: "Nissan",
    body: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 20,
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
    <>
    <Box id="carHeader">
      <Typography 
       sx={{
        color:"aliceblue",
        textAlign:"center",   
       }}
      variant="h2">
        Our Cars
      </Typography>
    </Box>
    <Box>
      <PickupTab/>
    </Box>
    <Box style={{display:"flex" ,border:"0px solid yellow",padding:"5%"}} ml={3}>
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
          (!selectedPriceRange ||
            (selectedPriceRange === 'low' && car.charge < 19) ||
            (selectedPriceRange === 'high' && car.charge >= 15)
          )
        ))
        .map((data, ind) => {
          return (
            <Grid key={ind} item xs={12} md={6} lg={4} >
              <CardData data={data} index={ind} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
    </Box>
   </>
  );
};

export default CardContainer;
