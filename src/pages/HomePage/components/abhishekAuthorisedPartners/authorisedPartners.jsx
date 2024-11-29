import React from "react";
import { foundersData } from "../reusableComponents/widgetData";
import FounderDetails from "../reusableComponents/founderDetails";
import "swiper/css";
import "swiper/css/bundle";
import "./../../../../index.css";
import "./styles/AuthorisedPartners.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersData } from "./partnersData";
const AuthorisedPartners = () => {
  return (
    <div className="authorised_partner_container">
      <div className="authorised_partner_sub_container">
        <h1 className="authorised_partner_title">
          {" "}
          Authorised Partners for Safe Elevators
        </h1>
        <h3 className="authorised_partner_text">
          In partnership with reliable and trusted companies, we create and
          install elevators fitted with top-notch components for your secured
          standing voyage.
        </h3>
        <div className="authorised_partners_slides_section" style={{marginBottom:"0"}}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={25}
            slidesPerView={4}
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

export default AuthorisedPartners;
