import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Grid} from 'semantic-ui-react'


 function Work() {

    let history = useHistory();

    function handleProject(){
        window.open('https://dev.to/wgotterer/monster-code-an-application-made-with-react-ruby-and-active-record-3ka3')
    }

    function handleBlog(){
        window.open('https://dev.to/wgotterer')
    }

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
        
         <div className="home_container">
        <ThemeProvider theme={theme}>
        <div className="home_text_container">
        <Typography variant="h4">
            Take a look at my projects!
        </Typography>
        <Typography variant="h4">
            Monster Code Game!
        </Typography>
        <Button onClick={handleProject}  target="_blank" variant="contained" color="primary">
        Monster Code
        </Button>
        <Typography variant="h4">
            Take a look at my Blogs!
        </Typography>

        <Button onClick={handleBlog} target="_blank"  variant="contained" color="primary">
        Blogs
        </Button>
        </div>
        </ThemeProvider>

     </div>
    )
}

export default Work