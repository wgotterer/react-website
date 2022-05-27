import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player/youtube'
import styled from "styled-components";


const YoutubeEmbed = ({ embedId }) => (
  

    <ReactPlayer
    url= {`https://www.youtube.com/embed/${embedId}`}
    controls={true}
    width={"400px"}
    height={"400px"}
    SameSite={"Lax"}
   
    />

);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

// const ReactPlayerMobile = styled(ReactPlayer)`

// @media only screen 
//   and (min-device-width: 374px) 
//   and (max-device-width: 897px)
//  { 
//       height: 23px;

// }
// `

export default YoutubeEmbed;