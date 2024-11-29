import React, { useRef, useState } from "react";
import "./styles/accordian.css";
import { FaPlus,FaMinus } from "react-icons/fa";
const Accordion = ({ title, children, content }) => {
  const [activeClass, setActiveClass] = useState("");
  const [scrollHeight, setScrollHeight] = useState("0px");

  const conten = useRef("");

  const toggleAccordion = () => {
    setActiveClass(activeClass === "" ? "active" : "");
    setScrollHeight(
      activeClass === "" ? `${conten.current.scrollHeight}px` : "0px"
    );
  };

  return (
    <div className="accordion_section">
      <button className={`accordion ${activeClass}`} onClick={toggleAccordion}>
        <p className="accordion_title"> {title} </p>
        {/* <p> {activeClass ? "-" : "+"} </p> */}
        <div className="accordion_icon">
          {" "}
          {activeClass ? (
            <FaMinus/>
          ) : (
            <FaPlus/>
          )}{" "}
        </div>
      </button>
      <div
        ref={conten}
        style={{ maxHeight: `${scrollHeight}` }}
        className="accordion_content"
      >
        <div
          className="accordion_text"
          dangerouslySetInnerHTML={{ __html: content }}
        >
          {/* {children} */}
        </div>
      </div>
      {/* <hr /> */}
      <div className="faq_lower_line"></div>
    </div>
  );
};

export default Accordion;

