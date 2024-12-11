import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import MainImageHydraulic from "../../assets/hydraulicLifts/heroimagehydraulic.jpg";
import Liftimgcol1 from "../../assets/hydraulicLifts/liftimg1.jpg";
import Liftimgcol2 from "../../assets/hydraulicLifts/liftimg2.jpg";
import Liftimgcol3 from "../../assets/hydraulicLifts/liftimg3.jpg";
import styles from "./styles/HydraulicLifts.module.css";
import comfort from "../../assets/hydraulicLifts/comfort.jpg";
import convinience from "../../assets/hydraulicLifts/conv.jpg";
import emergencyrescue from "../../assets/hydraulicLifts/emergencyrescue.jpg";
import emergencysaving from "../../assets/hydraulicLifts/emergencysaving.jpg";
import headroom from "../../assets/hydraulicLifts/headroom.jpg";
import versatality from "../../assets/hydraulicLifts/versatality.jpg";
import liftImage from "../../assets/homepage/hydraulicLiftsImage01.jpg";
import Footer from "../../commonComponents/footer/footer";
import pdf from "../../assets/IEE-LIFTS-BROCHURE.pdf";
import { useEffect } from "react";

const HydraulicLifts = () => {
  const handleDownloadClick = () => {
    const pdfPath = pdf;
    window.open(pdfPath, "_blank");
  };
  
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <HeroSection
        img={MainImageHydraulic}
        title="Hydraulic Lifts"
        text="fully customised elevators"
      />
      <div className="hydraulic_lifts_container">
      <div className="hydraulic_lifts_sub_container">
      <div className="hydraulic_lifts_right_container">
          <img src={liftImage} alt="" />
        </div>
        <div className="hydraulic_lifts_left_container">
          <h1 className="hydraulic_lifts_left_container_title">
            Hydralic Lifts
          </h1>
          <h3 className="hydraulic_lifts_left_container_text">
          Silken is the ideal hydraulic lift For existing buildings, capable of adapting to any kind of shaft. Our hydraulic technology allowed for an incomparable space saving and utilisation while allowing your loved ones to travelin comfort.
          </h3> 
          <h3 className="hydraulic_lifts_left_container_text">
          Hydraulic lift is the well trusted mechanism For anumber of decades. We have collaborated with GMV Italy for this product as they are world leaders in hydraulic solutions and the technology they have developed is way ahead of anything in competition.
          </h3>
          <button onClickCapture={()=>handleDownloadClick()} className="hydraulic_lifts_left_container_vm_btn" onClick={()=>navigate('/hydraulic-lifts/')}>
            DOWNLOAD CATALOGUE
          </button>
        </div>
        
      </div>
    </div>
      <div className={styles.hydraulicLifts_advantageSection}>
        <div className={styles.hydraulicLiftsadvantages_leftsec}>
          <div className={styles.hydraulicLiftsadvantages_leftsec_heading}>
            <p>Advantages</p>
          </div>

          <div className={styles.hydraulicLiftsadvantages_leftsec_adv}>
            <div>
              <img src={emergencyrescue} />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "20px",
                  margin: "0.3rem 0",
                }}
              >
                Emergency Rescue
              </p>
              <p style={{ color: "var(--light-text)", fontSize: "18px" }}>
                Automatic emergency system always active during the descent,
                even in the event of power failure.
              </p>
            </div>
          </div>
          <div className={styles.hydraulicLiftsadvantages_leftsec_adv}>
            <div>
              <img src={emergencysaving} />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "20px",
                  margin: "0.3rem 0",
                }}
              >
                Emergency saving
              </p>
              <p style={{ color: "var(--light-text)", fontSize: "18px" }}>
                The hydraulic solution consumes electricity only while elevating
                and doesn&apos;t consume electricity while coming down.
              </p>
            </div>
          </div>
          <div className={styles.hydraulicLiftsadvantages_leftsec_adv}>
            <div>
              <img src={versatality} />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "20px",
                  margin: "0.3rem 0",
                }}
              >
                Versatility
              </p>
              <p style={{ color: "var(--light-text)", fontSize: "18px" }}>
                We adapt each lift to each different shaft optimising spaces.
              </p>
            </div>
          </div>

          <div className={styles.hydraulicLiftsadvantages_leftsec_adv}>
            <div>
              <img src={headroom} />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "20px",
                  margin: "0.3rem 0",
                }}
              >
                Reduced pit and headroom
              </p>
              <p style={{ color: "var(--light-text)", fontSize: "18px" }}>
                In existing buildings, we adapt our lifts in compliance with the
                Regulations for pit and headroom. Is standards
              </p>
            </div>
          </div>
          <div className={styles.hydraulicLiftsadvantages_leftsec_adv}>
            <div>
              <img src={comfort} />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "20px",
                  margin: "0.3rem 0",
                }}
              >
                Comfort
              </p>
              <p style={{ color: "var(--light-text)", fontSize: "18px" }}>
                The hydraulic solution consumes electricity only while elevating
                and doesn&apos;t consume electricity while coming down.
              </p>
            </div>
          </div>
          <div className={styles.hydraulicLiftsadvantages_leftsec_adv}>
            <div>
              <img src={convinience} />
            </div>
            <div>
              <p
                style={{
                  color: "var(--primary-color)",
                  fontSize: "20px",
                  margin: "0.3rem 0",
                }}
              >
                Convenience
              </p>
              <p style={{ color: "var(--light-text)", fontSize: "18px" }}>
                There is neither a requirement for machine room nor a deep pit
              </p>
            </div>
          </div>
        </div>
        <div className={styles.hydraulicLiftsadvantages_rightsec}>
          <div className={styles.gridContainer}>
            <div className={styles.imageLarge}>
              <img src={Liftimgcol1} alt="Large Lift" />
            </div>
            <div className={`${styles.imageSmall} ${styles.imageSmall1}`}>
              <img src={Liftimgcol2} alt="Small Lift 1" />
            </div>
            <div className={`${styles.imageSmall} ${styles.imageSmall2}`}>
              <img src={Liftimgcol3} alt="Small Lift 2" />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default HydraulicLifts;
