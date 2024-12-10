import React from "react";
import liftImage from "../../../../assets/homepage/hydraulicLiftsImage01.jpg";
import "./styles/HydraulicLifts.css";
const HydraulicLiftsHome = () => {
  return (
    <div className="hydraulic_lifts_container">
      <div className="hydraulic_lifts_sub_container">
        <div className="hydraulic_lifts_left_container">
          <h1 className="hydraulic_lifts_left_container_title">
            Hydralic Lifts
          </h1>
          <h3 className="hydraulic_lifts_left_container_text">
            IEE’s hydraulic lifts are a testament to their commitment to
            sustainable solutions. These elevators are equipped with
            energy-efficient pumps reducing energy consumption considerably. The
            hydraulic technology itself is optimized for minimal fluid usage,
            further decreasing the environmental footprint. In addition, it only
            use electricity while going up and almost negligible while coming
            down.
          </h3> 
          <button className="hydraulic_lifts_left_container_vm_btn">
            VIEW MORE
          </button>
        </div>
        <div className="hydraulic_lifts_right_container">
          <img src={liftImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HydraulicLiftsHome;
