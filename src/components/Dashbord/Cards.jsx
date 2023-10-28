import { useState } from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import car1 from "../../Images/car2.jpg"
import "../../Css/cards.css"

const cars = [
  {
    name: "volvo",
    type: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air conditioning",
    img: car1,
  },
  {
    name: "volvo",
    type: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air conditioning",
    img: car1,
  },
  {
    name: "volvo",
    type: "sedan",
    passengers: 4,
    type: "manual",
    ratings: 4.5,
    charge: 2000,
    condition: "Air conditioning",
    img: car1,
  },
];

const Cards = () => {
  //const[state,setState] = useState([])
  return (
    <Box className="cardBox" rowSpacing={1} mt={5}>
      {cars.map((item, i) => {
        return (
          <div key={i}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </Box>
  );
};

export default Cards;
