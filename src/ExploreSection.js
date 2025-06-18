import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './ExploreSection.css';
import MaldivesCarousel from './ParallaxBlock';
import Restaurantpage from './Restaurantpage';
import Videopage from './Videopage';

const ExploreSection = () => {

useEffect(() => {
  AOS.init({
    duration: 3000,
    once: false,
  });
}, []);

  return (
    <div className='explore-section-container' data-aos="fade-left" data-aos-duration="3000">
      <div className="explore-section" id="explore">
        <div className="explore-content">
          <h2 className="section-title">Explore the Maldives</h2>
          <p className="section-subtitle">
            The Maldives, a tropical paradise in the Indian Ocean, is known for its pristine white-sand beaches, luxurious
            overwater villas, Scuba diving and stunning coral reefs. It offers a perfect blend of luxury and natural beauty.
          </p>
          <p className="section-description">
            With over 1,190 coral islands spread across 26 atolls, the Maldives is a haven for water sports enthusiasts,
            honeymooners, and anyone looking to unwind in a serene environment. From snorkeling with vibrant marine life
            to relaxing in luxurious resorts, the Maldives has something for everyone.
          </p>
        </div>
      </div>

      <Videopage />

      {/* ✨ New inspirational text here */}
      <div className="inspire-text">
        Let your heart wander through the hidden gems and sunlit wonders of the Maldives.
      </div>

      <MaldivesCarousel />
      <Restaurantpage />
    </div>
  );
};

export default ExploreSection;
