import React from 'react'
import Logo from "./assests/logo.jpg"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navimg'>
        <img src={Logo} alt="" />
      </div>
      <div className='Navlist'>
        <ul>
          <li className='home'>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Screenshoot</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
