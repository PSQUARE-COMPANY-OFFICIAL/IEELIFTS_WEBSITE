import React from 'react'

const AchievementWidget = ({image,number,text}) => {
  return (
    <div className='achievement_widget_container'>
      <img className='achievement_widget_image' src={image} alt="" />
      <h1 className='achievement_widget_number'>{number}</h1>
      <h2 className='achievement_widget_text'>{text}</h2>
    </div>
  )
}

export default AchievementWidget
