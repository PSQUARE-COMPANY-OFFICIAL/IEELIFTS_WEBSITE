import React, { useEffect, useState } from 'react'
import './styles/ShowcaseGallery.css'
import { showcaseImageData } from './showcaseData'
import { useGetAllImagesOfShowcaseGalleryQuery } from '../../../../redux/rtkQuery/rtkQuery'

const ShowcaseGallery = () => {
  const [showcaseImagesData,setShowcaseImagesData]=useState()
  const { data, error, isLoading } = useGetAllImagesOfShowcaseGalleryQuery();
  const displayData=showcaseImagesData?showcaseImagesData:showcaseImageData
  console.log('showcase data:',data?.data);
  

 useEffect(()=>{
   async function dataSetting(){
    setShowcaseImagesData(data.data)
   }
   dataSetting();
 },[]);


  return (
    <div className="showcase_gallery_container">
      <div className="showcase_gallery_sub_container">
            <div className='showcase_gallery_top'>
                <h1 className='showcase_gallery_top_title'>Showcase Gallery</h1>
                <p className='showcase_gallery_top_text'>Have a look at our gallery and witness grandeur like never before! Every photograph has an exciting story and a smiling client behind it. So, browse away and get inspired!</p>
            </div>
            <div className='showcase_gallery_bottom'>
              {displayData?.map((item,index)=>(
                  <div key={index+1} className='showcase_gallery_bottom_img_box'><img src={item.image} alt={item.tag || 'showcase image'} /></div>
              ))}
            </div>
      </div>
    </div>
  )
}

export default ShowcaseGallery
