import React, { useEffect } from 'react'
import Accomplishment from './components/accomplishment/accomplishment'
import OurProject from './components/ourproject/OurProject'
import OurPatrons from './components/ourpatrons/ourPatrons'
import Footer from '../../commonComponents/footer/footer'
import HeroSection from '../../commonComponents/HeroSection/HeroSection'
import bannerImage from '../../assets/contactPage/contactBanner.jpg'
const AccomplishedWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <HeroSection
      img={bannerImage}
      title="Accomplished Work"
      text="Innovative Projects, Elevated Results: Browse Our Portfolio"
      />
      <OurProject/>
      <OurPatrons/>
      <Footer/>
      {/* <div>heloo Accomplishment</div> */}
    </div>
  )
}

export default AccomplishedWork
