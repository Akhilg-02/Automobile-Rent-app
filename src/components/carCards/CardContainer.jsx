import { Container, Grid, Typography, Box } from "@mui/material";

import CardData from "./CardData";
import CarSideBox from "./CarSideBox";

import { useState } from "react";

import "../../Css/CarSideBox.css";
import PickupTab from "../Dashbord/PickupTab";
import { cars } from "./carData.js";

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
            color: "aliceblue",
            textAlign: "center",
          }}
          variant="h2"
        >
          Our Cars
        </Typography>
      </Box>
      <Box>
        <PickupTab />
      </Box>
      <Box
        style={{ display: "flex", border: "0px solid yellow", padding: "5%" }}
        ml={3}
      >
        <Box>
          <CarSideBox
            onSelectBrand={handleSelectBrand}
            onSelectPriceRange={handleSelectPriceRange}
          />
        </Box>
        <Container style={{ arginLeft: "12vw", justifyContent: "center" }}>
          <Grid container spacing={2}>
            {cars
              .filter(
                (car) =>
                  (!selectedBrand ||
                    car.name.toLowerCase() === selectedBrand.toLowerCase()) &&
                  (!selectedPriceRange ||
                    (selectedPriceRange === "low" && car.charge < 19) ||
                    (selectedPriceRange === "high" && car.charge >= 15)) ||
                    selectedBrand === "All" 
              )
              .map((data, ind) => {
                return (
                  <Grid key={ind} item xs={12} md={6} lg={4}>
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
