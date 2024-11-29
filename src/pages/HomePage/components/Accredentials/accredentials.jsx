import React from 'react'
import './styles/Accredentials.css'
import image1 from '../../../../assets/Accredentials/accredentials_image1.jpg';
import image2 from '../../../../assets/Accredentials/accredentials_image2.jpg';
import image3 from '../../../../assets/Accredentials/accredentials_image3.jpg';
const Accredentials = () => {
  return (
    <div className='accredentials_container'>
      <div className='accredentials_sub_container'>
        <h1 className='accredentials_title'>Accredentials</h1>
        <p className='accredentials_text'>IEE Lifts takes great pride in its numerous certifications and accreditations, demonstrating our dedication to ethical and ecological business practices. Our commitment to sustainable and responsible operations is at the core of our values.</p>
        <div className='accredentials_image_section'>
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Accredentials
