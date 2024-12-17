import React, { useEffect } from 'react'
import HeroSection from '../../commonComponents/HeroSection/HeroSection'
import bannerImage from '../../assets/contactPage/contactBanner.jpg'
import {ContactPageCards }  from './reusableComponents/contactPageReusableComponents'
import { contactPageData } from './data'
import'./styles/ContactPage.css'
import { ContactUsForm } from '../../commonComponents/getintouch/getInTouch'
import Footer from '../../commonComponents/footer/footer'
import { Helmet } from 'react-helmet'
const ContactPage=()=> {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div  >
      <Helmet>
        <title>Contact us | Best Lift Company in India – IEE Lifts</title>
        <meta
          name="description"
          content="Check out the best lift company in India. Contact us at +91 9620000026 or email at ieechandigarh@gmail.com."
        />
      </Helmet>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303.18435102076336!2d76.69609202356591!3d30.714496085938677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee5703d374e5%3A0xda2704bd4dce4210!2sIEE%20LIFTS%20%7C%20Lifts%20Manufacturer%20Chandigarh!5e0!3m2!1sen!2sin!4v1734334194815!5m2!1sen!2sin" width="100%" height="100%" style={{border:0,borderRadius:'0.25rem'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
          </div>
        </div>
      </div>
      <Footer/>

      
    </div>
  )
}

export default ContactPage
