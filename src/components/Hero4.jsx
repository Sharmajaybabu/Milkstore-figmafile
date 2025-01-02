import React from 'react'
import iphone14full from "./assests/Iphone14full.png"
const Hero4 = () => {
  return (
    <div className='hero4'>
      <div className='Features'>
         <span>Features</span>
         <h2>Awosome Features</h2>
      </div>
      <div className='mobilebetween'>
        <div className='content1'>
          <div className='near'>
            <p>Near by stores</p>
            <p>Discover Local Stores based on your GPS <br/>location
            </p>
          </div>
          <div className='near'>
            <p>Near by stores</p>
            <p>Discover Local Stores based on your GPS <br/>location
            </p>
          </div>
          <div className='near'>
            <p>Near by stores</p>
            <p>Discover Local Stores based on your GPS <br/>location
            </p>
          </div>
        </div>
        <div className='content2 '>
          <div className='circle circle1'></div>
          <div className='circle'></div>
          <div className='circle circle3'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
        <div className='content3'>
          <img src={iphone14full} alt="" />
        </div>
        <div className='content4 content20'>
          <div className='content2' >
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>
        </div>
       
        <div className='content1 content20'>
          <div >
            <p>Near by stores</p>
            <p>Discover Local Stores based on your GPS <br/>location
            </p>
          </div>
          <div>
            <p>Near by stores</p>
            <p>Discover Local Stores based on your GPS <br/>location
            </p>
          </div>
          <div>
            <p>Near by stores</p>
            <p>Discover Local Stores based on your GPS <br/>location
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero4
