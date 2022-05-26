import React from "react";
import Button from "@mui/material/Button";
import "@fontsource/roboto";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import YoutubeEmbed from "./YoutubeEmbed";
import styled from "styled-components";

function Project(props) {
  return (
    <IndividualProjectArea>
      <ProjectInfoArea>
        <h3>{props.title}</h3>
        {props.description}

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
        <Typography className="grid_item" variant="h4">
          <YoutubeEmbed embedId={props.youtube} />
        </Typography>
      ) : (
        <Typography className="grid_item" variant="h4">
          <img alt="pic" src={props.src} height="500px" width="600px" />
        </Typography>
      )}
    </IndividualProjectArea>
  );
}

const IndividualProjectArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const ProjectInfoArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default Project;
