import React from 'react';
import '../styles/features.css';

export default function Features() {
  const features = [
    {
      icon: '🎮',
      title: 'Classic Gameplay',
      description: 'Experience the timeless platforming action that defined a generation. Jump, stomp, and collect coins!'
    },
    {
      icon: '🏰',
      title: 'Vibrant Worlds',
      description: 'Explore colorful kingdoms filled with secrets, power-ups, and hidden passages to discover.'
    },
    {
      icon: '👑',
      title: 'Epic Quest',
      description: 'Journey through 8 challenging worlds to rescue Princess Peach from the evil Bowser.'
    }
  ];

  const retailers = [
    { name: 'NES Classic', availability: 'In Stock' },
    { name: 'Nintendo Switch Online', availability: 'Available' },
    { name: 'Virtual Console', availability: 'Available' },
    { name: 'Game Stores', availability: 'Check Local' }
  ];

  return (
    <section className="features-section">
      <div className="product-showcase">
        <img src="/Super Mario Bros Box.png" alt="Super Mario Bros Box Art" className="product-image" />
      </div>

      <h2 className="section-title">Features</h2>

      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="price-section">
        <div className="price-label">Original Release Price</div>
        <div className="price-tag">$49.99</div>
        <div className="price-note">Nintendo Entertainment System (1985)</div>
      </div>

      <div className="retailers-section">
        <h3 className="retailers-title">Find This Product At</h3>
        <div className="retailers-grid">
          {retailers.map((retailer, index) => (
            <div key={index} className="retailer-card">
              <div className="retailer-name">{retailer.name}</div>
              <div className="retailer-availability">
                <span className="availability-dot"></span>
                {retailer.availability}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
