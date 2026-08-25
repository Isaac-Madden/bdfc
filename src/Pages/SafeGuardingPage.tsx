import React from 'react';
import '../Styles/PageStyles/SafeGuardingPage.css';

const SafeGuardingPage: React.FC = () => {
  return (
    <div className="safeguarding-container">
      <header className="safeguarding-header">
        <h2>Safeguarding &amp; Welfare</h2>
        <p className="safeguarding-subtitle">
          Creating a safe, supportive, and enjoyable environment for everyone at BDFC.
        </p>
      </header>

      <div className="welfare-banner">
        <h3>Our Commitment to You</h3>
        <p>
          Welfare isn’t just about dealing with problems after they happen—it’s about your general wellbeing, safety, and happiness while at training, matches, and traveling to and from club events. 
        </p>
        <p className="highlight-text">
          We would always rather know about potential issues early so we can be proactive. Members, carers, and families can speak to any club official in total confidence.
        </p>
      </div>

      <section className="contacts-section">
        <h3>Your Welfare Officers</h3>
        <div className="officer-cards">
          <div className="officer-card">
            <div className="officer-avatar">AW</div>
            <div className="officer-details">
              <h4>Allan Watt</h4>
              <p className="role">Lead Welfare Officer</p>
              <a href="mailto:bdfcwelfare@yahoo.com" className="contact-btn">
                Email Allan
              </a>
            </div>
          </div>

          <div className="officer-card">
            <div className="officer-avatar">T</div>
            <div className="officer-details">
              <h4>Tracy</h4>
              <p className="role">Welfare Support</p>
              <span className="contact-note">Available at training sessions</span>
            </div>
          </div>
        </div>
      </section>

      <div className="safeguarding-footer-note">
        <p>
          <strong>Need help at a session?</strong> If Allan or Tracy are unavailable, please approach any coach or familiar face at training—we are always here to listen and guide you in the right direction.
        </p>
      </div>
    </div>
  );
};

export default SafeGuardingPage;