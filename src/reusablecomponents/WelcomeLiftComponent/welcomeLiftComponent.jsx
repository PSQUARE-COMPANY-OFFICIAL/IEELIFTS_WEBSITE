import React from 'react'
import'./styles/WelcomeLiftComponent.css'
import { useNavigate } from 'react-router-dom'
const WelcomeLiftComponent = ({image,title,text,altTag}) => {
  const navigate=useNavigate()
  return (
    <div className='welcome_component'>
      <div className='welcome_lift_component_left'>
        <img src={image} alt={altTag || 'Lift Image'} />
      </div>
      <div className='welcome_lift_component_right'>
        <h2 className='welcome_lift_component_title'>{title}</h2>
        <p className='welcome_lift_component_text'>{text}</p>
        <button onClick={()=>navigate('/contact/')} className='contactus_button'>
            CONTACT US
        </button>
      </div>

    </div>
  )
}

export default WelcomeLiftComponent
