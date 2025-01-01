import React from 'react'
import group1 from "./assests/Group1.png"
import group2 from "./assests/Group 4.png"
import group3 from "./assests/Group3.jpg"
import group4 from "./assests/Group2.jpg"

const Hero5 = () => {
  return (
    <div className='hero5'>
      <div className="content">
        <span>Loerm Ipsum</span>
        <h2>App Download</h2>
      </div>

      <div className="appbox">
        <div className="appbox1">
          <h1>1000</h1>
          <p>App Downloads</p>
          <img src={group1} alt="" className='group1img' />
        </div>
        <div className="appbox1">
        <h1>2000</h1>
        <p>Happy Clients</p>
        <img src={group2} alt="" className='group1img' />
        </div>
        <div className="appbox1">
        <h1>400</h1>
        <p>ACTIVE ACCOUNTS</p>
        <img src={group4} alt="" className='group1img' />
        </div>
        <div className="appbox1">
        <h1>200</h1>
        <p>TOTAL APP RATES</p>
        <img src={group3} alt="" className='group1img' />
        </div>
      </div>
    </div>
  )
}

export default Hero5
