import React from 'react'
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import websitephoto from "./websitephoto.jpg";


 function About() {
    let history = useHistory()

    function handleLearnMore(){
        {history.push("/work")}
    }


    const theme = createTheme({
        typography: {
            h4: {
                fontSize: 30,
                marginBottom: 5,
            },
            h2: {
                fontSize: 30,
                marginBottom: 5,
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
        <div className="about_container">
        <ThemeProvider theme={theme}>
        <div className="about_text_container">
        <Typography variant="h4">
        Originally from a small town in Massachusetts, I have shaped my life to be able to move around  
        </Typography>
        <Typography variant="h4">
        and continuously learn from people throughout the world. For over five years I taught English and piano in primarily in Italy and Spain. 
        </Typography>
        <Typography variant="h2">
        My passion for programming arose during the lockdown after discovering some free online courses.</Typography>
        <Typography variant="h2">
        I quickly realized how familiar this seemed. It was a very similar process to that which I took, and continue to take, learning Italian and Spanish. 
        </Typography>
        <Typography variant="h2">
        Subsequently I took a full-stack software engineering bootcamp at The FlatIron school out of New York. 
        </Typography>
        <Typography variant="h2">
        With the skills I have harnessed over the years, I wish to use them to build connections, learn, and create for a better future. 
        </Typography>
        <Button onClick={handleLearnMore}  variant="contained" color="primary">
        See My Work
        </Button>
        </div>
        </ThemeProvider>
        <img className="about_pic" src={websitephoto} alt="Logo" height="300" width="200" />
        </div>
    )
}

export default About