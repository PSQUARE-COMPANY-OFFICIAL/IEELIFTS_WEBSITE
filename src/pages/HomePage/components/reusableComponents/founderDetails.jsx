import React, {  useState } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { MdClose } from "react-icons/md"; //
import "./styles/HomeReusable.css";

const FounderDetails = ({ name, position, text, image ,video}) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const buttonClickHandler = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlayHandler = () => {
    setIsOverlayOpen(false);
  }

  return (
    <div className="founder_details_container">
      <div className="founder_details_container_img_vid_section">
        <img src={image} alt="" />
        <div className="founder_play_button_container">
          <BsPlayCircle
            onClick={()=>buttonClickHandler()}
            style={{ fontSize: "3rem", color: "white", cursor:'pointer'}}
          />
        </div>
      </div>

      {isOverlayOpen && (
        <div className="video_overlay">
          <div className="video_overlay_content">
            <MdClose
              className="close_button"
              onClick={closeOverlayHandler}
            />
            <iframe
              className="video_overlay_vid_tag"
              src={video || ""}
              title="Founder Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <div className="founder_details_lower_section">
        <div className="founder_details_name_position">
          <h1>{name}</h1>
          <h3>{position}</h3>
        </div>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export default FounderDetails;
