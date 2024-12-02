import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import style from "./style.module.css";
import Footer from "../../commonComponents/footer/footer";
import OurPatrons from "../AccomplishedWorkPage/components/ourpatrons/ourPatrons";
import AuthorisedPartners from "../HomePage/components/abhishekAuthorisedPartners/authorisedPartners";
import bannerImage from '../../assets/safetyBannerImage.jpg'
import img6 from "./safety-icon-06.png";
import img1 from "./safety-icon-01.png";
import img2 from "./safety-icon-02.png";
import img3 from "./safety-icon-03.png";
import img4 from "./safety-icon-04.png";
import img5 from "./safety-icon-05.png";
const card = [
  {
    img: img1,
    text: "Universal Door Functionality",
  },
  {
    img: img2,
    text: "Infrared Curtain Security",
  },
  {
    img: img3,
    text: "Controlled Speed",
  },
  {
    img: img4,
    text: "Visibility Window",
  },
  {
    img: img5,
    text: "Eco Friendly",
  },
  {
    img: img6,
    text: "Complete Access Control",
  },
];



function Safety() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection
        img={
          bannerImage
        }
        title="Safety"
        text="Your Safety is our Priority"
      />
      <div className={style.container}>
        <div className={`${style.innerContainer} ${style.cardContainer}`}>
          {card.map((e) => (
            <div className={style.card}>
              <div className={style.cardImage}>
                <img src={e.img} alt="" />
              </div>
              <p className={style.cardText}>{e.text}</p>
            </div>
          ))}
        </div>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center" }}
        >
          <div className={` ${style.box}`} style={{ paddingRight: "10px" }}>
            <p
              className={`${style.heddingText}`}
              style={{ marginBottom: "34px" }}
            >
              At IEE
            </p>
            <h2 className={`${style.hedding}`} style={{ marginBottom: "15px" }}>
              Your Safety is Our Promise!
            </h2>
            <p className={`${style.text}`}>
              Your safety means everything to us. It’s not just a value. It’s a
              promise we make to every passenger who steps into our lifts. We
              know how important it is for you to feel secure and protected,
              primarily when you rely on our elevators to transport you to your
              destination. That’s why we spare no effort or expense when
              implementing state-of-the-art safety features and protocols in all
              our elevators. We take your safety personally. Every detail,
              system, and process is carefully designed and tested to ensure you
              arrive at your terminus on time, in good health and spirits.
            </p>
          </div>
          <div className={`${style.box}`} style={{ flex: 1 }}>
            <img
              src="https://ieelifts.com/wp-content/uploads/2023/08/woman-girl-talking-before-closed-elevator-doors-1-1-scaled.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${style.innerContainer} ${style.cardContainer}`}
          style={{ justifyContent: "space-between", gap: "50px" }}
        >
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
              Comprehensive Safety Protocols
            </p>
            <p className={style.text}>
              We prioritise your protection and have comprehensive safety
              protocols to minimise the risk of accidents or injuries. This
              includes formal safety training, detailed operating procedures for
              equipment, and strict adherence to industry safety standards and
              codes.
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
              Highly Trained Technicians
            </p>
            <p className={style.text}>
              When it comes to safety, having knowledgeable and experienced
              technicians is essential. At IEE, we value safety and invest
              heavily in training and development programs for our technicians
              to ensure they are up-to-date on the latest safety standards and
              best practices.
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
              Quality Assurance
            </p>
            <p className={style.text}>
              We prioritise quality service and have rigorous quality assurance
              compliance in place. This involves regular inspections and audits
              of our products and services and a commitment to continuous
              improvement based on customer feedback and other metrics.
            </p>
          </div>
        </div>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center" ,  gap:"10%", rowGap:"60px"}}
        >
          <div
            className={` ${style.box}`}
            style={{ paddingRight: "10px", minWidth: "490px", }}
          >
            <h2 className={`${style.hedding}`} style={{ marginBottom: "15px" }}>
              Automatic Rescue Device (ARD)
            </h2>
            <p className={`${style.text}`}>
              Automatic Rescue Device (ARD) is a lifeline for your loved ones.
              It’s a safety feature that ensures your family and seniors are
              protected in case of an emergency. ARD is designed to activate
              automatically during a power outage, preventing elevators/lifts
              from getting stuck between floors and providing a safe and
              comfortable descent to the nearest floor.
            </p>
            <p style={{ height: "30px" }}></p>
            <p className={`${style.text}`}>
              As you think about your loved ones, their safety is always a top
              priority. You want to be sure that they’re protected at all times,
              especially in the event of an emergency. With Automatic Rescue
              Device (ARD), you can have peace of mind knowing that they’ll be
              safe and secure even when the unexpected happens. It’s a feature
              that’s not just smart but also compassionate, designed to keep
              your family and seniors safe and secure at all times.
            </p>
          </div>
          <div className={`${style.imgContainer}`} style={{ maxWidth: "" }}>
            <img
              src="https://ieelifts.com/wp-content/uploads/2023/01/safety-main-img01.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center" ,  gap:"10%",rowGap:"60px"}}
        >
          <div className={`${style.imgContainer}`} style={{ maxWidth: "" }}>
            <img
              src="https://ieelifts.com/wp-content/uploads/2023/01/safety-main-img02.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div
            className={` ${style.box}`}
            style={{ paddingRight: "10px", minWidth: "490px", }}
          >
            <h2 className={`${style.hedding}`} style={{ marginBottom: "15px" }}>
              Over Speed Governer (OSG)
            </h2>
            <p className={`${style.text}`}>
              At IEE Lifts, we understand the importance of safety when it comes
              to lifts. That’s why we have incorporated an Over Speed Governor
              (OSG) in our elevators to ensure the safety of our passengers. The
              OSG is a safety device that prevents the elevator from moving at
              an excessive speed in case of a malfunction or a mechanical
              failure. This safety feature can save lives, and that’s what makes
              it so important to us.
            </p>
            <p style={{ height: "30px" }}></p>
            <p className={`${style.text}`}>
              We are committed to providing our customers with the safest
              possible elevator experience, and the OSG is just one way we are
              doing that. With the Over Speed Governor in place, our passengers
              can feel secure knowing that their safety is our top priority.
              It’s comforting to know that we have taken all the necessary
              precautions to ensure the safety of those using our lifts.
            </p>
          </div>
        </div>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center", gap:"10%", rowGap:"60px" }}
        >
          <div
            className={` ${style.box}`}
            style={{ paddingRight: "10px", minWidth: "490px" }}
          >
            <h2 className={`${style.hedding}`} style={{ marginBottom: "15px" }}>
            Human Machine Interfaces (HMI)
            </h2>
            <p className={`${style.text}`}>
            Riding in an elevator can be nerve-wracking for some people, especially those who suffer from claustrophobia or fear of heights. That’s why we have implemented the latest safety features, including the Human Machine Interface (HMI), in all our elevators.
            </p>
            <p style={{ height: "30px" }}></p>
            <p className={`${style.text}`}>
            The HMI is a cutting-edge technology that allows passengers to communicate with the elevator and vice versa. It is designed to enhance the passenger experience while ensuring their safety. With the HMI, passengers can easily select their desired floor, receive critical information about the elevator’s status, and even call for help in an emergency. 
            </p>
            <p style={{ height: "30px" }}></p>
            <p className={`${style.text}`}>
            It is not just a safety feature but a peace-of-mind feature for our passengers. Knowing that they can easily communicate with the elevator and that it will respond promptly in case of an emergency can significantly reduce their anxiety and make their elevator ride a more pleasant experience.
            </p>
          </div>
          <div className={`${style.imgContainer}`} >
            <img
              src="https://ieelifts.com/wp-content/uploads/2023/01/safety-main-img03.jpg"
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        <div
          className={`${style.innerContainer} `} style={{position:"relative"}}
        >
          <img src="https://ieelifts.com/wp-content/uploads/2023/01/safety-main-img04.jpg" style={{width:"100%", aspectRatio:"16/9"}} alt="" />
         {/*  */}
        </div>
      </div>
      <AuthorisedPartners />
      <OurPatrons />
      <Footer />
    </>
  );
}

export default Safety;
