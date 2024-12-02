import React, { useEffect } from "react";
import "./styles/BlogPage.css";
import Blog from "./components/blog/blog";
import Footer from "../../commonComponents/footer/footer";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import bannerImage from '../../assets/blogPageBanner.jpeg'
import { blogsData, homeOurBlogsData } from "../HomePage/components/ourblogs/styles/OurBlogData";
import BlogWidget from "../HomePage/components/reusableComponents/blogWidget";
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection 
      img={bannerImage}
      title={'Blogs'}
      />
      <div className="blog_page_container">
        <div className="blog_page_sub_container">
          {/* <Blog /> */}
          <div className="blog_page_initial_text_section">
          For an enriched lift experience, Here’s all you need to know about lifts and the trends prevailing in the elevator industry. Wander into diversified topics and understand the quality & perfection that we offer through our lifts. 
          </div>
          <div className="blog_page_blog_and_categories">
            <div className="blog_page_blog_and_categories_left">
            {blogsData.map((item,index)=>(
                <BlogWidget key={index+1} image={item.image} title={item.title} date={item.date} alt='Blog Image'/>
            ))}
            </div>
            <div className="blog_page_blog_and_categories_right">
                <h2>CATEGORIES</h2>
                <div style={{height:'1px', backgroundColor:'var(--primary-color)',marginBottom:'1.5rem'}}></div>
                <p>Residential lift</p>
                <p>Hospital lift</p>
                <p>Hotel lift</p>
                <p>Industrial lift</p>
                <p>Events &  Exhibition</p>
                <p>Lift Maintenance</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
