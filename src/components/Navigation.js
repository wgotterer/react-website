import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components";


function Navigation(){



  return (
    <NavArea>
     
        <Button  startIcon={<HomeIcon/>}>
        <NavLink to='/'>Home</NavLink>
        </Button >
        <Button  startIcon={<FaceIcon/>}>
        <NavLink to='/about'>About </NavLink> 
        </Button>
        {/* <Button  startIcon={<WorkIcon/>}>
        <NavLink to='/work'>Work </NavLink>
        </Button> */}
   
  
    </NavArea>
  );
}

const NavArea = styled.div`
  display: flex;


  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    justify-content: center;

}
`;


export default Navigation;