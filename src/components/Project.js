import React from 'react'
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider } from '@mui/material/styles';
import YoutubeEmbed from "./YoutubeEmbed"


function Project(props) {

    const theme = createTheme({
        typography: {
            h4: {
                fontSize: 20,
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
        <>
            <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            <h3>{props.title}</h3>
            {props.description}                
        <div className="grid_button">
        <br /> <Button onClick={props.handleDemo}  target="_blank" variant="contained" color="primary">
        Demo
        </Button>
        </div>
        <br /> <Button onClick={props.handleCode}  target="_blank" variant="contained" color="primary">
        GitHub repository
        </Button>
        <div className="grid_button">
        <br /> <Button onClick={props.handleWalkthrough}  target="_blank" variant="contained" color="primary">
        Video Walkthrough
        </Button>
        </div>

        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">  
        <YoutubeEmbed embedId={props.youtube} />  
        </Typography>
        </>
    )
}

export default  Project