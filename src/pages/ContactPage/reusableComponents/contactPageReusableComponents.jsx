import React from 'react'
import'./styles/style.css'
import { MdEmail } from "react-icons/md";

export const ContactPageCards = ({image:Icon,title,textData}) => {
  return (
    <div className='contact_page_card_container'>
      <div className='contact_page_card_image_circle'>
        {/* {image} */}
        <Icon style={{fontSize:'1.9rem',color:'black'}}/>
      </div>
      <div className='contact_page_card_container_title_content_box'>
        <h4>{title}</h4>
        <div className='contact_page_card_texts'>
            {textData.map((item,index)=><p key={index+1}>{item}</p>)}
        </div>
      </div>
    </div>
  )
}


