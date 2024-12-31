import React from 'react'
import Group1 from "./assests/Group 101.jpg"
import Group2 from "./assests/Group 102.jpg"
import Group3 from "./assests/Group 103.jpg"

const Hero2 = () => {
  return (
    <div className='hero2'>
      <div className="h1">
        <p>Lorem Ipsum</p>
        <h2>Why Are We Unique ?</h2>
      </div>

      <div className="box">
        <div className="box1">
          <div className="img1">
          <img src={Group1} alt="" />
          </div>
          <h5>We`ve upped The <br/> Game.</h5>
          <p>We Carry a Variety of products through <br/> our unique vendors that you can`t <br/> Typically Delivered</p>
        </div>
        <div className="box1">
          <div className="img1">
          <img src={Group2} alt="" />
          </div>
          <h5>Order From our virtual mall of <br/>Local Stores</h5>
          <p>Order from a large variety of local stores <br/>you like and trust for years
          you can’t<br/> typically get delivered.</p>
        </div>
        <div className="box1">
         <div className="img1">
         <img src={Group3} alt="" />
         </div>
          <h5>Easy Access to local <br/>
          services</h5>
          <p>Easy access to local services such as dry <br/>cleaning, we can pick it up and drop it <br/>
          off to make your</p>
        </div>
      </div>
    </div>
  )
}

export default Hero2
