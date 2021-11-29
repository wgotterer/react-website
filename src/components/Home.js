import React from 'react'
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';



 function Home() {

    let history = useHistory();

    function handleLearnMore(){
        history.push("/about")
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
            Hi, I'm William.
        </Typography>
        <Typography variant="h2">
        Software Engineer. Teacher. Musician
        </Typography>
        <Typography variant="h4">
        Full Stack Software Engineer with a passion for creating to make the world a better place.
        </Typography>
        <Button onClick={handleLearnMore}  variant="contained" color="primary">
        Learn More
        </Button>
        </div>
        </ThemeProvider>
        </div>
    )
}

export default Home