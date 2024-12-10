import React, { useRef, useState } from "react";
import "./styles/accordian.css";
import { FaPlus,FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Accordion = ({ title, content, titleLinks = [], contentLinks = [] }) => {
  const [activeClass, setActiveClass] = useState("");
  const [scrollHeight, setScrollHeight] = useState("0px");

  const conten = useRef("");

  const toggleAccordion = () => {
    setActiveClass(activeClass === "" ? "active" : "");
    setScrollHeight(
      activeClass === "" ? `${conten.current.scrollHeight}px` : "0px"
    );
  };


  const getTextWithLinks = (text, links) => {
    if (!text || !links) return text;
    const parts = [];
    let currentIndex = 0;

    links.forEach((link) => {
      const linkIndex = text.indexOf(link.label, currentIndex);
      if (linkIndex !== -1) {
        if (linkIndex > currentIndex) {
          parts.push(text.substring(currentIndex, linkIndex));
        }
        parts.push(
          <Link to={link.url} key={link.url} target="_blank" rel="noopener noreferrer">
            {link.label}
          </Link>
        );
        currentIndex = linkIndex + link.label.length;
      }
    });

    if (currentIndex < text.length) {
      parts.push(text.substring(currentIndex));
    }

    return parts;
  };

  return (
    <div className="accordion_section">
    <button className={`accordion ${activeClass}`} onClick={toggleAccordion}>
      <p className="accordion_title">
        {getTextWithLinks(title)}
      </p>
      <div className="accordion_icon">
        {activeClass ? <FaMinus /> : <FaPlus />}
      </div>
    </button>
    <div
      ref={conten}
      style={{ maxHeight: `${scrollHeight}` }}
      className="accordion_content"
    >
      <div className="accordion_text">
        {getTextWithLinks(content, contentLinks)}
      </div>
    </div>
    <div className="faq_lower_line"></div>
  </div>
  );
};

export default Accordion;

