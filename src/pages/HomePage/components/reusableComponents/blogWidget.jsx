import React from 'react'
import './styles/HomeReusable.css'
const BlogWidget = ({image,title,date,alt}) => {
  return (
    <div className='blog_widget_container'>
        <img className='blog_widget_image' src={image} alt={alt} />
        <div className='blog_widget_title_date_box'>
            <h4>{title}</h4>
            <h5>{date}</h5>
        </div>
      
    </div>
  )
}

export default BlogWidget
