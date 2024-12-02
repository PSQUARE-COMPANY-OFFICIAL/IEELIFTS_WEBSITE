import React, { useState } from "react";
import { achievementWidgetData } from "../reusableComponents/widgetData";
import AchievementWidget from "../reusableComponents/achievementWidget";
import ieeLiftsVideo from "../../../../assets/Home/iee-lifts-video-02.mp4";
import ieeLiftsImage from "../../../../assets/Home/achievementsVideoImage.jpg";
import "./styles/HomeAchievement.css";
import { BsPlayCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md"; // Close icon

const HomeAchievement = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const buttonClickHandler = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlayHandler = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="home_achievement_container">
      <div className="home_achievement_sub_container">
        <div className="home_achievement_left_box">
          <img src={ieeLiftsImage} alt="Achievements Video" />
          <BsPlayCircle
            onClick={buttonClickHandler}
            className="play_circle_home_achievement"
          />
        </div>

        <div className="home_achievement_right_box">
          {achievementWidgetData.map((item, index) => {
            return (
              <AchievementWidget
                key={index + 1}
                image={item.image}
                number={item.number}
                text={item.text}
              />
            );
          })}
        </div>
      </div>

      {isOverlayOpen && (
        <div className="video_overlay">
          <div className="video_overlay_content">
            <MdClose
              className="close_button"
              onClick={closeOverlayHandler}
              style={{ }}
            />
            <video 
            className="video_overlay_vid_tag"
              src={ieeLiftsVideo}
              controls
              autoPlay
              style={{objectFit:'cover' }}
              controlsList="nodownload"
              muted
            ></video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeAchievement;
