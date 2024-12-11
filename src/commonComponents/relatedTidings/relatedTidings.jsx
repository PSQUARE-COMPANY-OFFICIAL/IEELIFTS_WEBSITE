import React, { useEffect, useState } from 'react'
import './style/RelatedPost.css'
import { useGetBlogsQuery } from '../../redux/rtkQuery/rtkQuery';
import BlogWidget from '../../pages/HomePage/components/reusableComponents/blogWidget';
import { NavLink } from 'react-router-dom';
const RelatedTidings = ({category,id}) => {
  const [blogsData, setBlogsData] = useState([]);
  const { isLoading, data, error } = useGetBlogsQuery(category);

  useEffect(() => {
    if (data?.data && !isLoading && !error) {
      setBlogsData(data.data);
      // setCategory(blogData.blogCategory)
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='related_tidings_container'>
        <div className='related_tidings_subcontainer'>
            <h2 className='related_tidings_text'>Related Tidings</h2>
            <p className='related_tidings_para'>With the expanse of industrial knowledge gained through tremendous experience, we now desire to impart global wisdom through our research-driven blogs.</p>
            <div className='related_tidings_blogs_widget_section'>
            {
              blogsData?.map((item,index)=>{
                if (item._id !== id) {
               return <NavLink style={{textDecoration:'none'}} key={index+1} to={`/${item.blogTitle?.toLowerCase().replace(/\s+/g,'-')}/`} state={{id:item._id}}><BlogWidget key={item._id} image={item.blogImage} title={item.blogTitle} date={item.createdAt} alt='blog_img' /></NavLink>
              }
              })
            }
            </div>
        </div>
    </div>
  )
}

export default RelatedTidings
