import { TextField, Button, Box, Typography } from "@mui/material";
import * as React from "react";
import "../../Css/pickuptab.css";

const PickupTab = () => {

  return (
    <Box className="container">
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Pickup Location
        </Typography>
        <TextField variant="outlined" />
      </Box>
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Return Location
        </Typography>
        <TextField variant="outlined" />
      </Box>
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Pickup Date
        </Typography>
        <TextField variant="outlined" />
      </Box>
      <Box>
        <Typography variant="h6" className="inputTypo" gutterBottom>
          Return Date
        </Typography>
        <TextField variant="outlined" />
      </Box>
      <Button variant="contained" color="primary" className="search-button">
        Search
      </Button>
    </Box>
  );
};

export default PickupTab;
