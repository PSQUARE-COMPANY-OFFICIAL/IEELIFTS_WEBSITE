import React, { useEffect, useState } from "react";
import './styles/Ourblogs.css'
import { blogsData, homeOurBlogsData } from "./styles/OurBlogData";
import BlogWidget from "../reusableComponents/blogWidget";
import { NavLink } from "react-router-dom";
import { useGetLastFewBlogsQuery } from "../../../../redux/rtkQuery/rtkQuery";
import moment from "moment";


const OurBlogs = () => {
  const [blogData, setBlogData] = useState(null);
    const { isLoading, data, error } = useGetLastFewBlogsQuery(3);
    const displayData=blogData??homeOurBlogsData
    console.log('console logging last 3 blogs:',data);
    
    const [date, setDate] = useState("");
    
  
    useEffect(() => {
      if (data?.data && !isLoading && !error) {
        setBlogData(data.data);
        const formattedDate = moment(data.data[0].createdAt).format("MMMM Do, YYYY");
        setDate(formattedDate);
      }
    }, [data, isLoading, error]);
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
            {displayData.map((item,index)=>(
               <NavLink style={{textDecoration:'none'}} key={index+1} to={`/${item.blogTitle?.toLowerCase().replace(/\s+/g,'-')}/`} state={{id:item.blogTitle}}><BlogWidget   image={item.blogImage} title={item.blogTitle} date={item.createdAt} alt='Blog Image'/></NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
