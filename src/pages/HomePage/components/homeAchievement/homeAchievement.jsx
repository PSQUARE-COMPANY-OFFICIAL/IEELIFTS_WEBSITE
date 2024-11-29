import React from "react";
import { achievementWidgetData } from "../reusableComponents/widgetData";
import AchievementWidget from "../reusableComponents/achievementWidget";
import ieeLiftsVideo from "../../../../assets/Home/iee-lifts-video-02.mp4";
import ieeLiftsImage from "../../../../assets/Home/achievementsVideoImage.jpg";
import "./styles/HomeAchievement.css";
const HomeAchievement = () => {
  return (
    <div className="home_achievement_container">
      <div className="home_achievement_sub_container">
        <div className="home_achievement_left_box">
          <img src={ieeLiftsImage} alt="" />
        </div>
        <div className="home_achievement_right_box">
          {achievementWidgetData.map((item, index) => {
            return (
              <AchievementWidget key={index+1} image={item.image} number={item.number} text={item.text}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeAchievement;
