import React from "react";
import "./styles/LiftCharacteristics.css";
const LiftCharacteristics = ({  data }) => {
  return (
    <div className="lift_characteristics_container">
      <div className="lift_characteristics_left_container">
        <h2 className="lift_characteristics_title">{data.title}</h2>
        {data?.char?.map((item,index) => (
          <div key={index+1} className="lift_characteristics_subtitle_text_box">
            <h4 className="lift_characteristics_subtitle">{item.subTitle}</h4>
            <p className="lift_characteristics_text">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="lift_characteristics_right_container">
        <img src={data?.image} alt="lift_characteristics_image" />
      </div>
    </div>
  );
};

export default LiftCharacteristics;
