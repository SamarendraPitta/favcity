import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-left">
          <h3 className="footer-logo">Maldives Explorer</h3>
          <p className="tagline">Escape. Explore. Experience the Maldives.</p>
        </div>

        <div className="footer-center">
          <ul className="footer-nav">
            <li><a href="#explore">Explore</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#restaurants">Restaurants</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} <span>Maldives Explorer</span>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
