import React from 'react';
import { FaFacebookF, FaEnvelope, FaInstagramSquare } from 'react-icons/fa';
import '../Styles/Components/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      
      <div className="Content">
        <h3>Contact us</h3>
        <ul className="SocialIcons">
          <li>
            <a 
              href="mailto:bradforddisabilityfc@gmail.com" 
              aria-label="Send us an Email"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.facebook.com/BradfordDFC/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
          </li>
          <li>
            <a 
              href="https://www.instagram.com/bradford_disability_fc" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Follow us on Instagram"
            >
              <FaInstagramSquare aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>

      <div className="Copyright">
        <p>&copy; {currentYear} Bradford Disability Football Club</p>
        <p>All Rights Reserved</p>
        <p>Registered Charity: 1158017</p>
      </div>

    </footer>
  );
}

export default Footer;