import React from 'react'
import Logo from '../Assets/Logo.svg';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-section-top'>
        <div className='footer-logo-container'> 
          <img src={Logo} alt=''/>
        </div>
        <div className='footer-icons'>
            <BsTwitter/>
            <BsLinkedin/>
            <BsYoutube/>
            <BsFacebook/>
        </div>
      </div>
      <div className='footer-section-two'>
        <div className='footer-section-columns'>
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>testimonials</span>
          <span>Work</span>
        </div>
        <div className='footer-section-columns'>
          <span>12345678</span>
          <span>contact@gamil.com</span>
          <span>contact2@gmail.com</span>
          <span>contact3@gmail.com</span>
        </div>
        <div className='footer-section-columns'>
          <span>Terms & Conditions</span>
          <span>Privecy</span>
        </div>

      </div>

    </div>
  )
}

export default Footer