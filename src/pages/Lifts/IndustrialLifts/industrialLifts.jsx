import React, { useEffect } from 'react'
import  bannerImage from '../../../assets/Lifts/commercialLiftBanner.jpg'
import { industrialLiftData,industrialLiftsCharacteristicsData,industrialLiftsFeaturesData } from './data'
import WelcomeLiftComponent from '../../../reusablecomponents/WelcomeLiftComponent/welcomeLiftComponent'
import './../styles/LiftStyles.css'
import LiftCharacteristics from '../../../reusablecomponents/LiftCharacteristic/liftCharacteristics'
import Faq from '../../../commonComponents/faq/Faq'
import Footer from '../../../commonComponents/footer/footer'
import HeroSection from '../../../commonComponents/HeroSection/HeroSection'
import LiftFeatureCard from '../../../reusablecomponents/LiftFeatureCard/liftFeatureCard'
import { Helmet } from 'react-helmet'
const IndustrialLifts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <Helmet>
        <title>Industrial Lifts Manufacturing & Installation Experts – IEE Lifts</title>
        <meta
          name="description"
          content=" IEE Lifts, a leading industrial lift manufacturer in Mohali, delivering high-quality, reliable and durable lift solutions for industrial needs."
        />
      </Helmet>
      <HeroSection
        img={bannerImage}
        title="INDUSTRIAL LIFTS"
        text="Built for Strength, Engineered for Powerful Performance & Efficiency"
      />
      <div className='lifts_container '>
        <div className='lifts_sub_container'>
            <WelcomeLiftComponent image={industrialLiftData.image} title={industrialLiftData.title} text={industrialLiftData.text}/>
            <div className='lift_features_container'>
                <h1 className='our_lift_features_text'>Our Hotel Lift Features</h1>
                <div className='lift_feature_allcards'>
                    {
                        industrialLiftsFeaturesData?.map((item,index)=>(
                            <LiftFeatureCard key={index+1}  title={item.title} text={item.text}/>
                        ))
                    }
                </div>
                <div className='lift_characteristics_container_section'>
                    <LiftCharacteristics data={industrialLiftsCharacteristicsData}/>
                </div>
            </div>
        </div>

        <Faq/>
        <Footer/>

        

      </div>
    </div>
  )
}

export default IndustrialLifts
