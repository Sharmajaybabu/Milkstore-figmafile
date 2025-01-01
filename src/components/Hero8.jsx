import React from 'react'
import milkjug from "./assests/milkjug.png"
import milk1 from "./assests/milk.png"

const Hero8 = () => {
  return (
    <div className='hero8'>
      <div className='milkjug'>
        <img src={milkjug} alt="" />
      </div>
      <div className='milk1'>
        <img src={milk1} alt="" />
      </div>
      <div className='user-form'>
        <div className='form2'>
          <div className='contact'>
            <span>contact us</span>
            <h2>Get in touch with us!</h2>
          </div>
          <div className="formsection">
            <form >
              <input type="text" name="" id="" placeholder='Your name' />
              <input type="email" placeholder='your Email'/>
              <input type="text" placeholder='Your message'/>
              <button className='sendnow'>Send Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero8
