import React from 'react'
import './footer.css'
import {BsFacebook,BsTwitter,BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Sreekar</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/sreekar.paruchuru.1" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/sreekar0607/" target='_blank'><BsInstagram/></a>
        <a href="https://twitter.com/sreekar0912" target='_blank'><BsTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SREEKAR. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer