import React from 'react'
import './styles/HomeReusable.css'
const Widget = ({image,title,text,altTag,backgroundImage}) => {
  return (
    <div className='widget_container'   >
      <img src={backgroundImage} className='widget_container_background_image' alt="" style={{}} />
      <div className='widget_container_overlay'></div>
      <div className="widget_subcontainer_lower">
          <img className='widget_icon' src={image} alt={altTag} style={{height:'3rem',width:'3rem',marginBottom:'2.5rem',marginTop:'0.5rem'}}/>
          <h2 className='widget_title'>
            {title}
          </h2>
          <p className='widget_text'>
            {text}
          </p>
          <h3 className='widget_knowmore'>Know More</h3>
      </div>
    </div>
  )
}

export default Widget
