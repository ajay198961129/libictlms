import React from "react";

const VideoPlayer = (props) => {
  return (
    <div className="video-player">
      <video width="100%" controls>
        <source
          src={`http://localhost:5000/${props.data.path}`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <h3>{props.data.title}</h3>
    </div>
  );
};

export default VideoPlayer;
