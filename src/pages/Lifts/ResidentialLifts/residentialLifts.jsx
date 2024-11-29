import React, { useEffect } from 'react'
import  bannerImage from '../../../assets/Lifts/commercialLiftBanner.jpg'
import { residentialLiftsData,residentialLiftsCharacteristicsData,residentialLiftsFeaturesData } from './data'
import WelcomeLiftComponent from '../../../reusablecomponents/WelcomeLiftComponent/welcomeLiftComponent'
import './../styles/LiftStyles.css'
import LiftCharacteristics from '../../../reusablecomponents/LiftCharacteristic/liftCharacteristics'
import Faq from '../../../commonComponents/faq/Faq'
import Footer from '../../../commonComponents/footer/footer'
import HeroSection from '../../../commonComponents/HeroSection/HeroSection'
import LiftFeatureCard from '../../../reusablecomponents/LiftFeatureCard/liftFeatureCard'
const ResidentialLifts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <HeroSection
        img={bannerImage}
        title="INDUSTRIAL LIFTS"
        text="Built for Strength, Engineered for Powerful Performance & Efficiency"
      />
      <div className='lifts_container '>
        <div className='lifts_sub_container'>
            <WelcomeLiftComponent image={residentialLiftsData.image} title={residentialLiftsData.title} text={residentialLiftsData.text}/>
            <div className='lift_features_container'>
                <h1 className='our_lift_features_text'>Our Hotel Lift Features</h1>
                <div className='lift_feature_allcards'>
                    {
                        residentialLiftsFeaturesData?.map((item,index)=>(
                            <LiftFeatureCard key={index+1}  title={item.title} text={item.text}/>
                        ))
                    }
                </div>
                <div className='lift_characteristics_container_section'>
                    <LiftCharacteristics data={residentialLiftsCharacteristicsData}/>
                </div>
            </div>
        </div>

        <Faq/>
        <Footer/>

        

      </div>
    </div>
  )
}

export default ResidentialLifts
