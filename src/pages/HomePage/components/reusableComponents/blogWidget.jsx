import React from 'react'
import './styles/HomeReusable.css'
import moment from 'moment'
const BlogWidget = ({image,title,date,alt}) => {
  const formatDate= moment(date).format("MMMM Do, YYYY")
  return(
    <div className='blog_widget_container'>
        <img className='blog_widget_image' src={image} alt={alt} />
        <div className='blog_widget_title_date_box'>
            <h4>{title}</h4>
            <h5>{formatDate}</h5>
        </div>
      
    </div>
  )
}

export default BlogWidget
