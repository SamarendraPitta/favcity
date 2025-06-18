import './WeatherHeader.css';
import logo from './maldiveslogo.svg'; // your SVG logo

const WeatherHeader = () => {
  const temperature = 28; // manually set or pull from API later

  return (
    <div className="weather-header">
      <div className="logo-section">
        <img src={logo} alt="Maldives Logo" className="logo-img" />
      </div>

      <div className="time-weather">
        <span className="temp">{temperature}°C</span>
        <span className="weather-icon">🌥️</span>
      </div>
    </div>
  );
};

export default WeatherHeader;
