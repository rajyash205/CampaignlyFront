import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="brand-name">Campaignly</h1>
        <p className="tagline">Empowering Your Marketing Strategies with Data-Driven Campaigns</p>
        <img
          src="https://cdn.dribbble.com/users/1208680/screenshots/15285361/media/eeed20bc59f73d75fabe35cb7a3b3a6e.gif"
          alt="Marketing Animation"
          className="hero-image"
        />
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Campaignly?</h2>
        <div className="feature-grid">
          <div className="feature-item">
            <img src="https://via.placeholder.com/100" alt="Data Analytics" />
            <h3>Data-Driven Insights</h3>
            <p>Make informed decisions with powerful analytics and customer segmentation.</p>
          </div>
          <div className="feature-item">
            <img src="https://via.placeholder.com/100" alt="Automation" />
            <h3>Automation</h3>
            <p>Save time with automated campaign creation and execution tools.</p>
          </div>
          <div className="feature-item">
            <img src="https://via.placeholder.com/100" alt="Customization" />
            <h3>Customization</h3>
            <p>Tailor your campaigns to fit your audience and goals with ease.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta">
        <h2>Ready to Transform Your Marketing?</h2>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default Dashboard;
