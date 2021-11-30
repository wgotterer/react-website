import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import websitephoto from "./websitephoto.jpg";


 function About() {
     const [aboutPhoto, setAboutPhoto] = useState(websitephoto)

     useEffect(() => {
        setAboutPhoto(websitephoto)
     }, [])

    let history = useHistory()

    function handleLearnMore(){
        history.push("/work")
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


    return aboutPhoto ? (
        <div className="about_container">
        <ThemeProvider theme={theme}>
        <div className="about_text_container">
        <Typography variant="h4">
        Originally from a small town in Massachusetts, I have shaped my life to be able to move around  and continuously learn from people throughout the world. For over five years I taught English and piano in Italy and Spain. 
        My passion for programming arose during the lockdown after discovering some free online courses. I quickly realized how familiar coding seemed. It’s a very similar process to learning Italian and Spain. Subsequently I took a full-stack software engineering bootcamp at The Flatiron school.
        With the skills I have harnessed over the years, I wish to use them to build connections, learn, and create for a better future.         </Typography>
        <Button onClick={handleLearnMore}  variant="contained" color="primary">
        See My Work
        </Button>
        </div>
        </ThemeProvider>
        <img className="about_pic" src={websitephoto} alt="Logo" height="300" width="200" />
        </div>
    )
    : "Loading"
}

export default About