import React, { useEffect } from 'react'
import  bannerImage from '../../../assets/Lifts/commercialLiftBanner.jpg'
import { hospitalLiftData,hospitalLiftsCharacteristicsData,hospitalLiftsFeaturesData } from './data'
import WelcomeLiftComponent from '../../../reusablecomponents/WelcomeLiftComponent/welcomeLiftComponent'
import './../styles/LiftStyles.css'
import LiftCharacteristics from '../../../reusablecomponents/LiftCharacteristic/liftCharacteristics'
import Faq from '../../../commonComponents/faq/Faq'
import Footer from '../../../commonComponents/footer/footer'
import HeroSection from '../../../commonComponents/HeroSection/HeroSection'
import LiftFeatureCard from '../../../reusablecomponents/LiftFeatureCard/liftFeatureCard'
import { Helmet } from 'react-helmet'
const HospitalLifts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <Helmet>
        <title>Top Hospital Lift Manufacturers in Mohali – IEE Lifts</title>
        <meta
          name="description"
          content="IEE Lifts, a top hospital lift manufacturer in Mohali, offers reliable, safe, and efficient elevators, designed by our expert in-house engineering team."
        />
      </Helmet>
      <HeroSection
        img={bannerImage}
        title="HOSPITAL LIFTS"
        text="REACH THE PINNACLE OF SUCCESS WITH US"
      />
      <div className='lifts_container '>
        <div className='lifts_sub_container'>
            <WelcomeLiftComponent image={hospitalLiftData.image} title={hospitalLiftData.title} text={hospitalLiftData.text}/>
            <div className='lift_features_container'>
                <h1 className='our_lift_features_text'>Our Hospital Lift Features</h1>
                <div className='lift_feature_allcards'>
                    {
                        hospitalLiftsFeaturesData?.map((item,index)=>(
                            <LiftFeatureCard key={index+1}  title={item.title} text={item.text}/>
                        ))
                    }
                </div>
                <div className='lift_characteristics_container_section'>
                    <LiftCharacteristics data={hospitalLiftsCharacteristicsData}/>
                </div>
            </div>
        </div>

        <Faq/>
        <Footer/>

        

      </div>
    </div>
  )
}

export default HospitalLifts
