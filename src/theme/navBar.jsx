import {styled} from "@mui/material/styles";
import { Box, Grid,List ,Typography,AppBar,Toolbar,Menu,Container,Avatar,Button,Tooltip,MenuItem  } from "@mui/material";

export const AppContainer = styled(Box)(()=>({
display:"flex",
width:"100%",
padding:"10px",
justifyContent:"center",
cursor:"pointer",
alignItems:"center",
fontSize:"20px"
}))

export const AppbarHeader = styled(Typography)(()=>({
    padding:"4px",
    flexGrow:3.8,
    color:"#333333"
    }))

    export const MyList = styled(List,Typography)((type)=>({
        //display: type ==="row"? "flex" : "block",
        display: "flex",
        color: "white",
        flexFlow:1,
        textTransform:"uppercase",
        fontSize:"20px"
        }))

export const LogoImage = styled("img")(({src})=>({
    scr:`url(${src})`,
    width:"150px",
    height:"13vh",
    marginTop:"2%",
    color:""
}))


    

