import React from "react";
import "./styles/HomeAbout.css";
import { Link,NavLink } from "react-router-dom";
const HomeAbout = () => {
  return (
    <div className="home_about_container">
      <div className="home_about_sub_container">
        <div className="home_about_child_container_left">
          <h2 className="home_about_child_container_left_title">
            IEE LIFTS PRIVATE LIMITED{" "}
          </h2>
          <h4 className="home_about_child_container_left_text">
            Technologies that inspires us to nurture our Excellency
          </h4>
        </div>
        <div className="home_about_child_container_right">
          <p>
            IEE Lifts Private Limited is a forward-thinking entrepreneurship
            that believes in persistence and foresight. As a passionate
            family-driven business, we strive to excel, grow, and provide the
            best lift solutions to our customers. Our global vision drives us to
            expand our reach and make a mark in the vertical transportation
            industry. As one of the leading <Link>Residential lifts</Link>, <Link>Commercial
            lifts</Link>, <Link>Hospital lifts</Link>, <Link>Hotel lifts</Link > and <Link style={{marginRight:'0.25rem'}}>Industrial lifts</Link> 
            manufacturers headquartered in the rapidly growing Tricity. Our
            company has earned a reputation for delivering quality and
            affordable lift products that excel in every aspect.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default HomeAbout;
