import React from 'react';
import '../Styles/PageStyles/JuniorsPage.css';

const JuniorsPage: React.FC = () => {
  return (
    <div className="JuniorsPage">   
      <h2>Juniors</h2>
      <div className='JuniorsText'>
        <h3>About Us</h3>
        <p>
          Our all inclusive disability football club is a long established welcoming community where boys and girls of all abilities can enjoy the game in a safe, supportive, family friendly environment.
          Open to children aged 6 and over, the club embraces players with all disabilities, focusing on fun, confidence and development both on and off the pitch. 
          With experienced, qualified coaches and a strong sense of togetherness, players train twice a week to build skills, teamwork, and self belief while also having the opportunity to compete in structured league games.
          The club prides itself on creating a positive atmosphere where every child is valued, encouraged and given the chance to play football and make friends.
        </p>
        <h3>Fixtures</h3>
        <p>
          We are currently in the process of setting up our fixtures for the season. 
          We will update this section as soon as we have more information on our upcoming matches and events. 
          Stay tuned for updates!
        </p>
        <h3>Contact Us</h3>
        <p>
          If any of the above appeals to you and you wish to try us out, please contact Andy Clayton at <a href="mailto:bradforddisabilityfc@gmail.com"> bradforddisabilityfc@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
export default JuniorsPage;