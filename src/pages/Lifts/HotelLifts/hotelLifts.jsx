import React, { useEffect } from 'react'
import  bannerImage from '../../../assets/Lifts/commercialLiftBanner.jpg'
import { hotelLiftData,hotelLiftsCharacteristicsData,hotelLiftsFeaturesData } from './data'
import WelcomeLiftComponent from '../../../reusablecomponents/WelcomeLiftComponent/welcomeLiftComponent'
import './../styles/LiftStyles.css'
import LiftCharacteristics from '../../../reusablecomponents/LiftCharacteristic/liftCharacteristics'
import Faq from '../../../commonComponents/faq/Faq'
import Footer from '../../../commonComponents/footer/footer'
import HeroSection from '../../../commonComponents/HeroSection/HeroSection'
import LiftFeatureCard from '../../../reusablecomponents/LiftFeatureCard/liftFeatureCard'
import { Helmet } from 'react-helmet'
const HotelLifts = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div >
      <Helmet>
        <title>Hotel Lift Experts | Premium Lift Manufacturers – IEE Lifts</title>
        <meta
          name="description"
          content="IEE Lifts is a leading manufacturer of hotel lifts, utilizing the latest technologies to offer customizable lift solutions tailored to your specific needs."
        />
      </Helmet>
      <HeroSection
        img={bannerImage}
        title="HOTEL LIFTS"
        text="Efficiency & Elegance Combined for Exceptional Guest Experience"
      />
      <div className='lifts_container '>
        <div className='lifts_sub_container'>
            <WelcomeLiftComponent image={hotelLiftData.image} title={hotelLiftData.title} text={hotelLiftData.text}/>
            <div className='lift_features_container'>
                <h1 className='our_lift_features_text'>Our Hotel Lift Features</h1>
                <div className='lift_feature_allcards'>
                    {
                        hotelLiftsFeaturesData?.map((item,index)=>(
                            <LiftFeatureCard key={index+1}  title={item.title} text={item.text}/>
                        ))
                    }
                </div>
                <div className='lift_characteristics_container_section'>
                    <LiftCharacteristics data={hotelLiftsCharacteristicsData}/>
                </div>
            </div>
        </div>

        <Faq/>
        <Footer/>

        

      </div>
    </div>
  )
}

export default HotelLifts
