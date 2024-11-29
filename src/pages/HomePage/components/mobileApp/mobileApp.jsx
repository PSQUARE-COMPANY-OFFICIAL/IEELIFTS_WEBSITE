import React from 'react'
import mobileImage from '../../../../assets/homepage/ieeMobileImage.jpg'
import './styles/MobileApp.css'
const MobileApp = () => {
  return (
    <div className='mobile_app_container'>
      <div className='mobile_app_sub_container'>
        <div className='mobile_app_left'>
          <img src={mobileImage} alt="" />
        </div>
        <div className='mobile_app_right'> 
            <h1>Get IEE Lifts Private Limited Mobile App</h1>
            <h3>Ensuring you power-packed assistance in your lift installation; we have a user-friendly app to help you pick, scrutinise and communicate with the IEE Lifts team when required.</h3>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
