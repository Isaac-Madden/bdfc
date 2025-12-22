import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaEnvelope } from 'react-icons/fa';

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
        </ul>
      </div>

      <div className="Copyright">
        <p>&copy; {currentYear} Bradford Disability Football Club. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;