import React from "react";
import img3 from "./assests/broken.jpg";
import mphone from "./assests/Iphone.jpg";
import bottlemilk from "./assests/imagebottle.png";
import Appstore from "./assests/appstore.jpg";
import playstore from "./assests/playstore.jpg";
const Hero3 = () => {
  return (
    <div className="hero3">
      <div className="img2">
        <img src={img3} alt="" />
      </div>
      <div className="leftside">
        <h1>the innovative way to shop</h1>
        <p>
          When you join DeliverZe you will enjoy our new and improved way of
          <br /> shopping through our virtual mall experience
        </p>
      <div className="Allbtn">
      <img src={playstore} alt="" className="btn1"/>
      <img src={Appstore} alt="" className="btn1"/>
      </div>
      </div>
      <div className="rightside">
        <img src={mphone} alt="" className="iphone"/>
        <div className="bottleimg">
        <img src={bottlemilk} alt="" className="bottle"/>
        </div>
      </div>
    </div>
  );
};

export default Hero3;
