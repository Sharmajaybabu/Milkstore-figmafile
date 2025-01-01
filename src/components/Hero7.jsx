import React from 'react'
import pngegg from "./assests/pngegg.png"
import user from "./assests/user.png"
import { GoArrowLeft } from "react-icons/go";

import { GoArrowRight } from "react-icons/go";

const Hero7 = () => {
  return (
    <div className='hero7'>
      <div className='hero7leftside'>
        <span>reviews</span>
        <h2>Client Reviews</h2>
        <p className='review'>Love the app!! I`m looking forward for them to add more of my favorite stores so i<br/> 
        can use them more offen.  Lorem Ipsum is simply dummy text of the printing and <br/>
        typesetting industry. Lorem Ipsum has been the industry`s standard dummy text <br/>
        ever since the 1500s, </p>
       <div className='user'>  
           <img src={user} alt="" />
           <div>
           <p className='allahalal'>Allhalal</p>
           <p className='finally'>Finally a great app with variety</p>
           </div>
       </div>
       <div className='arrow'>
         <span><GoArrowLeft /></span>
          <span><GoArrowRight /></span>
        </div>
      </div>
      <div className='hero7rightside'>
        <img src={pngegg} alt="" />
      </div>

    </div>
  )
}

export default Hero7
