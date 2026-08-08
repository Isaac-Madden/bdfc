import React from 'react';
import '../Styles/PageStyles/CoachesPage.css';
import Breadcrumb from '../Components/Breadcrumb';
import { coachesData } from '../Utils/coachData';

const CoachesPage: React.FC = () => {

  return (
    <div className="CoachesPage">
      <Breadcrumb />
      <h2>Meet our Coaching Team!</h2>
      <div className='CoachesList'>
        {coachesData.map(coach => (
          <div key={coach.name} className="CoachCard">
            <div className="CoachImageContainer">
              <img 
                src={coach.picture}
                alt={coach.name} 
                className="CoachImage" 
              />
            </div>
            <div className="CoachText">
              <h3>{coach.name}</h3>
              <p>{coach.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoachesPage;