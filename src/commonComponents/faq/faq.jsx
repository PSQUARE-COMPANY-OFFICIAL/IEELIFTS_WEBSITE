import React, { useEffect, useState } from 'react'
import './styles/Faq.css'
import Accordion from '../accordian/accordian'
import { faqDefaultData } from './FaqData'
import { useGetAllFaqsQuery } from '../../redux/rtkQuery/rtkQuery'
const Faq = () => {
  const [faqsData, setFaqData] = useState();
  const { data, error, isLoading } = useGetAllFaqsQuery();
  const displayData=faqsData??faqDefaultData


  

  useEffect(() => {
    async function dataSetting(){
      setFaqData(data.data);
     }
     dataSetting();
  }, [data]);

  
  return (
    <div className='faq_container'>
      <div className='faq_sub_container'>
        <h1 className='frequently_asked_question_text'>Frequently Asked Questions</h1>
        <div className='faq_lower_section'>
            {displayData?.map((item,index)=>(
              <Accordion 
                key={index+1} 
                title={item.question.questionText}
                content={item.answer?.answerText}
                titleLinks={item.question?.links}
                contentLinks={item.answer?.links}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
