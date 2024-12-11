import React, { useReducer, useState } from "react";
import liftButtonImage from "../../assets/liftButtonImage.jpg";
import "./styles/GetInTouch.css";
import { useContactusFormApiMutation } from "../../redux/rtkQuery/rtkQuery";
import Toast from "../ToastComponent/toast";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="get_in_touch_container">
      <div className="get_in_touch_sub_container">
        <div className="get_in_touch_left">
          <img src={liftButtonImage} alt="" />
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default GetInTouch;

export const ContactUsForm = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');
  const navigate = useNavigate();
  const [contactusForm, { isLoading }] = useContactusFormApiMutation();
  
  const types = {
    SET_FIELD: "SET_FIELD",
    RESET: "RESET",
  };

  const initialState = { name: "", email: "", phoneNumber: "", subject: "", message: "" };

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

  const handleContactusForm = async (e) => {
    e.preventDefault();
    try {
      await contactusForm(state).unwrap();
      setToastMessage("Form submitted successfully!");
      dispatch({ type: types.RESET });
      setToastType("success");
      navigate("/contact/thank-you");
    } catch (error) {
      console.error("Form submission failed", error);
      if (error?.status === 500) {
        setToastMessage("Something went wrong on the server!");
        setToastType("error");
      } else if (error?.status === 0) {
        setToastMessage("No internet connection!");
        setToastType("error");
      } else {
        setToastMessage("Something went wrong!");
        setToastType("error");
      }
    } finally {
      setShowToast(true);
    }
  };

  // Email validation function
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    dispatch({ type: types.SET_FIELD, field: "email", value: emailValue });
  
    // Email validation logic
    if (validateEmail(emailValue)) {
      e.target.setCustomValidity(""); 
      // setToastMessage('Valid Email Address');
      // setToastType('success');  
    } else {
      e.target.setCustomValidity('Please enter a valid email address ending with @gmail.com');
      
      // setToastMessage('Please enter a valid email address ending with .com');
      // setToastType('error');  
    }
    // setShowToast(true); 
  };
  
  return (
    <div className="get_in_touch_right">
      <h1 className="get_in_touch_right_title">Get In Touch</h1>
      <p className="get_in_touch_right_text">
        Contact us for all your questions and opinions, or you can solve your
        problems from the support center and expert.
      </p>
      <form
        className="get_in_touch_form_container"
        onSubmit={handleContactusForm}
      >
        <div className="get_in_touch_form_container_up">
          <div className="get_in_touch_form_input_box">
            <label htmlFor="Name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              minLength="3"
              maxLength="100"
              id="Name"
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: types.SET_FIELD,
                  field: "name",
                  value: e.target.value,
                })
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
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$" // Ensure the email ends with .com
              title="Please enter a valid email address ending with .com" // Title attribute to show tooltip message
              onChange={handleEmailChange} // Handle email validation
              required
            />
          </div>
          <div className="get_in_touch_form_input_box">
            <label htmlFor="PhoneNumber">
              Phone Number <span>*</span>
            </label>
            <input
              type="tel"
              maxLength={10}
              minLength={10}
              id="PhoneNumber"
              value={state.phoneNumber}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                if (value.length <= 10) {
                  dispatch({
                    type: types.SET_FIELD,
                    field: "phoneNumber",
                    value,
                  });
                }
              }}
              required
            />
          </div>
          <div className="get_in_touch_form_input_box">
            <label htmlFor="Subject">
              Subject<span> *</span>
            </label>
            <input
              type="text"
              id="Subject"
              minLength="10"
              maxLength="100"
              value={state.subject}
              required
              onChange={(e) =>
                dispatch({
                  type: types.SET_FIELD,
                  field: "subject",
                  value: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="get_in_touch_form_text_area">
          <label style={{ marginBottom: "0.25rem" }} htmlFor="Message">
            Your Message
          </label>
          <textarea
            id="Message"
            minLength="20"
            style={{
              width: "100%",
              resize: "none",
              height: "13.25rem",
              fontFamily: "sans-serif",
              padding: "1rem",
              outline: "none",
            }}
            value={state.message}
            onChange={(e) =>
              dispatch({
                type: types.SET_FIELD,
                field: "message",
                value: e.target.value,
              })
            }
          />
        </div>
        <button
          className="get_in_touch_submit_btn"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "SUBMIT"}
        </button>
        {showToast && (
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={() => setShowToast(false)}
          />
        )}
      </form>
    </div>
  );
};
