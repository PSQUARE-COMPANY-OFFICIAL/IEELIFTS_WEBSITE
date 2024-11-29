import React, { useEffect } from 'react'
import './styles/BlogPage.css'
import Blog from './components/blog/blog'
import Footer from '../../commonComponents/footer/footer'
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
    <div className='blog_page_container'>
       <div className='blog_page_sub_container'>
          <Blog/> 
       </div>
    </div>
    <Footer/>
    </>
  )
}

export default BlogPage