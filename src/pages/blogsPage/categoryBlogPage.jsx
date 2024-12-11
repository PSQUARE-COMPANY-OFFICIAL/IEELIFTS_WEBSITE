import React, { useEffect, useState } from "react";
import "./styles/BlogPage.css";
import Footer from "../../commonComponents/footer/footer";
import HeroSection from "../../commonComponents/HeroSection/HeroSection";
import bannerImage from '../../assets/blogPageBanner.jpeg'
import { blogsData } from "../HomePage/components/ourblogs/styles/OurBlogData";
import BlogWidget from "../HomePage/components/reusableComponents/blogWidget";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useGetBlogsQuery } from "../../redux/rtkQuery/rtkQuery";
const CategoryBlogPage = () => {
  const { category } = useParams(); 

  
  const { isLoading, data, error } = useGetBlogsQuery(category);
  const [blogData, setBlogData] = useState(null);
  const displayData =  blogData
  console.log('console logging blogs by category:', data);
   

  useEffect(() => {
    if (data?.data && !isLoading && !error) {
      setBlogData(data.data);
    }
  }, [data, isLoading, error]);


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
          <div className="blog_page_blog_and_categories">
            <div className="blog_page_blog_and_categories_left">
            {isLoading && <p>Loading...</p>}
            {displayData?.map((item,index)=>(
                <NavLink style={{textDecoration:'none'}} key={index+1} to={`/${item.blogTitle?.toLowerCase().replace(/\s+/g,'-')}/`} state={{id:item._id}}> <BlogWidget key={index+1} image={item.blogImage} title={item.blogTitle} date={item.createdAt} alt='Blog Image'/></NavLink>
            ))}
            </div>
            <div className="blog_page_blog_and_categories_right">
                <h2>CATEGORIES</h2>
                <div style={{height:'1px', backgroundColor:'var(--primary-color)',marginBottom:'1.5rem'}}></div>
                <NavLink to={'/category/residential-lifts'} className={({ isActive }) => {
    console.log(`Is Active: ${isActive}`);
    return isActive ? 'active' : 'inactive';
  }}  >Residential lift</NavLink>
                <NavLink to={'/category/commercial-lifts'} className={({isActive})=>isActive?'active':'inactive'} >Commercial lift</NavLink>
                <NavLink to={'/category/hospital-lifts'} className={({isActive})=>isActive?'active':'inactive'}>Hospital lift</NavLink>
                <NavLink to={'/category/hotel-lifts'} className={({isActive})=>isActive?'active':'inactive'}>Hotel lift</NavLink>
                <NavLink to={'/category/industrial-lifts'} className={({isActive})=>isActive?'active':'inactive'}>Industrial lift</NavLink>
                <NavLink to={'/category/events-and-exhibition'} className={({isActive})=>isActive?'active':'inactive'}>Events &  Exhibition</NavLink>
                <NavLink to={'/category/lifts-and-maintenance'} className={({isActive})=>isActive?'active':'inactive'}>Lift Maintenance</NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoryBlogPage;
