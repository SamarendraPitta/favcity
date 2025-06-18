import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './ParallaxBlock.css';

// Local images from your src folder
import glowingImg from './bioluminent.jpg';
import privateIslandImg from './privateisland.jpg';
import sandbankImg from './sandbank.jpg';
import snorkelingImg from './snoring.jpg';
import sunsetCruiseImg from './sunsetcruise.jpg'; // using same as placeholder
import overwaterImg from './watervillas.jpg';

function MaldivesCarousel() {
  return (
    <div className="carousel-container" data-aos="zoom-out" data-aos-duration="3000">
      <Carousel fade interval={3500}>
        <Carousel.Item>
          <img className="d-block w-100" src={snorkelingImg} alt="Snorkeling & Diving" />
          <Carousel.Caption>
            <h3>Snorkeling & Diving</h3>
            <p>Explore vibrant coral reefs teeming with marine life in crystal-clear waters.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={overwaterImg} alt="Overwater Villas" />
          <Carousel.Caption>
            <h3>Overwater Villas</h3>
            <p>Stay in luxurious bungalows right above turquoise lagoons.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={glowingImg} alt="Glowing Beaches" />
          <Carousel.Caption>
            <h3>Glowing Beaches</h3>
            <p>Experience bioluminescent magic that lights up the shores at night.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={privateIslandImg} alt="Private Islands" />
          <Carousel.Caption>
            <h3>Private Islands</h3>
            <p>Unwind in seclusion and ultimate luxury on your own private island.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={sunsetCruiseImg} alt="Sunset Cruise" />
          <Carousel.Caption>
            <h3>Sunset Cruise</h3>
            <p>Drift into a glowing horizon aboard a traditional Maldivian Dhoni boat.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img className="d-block w-100" src={sandbankImg} alt="Sandbank Experience" />
            <Carousel.Caption>
                <h3>Sandbank Experience</h3>
                <p>Dine in solitude on a tiny island surrounded by the Indian Ocean — where serenity meets luxury.</p>
            </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
            <img className="d-block w-100" src={require('./dolphinwatching.jpg')} alt="Dolphin Watching" />
            <Carousel.Caption>
                <h3>Dolphin Watching</h3>
                <p>Watch playful dolphins leap through the ocean beside your boat at sunset.</p>
            </Carousel.Caption>
        </Carousel.Item>


      </Carousel>

    </div>
  );
}

export default MaldivesCarousel;
