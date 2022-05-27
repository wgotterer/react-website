import React from "react";
import "@fontsource/roboto";
import YoutubeEmbed from "./YoutubeEmbed";
import styled from "styled-components";
import { Text, TextH1, ButtonPrimary } from "./StyledComponents";


function Project(props) {
  return (
      <>
    <IndividualProjectArea>
      <ProjectInfoArea>
          <TextArea>
        <TextH1 variant="h5">{props.title}</TextH1>
        <Text>{props.description}</Text>
        </TextArea>
        <ButtonArea>
        {props.handleDemo ? (
          <ButtonPrimary
            onClick={props.handleDemo}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Demo
          </ButtonPrimary>
        ) : null}

        {props.handleCode ? (
          <ButtonPrimary
            onClick={props.handleCode}
            target="_blank"
            variant="contained"
            color="primary"
          >
            GitHub repository
          </ButtonPrimary>
        ) : null}

        {props.handleWalkthrough && (
          <ButtonPrimary
            onClick={props.handleWalkthrough}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Video Walkthrough
          </ButtonPrimary>
        )}

        {props.readMore ? (
          <ButtonPrimary
            onClick={props.readMore}
            target="_blank"
            variant="contained"
            color="primary"
          >
            Read More
          </ButtonPrimary>
        ) : null}
        </ButtonArea>
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

const ButtonArea = styled.div`
display: flex;
flex-direction: row;
width: 100%;
gap: 20px;
justify-content: center;
`

const Divider = styled.div`
display: flex;
background-color: grey;
height: 3px;
margin: 20px;
`


export default Project;
