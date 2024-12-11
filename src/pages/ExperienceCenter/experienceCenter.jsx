import React, { useEffect } from 'react'
import HeroSection from '../../commonComponents/HeroSection/HeroSection'
import bannerImage from '../../assets/processBannerImage.png'
import image4 from '../../assets/ShowcaseGallery/image04.jpg'
import image7 from '../../assets/ShowcaseGallery/image07.jpg'
import './style.css'
import ExperienceWidget from './reusableComponents/experienceWidget'
import { experienceWidgetData } from './reusableComponents/data'
import OurPatrons from '../AccomplishedWorkPage/components/ourpatrons/ourPatrons'
import Footer from '../../commonComponents/footer/footer'
const ExperienceCenter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <HeroSection img={bannerImage} title={'EXPERIENCE CENTER'} text={'Step into Tomorrow: Your Journey through the IEE Lifts Experience Center'} />
            <div className='experience_center_container'>
                <div className='experience_center_sub_container'>
                    <div className='introduction_section'>
                        <h2 className='introduction_heading'>Witness the Future of Elevation</h2>
                        <p className='introduction_paragraph intro_first_heading'>Witness the sophisticated elevation first-hand at the IEE Lift Experience Center and see everything up close! From our elegant designs to soundless technology, test every inch of our lifts before you spend your hard-earned money. Read further to know more about our experience centre and how it will help you make the right decision.</p>

                    </div>

                    <div>
                        <div className='article_container'>
                            <div className='image_section'>
                                <h2 className='article_heading'>What is an Experience Centre?</h2>
                                <p className='article_paragraph'>
                                    As the name suggests, an experience centre is a dedicated space focused on showcasing a company’s products for the users to understand their working and visualise them in their homes/buildings in order to make the smartest shopping decision.
                                </p>
                                <p className='article_paragraph'>
                                    You may have seen it for small appliances such as microwaves or even TVs placed in showrooms but you most definitely have not seen a centre with various kinds of commercial, industrial, and residential lifts in the entire Tricity area, or beyond!
                                </p>
                            </div>
                            <div className='article_section_image'>
                                <img src={image4}></img>
                            </div>
                        </div>
                        <div className='article_container'>
                            <div className='article_section_image'>
                                <img src={image7}></img>
                            </div>
                            <div className='image_section'>
                                <h2 className='article_heading'>What is an Experience Centre?</h2>
                                <p className='article_paragraph'>
                                    As the name suggests, an experience centre is a dedicated space focused on showcasing a company’s products for the users to understand their working and visualise them in their homes/buildings in order to make the smartest shopping decision.
                                </p>
                                <p className='article_paragraph'>
                                    You may have seen it for small appliances such as microwaves or even TVs placed in showrooms but you most definitely have not seen a centre with various kinds of commercial, industrial, and residential lifts in the entire Tricity area, or beyond!
                                </p>
                            </div>

                        </div>
                        <div className='introduction_section'>
                            <h2 className='introduction_heading lower_intro'>What will you see at the IEE Lift Experience Centre?</h2>
                            <p className='introduction_paragraph'>Located in the Industrial sector in Mohali, our Experience centre is truly a state-of-the-art facility that looks like any other factory from the outside, but the moment you enter, that’s when the magic unfolds! Set in a contemporary finish, you lead into an embracing entryway with a magnificent Capsule elevator and an elegant flight of stairs illuminated with a stunning asymmetrical chandelier circling the roof. At the first look, you can imagine the luxury and unique attention to detail our lifts will add to your space. Here’s a brief breakdown of our experience centre.</p>
                        </div>
                        <div className='experience_widgets_section'>
                            {experienceWidgetData?.map((item, index) => (
                                <ExperienceWidget key={index} heading={item.heading} para={item.para} />
                            ))}
                        </div>
                        <OurPatrons />
                        <div></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ExperienceCenter
