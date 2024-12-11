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
import HydraulicLiftsHome from "../HomePage/components/hydraulicLifts/hydraulicLifts";
import Footer from "../../commonComponents/footer/footer";

const HydraulicLifts = () => {
  return (
    <div>
      <HeroSection
        img={MainImageHydraulic}
        title="Hydraulic Lifts"
        text="fully customised elevators"
      />
      <HydraulicLiftsHome/>
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
