import React, { useEffect } from 'react'
import './styles/BlogPage.css'
import Blog from './components/blog/blog'
import Footer from '../../commonComponents/footer/footer'
import { useLocation } from 'react-router-dom'
const BlogPageById = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const location =useLocation();
  const id = location.state?.id;

  if(!id) return <h1 style={{marginTop:'7rem'}}> Coming soon ....</h1>
  return (
    <>
    <div className='blog_page_by_id_container'>
       <div className='blog_page_by_id_sub_container'>
          <Blog/> 
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default BlogPageById