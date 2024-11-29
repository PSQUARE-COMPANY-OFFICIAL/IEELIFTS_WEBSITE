import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import OurPatrons from "../AccomplishedWorkPage/components/ourpatrons/ourPatrons";
import Footer from "../../commonComponents/footer/footer";
import WordsFromClient from "../HomePage/components/wordsfromclient/wordsFromClient";
import style from "./style.module.css";
import Accredentials from "../HomePage/components/Accredentials/accredentials";
import HomeAchievement from "../HomePage/components/homeAchievement/homeAchievement";
import AuthorisedPartners from "../HomePage/components/abhishekAuthorisedPartners/authorisedPartners";
import { NavLink } from "react-router-dom";
import { achievementWidgetData } from "../HomePage/components/reusableComponents/widgetData";
import AchievementWidget from "../HomePage/components/reusableComponents/achievementWidget";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection
        img={
          "https://ieelifts.com/wp-content/uploads/2023/01/process-pg-banner01.png"
        }
        title="About"
        text="Leading the way in Lift Innovation and Excellence"
      />
      <div className={style.container}>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center" }}
        >
          <div className={` ${style.box}`} style={{ paddingRight: "10px" }}>
            <p className={style.heddingText} style={{ marginBottom: "10px" }}>
              Who We Are
            </p>
            <h2 className={`${style.hedding}`} style={{ marginBottom: "15px" }}>
              Our Company Profile
            </h2>
            <p className={`${style.text}`}>
              IEE Lifts Private Limited is an entrepreneurship which believes in
              persistence and a Foresighted vision. We as a Family are
              passionate to excel, grow and serve our Best to the customer. We
              dare to dream and encompass the globe in our Field of vision.
            </p>
            <p style={{ height: "20px" }}></p>
            <p className={`${style.text}`}>
              IEE Lifts Private Limited has grown to be a leader of vertical
              transportation in northern India that too in a little span of over
              two decades. Located in the tremendously growing Tricity, the
              company has carved a niche For itself by providing quality
              products that have excelled in every aspect. The highly
              customisable product, that we offer, is not easily available in
              the market. Our efforts were encouraged and appreciated so we
              started expanding our base, now we have three manufacturing units
              and corporate offices across Tricity. We are driven by
              contemporary ideas and revolutionary technologies which inspires
              us to nurture our Excellency.
            </p>
            {/* 
            <p className={`${style.text}`}>More Queries?</p>
            <p style={{ height: "30px" }}></p> */}
          </div>
          <div className={`${style.imgContainer}`}>
            <img
              src="https://ieelifts.com/wp-content/uploads/2023/01/maintenance-img-01.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center", gap:"50px" , flexWrap:"wrap"}}
        >
          <div  className={` ${style.box}  ${style.why}`}>
            <h2 className={`${style.hedding}`} style={{ marginBottom: "30px" }}>
              Why IEE?
            </h2>
            <p className={`${style.text}`}>
              IEE Lifts Private Limited is a company dedicated to excellence in
              everything we do. We have provided top-quality lift solutions to
              our clients for many years and earned a reputation for innovation,
              expertise, and quality. We are committed to innovation and
              constantly working to develop new and better lift solutions for
              our clients. At IEE Lifts Private Limited, our clients deserve the
              best, and we are dedicated to providing them with the
              highest-quality lift systems and the best possible service.
            </p>
            <p style={{ height: "40px" }}></p>
            <div className="navbar_child_right">
              <NavLink
                style={{ textDecoration: "none" }}
                to={"/customise-lifts"}
              >
                <div className="navbar_child_right_cl_button">
                  Download Catalog
                </div>
              </NavLink>
            </div>
          </div>
          <div className={` ${style.box}  ${style.why}`} >
            <div
              className={style.card}
              style={{
                alignItems: "flex-start",
                backgroundColor: "transparent",
                padding: "0",
              }}
            >
              <img
                src="https://ieelifts.com/wp-content/uploads/2023/01/safety-setting-icon01.png"
                alt=""
                style={{ height: "50px", aspectRatio: "1" }}
              />
              <p
                className={style.heddingText}
                style={{
                  fontSize: "20px",
                  color: "var(--white)",
                  marginTop: "10px",
                }}
              >
               Team Of Skilled Designers
              </p>
              <p className={style.text}>
              Our designers work closely with our clients to understand their needs, and they provide expert guidance throughout the process.
              </p>
            </div>
            <div
              className={style.card}
              style={{
                alignItems: "flex-start",
                backgroundColor: "transparent",
                padding: "0",
              }}
            >
              <img
                src="https://ieelifts.com/wp-content/uploads/2023/01/safety-setting-icon01.png"
                alt=""
                style={{ height: "50px", aspectRatio: "1" }}
              />
              <p
                className={style.heddingText}
                style={{
                  fontSize: "20px",
                  color: "var(--white)",
                  marginTop: "10px",
                }}
              >
              In-house Manufacturing Unit-35,000 Sq. Ft
              </p>
              <p className={style.text}>
              We boast of our state-of-the-art in-house manufacturing unit, where we design and produce top-quality lifts to meet the specific conditions of our clients.
              </p>
            </div>
          </div>
          <div className={` ${style.box}  ${style.why}`} >
            <div
              className={style.card}
              style={{
                alignItems: "flex-start",
                backgroundColor: "transparent",
                padding: "0",
              }}
            >
              <img
                src="https://ieelifts.com/wp-content/uploads/2023/01/safety-setting-icon01.png"
                alt=""
                style={{ height: "50px", aspectRatio: "1" }}
              />
              <p
                className={style.heddingText}
                style={{
                  fontSize: "20px",
                  color: "var(--white)",
                  marginTop: "10px",
                }}
              >
           17+ Years Of Manufacturing
              </p>
              <p className={style.text}>
              We use the latest technology and techniques in our manufacturing process to ensure the highest level of quality and safety for our customers.
              </p>
            </div>
            <div
              className={style.card}
              style={{
                alignItems: "flex-start",
                backgroundColor: "transparent",
                padding: "0",
              }}
            >
              <img
                src="https://ieelifts.com/wp-content/uploads/2023/01/safety-setting-icon01.png"
                alt=""
                style={{ height: "50px", aspectRatio: "1" }}
              />
              <p
                className={style.heddingText}
                style={{
                  fontSize: "20px",
                  color: "var(--white)",
                  marginTop: "10px",
                }}
              >
              115+ Experienced Professionals
              </p>
              <p className={style.text}>
              Our team is well-versed in the latest technologies and industry standards and is committed to providing our clients with innovative and efficient lift systems.
              </p>
            </div>
          </div>
      
        </div>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center", gap:"50px" , flexWrap:"wrap", height:"400px"}}
        >
         
          {achievementWidgetData.map((item, index) => {
            return (
              <AchievementWidget image={item.image} number={item.number} text={item.text}/>
            );
          })}
      
        </div>
        {/* <div className="home_achievement_right_box"> */}
        {/* </div> */}
      </div>
      <HomeAchievement />
      <AuthorisedPartners />
      <div className={style.container}>
        <div style={{ height: "280px" }}></div>
      </div>
      <WordsFromClient
        data={[
          {
            fullName: "abhishek",
            review:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel sint iste numquam, consectetur minima voluptates doloremque excepturi aut ut exercitationem repudiandae blanditiis, nam illum reiciendis officia ipsam fugit facere!",
          },
          {
            fullName: "abhishek",
            review:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel sint iste numquam, consectetur minima voluptates doloremque excepturi aut ut exercitationem repudiandae blanditiis, nam illum reiciendis officia ipsam fugit facere!",
          },
          {
            fullName: "abhishek",
            review:
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel sint iste numquam, consectetur minima voluptates doloremque excepturi aut ut exercitationem repudiandae blanditiis, nam illum reiciendis officia ipsam fugit facere!",
          },
        ]}
      />
      <OurPatrons />
      <Accredentials />
      <Footer />
    </>
  );
}

export default AboutPage;
