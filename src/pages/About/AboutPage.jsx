import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import OurPatrons from "../AccomplishedWorkPage/components/ourpatrons/ourPatrons";
import Footer from "../../commonComponents/footer/footer";
import Accredentials from "../HomePage/components/Accredentials/accredentials";
import bannerImage from "../../assets/aboutBannerImage.jpg";
import { NavLink } from "react-router-dom";
import { achievementWidgetData } from "../HomePage/components/reusableComponents/widgetData";
import AchievementWidget from "../HomePage/components/reusableComponents/achievementWidget";
import pdf from "../../assets/IEE-LIFTS-BROCHURE.pdf";
import engineerImage from "../../assets/About/aboutPageEngineerImage.jpg";
import "./style.css";
import AboutAchievementWidget from "./reusableComponents/aboutAchievementWidget";
import { aboutAchievementWisgetData } from "./reusableComponents/data";
import founderImage from '../../assets/About/founderImagee.jpg'
import { TiSocialLinkedin } from "react-icons/ti";
function AboutPage() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const handleDownloadClick = () => {
    const pdfPath = pdf;
    window.open(pdfPath, "_blank");
  };

  return (
    <>
      <HeroSection
        img={bannerImage}
        title="About"
        text="Leading the way in Lift Innovation and Excellence"
      />
      <div className="about_container">
        <div className="about_inner_container ">
          <div className="our_company_profile_section">
            <div
              className="our_company_profile_left"
              style={{ paddingRight: "10px" }}
            >
              <p className="heddingText" style={{ marginBottom: "0.6rem" }}>
                Who We Are
              </p>
              <h2 className="hedding" style={{ marginBottom: "1rem" }}>
                Our Company Profile
              </h2>
              <p
                className="our_company_text"
                style={{ marginBottom: "1.5rem" }}
              >
                IEE Lifts Private Limited is an entrepreneurship which believes
                in persistence and a Foresighted vision. We as a Family are
                passionate to excel, grow and serve our Best to the customer. We
                dare to dream and encompass the globe in our Field of vision.
              </p>

              <p className="our_company_text">
                IEE Lifts Private Limited has grown to be a leader of vertical
                transportation in northern India that too in a little span of
                over two decades. Located in the tremendously growing Tricity,
                the company has carved a niche For itself by providing quality
                products that have excelled in every aspect. The highly
                customisable product, that we offer, is not easily available in
                the market. Our efforts were encouraged and appreciated so we
                started expanding our base, now we have three manufacturing
                units and corporate offices across Tricity. We are driven by
                contemporary ideas and revolutionary technologies which inspires
                us to nurture our Excellency.
              </p>
            </div>
            <div className="imgContainer">
              <img
                src={engineerImage}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
          </div>

          <div className="box why"></div>
          <div className="box why"></div>
          <div className="about_ach_cards_container_why_iee">
            <div className="about_ach_why_iee">
              <h2 className="hedding" style={{ marginBottom: "30px" }}>
                Why IEE?
              </h2>
              <p className="why_text_para">
                IEE Lifts Private Limited is a company dedicated to excellence
                in everything we do. We have provided top-quality lift solutions
                to our clients for many years and earned a reputation for
                innovation, expertise, and quality. We are committed to
                innovation and constantly working to develop new and better lift
                solutions for our clients. At IEE Lifts Private Limited, our
                clients deserve the best, and we are dedicated to providing them
                with the highest-quality lift systems and the best possible
                service.
              </p>
              <div className="navbar_child_right">
                <NavLink
                  to="/customise-lifts"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    onClick={handleDownloadClick}
                    className="navbar_child_right_cl_button"
                    style={{ marginTop: "2rem" }}
                  >
                    DOWNLOAD CATALOG
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="about_ach_cards">
              {aboutAchievementWisgetData.map((item, index) => (
                <AboutAchievementWidget
                  image={item.image}
                  title={item.title}
                  para={item.para}
                  alt={item.alt}
                />
              ))}
            </div>
          </div>
          <div
            className="achievement_cards_section"
            style={
              {
                // flexWrap: "wrap",
                // height: "400px",
              }
            }
          >
            {achievementWidgetData.map((item, index) => (
              <AchievementWidget
                key={index}
                image={item.image}
                number={item.number}
                text={item.text}
              />
            ))}
          </div>

          <div className="our_experts_section">
            <h4 className="our_experts_h4">Our Experts</h4>
            <h2 className="the_team_h2">The Team</h2>
            <div className="founder_image_and_about_section">
              <div className="founder_image_left">
                <img src={founderImage} alt="" />
              </div>
              <div className="founder_about_right">
                <h4 className="about_founder_h4">About Founder</h4>
                <h2 className="founder_name_h2">Rajinder Mohan Singh</h2>
                <p className="founder_about_p">
                  IEE Lifts Private Limited is what it is today owing to a
                  vision by Mr. Rajinder Mohan, our founder dearest. His
                  entrepreneurial spirit led us to become a leader in vertical
                  transportation holding the ground for more than two decades!
                </p>

                <p className="founder_about_p">
                  Mr. Singh’s core values of persistence and his foresighted
                  vision have always guided the IEE Lifts Private Limited family
                  on its path to excellence and growth while consistently
                  delivering the best to the customer. He is a dreamer, our
                  founder, who dared to shatter the glass ceiling and transcend
                  the industry standards in the country.
                </p>
                <p className="founder_about_p">
                  {" "}
                  He believes his competition is not with other lift
                  manufacturing companies in India and abroad, instead, he
                  strives every day to challenge himself and in turn, IEE Lifts
                  to outgrow itself and make an impact on people’s lives. After
                  diligently pouring his heart & soul into IEE Lifts Private
                  Limited, Mr. Rajinder Mohan now serves as our wise counsel,
                  still enriching the company with his wisdom and keen business
                  acumen.{" "}
                </p>

                <div className="logo_linkedin" style={{height:'3rem',width:'3rem'}}>
                <TiSocialLinkedin style={{fontSize:'2rem',color:'white'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <HomeAchievement /> */}

      <OurPatrons />
      <Accredentials />
      <Footer />
    </>
  );
}

export default AboutPage;
