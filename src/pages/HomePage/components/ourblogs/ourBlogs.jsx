import React from "react";
import './styles/Ourblogs.css'
import { blogsData, homeOurBlogsData } from "./styles/OurBlogData";
import BlogWidget from "../reusableComponents/blogWidget";
import { NavLink } from "react-router-dom";


const OurBlogs = () => {
  return (
    <div className="our_blogs_home_container">
      <div className="our_blogs_home_sub_container">
        <h4>Our Blog</h4>
        <h1 className="our_blogs_home_title">
          {" "}
          The Latest Tidings
        </h1>
        <h3 className="our_blogs_home_text">
        With the expanse of industrial knowledge gained through tremendous experience, we now desire to impart global wisdom through our research-driven blogs.
        </h3>
        
        <div className="our_blogs_homes_widgets_section">
            {homeOurBlogsData.map((item,index)=>(
               <NavLink style={{textDecoration:'none'}} key={index+1} to={'/blog/241'}><BlogWidget   image={item.image} title={item.title} date={item.date} alt='Blog Image'/></NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
