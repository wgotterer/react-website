import React from "react";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player/lazy'
import Spinner from "./Spinner";


const YoutubeEmbed = ({ embedId }) => (
  

    <ReactPlayer
    url= {`https://www.youtube.com/embed/${embedId}`}
    controls={true}
    width={"400px"}
    height={"400px"}
    fallback={<Spinner/>}
   
    />

);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};


export default YoutubeEmbed;