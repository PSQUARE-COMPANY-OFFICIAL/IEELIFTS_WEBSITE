import React from 'react'
import './style/reusable.css'
const AboutAchievementWidget = ({image,title,para,alt}) => {
  return (
    <div className="about_ach_card">
              <img
                src={image || ''}
                alt={alt}
                // style={{}}
              />
              <p
                className="about_ach_card_heading"
                style={{ fontSize: "20px", marginTop: "10px" }}
              >
                {title}
              </p>
              <p className="about_ach_card_para">
                {para}
              </p>
            </div>
  )
}

export default AboutAchievementWidget
