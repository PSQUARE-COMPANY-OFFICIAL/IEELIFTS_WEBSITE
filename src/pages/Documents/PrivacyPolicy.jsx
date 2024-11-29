import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import Footer from "../../commonComponents/footer/footer";
import style from "./style.module.css";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection
        img={
          "https://ieelifts.com/wp-content/uploads/2023/01/maintenance-bannerimg01.jpg"
        }
        title="Privacy Policy"
        text=""
      />
      <div className={style.container}>
        <div className={`${style.innerContainer} `}>
          <p className={style.text}>
            IEE Lifts Private Limited , We are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible way. This Privacy Policy outlines the types of
            personal information we collect, how we use and protect this
            information and your rights regarding this information.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>What Information Do We Collect?</h2>
          <br />
          <p className={style.text}>
          We may collect the following types of personal information:
          </p>
          
          <br />
          <ul>
            <li className={style.text}>Contact information such as name, email address, mailing address, and phone number</li>
            <li className={style.text}>Demographic information such as age, gender, and occupation</li>
            <li className={style.text}>Payment information such as credit card or bank account information</li>
            <li className={style.text}>Other information relevant to customer surveys and/or offers</li>
          </ul>
          <br />
          <br />
          <h2 className={style.hedding}>How Do We Use Your Information?</h2>
          <br />
          <p className={style.text}>
          We may use your personal information in the following ways:
          </p>
          
          <br />
          <ul>
            <li className={style.text}>
            To process and fulfil orders for products and services</li>
            <li className={style.text}>To communicate with you about products, services, and promotional offers</li>
            <li className={style.text}>To improve our products and services</li>
            <li className={style.text}>To conduct market research and understand customer needs and preferences</li>
            <li className={style.text}>To personalize your experience on our website</li>
            <li className={style.text}>To administer contests, promotions, and surveys</li>
            <li className={style.text}>To comply with legal and regulatory requirements</li>
            
          </ul>
          <br />
          <br />
          <h2 className={style.hedding}>How Do We Protect Your Information?</h2>
          <br />
          <p className={style.text}>
          We are committed to protecting the security of your personal information. We use a variety of physical, technical, and administrative safeguards to protect your information from unauthorized access, use, or disclosure. We also use secure encryption technology to protect your payment information when you make a purchase.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Your Rights Regarding Your Information</h2>
          <br />
          <p className={style.text}>
          You have the right to access, correct, or delete your personal information at anytime. You can also withdraw your consent for us to use your information for marketing purposes. To exercise your rights, please contact us using the information provided at the end of this policy.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Third-Party Links</h2>
          <br />
          <p className={style.text}>
          Our website may contain links to third-party websites. These websites have their own privacy policies, and we are not responsible for their content or practices. We encourage you to read their privacy policies before providing any personal information.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Updates To This Policy</h2>
          <br />
          <p className={style.text}>
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the revised policy on our website and indicate the date of the most recent update.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Contact Us</h2>
          <br />
          <p className={style.text}>
          If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us at:
          </p>
          <br />
          <p className={style.text}>
          E-26, Industrial Area, Phase 7, Sector 73, Mohali 160055 (PB)
          </p>
          <br />
          <p className={style.text}>
          Email:ieechandigarh@gmail.com
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Laws and Jurisdiction</h2>
          <br />
          <p className={style.text}>
          The company and its interests are protected by both regional and international laws in any area where the site is being accessed. In the event of any unlawful activities by the user or any activities directly or indirectly hurting the company may occur, the company shall pursue this in court under the full extent of the law. Moreover, IEE Lifts Private Limited  may terminate the user’s access or membership to this website at any time without notice or any compensation if it deems the user harmful or unfit at its sole discretion.
          </p>
          <br />
          <br />
          <br />
          <br />
          <p className={style.text}>
          IEE Lifts Private Limited is a top-tier lift manufacturing and installation company offering high-quality lift solutions to its clients. Our team has developed innovative and efficient lift systems for various applications.
          </p>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
