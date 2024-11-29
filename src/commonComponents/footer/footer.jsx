import React, { useState } from "react";
import "./style/Footer.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import logoImage from "../../assets/IEE-LIFTS-LOGOX.svg";
import { useSignupForNewsLetterApiMutation } from "../../redux/rtkQuery/rtkQuery";
import Loader from "../Loader/loader";


const Footer = () => {
  const[email,setEmail]=useState('')
  const[agree,setAgree]=useState(false)
  const [showSuccess, setShowSuccess] = useState(false);

  const [signupForNewsLetter, { isLoading }] = useSignupForNewsLetterApiMutation();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signupForNewsLetter({ email }).unwrap();
      setShowSuccess(true); 
      setEmail('')
      setTimeout(() => setShowSuccess(false), 3000); 
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  const renderButtonContent = () => {
    if (isLoading) {
      return <Loader />;
    } else if (showSuccess) {
      return <TiTick style={{ fontSize: "1.25rem" }} />;
    }
    return "➤";
  };

  return (
    <footer className="footer_container">
      <div className="footer_sub_container">
        <div className="footer_section_1 ">
          <img
            src={logoImage}
            
            alt="IEE Lifts Logo"
            className="logo"
          />
          <p className="footer_section_1_text">
            IEE Lifts Private Limited is a top-tier lift manufacturing and
            installation company offering high-quality lift solutions to its
            clients. Our team has developed innovative and efficient lift
            systems for various applications.
          </p>
          <p className="footer_section_1_gst">GSTIN-03AAECI9831N1Z8</p>
          <div className="social_media_icons">
            <Link  to={'https://www.instagram.com/ieelifts/'}>
              <FaInstagram />
            </Link>
            <Link to={'https://www.facebook.com/ieeliftspvtltd/'}>
              <FaFacebookF />
            </Link>
            <Link to={'https://in.pinterest.com/ieelift/'}>
              <FaPinterestP />
            </Link>
            <Link to={'https://www.linkedin.com/company/ieelifts'}>
              <FaLinkedinIn />
            </Link>
            <Link to={'https://x.com/iee_lifts'}>
              <FaXTwitter />
            </Link>
            <Link to={'https://www.youtube.com/@ieelifts'}>
              <FaYoutube />
            </Link>
          </div>
        </div>

        <div className="footer_sections links">
          <h4 className="links_category_title">Quick Links</h4>
          <ul>
            <li><NavLink style={{background:'none'}} to={'/'} className={({isActive})=>isActive?'active':'inactive'}>Home</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/about'} className={({isActive})=>isActive?'active':'inactive'} >About</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/maintenance'} className={({isActive})=>isActive?'active':'inactive'} >Maintenance</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/accomplished-work'} className={({isActive})=>isActive?'active':'inactive'} >Accomplished Work</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/process'} className={({isActive})=>isActive?'active':'inactive'} >Process</NavLink></li>

          </ul>
        </div>

        <div className="footer_sections links">
          <h4 className="links_category_title">Others</h4>
          <ul>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/contact'} className={({isActive})=>isActive?'active':'inactive'} >Contact</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/blog'} className={({isActive})=>isActive?'active':'inactive'} >Blogs</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/experience-center'} className={({isActive})=>isActive?'active':'inactive'} >Experience Center</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/privacy-policy'} className={({isActive})=>isActive?'active':'inactive'} >Privacy Policy</NavLink></li>
            <li><NavLink style={{background:'none',textDecoration:'none'}} to={'/terms-and-conditions'} className={({isActive})=>isActive?'active':'inactive'} >Terms And Conditions</NavLink></li>
          </ul>
        </div>

        <div className="footer_sections newsletter_section">
          <h1 className="newsletter_signup_text">Sign Up For Newsletter</h1>
          <p className="newsletter_stay_up_to_date">
            To stay up to date on new products and events of the IEE world.
          </p>
          <form className="newsletter_email_send" onSubmit={handleSignup}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
          />
          <button disabled={isLoading || !agree} onSubmit={(e)=>e.preventDefault()}  type="submit">
            {renderButtonContent()}
          </button>
        </form>
          <label style={{ textWrap: "nowrap" }}>
            <input type="checkbox" checked={agree} onChange={()=>setAgree(!agree)} required />
            Must Agree to our{" "}
            <NavLink
            to={'/terms-and-conditions'}
              style={{
                color: "white",
                textUnderlinePosition: "",
                textUnderlineOffset: "0.1rem",
                
                textDecoration:'underline'
              }}
            >
              terms and Conditions
            </NavLink>
          </label>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
