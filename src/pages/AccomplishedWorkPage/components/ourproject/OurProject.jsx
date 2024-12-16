import React from "react";
import hydraulicImage from "../../../../assets/homepage/hydraulicLifts.jpg";
import "./styles/OurProject.css";
import { useNavigate } from "react-router-dom";
const OurProject = () => {
  const navigate=useNavigate()
  return (
    <div className="our_projects_container">
      <div className="our_projects_sub_container">
        <div className="our_projects_top">
          <h1  className="our_projects_top_title">Our Projects Gallery</h1>
          <h3 className="our_projects_top_text">
            Discover a selection of our successful lift installations for
            various commercial and residential projects. From cutting-edge
            technology to sleek and stylish designs, we proudly showcase our
            elevating solutions that have helped transform buildings and enhance
            accessibility.
          </h3>
        </div>
        <div className="our_projects_bottom">
          <div className="our_projects_bottom_left">
            <h1 className="our_projects_bottom_title">Hydraulic Lifts</h1>
            <p className="our_projects_bottom_text">
              Silken is the ideal hydraulic lift For existing buildings, capable
              of adapting to any kind of shaft. Our hydraulic technology allowed
              for an incomparable space saving and utilisation while allowing
              your loved ones to travelin comfort.
            </p>
            <p className="our_projects_bottom_text">
              Hydraulic lift is the well trusted mechanism For anumber of
              decades. We have collaborated with GMV Italy for this product as
              they are world leaders in hydraulic solutions and the technology
              they have developed is way ahead of anything in competition.
            </p>
            <button className="our_projects_bottom_vm_button" onClick={()=>navigate('/hydraulic-lifts')} >VIEW MORE</button>
          </div>
          <div className="our_projects_bottom_right">
            <img  src={hydraulicImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProject;
