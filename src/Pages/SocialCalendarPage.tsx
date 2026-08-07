import React from 'react';
import '../Styles/PageStyles/ClubCalendarPage.css';

import bdfc_club_logo from '../assets/bdfc_club_logo.png';

const ClubCalendarPage: React.FC = () => {
  return (
    <div className="ClubCalendarPage">   
        <img src={bdfc_club_logo} alt=" Bradford Disability Football Club Logo" />
        <h2>Club Calendar</h2>

        <div className="calendar-container"> 
          <h3>May 2026</h3>
          <ul>
            <li>10th Junior League games at Leeds Fives, Limewood Approach, Seacroft, Leeds, LS14 1NH.</li>
            <li>31st Adult League games at West Riding County FA, Fleet Lane, Woodlesford, Leeds, LS26 8NX.</li>
            <li>31st Junior League games at Thornes</li>
          </ul>
          <h3>June 2026</h3>
          <ul>
            <li>6th Bag Pack fundraiser at ASDA, Girlington 10am to 3pm.</li>
            <li>28th June Adult League games at Bradford and Bingley Sports Club, Wagon Lane, Bingley, BD16 1LT</li>
          </ul>
          <h3>July 2026</h3>
          <ul>
            <li>5th Flamingoland</li>
            <li>12th Gomersal and Cleckheaton Tournament</li>
            <li>19th Bridlington Tournament. This will be day trip and we shall run a coach transfer.</li>
          </ul>
          <h3>August 2026</h3>
          <ul>
            <li>no events yet</li>
          </ul>
          <h3>September 2026</h3>
          <ul>
            <li>12th Pre-tournament Party at Bradford and Bingley Sports Club, Wagon Lane, BD16 1LT</li>
            <li>13th Bradford Disability Football Club Annual Tournament, Wagon Lane, BD16 1LT</li>
            <li>18th Bradford Disability Football Club 25th Anniverasry night at Bradford and Bingley Sports Club, Wagon Lane BD16 1LT. This is a formal sit down meal to celebrate a fantastic milestone. Our founder Mr Paul Squires will be in attendance. Live Band with special guest on guitar!</li>
          </ul>
          <h3>October 2026</h3>
          <ul>
            <li>23nd. Presentation Evening at The New Tyke, Thornton Rd, BD13 3DG</li>
          </ul>
          <h3>November 2026</h3>
          <ul>
            <li>no events yet</li>
          </ul>
          <h3>December 2026</h3>
          <ul>
            <li>11th. Christmas Party at The New Tyke, Thornton Rd, BD13 3DG</li>
          </ul>
        </div>
    </div>
  )
}
export default ClubCalendarPage;