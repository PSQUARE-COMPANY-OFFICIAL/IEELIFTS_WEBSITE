import React from 'react'
import './style/ourPatrons.css'
import allenImage from './../../../../assets/homepage/patrons-allen.jpg'
import dainikImage from './../../../../assets/homepage/patrons-dainik.png'
import gateImage from './../../../../assets/homepage/patrons-gates.png'
import trendsImage from './../../../../assets/homepage/patrons-trends.png'
import ciplaImage from './../../../../assets/homepage/patrons-cipla.png'
import bataImage from './../../../../assets/homepage/patrons-bata.png'
import ranbaxyImage from './../../../../assets/homepage/patrons-ranbaxy.png'
import adidasImage from './../../../../assets/homepage/patrons-adidas.png'
import cadburyImage from './../../../../assets/homepage/patrons-cadbury.png'
import marutiImage from './../../../../assets/homepage/patrons-maruti.png'
const OurPatrons = () => {
  return (
    <div className="our_patrons_container">
      <div className="our_patrons_sub_container">
            <div className='our_patrons_top'>
                <h1 className='our_patrons_top_title'>Our Patrons</h1>
                <p className='our_patrons_top_text'>We sincerely appreciate each and every one of our clients who has trusted us with their safety.</p>
            </div>
            <div className='our_patrons_bottom'>
                <div className='our_patrons_bottom_img_box'><img src={allenImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={dainikImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={gateImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={trendsImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={ciplaImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={bataImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={ranbaxyImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={adidasImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={cadburyImage} alt="" /></div>
                <div className='our_patrons_bottom_img_box'><img src={marutiImage} alt="" /></div>
                
            </div>
      </div>
    </div>
  )
}

export default OurPatrons
