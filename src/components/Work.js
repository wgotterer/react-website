import React from "react";
// import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import YoutubeEmbed from "./YoutubeEmbed";
import lost from "../pics/lost.png";
import propspic from "../pics/propspic.png";
import blog from "../pics/blog.png";
import tables from "../pics/tables.png";
import Project from "./Project";
import styled from "styled-components";

function Work() {
  // let history = useHistory();

  function handleMonster() {
    window.open(
      "https://dev.to/wgotterer/monster-code-an-application-made-with-react-ruby-and-active-record-3ka3"
    );
  }

  function handleMonsterCode() {
    window.open("https://github.com/wgotterer/monster-code-app");
  }

  function handleSpice() {
    window.open("https://spice-it-up.netlify.app/");
  }

  function handleSpiceCode() {
    window.open("https://github.com/wgotterer/recipe-app");
  }

  function handleTable() {
    window.open(
      "https://dev.to/wgotterer/creating-tables-and-associations-in-rubyactive-recordrake-1kaa"
    );
  }
  function handleMap() {
    window.open(
      "https://dev.to/wgotterer/beginners-guide-to-javascripts-map-1c8f"
    );
  }

  function handleProps() {
    window.open(
      "https://dev.to/wgotterer/passing-props-and-the-power-of-the-callback-in-react-a-bedtime-story-3okl"
    );
  }
  function handleLang() {
    window.open("https://lost-language-app.netlify.app/");
  }

  function handleLangCode() {
    window.open("https://github.com/wgotterer/lost-language-app");
  }

  function handleDemoSwole() {
    window.open("https://getting-swole-app.herokuapp.com/");
  }

  function handleCodeSwole() {
    window.open("https://github.com/wgotterer/get-swole/");
  }

  function handleSwoleWalkthrough() {
    window.open(
      "https://dev.to/wgotterer/get-swole-the-reactrails-workout-app-112b"
    );
  }

  function handleDemoPiano() {
    window.open("https://piano-with-william.herokuapp.com/");
  }

  function handlePianoCode() {
    window.open("https://github.com/wgotterer/final-project");
  }

  function handlePianoWalkthrough() {
    window.open("https://www.youtube.com/watch?v=lEkoSBJE8Cw");
  }

  function handleGuessDemo() {
    window.open("https://github.com/wgotterer/react-native-number-guessing");
  }

  function handleGuessWalkthrough() {
    window.open(
      "https://dev.to/wgotterer/react-native-cookie-guessing-game-5130"
    );
  }

  function handleGuessRepo() {
    window.open("https://github.com/wgotterer/react-native-number-guessing");
  }

  function handleMagicDemo() {
    window.open("https://github.com/wgotterer/react-native-magic-app");
  }

  function handleMagicWalkthrough() {
    window.open("https://www.youtube.com/watch?v=IgvoyRcXEbM&t=3s");
  }

  function handleMagicRepo() {
    window.open("https://github.com/wgotterer/react-native-magic-app");
  }


  return (
    <ProjectArea>
      <Project
        title={"Magic The Gathering app (React Native)"}
        description={
          "React Native app in which users can search through Magic The Gathering cards, add favorites, and filters. Coded reusable components that are used throughout the app and ready for future additions. Incorporated Redux to manage and update state of components. Strategically used React Native components and API’s such as navigation, Flatlist, Switch, Platform, and more, along with React Hooks, useCallback, useEffect, and useState"
        }
        handleDemo={handleMagicDemo}
        handleCode={handleMagicRepo}
        handleWalkthrough={handleMagicWalkthrough}
        youtube={"IgvoyRcXEbM"}
      />

      <Project
        title={"How Many Cookies In The Cookie Jar? React Native app"}
        description={
          "A user can choose how many cookies to put in the jar and the computer must guess. The user gives hints as to whether the computer needs to guess higher or lower"
        }
        handleDemo={handleGuessDemo}
        handleCode={handleGuessRepo}
        handleWalkthrough={handleGuessWalkthrough}
        youtube={"GXsFTVds43A"}
      />

      <Project
        title={"Piano with William React/Rails/PostgreSQL Application"}
        description={
          "At Piano with William you are able to purchase premium follow along classes and practice your scales on a virtual piano! And to really hone in your skills, sign up for a one on one session with the man himself, William!"
        }
        handleDemo={handleDemoPiano}
        handleCode={handlePianoCode}
        handleWalkthrough={handlePianoWalkthrough}
        youtube={"lEkoSBJE8Cw"}
      />
      <Project
        title={"Get Swole React/Rails Application"}
        description={
          "Get Swole is a workout app that I made along with my two friends. We used a React front end and a Rails back end. You can demo this app as well as checkout the video walkthroughs below!"
        }
        handleDemo={handleDemoSwole}
        handleCode={handleCodeSwole}
        handleWalkthrough={handleSwoleWalkthrough}
        youtube={"GZfXz4jRI9s"}
      />
      <Project
        title={"Monster Code React/Ruby Application"}
        description={
          "Monster Code is an app built with React and Ruby. Structured in a similar fashion to an arcade game,  a user must answer code related questions in order to fight and collect all the monsters. The following videos will give a detailed overview of the project and subsequently how and why it was coded the way it was."
        }
        handleDemo={handleMonster}
        handleCode={handleMonsterCode}
        youtube={"yWXmHS7d8IM"}
      />

      <Project
        title={"Spice It Up React Application"}
        description={
          "Spice It Up! is an application made with React. A user randomly receives a recipe from an API and can check out various features that pertain to that recipe. Sometimes it’s hard to choose your next meal. Spice It Up! does it for you."
        }
        handleDemo={handleSpice}
        handleCode={handleSpiceCode}
        youtube={"SXKKxEpxl08"}
      />

      <Project
        title={"Lost Languages JS Application"}
        description={
          "Using vanilla JavaScript, Lost Languages was created. A random picture is generated from an external API and a user is then prompted to try and write a sentence about the picture using their target language and their first language. One can choose a variety of languages to practice as well as add translations to an existing picture."
        }
        handleDemo={handleLang}
        handleCode={handleLangCode}
        src={lost}
      />

      <Project
        title={"React Props Blog"}
        description={
          "Knowing how to effectively use props in React is key to understanding the functionality of the framework. This blog aims to teach how props work and how information can be passed back up to parent components. Told in the form of a fairy tale."
        }
        readMore={handleProps}
        src={propspic}
      />

      <Project
        title={"Databases In Ruby Blog"}
        description={
          "This blog aims to help a beginner Rubyist take the first steps in creating tables, using Active Record, SQL, and Sinatra, rake commands, and ultimately have a solid platform to take the next steps in building an API."
        }
        readMore={handleTable}
        src={tables}
      />

      <Project
        title={"JS map() Blog"}
        description={
          "The map() function is quintessential when working with JavaScript or other frameworks. I aim to explain the basics of how this function works with the help of Spongebob and his friends."
        }
        readMore={handleMap}
        src={blog}
      />
    </ProjectArea>
  );
}

const ProjectArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export default Work;
