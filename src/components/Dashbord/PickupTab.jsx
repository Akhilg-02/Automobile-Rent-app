import { TextField, Button, Box, Typography } from "@mui/material";
import * as React from "react";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";

import "../../Css/pickuptab.css";

const PickupTab = () => {
  return (
    <Box className="container">
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Pickup Location
        </Typography>
        <TextField variant="outlined" label="Hinjwadi,Pune" />
      </Box>
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Return Location
        </Typography>
        <TextField variant="outlined" label="Pune Airport" />
      </Box>
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Pickup Date
        </Typography>
        <TextField variant="outlined" label="30/01/24" />
      </Box>
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Return Date
        </Typography>
        <TextField variant="outlined" label="30/01/24" />
      </Box>
      <Button variant="contained" id="search-button">
        Search car &nbsp;&nbsp;
        <ElectricCarIcon />
      </Button>
    </Box>
  );
};

export default PickupTab;
