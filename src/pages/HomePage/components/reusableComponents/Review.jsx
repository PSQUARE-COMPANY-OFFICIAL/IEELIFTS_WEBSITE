import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "./styles/HomeReusable.css";
import "./../../../../index.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import {} from "swiper/types";
import { BiSolidQuoteRight } from "react-icons/bi";

const Review = ({reviewData}) => {
  return (
    <div className="review_container">
      <h1>Words From Our Client</h1>
      <div className="review_box">
        <div className="swiper_box">
          <Swiper
            modules={[Navigation, Pagination,Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            
            loop={true}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            
          {reviewData?.map((item,index)=>(
            <SwiperSlide>
            <div className="review_cont">
              <div className="review_cont_top">
                <div className="review_cont_name">
                  <div className="review_line"></div>
                  <p>{item.fullName}</p>
                </div>
                <div className="comma_image">
                  <BiSolidQuoteRight />
                </div>
              </div>
              <p className="review_text">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Review;
