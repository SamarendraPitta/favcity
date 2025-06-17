import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import maldivesImage from './background-maldives.jpg';
import ExploreSection from './ExploreSection';
import './MaldivesWebsite.css';

const MaldivesWebsite = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });
  }, []);

  const openNav = () => setMenuOpen(true);
  const closeNav = () => setMenuOpen(false);

  const handleExploreClick = () => {
    const btn = document.querySelector('.hero-button');
    if (btn) {
      btn.classList.add('clicked');
      setTimeout(() => {
        btn.classList.remove('clicked');
        const exploreSection = document.getElementById('explore');
        if (exploreSection) {
          exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    }
  };

  return (
      <div className="Hero-container">
        <div className="content-container">
          <h1>Welcome to Maldives</h1>

          {/* Desktop Navigation */}
          <div className="nav-links desktop-nav">
            <a href="#home">Home</a>
            <a href="#explore">Explore</a>
            <a href="#activities">Activities</a>
            <a href="#register">Register</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-bottom"></div>

          {/* Mobile Toggle Button */}
          <button
            onClick={openNav}
            className={`menu-button mobile-only ${menuOpen ? 'hidden' : ''}`}
          >
            &#9776;
          </button>

          {/* Overlay Menu for Mobile */}
          <div className={`overlay ${menuOpen ? 'open' : ''}`}>
            <button className="closebtn" onClick={closeNav} aria-label="Close Menu">
              &times;
            </button>
            <div className="overlay-content">
              <a href="#home" onClick={closeNav}>Home</a>
              <a href="#explore" onClick={closeNav}>Explore</a>
              <a href="#activities" onClick={closeNav}>Activities</a>
              <a href="#register" onClick={closeNav}>Register</a>
              <a href="#contact" onClick={closeNav}>Contact</a>
            </div>
          </div>

          {/* Hero Section */}
          <div className="hero-image-container" data-aos="fade-right">
            <img src={maldivesImage} alt="Maldives background" className="hero-image" />
            <div className="hero-overlay" />
            <div className="hero-text" data-aos="zoom-in">
              <h1>Welcome to the Maldives</h1>
              <p>Sunny side of life 🌴</p>
              <div className="button-hero-class">
                <button className="hero-button" onClick={handleExploreClick} data-aos="fade-up">
                  Explore More
                </button>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScj8tHwwwiYqDAuxXg9qJyRdC6R8_iN2LQXJj4qf2XX6_VkyQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="hero-button" data-aos="fade-up">Register Now</button>
                </a>
              </div>
            </div>
          </div>

          <ExploreSection />

        </div>
      </div>
  );
};

export default MaldivesWebsite;
