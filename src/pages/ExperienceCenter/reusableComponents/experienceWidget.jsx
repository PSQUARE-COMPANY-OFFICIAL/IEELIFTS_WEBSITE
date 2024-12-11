import React from 'react'
import './styles/style.css'
import { experienceWidgetData } from './data'
const ExperienceWidget = ({heading,para}) => {
  return (
    <div className='exp_widget_container'>
      <h3 className='exp_widget_heading'>{heading}</h3>
      {para?.map((item,index)=>(
        <p key={index} className='exp_widget_para'>{item}</p>
      ))}
    </div>
  )
}

export default ExperienceWidget
