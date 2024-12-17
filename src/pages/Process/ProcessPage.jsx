import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import OurPatrons from "../AccomplishedWorkPage/components/ourpatrons/ourPatrons";
import Footer from "../../commonComponents/footer/footer";
import WordsFromClient from "../HomePage/components/wordsfromclient/wordsFromClient";
import bannerImage from '../../assets/processBannerImage.png'
import image1 from './../../assets/Process/process-img01.jpg'
import image2 from './../../assets/Process/process-img02.jpg'
import image3 from './../../assets/Process/process-img03.jpg'
import image4 from './../../assets/Process/process-img04.jpg'
import image5 from './../../assets/Process/process-img05.jpg'
import image6 from './../../assets/Process/process-img06.jpg'
import image7 from './../../assets/Process/process-img07.jpg'
import style from "./style.module.css";
import { Helmet } from "react-helmet";
const data = [
  {
    headding: "We Connect & Discuss",
    text1:
      "Once the customer reaches out to us through the website, we schedule our first call.",
    text2:
      "This appointment is essential to gather pertinent information regarding the client’s requirements. We discuss the facility’s size, the focus points, and, most significantly, the potent lift users. This initial stage indicates where to start once the decision is made and the order is placed.",
    img: image1,
  },
  {
    headding: "Field Analysis By Field Design Department",
    text1:
      "Our Field Design Department then prepares for the area visit for a detailed site analysis.",
    text2:
      "The size of the site, the number of floors, and the building structure that makes up the underground facility are all listed in a detailed document. The team creates a list of particular needs that must be supplied by the client, such as civil requirements, electrical requirements, etc.",
    img: image2,
  },
  {
    headding: "Site Drawings Are Produced",
    text1:
      "Using extensive study and the help of architects, site drawings are created.",
    text2:
      "Before beginning work on the site, in construction, or assembly, we create and submit GA drawings of the lift system to architects and owners for approval. Any modifications to the size or directions are considered, along with any new requirements. The dimensions of the hoistway walls and the pit’s depth are shown in these drawings, along with other features.",
    img: image3,
  },
  {
    headding: "Design Samples Are Presented",
    text1:
      "It’s time to show the client some design samples after the final drawings.",
    text2:
      "At this point, based on the drawings and site analysis, our team provides the client with the best design samples. This is important since the client-selected sample serves as the basis for procuring the materials. Additionally, the possibility for customization depends on the utility and aesthetic appeal.",
    img: image4,
  },
  {
    headding: "And The Development Starts",
    text1:
      "We start the development once the client has approved the design sample and the drawings.",
    text2:
      "Upon procuring the materials as per discussion with the client, we begin our lift installation process. A shaft is constructed first using concrete or steel, depending on the lift’s material type. Further passenger conveyors are installed, which are built and tested off-site.",
    img: image5,
  },
  {
    headding: "Certificate Of Completion",
    text1:
      "Before we provide the client with the control panel, this is the last step of the lift installation process.",
    text2:
      "Once the entire installation procedure is finished and the lift is prepared for usage, one of the crucial documents, known as a completion certificate (CC), is received. This certificate verifies that the lift was built properly and is safe for users.",
    img: image6,
  },
  {
    headding: "Selecting Maintenance Packages",
    text1:
      "IEE maintenance service packages are now being made accessible since the lift has been installed.",
    text2:
      "We provide the most cutting-edge approaches to maintain your elevator in top condition and easily upgrade it with the best advancements. Our maintenance programme is customised to your requirements and ensures that your equipment operates safely and dependably while prolonging its life.",
    img: image7,
  },
];

function ProcessPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>The Journey to Elevator Excellence – Our Process | IEE Lifts</title>
        <meta
          name="description"
          content="At IEE Lifts, we blend experience, expertise, and a passion for elevators to deliver exceptional solutions. Explore our portfolio of accomplished projects."
        />
      </Helmet>
      <HeroSection
        img={
          bannerImage
        }
        title="Process"
        text="In absolute transparency, we construct bespoke lifts"
      />
      <div className={style.container}>
        <div className={`${style.innerContainer} ${style.topContainer}`}>
          <div style={{ width: "100%", maxWidth: "530px" , minWidth:"300px"}}>
            <h2
              className={style.hedding}
              style={{ color: "var(--primary-color)" ,textTransform:"uppercase"}}
            >
              Re-Designing The Urban Era
            </h2>
            <p className={style.heddingText} style={{ marginTop: "10px",color:'white', textTransform:"uppercase"}}>
              IEE thrives by fostering excellence in every design
            </p>
          </div>
          <p style={{  width:"100%" }} className={style.text}>
            We build high-end elevators through improved user experience and
            streamlined workflow to enhance the tenant and visitor experience.
            We foresee the future with a modular solution that adjusts to your
            decision-making process. Consequently, develop unique systems for
            your building that have superior integration capabilities.
          </p>
        </div>
        {data.map((e, i) => (
          <>
            <div
              className={`${style.innerContainer} ${style.topContainer}`}
              style={{ paddingTop: "100px", alignItems: "center" }}
            >
              <div style={{ width: "100%", maxWidth: "530px" , minWidth:"300px"}}>
                <img src={e.img} style={{ width: "100%" }} alt="" />
              </div>
              <div className={style.right} style={{ width: "100%" }}>
                <p
                  className={style.heddingText}
                  style={{ marginBottom: "10px" }}
                >
                  STEP {i + 1}
                </p>
                <h2 className={style.hedding} style={{ marginBottom: "18px",textTransform:"uppercase" }}>
                  {e.headding}
                </h2>
                <div className={style.textLineCon}
                  style={{ display: "flex", gap: "2%", marginBottom: "14px" }}
                >
                  <div
                    style={{
                      height: "4px",
                      marginTop: "12px",
                      width: "15%",
                      background: "var(--primary-color)",
                    }}
                  ></div>
                  <p className={style.text} style={{ fontWeight: "600" }}>
                    {e.text1}
                  </p>
                </div>
                <p className={style.text}>{e.text2}</p>
              </div>
            </div>
          </>
        ))}

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
      <Footer />
    </>
  );
}

export default ProcessPage;
