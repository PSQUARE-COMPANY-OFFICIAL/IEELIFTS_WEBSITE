import React, { useEffect } from 'react'

import  bannerImage from '../../../assets/Lifts/commercialLiftBanner.jpg'
import { commercialLiftData,commercialLiftsFeaturesData, commercialLiftsCharacteristicsData } from './data'
import WelcomeLiftComponent from '../../../reusablecomponents/WelcomeLiftComponent/welcomeLiftComponent'
import './../styles/LiftStyles.css'
import LiftCharacteristics from '../../../reusablecomponents/LiftCharacteristic/liftCharacteristics'
import Faq from '../../../commonComponents/faq/Faq'
import Footer from '../../../commonComponents/footer/footer'
import HeroSection from '../../../commonComponents/HeroSection/HeroSection'
import LiftFeatureCard from '../../../reusablecomponents/LiftFeatureCard/liftFeatureCard'
const CommercialLifts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <HeroSection
        img={bannerImage}
        title="COMMERCIAL LIFTS"
        text="REACH THE PINNACLE OF SUCCESS WITH US"
      />
      <div className='lifts_container'>
        <div className='lifts_sub_container'>
            <WelcomeLiftComponent image={commercialLiftData.image} title={commercialLiftData.title} text={commercialLiftData.text}/>
            <div className='lift_features_container'>
                <h1 className='our_lift_features_text'>Our Hospital Lift Features</h1>
                <div className='lift_feature_allcards'>
                    {
                        commercialLiftsFeaturesData?.map((item,index)=>(
                            <LiftFeatureCard key={index+1}  title={item.title} text={item.text}/>
                        ))
                    }
                </div>
                <div className='lift_characteristics_container_section'>
                    <LiftCharacteristics data={commercialLiftsCharacteristicsData}/>
                </div>
            </div>
        </div>

        <Faq/>
        <Footer/>

        

      </div>
    </div>
  )
}

export default CommercialLifts
