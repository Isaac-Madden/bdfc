import React from 'react';
import '../Styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer">
      
      <div className="Content"> 

        <div className="Contact">
          <h3>Get In Touch</h3>
          <p>Email: <a href="mailto:bradforddisabilityfc@gmail.com">bradforddisabilityfc@gmail.com</a></p>
          <p>Phone: (01274) 123 456</p>
          <p>Bradford, West Yorkshire</p>
        </div>

        <div className="Social">
          <h3>Connect</h3>
          <div className="SocialIcons">
            <a href="https://www.facebook.com/BradfordDFC/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span role="img" aria-label="Facebook Icon"><FaFacebookF /></span>
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <span role="img" aria-label="Twitter Icon"><FaTwitter /></span>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span role="img" aria-label="Instagram Icon"><FaInstagram /></span>
            </a>
          </div>
        </div>

      </div>

      <div className="Copyright">
        <p>&copy; {currentYear} Bradford Disability Football Club. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;