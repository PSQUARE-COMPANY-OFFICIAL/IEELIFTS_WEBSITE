import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import OurPatrons from "../AccomplishedWorkPage/components/ourpatrons/ourPatrons";
import Footer from "../../commonComponents/footer/footer";
import WordsFromClient from "../HomePage/components/wordsfromclient/wordsFromClient";
import bannerImage from '../../assets/maintenanceBannerImage.jpeg'
import style from "./style.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import pdf from './../../assets/IEE-LIFTS-BROCHURE.pdf'
function Maintenance() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownloadClick = () => {
    const pdfPath = pdf; 
    window.open(pdfPath, '_blank');
    navigate('/');
  };

  const navigate=useNavigate()
  return (
    <>
      <HeroSection
        img={
          bannerImage
        }
        title="Maintenance"
        text="Providing high-quality services to satisfy all your vertical riding needs"
      />
      <div className={style.container}>
        <div
          className={`${style.innerContainer}  ${style.cardContainer}`}
          style={{ width: "90%", alignItems: "center" }}
        >
          <div className={` ${style.box}`} style={{ paddingRight: "10px" }}>
            <h2 className={`${style.hedding}`} style={{ marginBottom: "15px" }}>
              The Perfect Maintenance Solution
            </h2>
            <p className={`${style.text}`}>
              Our maintenance options include retrofit instals, component
              improvements, and complete replacement of existing equipment
              specifically designed to meet your demands. The goal is to
              maintain your equipment operating safely and dependably for the
              entire lifespan of your building.
            </p>
            <p style={{ height: "30px" }}></p>
            <p className={`${style.text}`}>More Queries?</p>
            <p style={{ height: "30px" }}></p>

            <div className="navbar_child_right">
              <NavLink
                style={{ textDecoration: "none" }}
                to={"/contact"}
              >
                <div className="navbar_child_right_cl_button" >GET IN TOUCH</div>
              </NavLink>
            </div>
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
          className={`${style.innerContainer} `}
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className={`${style.hedding}`}>Exclusive Packages</h2>
          <p className={`${style.text}`}>
            Pick the one that best fits your needs; Tailored for Industrial
            Operations.
          </p>
          <div className={`${style.priceCardCon}`}>
            <div
              style={{
                maxWidth: "430px",
                width: "100%",
                padding: "15px 20px",
                backgroundColor: "var(--light-theme-one)",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className={`${style.hedding}`}
                style={{ color: "var(--primary-color)", fontSize: "25px" }}
              >
                Silver
              </p>
              <hr
                style={{
                  borderColor: "var(--primary-color)",
                  margin: "13px 0px",
                }}
              />
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Labour and Lubricant
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Minor Parts Covered
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                6 Services Visits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                AI Based Analytics
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                Major Parts Covered
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                12 Services Visits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                6 Technical Preventive Safety Analysis
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                Annual Equipment Audits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                Free Annual Safety Audit
              </p>
              <div
                className={`${style.buttonCon}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                }}
              >
                <div className="navbar_child_right">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                  >
                    <div className="navbar_child_right_cl_button">
                      Rs. 32,000/Yearly
                    </div>
                  </NavLink>
                </div>
                <div className="navbar_child_right">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                  >
                    <div className="navbar_child_right_cl_button">
                      Enquire Now
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: "430px",
                width: "100%",
                padding: "15px 20px",
                backgroundColor: "var(--light-theme-one)",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className={`${style.hedding}`}
                style={{ color: "var(--primary-color)", fontSize: "25px" }}
              >
                Gold
              </p>
              <hr
                style={{
                  borderColor: "var(--primary-color)",
                  margin: "13px 0px",
                }}
              />
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Labour and Lubricant
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Minor Parts Covered
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                6 Services Visits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                AI Based Analytics
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Major Parts Covered
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                12 Services Visits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                6 Technical Preventive Safety Analysis
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                Annual Equipment Audits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                Free Annual Safety Audit
              </p>
              <div
                className={`${style.buttonCon}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                }}
              >
                <div className="navbar_child_right">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                  >
                    <div className="navbar_child_right_cl_button">
                      Rs. 42,000/Yearly
                    </div>
                  </NavLink>
                </div>
                <div className="navbar_child_right">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                  >
                    <div className="navbar_child_right_cl_button">
                      Enquire Now
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div
              style={{
                maxWidth: "430px",
                width: "100%",
                padding: "15px 20px",
                backgroundColor: "var(--light-theme-one)",
                gap: "12px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <p
                className={`${style.hedding}`}
                style={{ color: "var(--primary-color)", fontSize: "25px" }}
              >
                Platinum
              </p>
              <hr
                style={{
                  borderColor: "var(--primary-color)",
                  margin: "13px 0px",
                }}
              />
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Labour and Lubricant
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Minor Parts Covered
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                6 Services Visits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                AI Based Analytics
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Major Parts Covered
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                12 Services Visits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                6 Technical Preventive Safety Analysis
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Annual Equipment Audits
              </p>
              <p
                className={`${style.text}`}
                style={{ color: "var(--white)", fontSize: "18px" }}
              >
                <span>
                  <FaCheck color="var(--light-text)" />
                </span>{" "}
                Free Annual Safety Audit
              </p>
              <div
                className={`${style.buttonCon}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "25px",
                }}
              >
                <div className="navbar_child_right">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                  >
                    <div className="navbar_child_right_cl_button">
                      Rs. 52,000/Yearly
                    </div>
                  </NavLink>
                </div>
                <div className="navbar_child_right">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={"/contact"}
                  >
                    <div className="navbar_child_right_cl_button">
                      Enquire Now
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: "70px ",
              gap: "10px",
            }}
          >
            <MdOutlineFileDownload onClick={()=>handleDownloadClick()}
              style={{ fontSize: "30px", color: "var(--primary-color)",cursor:'pointer' }}
            />
            <p className={`${style.text}`} style={{ color: "var(--white)" }}>
              Maintenance & Repair Services Brochure (PDF, 2 MB)
            </p>
          </div>
        </div>
          <div
            className={`${style.innerContainer}  ${style.cardContainer}`}
            style={{
              width: "90%",
              alignItems: "center",
              justifyContent: "space-between",
              gap:"40px"
            }}
          >
            <div className={`${style.box}`} style={{ flex: 1 }}>
              <img
                src="https://ieelifts.com/wp-content/uploads/2023/08/woman-girl-talking-before-closed-elevator-doors-1-1-scaled.jpg"
                style={{ width: "100%" }}
                alt=""
              />
            </div>
            <div className={` ${style.box}`} style={{}}>
              <h2
                className={`${style.hedding}`}
                style={{ marginBottom: "15px" }}
              >
               Standard Or Customised Maintenance Coverage
              </h2>
              <p className={`${style.text}`} style={{ marginBottom: "15px" }}>
              Tailored maintenance and lift modernisation solutions guarantee a comfortable, responsive ride for years to come. Tailored for both commercial and residential operations.
              </p>
              <p className={`${style.text}`} style={{ marginBottom: "15px" }}>
              We’ll evaluate three key factors to assist you in finding your optimal solution:
              </p>
              <p className={`${style.text}`} style={{ marginBottom: "15px" }}>
              <span  className={`${style.text}`} style={{fontWeight:"700"}}>Response times – </span>
               Will 24-hour service be adequate for your facility, or does it require quick assistance?
              </p>
              <p className={`${style.text}`} style={{ marginBottom: "15px" }}>
              <span  className={`${style.text}`} style={{fontWeight:"700"}}>Coverage – </span>
               Will essential parts and service coverage be enough, or will extensive covering for critical installations be required?
              </p>
              <p className={`${style.text}`} style={{ marginBottom: "15px" }}>
              <span  className={`${style.text}`} style={{fontWeight:"700"}}> Costs – </span>
              What are your budget terms? We’ll find the right fit for you that suits your pockets.        
                    </p>
              <p className={`${style.text}`} style={{ marginBottom: "15px" }}>
              With the help of IEE Service, your lifts will always stay in action. With IEE, which is among the top lift manufacturers, you can rely on maintenance knowledge and an unmatched customer experience, regardless of your brand or equipment.                    </p>
            </div>
          </div>
        <div style={{ height: "80px" }}></div>
      </div>

      
      <Footer />
    </>
  );
}

export default Maintenance;
