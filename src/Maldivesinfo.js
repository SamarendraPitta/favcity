import './Maldivesinfo.css';

const MaldivesInfo = () => {
  return (
    <section className="maldives-info-section" id="about">
      <div className="info-container">
        <h2>Discover the Maldives</h2>
        <p className="intro">
          The Maldives, a tropical paradise in the Indian Ocean, is known for its pristine white-sand beaches,
          overwater villas, and stunning coral reefs. It offers a perfect blend of luxury and natural beauty.
        </p>

        <h3>Why Visit?</h3>
        <ul className="highlight-list">
          <li>🏝️ Over 1,190 coral islands spread across 26 atolls</li>
          <li>🐠 World-famous snorkeling and scuba diving experiences</li>
          <li>🌌 Bioluminescent beaches that glow at night</li>
          <li>💑 Ideal for romantic getaways and honeymoons</li>
        </ul>

        <h3>Fun Facts</h3>
        <ul className="fun-facts">
          <li>🌊 The lowest-lying country in the world (average height: 1.5m above sea level)</li>
          <li>🐬 You can swim with whale sharks and manta rays all year</li>
          <li>🚤 Many resorts can only be accessed by seaplane or speedboat</li>
          <li>📸 It's one of the most Instagrammed destinations globally!</li>
        </ul>
      </div>
    </section>
  );
};

export default MaldivesInfo;
