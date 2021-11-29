import React from 'react'
// import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



 function Work() {

    // let history = useHistory();

    function handleMonster(){
        window.open('https://dev.to/wgotterer/monster-code-an-application-made-with-react-ruby-and-active-record-3ka3')
    }

    function handleSpice(){
        window.open('https://spice-it-up.netlify.app/')
    }

    function handleTable(){
        window.open('https://dev.to/wgotterer/creating-tables-and-associations-in-rubyactive-recordrake-1kaa')
    }
    function handleMap(){
        window.open('https://dev.to/wgotterer/beginners-guide-to-javascripts-map-1c8f')
    }

    function handleProps(){
        window.open('https://dev.to/wgotterer/passing-props-and-the-power-of-the-callback-in-react-a-bedtime-story-3okl')
    }

    // function handleBlog(){
    //     window.open('https://dev.to/wgotterer')
    // }

    const theme = createTheme({
        typography: {
            h4: {
                fontSize: 25,
                marginBottom: 30,
            },
            h2: {
                
                marginBottom: 30,
            }
        },
        palette: {
            primary: {
              // Purple and green play nicely together.
              main: '#ebf8e1',
            }
        }
      });
    return (
        
        <div className="work_container">
         <div className="grid_container">
        {/* <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            My Work Thus Far!
        </Typography>
        </ThemeProvider> */}
     </div>
     <div className="grid_container">
        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            Monster Code!
           <br /> <Button onClick={handleMonster}  target="_blank" variant="contained" color="primary">
        Monster Code
        </Button>
        </Typography>
        <Typography className="grid_item" variant="h4">
            Creating Tables in Ruby!
            <br /> <Button onClick={handleTable}  target="_blank" variant="contained" color="primary">
        Tables Blog
        </Button>
        </Typography>
        </ThemeProvider>
     </div>
     <div className="grid_container">
        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
        Spice it Up! A recipe app
           <br /> <Button onClick={handleSpice}  target="_blank" variant="contained" color="primary">
        Spice it Up!
        </Button>
        </Typography>
        <Typography className="grid_item" variant="h4">
        map() in JS
           <br /> <Button onClick={handleMap}  target="_blank" variant="contained" color="primary">
        map()
        </Button>
        </Typography>
        </ThemeProvider>
     </div>
     <div className="grid_container">
        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
        Passing props in React
           <br /> <Button onClick={handleProps}  target="_blank" variant="contained" color="primary">
        props
        </Button>
        </Typography>
        </ThemeProvider>
     </div>
     </div>
    )
}

export default Work