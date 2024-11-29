import React from 'react'
import homeImage from '../../../../assets/homepage/homeBanner.jpg'
import './styles/Accomplishment.css'
const Accomplishment = () => {
  return (
    <div className='accomplishment_container' style={{background:`url(${homeImage})`,height:'60vh'}}>
      <div>
      <h1 className='accomplished_work'>ACCOMPLISHED WORK</h1>
      <p className='accomplishment_container_childtext'>INNOVATIVE PROJECTS, ELEVATED RESULTS:BROWSE OUR PORTFOLIO</p>
      </div>
    </div>
  )
}

export default Accomplishment
