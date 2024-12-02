import React, { useEffect } from 'react'
import Landing from './components/Landing/landing'
import Features from './components/Features/features'
import HomeAbout from './components/homeAbout/homeAbout'
import Footer from '../../commonComponents/footer/footer'
import HomeAchievement from './components/homeAchievement/homeAchievement'
import Accredentials from './components/Accredentials/accredentials'
import GetInTouch from '../../commonComponents/getintouch/getInTouch'
import HydraulicLiftsHome from './components/hydraulicLifts/hydraulicLifts'
import AuthorisedPartners from './components/authorisedPartners/authorisedPartners'
import WordsFromClient from './components/wordsfromclient/wordsFromClient'
import OurPatrons from '../AccomplishedWorkPage/components/ourpatrons/ourPatrons'
import Faq from '../../commonComponents/faq/Faq'
import MobileApp from './components/mobileApp/mobileApp'
import ShowcaseGallery from './components/ShowcaseGallery/showcaseGallery'
import OurBlogs from './components/ourblogs/ourBlogs'
import './styles/Homepage.css'
const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])
  return (
    <div className='homepage_main_container'>
      <Landing/>
      <Features/>
      <HomeAbout/>
      <HomeAchievement/>
      <GetInTouch/>
      <HydraulicLiftsHome/>
      <AuthorisedPartners/>
      <WordsFromClient/>
      <OurBlogs/>
      <OurPatrons/>
      <ShowcaseGallery/>
      <Accredentials/>
      <Faq/>
      <MobileApp/>
      <Footer/>
    </div>
  )
}

export default Home
