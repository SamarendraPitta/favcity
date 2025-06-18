import 'aos/dist/aos.css';
import beachImg from './beachsidedining.jpg';
import bazaarImg from './island-bazar.webp';
import bluImg from './onlyblue.webp';
import './Restaurantpage.css';
import ithaaImg from './underwater.jpg';

const Restaurantpage = () => {
  return (
    <div className="top-places-container" data-aos="zoom-in" data-aos-duration="3000">
      <h2>Top Restaurants & Shops in Maldives</h2>
      <div className="places-grid">

        <div className="place-card">
          <img src={bluImg} alt="BLU Under Ocean Restaurant" />
          <h3>BLU Under Ocean Restaurant</h3>
          <p>
            A luxurious undersea dining experience with floor-to-ceiling reef views — where gourmet cuisine meets marine magic.
          </p>
          <a href="https://www.coloursofoblu.com/oblu-select-lobigili/dining/only-blu" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>

        <div className="place-card">
          <img src={ithaaImg} alt="Ithaa Undersea Restaurant" />
          <h3>Ithaa Undersea Restaurant</h3>
          <p>
            Dine 5 meters below sea level at the world’s first underwater restaurant with a 180° view of the coral reef.
          </p>
          <a href="https://www.conradmaldives.com/dine/ithaa-undersea-restaurant/" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>

        <div className="place-card">
          <img src={beachImg} alt="Beachside Dining" />
          <h3>Beachside Dining</h3>
          <p>
            Enjoy intimate meals under the stars with your feet in the sand, offered by many beachfront resorts across the Maldives.
          </p>
          <a href="https://www.instagram.com/compassbeachandbistro/?hl=en" target="_blank" rel="noopener noreferrer">
            View on Instagram
          </a>
        </div>

        <div className="place-card">
          <img src={bazaarImg} alt="Island Bazaar" />
          <h3>Island Bazaar</h3>
          <p>
            A boutique gift shop offering ethically made local crafts, fashion, accessories, and cultural souvenirs.
          </p>
          <a href="https://island-bazaar.com/" target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>

      </div>
    </div>
  );
};

export default Restaurantpage;
