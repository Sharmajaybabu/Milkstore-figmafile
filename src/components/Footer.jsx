import React from 'react'
import Logo from "./assests/logo.jpg"
import facebook from "./assests/fb.jpg"
import tweet from "./assests/tweet.jpg"
import insta from "./assests/insta.jpg"
import google from "./assests/google.jpg"


const Footer = () => {
  return (
    <div className='footer'>
     <div className='footerlogo'>
      <img src={Logo} alt="" />
     </div>
     <div className='footerlist'>
      <ul>
        <li>About</li>
        <li>Terms & Conditions</li>
        <li>Privacy policy</li>
        <li>Contact</li>
      </ul>
      <div className='copyright'>
      <span>Copyright&copy;2021 <span className='author'>Jaybabu</span>  </span>
     </div>
     </div>
     <div className='footersmalllogo'>
      <img src={facebook} alt="" />
      <img src={tweet} alt="" />
      <img src={insta} alt="" />
      <img src={google} alt="" />
     </div>
     
    </div>
  )
}

export default Footer
