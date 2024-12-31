import React from "react";
import Image from "./assests/jay.png";
import Milk from "./assests/milk.jpg"
import Hero2 from "./Hero2";
const Hero = () => {
  return (
  <div className="main">
    <div className="hero">
      <div className="lefthero">
        <div className="Heading">
          <h1 className="milk">Milk</h1>
          <br />
          <h1 className="Delivery">Delivery App</h1>
          <p className="para">
            To stay Shead of The Curve, Serve your Customers Through An
            <br /> On-Demand Food elivery App{" "}
          </p>
        </div>
        <div className="btn">
          <button>Get Started</button>
          <button>View More</button>
        </div>
      </div>
      <div className="righthero">
        <img src={Image} alt="" />
      </div>
      
    </div>
    <div className="milkimg">
      <img src={Milk} alt=""  />
    </div>
    </div>
  );
};

export default Hero;
