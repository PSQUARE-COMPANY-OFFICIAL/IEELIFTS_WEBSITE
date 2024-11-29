import React, { useEffect, useState } from 'react'
import backgroundImage from '../../../../assets/homepage/review.jpg'
import './styles/WordsFromClient.css'
import Review from '../reusableComponents/Review'
import { useGetWordsFromClientQuery } from '../../../../redux/rtkQuery/rtkQuery'
import {wordsFromClientDataa} from './wordsFromClientData'
const WordsFromClient = (props) => { 
  const [wordsFromClientData,setWordsFromClientData]=useState()
  const {  isLoading,data,error} = useGetWordsFromClientQuery();
//  console.log('words from client data:',isLoading,data,error,);
 
    useEffect(() => {
      if (data?.data && !isLoading && !error) {
        setWordsFromClientData(data.data);
      }
    }, [data, isLoading, error]);
//  console.log('words from client data:',data.data)
  return ( 
    <div  className='words_from_client_container'>
        <div className='words_from_client_sub_container SliderWrapper'>
            <div style={{backgroundColor:'white'}} className='review_slider_box'>
              <Review reviewData={wordsFromClientData?wordsFromClientData:wordsFromClientDataa}/>
            </div>
        </div>
      
    </div>
  )
}

export default WordsFromClient

