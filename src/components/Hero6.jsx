import React from 'react'
import screenshortly from "./assests/screenshortrecently.png"
import image298 from "./assests/image298.png"
import image299 from "./assests/image299.jpg"
import Iphone300 from "./assests/Iphone300.png"
import image301 from "./assests/image301.png"
import image302 from "./assests/image302.png"

const Hero6 = () => {
  return (
    <div className='hero6'>
      <div className="bg">
      <img src={screenshortly} alt="" />
      </div>
      <div className='allscreenshot'>
        <img src={image298} alt="" />
        <img src={image299}alt="" />
        <img src={Iphone300} alt="" />
        <img src={image301} alt="" />
        <img src={image302} alt="" />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Hero6
