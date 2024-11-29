import React, { useEffect, useState } from 'react'
import './styles/Faq.css'
import Accordion from '../accordian/accordian'
import { faqData } from './FaqData'
import { useGetAllFaqsQuery } from '../../redux/rtkQuery/rtkQuery'
const Faq = () => {
  const [faqsData, setFaqData] = useState();
  const { data, error, isLoading } = useGetAllFaqsQuery();

  useEffect(() => {
    if (data?.data && !isLoading && !error) {
      setFaqData(data.data);
    }
  }, [data, isLoading, error]);

  console.log('data in state:',faqsData)

  
  return (
    <div className='faq_container'>
      <div className='faq_sub_container'>
        <h1 className='frequently_asked_question_text'>Frequently Asked Questions</h1>
        <div className='faq_lower_section'>
            {faqsData?.map((item,index)=>(
              <Accordion key={index+1} title={item.question.questionText} content={item.answer.answerText}/>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Faq
