import React, { useEffect } from 'react'
import Accomplishment from './components/accomplishment/accomplishment'
import OurProject from './components/ourproject/OurProject'
import OurPatrons from './components/ourpatrons/ourPatrons'
import Footer from '../../commonComponents/footer/footer'
import HeroSection from '../../commonComponents/HeroSection/HeroSection'
import bannerImage from '../../assets/contactPage/contactBanner.jpg'
import { Helmet } from 'react-helmet'
const AccomplishedWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <Helmet>
        <title>Accomplished Work - Showcasing Excellence in Elevator | IEE Lifts</title>
        <meta
          name="description"
          content="At IEE Lifts, we combine experience and expertise to deliver exceptional elevator solutions. Explore our accomplished projects and work."
        />
      </Helmet>
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
