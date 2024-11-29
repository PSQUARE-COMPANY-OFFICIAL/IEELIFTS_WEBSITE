import React, { useEffect, useState } from 'react'
import './styles/ShowcaseGallery.css'
import { showcaseImageData } from './showcaseData'
import { useGetAllImagesOfShowcaseGalleryQuery } from '../../../../redux/rtkQuery/rtkQuery'

const ShowcaseGallery = () => {
  const [showcaseImagesData,setShowcaseImagesData]=useState()
  const { data, error, isLoading } = useGetAllImagesOfShowcaseGalleryQuery();
//  console.log('faq data:',data,error,isLoading);


 const displayData=showcaseImagesData?showcaseImagesData:showcaseImageData


 useEffect(()=>{
   async function dataSetting(){
    setShowcaseImagesData(data.data)
   }
   dataSetting();
 },[]);


//  console.log('showcase data in state:',showcaseImageData)
  return (
    <div className="showcase_gallery_container">
      <div className="showcase_gallery_sub_container">
            <div className='showcase_gallery_top'>
                <h1 className='showcase_gallery_top_title'>Showcase Gallery</h1>
                <p className='showcase_gallery_top_text'>Have a look at our gallery and witness grandeur like never before! Every photograph has an exciting story and a smiling client behind it. So, browse away and get inspired!</p>
            </div>
            <div className='showcase_gallery_bottom'>
              {displayData?.map((item,index)=>(
                  <div key={index} className='showcase_gallery_bottom_img_box'><img src={item.image} alt={item.tag || 'showcase image'} /></div>
              ))}
                {/* <div className='showcase_gallery_bottom_img_box'><img src={allenImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={dainikImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={gateImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={trendsImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={ciplaImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={bataImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={ranbaxyImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={adidasImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={cadburyImage} alt="" /></div>
                <div className='showcase_gallery_bottom_img_box'><img src={marutiImage} alt="" /></div> */}
                
            </div>
      </div>
    </div>
  )
}

export default ShowcaseGallery
