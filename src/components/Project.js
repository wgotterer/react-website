import React from "react";
import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import YoutubeEmbed from "./YoutubeEmbed";
import styled from "styled-components";

function Project(props) {
  return (
      <>
    <IndividualProjectArea>
      <ProjectInfoArea>
          <TextArea>
        <Title variant="h5">{props.title}</Title>
        <MobileTypography variant="h6">{props.description}</MobileTypography>
        </TextArea>
        {props.handleDemo ? (
          <Button
            onClick={props.handleDemo}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Demo
          </Button>
        ) : null}

        {props.handleCode ? (
          <Button
            onClick={props.handleCode}
            target="_blank"
            variant="contained"
            color="primary"
          >
            GitHub repository
          </Button>
        ) : null}

        {props.handleWalkthrough && (
          <Button
            onClick={props.handleWalkthrough}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Video Walkthrough
          </Button>
        )}

        {props.readMore ? (
          <Button
            onClick={props.readMore}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Read More
          </Button>
        ) : null}
      </ProjectInfoArea>

      {props.youtube ? (
        
          <YoutubeEmbed embedId={props.youtube} />
      
      ) : (
       
          <img alt="pic" src={props.src} height="500px" width="600px" />
       
      )}
     
    </IndividualProjectArea>
     <Divider />
     </>
  );
}

const IndividualProjectArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;


  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    flex-direction: column;

}
`;

const Title = styled.div`
font-size: 36px;

@media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    font-size: 20px;

}
`

const ProjectInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 20px;
 

  @media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
    margin-bottom: 20px;

}
`;

const TextArea = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0 2% 0 2%;
gap: 20px;
`

const Divider = styled.div`
display: flex;
background-color: grey;
height: 3px;
margin: 20px;
`

const MobileTypography = styled.div`

font-size: 20px;

@media only screen 
  and (min-device-width: 374px) 
  and (max-device-width: 897px)
 { 
      display: none;

}
`

export default Project;
