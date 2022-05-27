import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import Work from "./Work";
import styled from "styled-components";
import {TextH1,  TextH2, ButtonPrimary} from "./StyledComponents"

function Home() {
  let history = useHistory();

  function handleLearnMore() {
    history.push("/about");
  }

  function handleLinkedin() {
    window.open("https://www.linkedin.com/in/william-gotterer/");
  }
  function handleDev() {
    window.open("https://dev.to/wgotterer");
  }

  function handleGit() {
    window.open("https://github.com/wgotterer");
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <HomeArea>
      <HeaderArea>
        <TextH1>Hi, I'm William.</TextH1>
        < TextH2>
          Software Engineer. Teacher. Musician.
        </ TextH2>
        < TextH2>
          Full Stack Software Engineer with a passion for innovation and
          creating a better world.
        </ TextH2>
        <ButtonPrimary onClick={handleLearnMore}>
          Learn More
        </ButtonPrimary>
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
      <Divider/>
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
  text-align: center;
`;

const HeaderArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
  font-size: 40px;
  
  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;
    margin-top: 20px;
    gap: 20px;

}
`;

const RedirectLinksArea = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
`

const Divider = styled.div`
display: flex;
background-color: grey;
height: 3px;
margin: 20px;

@media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    
    margin: 10px;
}
`

export default Home;
