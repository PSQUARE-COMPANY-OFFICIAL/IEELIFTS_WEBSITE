import React from "react";
// import { foundersData } from "../reusableComponents/widgetData";
// import FounderDetails from "../reusableComponents/founderDetails";
import "swiper/css";
import "swiper/css/bundle";
import "./../../../index.css";
import "./style/reusable.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersData } from "../../HomePage/components/authorisedPartners/partnersData";
import { useLocation } from "react-router-dom";
const AuthorisedPartnersAbout = () => {
  const location = useLocation();
  return (
    <div className="authorised_partner_container">
      <div className="authorised_partner_sub_container">
        <h1 className="authorised_partner_title">
          {/* {" "} */}
          Authorised Partners for Safe Elevators
        </h1>
        <h3 className="authorised_partner_text">
        With our reliable partners, we create and set up safe elevators that are fitted with top-notch elements for your secured standing voyage.
        </h3>
        <div className="authorised_partners_slides_section_about">
          <Swiper
            modules={[Navigation, Autoplay]}
            breakpoints={{
   
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1080:{
                spaceBetween:25,
                slidesPerView:4
              }
            }}
            
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            loop={true}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {partnersData.map((item, index) => (
              <div key={index + 1} className="">
                <SwiperSlide>
                  <div className="partners_image_container">
                    <img src={item.image} alt="" />
                  </div>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
        
      </div>
    </div>
  );
};

export default AuthorisedPartnersAbout;
