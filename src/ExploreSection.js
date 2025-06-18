import './ExploreSection.css';
import MaldivesCarousel from './ParallaxBlock';
import Videopage from './Videopage';


const ExploreSection = () => {
 
  return (
    <div className='explore-section-container'>
        <div className="explore-section" id="explore">
            <div className="explore-content">
            <h2 className="section-title">Explore the Maldives</h2>
            <p className="section-subtitle">
                The Maldives, a tropical paradise in the Indian Ocean, is known for its pristine white-sand beaches,
                overwater villas, and stunning coral reefs. It offers a perfect blend of luxury and natural beauty.
            </p>
            <p className="section-description">
                With over 1,190 coral islands spread across 26 atolls, the Maldives is a haven for water sports enthusiasts,
                honeymooners, and anyone looking to unwind in a serene environment. From snorkeling with vibrant marine life
                to relaxing in luxurious resorts, the Maldives has something for everyone.</p>

            </div>
        </div>
        <Videopage />
        <MaldivesCarousel />
    </div>
  );
}
export default ExploreSection;
