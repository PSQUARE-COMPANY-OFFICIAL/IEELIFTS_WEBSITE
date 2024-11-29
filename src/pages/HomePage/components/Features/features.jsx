import React from 'react'
import { widgetData } from '../reusableComponents/widgetData';
import Widget from '../reusableComponents/widget';
import './styles/Features.css'
const Features = () => {
  return (
    <div className='features_container'>
       <div className="features_sub_container">
        {widgetData.map((item, index) => {
          return (
            <Widget
              key={index + 1}
              image={item.image}
              title={item.title}
              text={item.text}
              altTag={item.altTag}
              backgroundImage={item.backgroundImage}
            />
          );
        })}
      </div>
    </div>
  )
}

export default Features
