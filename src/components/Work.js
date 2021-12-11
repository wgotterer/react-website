import React from 'react'
// import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import '@fontsource/roboto';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import YoutubeEmbed from "./YoutubeEmbed"
import lost from "../pics/lost.png"
import propspic from "../pics/propspic.png"
import blog from "../pics/blog.png"
import tables from "../pics/tables.png"



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
    function handleLang(){
        window.open('https://lost-language-app.netlify.app/')
    }

    // function handleBlog(){
    //     window.open('https://dev.to/wgotterer')
    // }

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
        
        <div className="work_container">
            
         <div className="grid_container">
        
        
        {/* Below is an example of how I want the layout to be with side by side video and description */}
        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            <h3>Monster Code React/Ruby Application</h3>
        “Monster Code” is an app built with React and Ruby. Structured in a similar fashion to an arcade game,  a user must answer code related questions in order to fight and collect all the monsters. The following videos will give a detailed overview of the project and subsequently how and why it was coded the way it was. 
        <br /> <Button onClick={handleMonster}  target="_blank" variant="contained" color="primary">
        Watch More
        </Button>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">  
        <YoutubeEmbed embedId="yWXmHS7d8IM" />  
        </Typography>


        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            <h3>Spice It Up React Application</h3>
        “Spice It Up!” is an application made with React. A user randomly receives a recipe from an API and can check out various features that pertain to that recipe. Sometimes it’s hard to choose your next meal. “Spice It Up!” does it for you.
        <br /> <Button onClick={handleSpice}  target="_blank" variant="contained" color="primary">
        Demo
        </Button>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">
        <YoutubeEmbed embedId="SXKKxEpxl08" />
        </Typography>


        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            <h3>Lost Languages JS Application</h3>
        Using vanilla JavaScript, “Lost Languages” was created. A random picture is generated from an external API and a user is then prompted to try and write a sentence about the picture using their target language and their first language. One can choose a variety of languages to practice as well as add translations to an existing picture.          
         <br /> <Button onClick={handleLang}  target="_blank" variant="contained" color="primary">
        Demo
        </Button>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">
             <img src={lost} height="500px" width="600px"/>
        </Typography>
        


        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
        <h3>React Props Blog</h3>
        Knowing how to effectively use props in React is key to understanding the functionality of the framework. This blog aims to teach how props work and how information can be passed back up to parent components. Told in the form of a fairy tale. 
           <br /> <Button onClick={handleProps}  target="_blank" variant="contained" color="primary">
        Read More
        </Button>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">
        <img src={propspic} height="500px" width="600px"/>
       </Typography>

       <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
        <h3>Databases In Ruby Blog</h3>
        This blog aims to help a beginner Rubyist take the first steps in creating tables, using Active Record, SQL, and Sinatra, rake commands, and ultimately have a solid platform to take the next steps in building an API. 
            <br /> <Button onClick={handleTable}  target="_blank" variant="contained" color="primary">
        Read More
        </Button>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">
        <img src={tables} height="500px" width="600px"/>
       </Typography>


        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
        <h3>JS map() Blog</h3>
        The map() function is quintessential when working with JavaScript or other frameworks. I aim to explain the basics of how this function works with the help of Spongebob and his friends. 
           <br /> <Button onClick={handleMap}  target="_blank" variant="contained" color="primary">
        Read More
        </Button>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">
        <img src={blog} height="500px" width="600px"/>
       </Typography>

        
  
     </div>
     </div>
    )
}

export default Work