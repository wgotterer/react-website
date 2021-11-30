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

    function handleLinkedin(){
        window.open('https://www.linkedin.com/in/william-gotterer-a8581988/')
    }
    function handleDev(){
        window.open('https://dev.to/wgotterer')
    }

    function handleGit(){
        window.open('https://github.com/wgotterer?tab=repositories')
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
        <Typography className="home_button" variant="h2">
        <a class="mailto" href="mailto:william.gotterer@gmail.com">
        <img height="50" width="50" alt="mail" src="https://i.pinimg.com/originals/ca/27/f6/ca27f615c790f1af43f2dd564599bf6a.jpg"/>
        </a>
        </Typography>
        <Typography className="home_button" variant="h2">
        <img onClick={handleLinkedin} height="50" width="50" alt="linkedin" src="https://cdn.iconscout.com/icon/free/png-256/linkedin-3691226-3073746.png"/>
        </Typography>
        <Typography className="home_button" variant="h2">
        <img onClick={handleDev} height="50" width="50" alt="Git Hub" src="https://newsignature.com/wp-content/uploads/2020/08/github-logo-tile.png"/>
        </Typography>
        <Typography className="home_button" variant="h2">
        <img onClick={handleGit} height="50" width="50" alt="Dev" src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png"/>
        </Typography>
        </div>
        
        </ThemeProvider>
        </div>
    )
}

export default Home