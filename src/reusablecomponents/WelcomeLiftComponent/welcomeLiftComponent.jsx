import React from 'react'
import'./styles/WelcomeLiftComponent.css'
const WelcomeLiftComponent = ({image,title,text,altTag}) => {
  return (
    <div className='welcome_component'>
      <div className='welcome_lift_component_left'>
        <img src={image} alt={altTag || 'Lift Image'} />
      </div>
      <div className='welcome_lift_component_right'>
        <h2 className='welcome_lift_component_title'>{title}</h2>
        <p className='welcome_lift_component_text'>{text}</p>
        <button className='contactus_button'>
            CONTACT US
        </button>
      </div>

    </div>
  )
}

export default WelcomeLiftComponent
