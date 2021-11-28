import React from "react";
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WorkIcon from '@material-ui/icons/Work';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Navigation(){

  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#ebf8e1',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

  return (
    <div className='navigation'>
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="contained" color="primary" size="large" background>
        <Button  startIcon={<HomeIcon/>}>
        <NavLink to='/'>Home</NavLink>
        </Button >
        <Button  startIcon={<FaceIcon/>}>
        <NavLink to='/about'>About </NavLink> 
        </Button>
        <Button  startIcon={<WorkIcon/>}>
        <NavLink to='/work'>Work </NavLink>
        </Button>
        </ButtonGroup>
        </ThemeProvider>
    </div>
  );
}

export default Navigation;