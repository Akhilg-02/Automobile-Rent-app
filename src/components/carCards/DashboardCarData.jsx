import { useState } from "react";
import { Box, Grid, styled, Paper } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import "../../Css/DashboardCarData.css";

const DashboardCarData = ({ data }) => {
  //const[state,setState] = useState([])
  return (
    <Box  rowSpacing={1} mt={2}>
      <Card sx={{ maxWidth: 325, height: "60vh" }} id="cardBody">
        <CardContent>
          <Typography className="headField" gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography className="headField" sx={{fontWeight:"bold"}} gutterBottom variant="subtitle1" component="div">
            {data.charge}
          </Typography>
        </CardContent>
        <CardMedia
          // sx={{width:"100%",marginLeft:"100px"}}
          component="img"
          height="240"
          image={data.img}
          alt="green iguana"
        />

        <Box sx={{textAlign: "center",marginTop:"2vh" }}>
          <Button
            sx={{
              width: "7vw",
              height: "6vh",
              backgroundColor: "#6A5ACD",
            }}
            variant="contained"
            size="small"
          >
            BOOK
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default DashboardCarData;
