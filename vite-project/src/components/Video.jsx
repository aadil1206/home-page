import React from "react";
import "./Video.css";
import vicon from "../assets/videoicon.png";
import Loaders from "../assets/Loaders/loader";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="video-wrapper">
      <div
        className="container d-flex flex-column justify-content-between align-items-center"
        style={{ height: "100%" }}
      >
        <img src={vicon} alt="" />
        <div className="video-head-text d-flex justify-content-center">
          <h2>
            Usage<span>Video</span>
          </h2>
        </div>
        <Loaders />
        <p className="videopara">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </p>
        <div className="row video-section">
          <div className="col-12 col-sm-8 bigvideo">
            <ReactPlayer
              className="react-player"
              url="https://youtu.be/DktjwrtLNWw?si=jl65SDMQjcqaIMLt"
              width="100%"
              height="100%"
              controls={true}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column justify-content-between smvideo">
            <div className="video-right">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/DktjwrtLNWw?si=jl65SDMQjcqaIMLt"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <div className="video-right">
              <ReactPlayer
                className="react-player"
                url="https://youtu.be/DktjwrtLNWw?si=jl65SDMQjcqaIMLt"
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
