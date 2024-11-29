import React from 'react'
import './styles/LiftFeatureCard.css'
const LiftFeatureCard = ({title,text}) => {
  return (
    <div className='lift_feature_card_container'>
      <h3 className='lift_feature_card_title'>{title}</h3>
      <p className='lift_feature_card_text'>{text}</p>
    </div>
  )
}

export default LiftFeatureCard
