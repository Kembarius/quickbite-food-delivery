import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.quickbite_logo} alt="quickbite logo" />
          <p>Lorem Ipsum is simply dummy text of the printing and typestting industry. Lorem ipsum</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} className='social-icon' alt="" />
            <img src={assets.twitter_icon} className='social-icon' alt="" />
            <img src={assets.linkedin_icon} className='social-icon' alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@quickbite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © QuickBite.com - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
