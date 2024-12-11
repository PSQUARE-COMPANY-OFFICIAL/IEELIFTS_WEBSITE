import React from 'react'
import './style/reusable.css'
const widgetLower = ({image,title,para,alt}) => {
    return (
      <div className="about_ach_card">
                <img
                  src={image || ''}
                  alt={alt}
                  // style={{}}
                />
                <p
                  className="about_ach_card_heading"
                  style={{ fontSize: "20px", marginTop: "10px",textAlign:"center" }}
                >
                  {title}
                </p>
                <p className="about_ach_card_para" style={{textAlign:"center"}}>
                  {para}
                </p>
              </div>
    )
  }
  

export default widgetLower
