import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Work from "./Work";
import styled from "styled-components";

function Home() {
  let history = useHistory();

  function handleLearnMore() {
    history.push("/about");
  }

  function handleLinkedin() {
    window.open("https://www.linkedin.com/in/william-gotterer-a8581988/");
  }
  function handleDev() {
    window.open("https://dev.to/wgotterer");
  }

  function handleGit() {
    window.open("https://github.com/wgotterer");
  }

  return (
    // <div className="home_container">
    //    <div>
    //     <ThemeProvider theme={theme}>
    //     <div className="home_text_container">
    //     <Typography variant="h4">
    //         Hi, I'm William.
    //     </Typography>
    //     <Typography variant="h2">
    //     Software Engineer. Teacher. Musician.
    //     </Typography>
    //     <Typography variant="h4">
    //     Full Stack Software Engineer with a passion for innovation and creating a better world.
    //     </Typography>
    //     <Button onClick={handleLearnMore}  variant="contained" color="primary">
    //     Learn More
    //     </Button>
    //     <div className="button_container">
    //     <Typography className="home_button" variant="h2">
    //     <a class="mailto" href="mailto:william.gotterer@gmail.com">
    //     <img height="50" width="50" alt="mail" src="https://seeklogo.com/images/G/gmail-icon-logo-9ADB17D3F3-seeklogo.com.png"/>
    //     </a>
    //     </Typography>
    //     <Typography className="home_button" variant="h2">
    //     <img onClick={handleLinkedin} height="50" width="50" alt="linkedin" src="https://cdn.iconscout.com/icon/free/png-256/linkedin-3691226-3073746.png"/>
    //     </Typography>
    //     <Typography className="home_button" variant="h2">
    //     <img onClick={handleDev} height="50" width="50" alt="Dev" src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png" />
    //     </Typography>
    //     <Typography className="home_button" variant="h2">
    //     <img onClick={handleGit} height="50" width="50" alt="Git" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
    //     </Typography>
    //     </div>
    <HomeArea>
      <HeaderArea>
        <div variant="h4">Hi, I'm William.</div>
        <div variant="h2">
          Software Engineer. Teacher. Musician.
        </div>
        <div variant="h4">
          Full Stack Software Engineer with a passion for innovation and
          creating a better world.
        </div>
        <Button onClick={handleLearnMore} variant="contained" color="primary">
          Learn More
        </Button>
      </HeaderArea>
      <RedirectLinksArea>
      <Typography className="home_button" variant="h2">
        <a class="mailto" href="mailto:william.gotterer@gmail.com">
          <img
            height="50"
            width="50"
            alt="mail"
            src="https://seeklogo.com/images/G/gmail-icon-logo-9ADB17D3F3-seeklogo.com.png"
          />
        </a>
      </Typography>
      <Typography className="home_button" variant="h2">
        <img
          onClick={handleLinkedin}
          height="50"
          width="50"
          alt="linkedin"
          src="https://cdn.iconscout.com/icon/free/png-256/linkedin-3691226-3073746.png"
        />
      </Typography>
      <Typography className="home_button" variant="h2">
        <img
          onClick={handleDev}
          height="50"
          width="50"
          alt="Dev"
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-black.png"
        />
      </Typography>
      <Typography className="home_button" variant="h2">
        <img
          onClick={handleGit}
          height="50"
          width="50"
          alt="Git"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
      </Typography>
      </RedirectLinksArea>
      <Work />
    </HomeArea>
  );
}

const HomeArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const HeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  
  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;
    margin-top: 20px;

}
`;

const RedirectLinksArea = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
`

export default Home;
