import React, { useEffect, useReducer } from 'react'
import HeroSection from '../../commonComponents/HeroSection/HeroSection'
import bannerImage from '../../assets/contactPage/contactBanner.jpg'
import Footer from '../../commonComponents/footer/footer'
import './styles/CustomizeLifts.css'
import { useCustomizeLiftContactusFormApiMutation } from '../../redux/rtkQuery/rtkQuery'
const CustomizeLifts = () => {
  const [customizedLiftContactusForm, { isLoading }] = useCustomizeLiftContactusFormApiMutation();
  const types = {
    SET_FIELD: "SET_FIELD",
    RESET: "RESET",
  };


  const initialState = { name: "",email: "",phoneNumber: "",typeUsage:"",constructionStage:"",noOfFloors:"null",message: "",
  };

  const reducer = (state, action) => {
   switch (action.type) {
     case types.SET_FIELD:
       return { ...state, [action.field]: action.value };
     case types.RESET:
       return initialState;
     default:
       return state;
   }
 };

 const [state, dispatch] = useReducer(reducer, initialState);

 const handleCustomizedLiftContactusForm = async (e) => {
    e.preventDefault();
    try {
      await customizedLiftContactusForm(state).unwrap();
      console.log("Form submitted successfully");
      dispatch({ type: types.RESET }); 
    } catch (error) {
      console.error("Form submission failed", error);
    }
 };

 useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <div>
      <HeroSection
      img={bannerImage}
      title="CUSTOMIZE LIFTS"
      text="LET'S CREATE THE PERFECT LIFT FOR YOUR NEEDS"/>
      <div  className='customize_lifts_page_container'> 
        <div className='customize_lifts_page_inner_container'>
            <div className='customize_lifts_reachus_section'>
              <h2>Reach out to us Today!</h2>
              <h4>We’re excited to hear all about your inputs and needs so we can create the ideal lifts, tailored personally for your taste. Fill out this quick form and we’ll get in touch with you ASAP!</h4>
            </div>
            <div className='customize_lifts_form_container'>
            <form
        className="get_in_touch_form_container"
        onSubmit={handleCustomizedLiftContactusForm}
      >
        <div className="get_in_touch_form_container_up">
          <div className="get_in_touch_form_input_box">
            <label htmlFor="Name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              id="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: types.SET_FIELD, field: "name", value: e.target.value })
              }
              required
            />
          </div>

          <div className="get_in_touch_form_input_box">
            <label htmlFor="PhoneNumber">
              Phone Number <span>*</span>
            </label>
            <input
              type="number"
              maxLength={10}
              id="PhoneNumber"
              value={state.phoneNumber}
              onChange={(e) =>
                dispatch({ type: types.SET_FIELD, field: "phoneNumber", value:e.target.value.toString()})
              }
              required
            />
          </div>
          
          <div className="get_in_touch_form_input_box">
            <label htmlFor="Email">
              Email Address <span>*</span>
            </label>
            <input
              type="email"
              id="Email"
              value={state.email}
              onChange={(e) =>
                dispatch({ type: types.SET_FIELD, field: "email", value: e.target.value })
              }
              required
            />
          </div>

          <div className="get_in_touch_form_input_box">
            <label htmlFor="type-usage">
              Type/Usage <span>*</span>
            </label>
            <select onChange={(e)=>
               dispatch({ type: types.SET_FIELD, field: "typeUsage", value: e.target.value })
            } required name="lift-type" className='select-lift-type' title='' id="type-usage">
              <option disabled selected value="" >Please select an option </option>
              <option value="Residential">RESIDENTIAL</option>
              <option value="IT Buildings">IT BUILDINGS</option>
              <option value="Industrial">INDUSTRIAL</option>
              <option value="Commercial">COMMERCIAL</option>
              <option value="Hospital">HOSPITAL</option>
            </select>
          </div>

          <div className="get_in_touch_form_input_box">
            <label htmlFor="construction">
              Construction <span>*</span>
            </label>
            <select onChange={(e)=>
               dispatch({ type: types.SET_FIELD, field: "constructionStage", value: e.target.value })
            }
             required name="construction-level" className='select-construction' id="construction">
              <option disabled selected value="" style={{textTransform:'uppercase'}}> PLEASE SELECT AN OPTION </option>
              <option value="Already Built">Already Built</option>
              <option value="IT Buildings">Construction In Progress</option>
              <option value="Others">Others</option>
              
            </select>
          </div>

          <div className="get_in_touch_form_input_box">
            <label htmlFor="no-of-floors">
              No. Of Floors <span>*</span>
            </label>
            <input
              type="number"
              id="no-of-floors"
              value={state.noOfFloors}
              onChange={(e) =>
                dispatch({ type: types.SET_FIELD, field: "noOfFloors", value: parseInt(e.target.value )})
              }
              required
            />
          </div>
        </div>

        <div className="get_in_touch_form_text_area">
          <label style={{ marginBottom: "0.25rem" }} htmlFor="Message">
            Your Message
          </label>
          <textarea
            id="Message"
            style={{ width: "100%", height: "13.25rem" ,padding:'1rem',outline:'none',fontFamily:'sans-serif'}}
            value={state.message}
            onChange={(e) =>
              dispatch({ type: types.SET_FIELD, field: "message", value: e.target.value })
            }
            required
          />
        </div>
        <button
          className="get_in_touch_submit_btn"
          type="submit"
          style={{margin:'auto'}}
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "SUBMIT"}
        </button>
      </form>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default CustomizeLifts
