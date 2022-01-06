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

    function handleMonsterCode(){
        window.open('https://github.com/wgotterer/monster-code-app')
    }


    function handleSpice(){
        window.open('https://spice-it-up.netlify.app/')
    }

    function handleSpiceCode(){
        window.open('https://github.com/wgotterer/recipe-app')
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

    function handleLangCode(){
        window.open('https://github.com/wgotterer/lost-language-app')
    }

    function handleDemoSwole(){
        window.open('https://getting-swole-app.herokuapp.com/')
    }

    function handleCodeSwole(){
        window.open('https://github.com/wgotterer/get-swole/')
    }

    function handleSwoleWalkthrough(){
        window.open('https://dev.to/wgotterer/get-swole-the-reactrails-workout-app-112b')
    }

    function handleDemoPiano(){
        window.open('https://piano-with-william.herokuapp.com/')
    }

    function handlePianoCode(){
        window.open('https://github.com/wgotterer/final-project')
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
            <h3>Piano with William React/Rails/PostgreSQL Application</h3>
            At Piano with William you are able to purchase premium follow along classes and practice your scales on a virtual piano! And to really hone in your skills, sign up for a one on one session with the man himself, William!                
                
        <div className="grid_button">
        <br /> <Button onClick={handleDemoPiano}  target="_blank" variant="contained" color="primary">
        Demo
        </Button>
        </div>
        <br /> <Button onClick={handlePianoCode}  target="_blank" variant="contained" color="primary">
        GitHub repository
        </Button>
        
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">  
        <YoutubeEmbed embedId="lEkoSBJE8Cw" />  
        </Typography>


        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            <h3>Get Swole React/Rails Application</h3>
        "Get Swole" is a workout app that I made along with my two friends. We used a React front end and a Rails back end. You can demo this app as well as checkout the video walkthroughs below!
                
                
        <div className="grid_button">
        <br /> <Button onClick={handleDemoSwole}  target="_blank" variant="contained" color="primary">
        Demo
        </Button>
        </div>
        <br /> <Button onClick={handleSwoleWalkthrough}  target="_blank" variant="contained" color="primary">
        Video Walkthrough
        </Button>
        <div className="grid_button">
        <br /> <Button onClick={handleCodeSwole}  target="_blank" variant="contained" color="primary">
        GitHub repository
        </Button>
        </div>
        
        
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">  
        <YoutubeEmbed embedId="GZfXz4jRI9s" />  
        </Typography>

        
        <ThemeProvider theme={theme}>
        <Typography className="grid_item" variant="h4">
            <h3> Monster Code React/Ruby Application</h3>
        “Monster Code” is an app built with React and Ruby. Structured in a similar fashion to an arcade game,  a user must answer code related questions in order to fight and collect all the monsters. The following videos will give a detailed overview of the project and subsequently how and why it was coded the way it was. 
        <div className="grid_button">
        <br /> <Button onClick={handleMonster}  target="_blank" variant="contained" color="primary">
        Video Walkthrough
        </Button>
        </div>
        <div className="grid_button">
        <br /> <Button onClick={handleMonsterCode}  target="_blank" variant="contained" color="primary">
        GitHub repository
        </Button>
        </div>
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
        <div className="grid_button">
        <br /> <Button onClick={handleSpiceCode}  target="_blank" variant="contained" color="primary">
        GitHub repository
        </Button>
        </div>
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
        <div className="grid_button">
        <br /> <Button onClick={handleLangCode}  target="_blank" variant="contained" color="primary">
        GitHub repository
        </Button>
        </div>
        </Typography>
        </ThemeProvider>
        <Typography className="grid_item" variant="h4">
             <img alt="pic" src={lost} height="500px" width="600px"/>
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
        <img alt="pic" src={propspic} height="500px" width="600px"/>
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
        <img alt="pic" src={tables} height="500px" width="600px"/>
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
        <img alt="pic" src={blog} height="500px" width="600px"/>
       </Typography>

        
  
     </div>
     </div>
    )
}

export default Work