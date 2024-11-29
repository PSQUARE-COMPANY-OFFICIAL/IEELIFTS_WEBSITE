import React, { useState, useRef } from "react";
import homePageImage from "../../../../assets/Home/homePageImage.jpg";
import { FaPlay, FaPause } from "react-icons/fa";
import VideoIeeLifts from "../../../../assets/Home/iee-lifts-video-02.mp4";
import "./styles/Landing.css";

const Landing = () => {
  const [state, setState] = useState({
    play: false,
    zIndex: -3,
  });


  const videoRef = useRef(null);

  const buttonClickHandler = () => {
    if (state.play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setState((prevState) => ({
      play: !prevState.play, 
      zIndex: prevState.zIndex === -3 ? -1 : -3, 
    }));
  };

  return (
    <div className="landing_container">
      <div className="bg_image_container" />
      <div className="bg_video_container" style={{ zIndex: state.zIndex }}>
        <video
          ref={videoRef}
          muted
          playsInline
          loop
          src='https://res.cloudinary.com/dadjepd6k/video/upload/v1732531563/qphbeuu5vpzpvmtxddxy.mp4'
          className="video_playback"
        />
      </div>
      <div className="landing_sub_container" style={{ height: "100vh" }}>

        <div className="landing_container_left">
          <h1 className="landing_container_left_tranformation">
            TRANSFORMATION VERTICAL TRANSPORTATION!
          </h1>
          <h3 className="landing_container_left_enhance">
            ENHANCE MOBILITY AND ADD VALUE TO YOUR PROPERTY
          </h3>
          <div className="landing_container_left_download_customize_container">
            <div>DOWNLOAD CATALOG </div>
            <div>CUSTOMISE YOUR LIFT</div>
          </div>
        </div>
        <div className="landing_container_right">
          <div className="landing_page_video">
            <div className="video_icon_wrapper" onClick={buttonClickHandler}>
              {state.play ? (
                <FaPause className="video_button_pause" />
              ) : (
                <FaPlay className="video_button_play" />
              )}
            </div>
            <div className="video-animation-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
