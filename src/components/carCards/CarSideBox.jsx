import { Box, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';


import "../../Css/CarSideBox.css";

const CarSideBox = ({ onSelectBrand, onSelectPriceRange }) => {
  const brands = ["Porshe", "Hundyai", "BMW", "Toyota", "Audi","Volvo"];
  return (
    <Box className="sideBox">
      <Typography variant="h5" component="div">
        Brands
      </Typography>
      <Box mt={4}>
        {brands.map((item, ind) => {
          return (
            <Typography key={ind} className="brand" mb={2} onClick={() => onSelectBrand (item)}>
              <KeyboardDoubleArrowRightIcon />
              <span>
                 {item}
              </span>
            </Typography>
          );
        })}
      </Box>
      <Typography variant="h6" component="div">
       Filter
      </Typography>
      <Box mt={1}>
      <Typography variant="subtitle1" component="div">
        <MonetizationOnOutlinedIcon/> Price Range 
      </Typography>
      <Box mt={2} sx={{cursor:"pointer",display:"flex"}} >
        <Typography variant="body1" className="brand" onClick={() =>  onSelectPriceRange('low')}>
          Low
        </Typography>
        <Typography variant="body1" className="brand" ml={4} onClick={() => onSelectPriceRange('high')}>
          High
        </Typography>
        
      </Box>
    </Box>
    </Box>
  );
};

export default CarSideBox;
