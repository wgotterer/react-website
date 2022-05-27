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


    //   “A (fill in the blank) for living in (Try another word other than ‘new’ as you used in the sentence before) and (fill in the blank) for learning from and connecting to (‘diverse’ or something like that) or other adj) communities


    return aboutPhoto ? (
        <div className="about_container">
        <ThemeProvider theme={theme}>
        <div className="about_text_container">
        <div>
        Originally from a small town in Massachusetts, I spent the last five years teaching English and piano in Italy and Spain. I have always had a passion for trying new things, living in new places, and learning from and connecting to communities. My interest in programming arose during the lockdown after discovering some free online courses. I quickly realized how familiar coding seemed. I find that the process of putting code together is a very similar process to learning a language. After some independent learning, I was ready to fully dive in. I took a full-stack software engineering bootcamp at The Flatiron School where I sharpened my programming skills. With the skills I have harnessed over the years, I wish to use them to build connections, learn, and create for a better future.       
        </div>
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