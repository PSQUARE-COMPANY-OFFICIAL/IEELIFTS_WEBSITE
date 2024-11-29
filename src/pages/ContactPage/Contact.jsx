import React, { useEffect } from 'react'
import HeroSection from '../../commonComponents/HeroSection/HeroSection'
import bannerImage from '../../assets/contactPage/contactBanner.jpg'
import {ContactPageCards }  from './reusableComponents/contactPageReusableComponents'
import { contactPageData } from './data'
import'./styles/ContactPage.css'
import { ContactUsForm } from '../../commonComponents/getintouch/getInTouch'
import Footer from '../../commonComponents/footer/footer'
const ContactPage=()=> {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div  >
      <HeroSection
        img={bannerImage}
        title="Contact"
        text="When you need us, we're all ears!"
      />
      <div div className='contact_page_container'> 
        <div className='contact_page_inner_container'>
          <div className='cards_section'>
            {contactPageData.map((item,index)=>(
              <ContactPageCards image={item.image} title={item.title} textData={item.textData}/>
            ))}
          </div>
          <div className='contact_form_map_container'>
            <ContactUsForm/>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0712260346186!2d76.6932162261035!3d30.71639798642092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee584d679ae5%3A0x6a1ee486e89c1c9a!2sPP72%2BPFW%2C%20Industrial%20Area%2C%20Sector%2073%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140308!5e0!3m2!1sen!2sin!4v1732775584356!5m2!1sen!2sin" width="100%" height="100%" style={{border:0,borderRadius:'0.25rem'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <Footer/>

      
    </div>
  )
}

export default ContactPage
