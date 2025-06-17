import './ExploreSection.css';
import MaldivesCarousel from './ParallaxBlock';


const ExploreSection = () => {
  const scrollToActivities = () => {
    const activities = document.getElementById('activities');
    if (activities) {
      activities.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='explore-section-container'>
        <div className="explore-section" id="explore">
            <div className="explore-content">
            <h2 className="section-title">Explore the Maldives</h2>
            <p className="section-subtitle">
                Dive into crystal-clear waters, bask under golden sunsets, and experience island life like never before — the Maldives awaits with breathtaking beauty and unforgettable adventures.
            </p>

            <button className="explore-button" onClick={scrollToActivities}>
                Discover Activities
            </button>
            </div>
        </div>
        <MaldivesCarousel />
    </div>
  );
}
export default ExploreSection;
