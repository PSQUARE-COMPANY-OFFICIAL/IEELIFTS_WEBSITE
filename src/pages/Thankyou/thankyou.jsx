import React from 'react'
import logo from '../../assets/IEE-LIFTS-LOGOX.svg'
import './styles/Thankyou.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa6'
const Thankyou = () => {
    const navigate=useNavigate()

  return (
    <div className='thankyou_page_container'>
      <img style={{height:'6rem'}} src={logo} alt="" />
      <h1 className='thankyou_h1' > Thankyou for getting in touch!</h1>
      <h3 className='thankyou_h3'>We appreciate you contacting us. We will get back to you soon. Have a great day!</h3>
      <button className='go_back_button' onClick={()=>navigate('/')}>GO BACK</button>
      <div className='social_media_icons'>
      <Link to={"https://www.instagram.com/ieelifts/"} target="_blank">
              <FaInstagram />
            </Link>
            <Link
              to={"https://www.facebook.com/ieeliftspvtltd/"}
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link to={"https://in.pinterest.com/ieelift/"} target="_blank">
              <FaPinterestP />
            </Link>
      </div>
    </div>
  )
}

export default Thankyou
