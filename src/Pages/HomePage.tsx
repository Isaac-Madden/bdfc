import React from 'react';
import '../Styles/PageStyles/HomePage.css';

import bdfc_pic from '../assets/bdfc_pic.png';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
        <div className="text-section">
          <h2>Welcome!</h2>
          <p>
            Founded in 2001, 
            Bradford Disability FC is an award-winning football club dedicated to providing 
            people of all ages and disabilities with the opportunity to play the sport they love.
          </p>
          <p>
            We offer a safe, welcoming and inclusive environment where members can improve their fitness, build confidence 
            and make lifelong friends.
          </p>
          <p>
            With a vibrant social calendar for members and families, 
            we are more than just a club—we’re a community.
          </p>
          <p>
            Join us at a training session today!
          </p>
        </div>
        
        <div className="image-section">
          <img 
            src={bdfc_pic}
            alt="Football action shot" 
          />
        </div>
    </div>
  )
}

export default HomePage;



