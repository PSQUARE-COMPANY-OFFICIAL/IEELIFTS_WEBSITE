import React, { useEffect } from "react";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import Footer from "../../commonComponents/footer/footer";
import style from "./style.module.css";
import bannerImage from '../../assets/privacyBannerImage.jpg'
function TernAndCondition() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HeroSection
        img={
          bannerImage
        }
        title="Terms And Conditions"
        text=""
      />
      <div className={style.container}>
        <div className={`${style.innerContainer} `}>
          <p className={style.text}>
          Please read below the terms and conditions for interacting with this website. This website belongs to IEE Lifts Private Limited  “The Company” and all the laid out terms are to be adhered to by “the user” in order to continue perusing through this webpage. It is notified that the following terms are valid to the full extent of the law and pertinent to the use of the website or interaction with any of its contents including any media (pictures, videos, GIFs, etc.), information, or offers present.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Accessing the site</h2>
          <br />
          <p className={style.text}>
          By continuing to access this site, it is considered that the user has read all the terms and conditions relevant and has agreed to abide by all of them. Unless you have a preexisting agreement in writing with IEE Lifts Private Limited  governing otherwise, you shall not disobey the terms stated below.
          </p>
          
          <br />
          <p className={style.text}>
          If you do not concur with the same, we restrict your usage of this website. The user must immediately stop viewing or interacting with any of its contents. You are not allowed to utilize the content or information already viewed/received by you and in the event you have it stored, you are obliged to halt its usage.
          </p>
          
          <br />
          <br />
          <h2 className={style.hedding}>Usage and Purpose</h2>
         <br />
         <p className={style.text}>
         All the content available on this site is only to provide information to interested parties only. It is not permitted to use the provided information (unless agreed in writing by IEE Lifts Private Limited  in writing) for your personal gain, commercial use, or any other purpose.
          </p>
          
          <br />
         <p className={style.text}>
         The user does not have any rights to the information mentioned here and is not allowed to modify it or tamper with it in any way that can cause harm to the site or organization as deemed fit by the company.
          </p>
          
          <br />
         <p className={style.text}>
         Disallowed activities concerning the usage of information are but are not limited to Copying, editing, repurposing, distributing, disassembling, reverse engineering, hacking, or interfering with other users’ ability to view or use it.
          </p>
          
          <br />
          <br />
          <h2 className={style.hedding}>Reservation of Rights</h2>
          <br />
          <p className={style.text}>
          As stated above, the user does not reserve any rights to any content published/ advertised/ contributed on the site by the company or any third parties. The company retails all intellectual property rights with respect to the material and does not permit anyone to utilize the same for any purposes. The content is all protected by copyright and international laws in addition to the national laws of any country where the site is being accessed. Any attempts to infringe the rights of the company, its associates, or any partnering/non-partnering third parties shall be punishable by law.
          </p>
          
          <br />
          <br />
          <h2 className={style.hedding}>Disclaimers</h2>
          <br />
          <p className={style.text}>
          All the information provided on site is “as is” and may contain technical, textual, factual, or other errors of any kind sometimes. In such events, the company may attempt to rectify them, but it does not guarantee any accuracy, competency, or wholeness to anyone using it. Nor shall it be liable for any kind of harm or damages caused due to/ in relation to the information posted by the company or any third parties.
          </p>
          
          <br />
          <p className={style.text}>
          Any products or services mentioned may be changed/modified/updated without notice and the company is not to be held responsible for the availability or information about the product in any which way.
          </p>
          
          <br />
          <p className={style.text}>
          No text mentioned here can be considered as an offering by the company no matter whether directly or indirectly implied/stated. The company reserves the right to refuse any claims or offers if brought to us from the website. IEE Lifts Private Limited  does not have any accountability to notify the viewers about any change/ modification in any information present on the site and may do so exclusively at its own discretion.


          </p>
          
          <br />
          <br />
          <h2 className={style.hedding}>Links Provided</h2>
          <br />
          <p className={style.text}>
          The site may contain various links from other websites, pages, people, or third parties. This is to explicitly state that such links, their content, and any resulting consequences are not subject to the company’s image the company would thus not be liable for any part whatsoever. Should the company choose to include any external content from its partners, associates, or third parties, it cannot be considered an endorsement of any kind and thereby ridding IEE Lifts Private Limited  of any responsibility for it. If the user interacts with the said links, he may do so at his own risk.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Refund & Cancellation Policy</h2>
          <br />
          <p className={style.text}>
          In any circumstance, during dealing with our company, you are not entitled to any refund of money or cancellation.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Expected Delivery Time</h2>
          <br />
          <p className={style.text}>
          Standard Minimum Delivery Time: 30 Days
          </p>
          <br />
          <p className={style.text}>
          Standard Maximum Delivery Time: 90 Days [ However, the exact time for delivery of your lift depends upon the order requirements and commercial clearance procedures]
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Information submitted</h2>
          <br />
          <p className={style.text}>
          The company reserves the right to use any information submitted by you at its own discretion and it shall not be answerable for any damages related to it. Moreover, any information the user shares with the third parties contributing to the site is between the user and the third party, and any claims pertinent to its damage will not be entertained by the company nor can it be linked/held accountable to it.
          </p>
          <br />
          <br />
          <h2 className={style.hedding}>Other Terms and Conditions</h2>
          <br />
          <p className={style.text}>
          The user may be bound to several other terms and conditions in addition to these such as copyright terms, terms of specific use, privacy policy etcetera. The user agrees to abide by all of them unless there is a conflict of interest. In which case, any written formal agreement with the company may supersede the mentioned terms. These terms are subject to change at any time exclusively at the company’s sole discretion and the company shall bear no responsibility for notifying the users.
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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TernAndCondition;
