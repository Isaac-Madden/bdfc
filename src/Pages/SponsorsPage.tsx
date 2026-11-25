import React from 'react';
import '../Styles/PageStyles/SponsorsPage.css';
import fundersImage from '../assets/funders-image.png';

const SponsorsPage: React.FC = () => {
  return (
    <div className="sponsors-container">
      <header className="sponsors-header">
        <h2>Sponsorships &amp; Donations</h2>
        <p className="sponsors-subtitle">
          Help us keep community football accessible for everyone.
        </p>
      </header>

      <div className="sponsors-content">
        <div className="sponsors-info">
            <p>
              There are no paid volunteers at BDFC - everything we do is powered by volunteers giving their time, energy, and passion to make a difference. Our coaches are not volunteers, they are paid members of staff, ensuring we deliver quality, inclusive, safe football for all our members.
          </p>
          <p>
            Our running costs are around <strong>£50k per year</strong>, which we cover through donations, fundraising, and grants. We couldn’t do what we do without the incredible support of our community.
          </p>

          <div className="cta-group">
            <a
              href="https://cafdonate.cafonline.org/9155"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Donate via CAF Online
            </a>
            <a
              href="mailto:bradforddisabilityfc@gmail.com"
              className="btn btn-secondary"
            >
              Get in Touch to Sponsor Us
            </a>
          </div>
        </div>

        <div className="sponsors-media">
          <img src={fundersImage} alt="Our Amazing Funders and Partners" />
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;