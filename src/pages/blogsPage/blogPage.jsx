import React, { useEffect, useState } from "react";
import "./styles/BlogPage.css";
import Blog from "./components/blog/blog";
import Footer from "../../commonComponents/footer/footer";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import bannerImage from '../../assets/blogPageBanner.jpeg'
import { blogsData } from "../HomePage/components/ourblogs/styles/OurBlogData";
import BlogWidget from "../HomePage/components/reusableComponents/blogWidget";
import { NavLink, useNavigate } from "react-router-dom";
import moment from "moment";
import { useGetLastFewBlogsQuery } from "../../redux/rtkQuery/rtkQuery";
import { Helmet } from "react-helmet";
const BlogPage = () => {

  const [blogData, setBlogData] = useState(null);
  const { isLoading, data, error } = useGetLastFewBlogsQuery(12);
  const displayData = blogData ?? blogsData
  console.log('console logging last 6 blogs:', data);
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.data && !isLoading && !error) {
      setBlogData(data.data);
      const formattedDate = moment(data.data[0].createdAt).format("MMMM Do, YYYY");
      setDate(formattedDate);
    }
  }, [data, isLoading, error]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Latest trends in Lift Manufacturers Industry</title>
        <meta
          name="description"
          content="Latest trends in the lift manufacturers industry. Stay informed and up-to-date with our blog page, featuring informative and engaging content"
        />
      </Helmet>
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
            {displayData.map((item,index)=>(
                <NavLink style={{textDecoration:'none'}} key={index+1} to={`/${item.blogTitle?.toLowerCase().replace(/\s+/g,'-')}/`} state={{id:item._id}}> <BlogWidget key={index+1} image={item.blogImage} title={item.blogTitle} date={item.createdAt} alt='Blog Image'/></NavLink>
            ))}
            </div>
            <div className="blog_page_blog_and_categories_right">
                <h2>CATEGORIES</h2>
                <div style={{height:'1px', backgroundColor:'var(--primary-color)',marginBottom:'1.5rem'}}></div>
                <NavLink to={'/category/residential/'} className={({isActive})=>isActive?'active':'inactive'}  >Residential lift</NavLink>
                <NavLink to={'/category/commercial/'} className={({isActive})=>isActive?'active':'inactive'} >Commercial lift</NavLink>
                <NavLink to={'/category/hospital-lifts/'} className={({isActive})=>isActive?'active':'inactive'}>Hospital lift</NavLink>
                <NavLink to={'/category/hotel-lifts/'} className={({isActive})=>isActive?'active':'inactive'}>Hotel lift</NavLink>
                <NavLink to={'/category/industrial-lifts/'} className={({isActive})=>isActive?'active':'inactive'}>Industrial lift</NavLink>
                <NavLink to={'/category/events-and-exhibition/'} className={({isActive})=>isActive?'active':'inactive'}>Events &  Exhibition</NavLink>
                <NavLink to={'/category/lifts-and-maintenance/'} className={({isActive})=>isActive?'active':'inactive'}>Lift Maintenance</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
