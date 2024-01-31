import { styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  List,
  Typography,
} from "@mui/material";

export const AppContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  padding: "10px",
  justifyContent: "center",
  cursor: "pointer",
  alignItems: "center",
  fontSize: "20px",
}));

export const AppbarHeader = styled(Typography)(() => ({
  padding: "4px",
  border:"0px solid green",
  height:"60px",
  flexGrow: 3,
  color: "#333333",
}));

export const MyList = styled(
  List,
  Typography
)((type) => ({
  //display: type ==="row"? "flex" : "block",
  display: "flex",
  ustifyContent:"space-between",
  color: "white",
  flexFlow: 1,
  textTransform: "uppercase",
  fontSize: "20px",
}));

export const LogoImage = styled("img")(({ src }) => ({
  scr: `url(${src})`,
  width: "20vw",
  height: "40vh",
  marginTop: "-8.5%",
  marginLeft:"-4%",
  color: "",
}));
