import React from 'react';
import '../Styles/PageStyles/TrainingPage.css';
import Breadcrumb from '../Components/Breadcrumb';

const TrainingPage: React.FC = () => {
  return (
    <div className="TrainingPage">   
      <Breadcrumb />
      <h2>Training Location and Times</h2>
      <div className='TrainingText'>
        <h3>Location</h3>
        <p>
          Held at Bradford College Sports Centre, Trinity Green Campus, Trinity Road, Bradford, BD5 0JD, 
        </p>
        <p>
          What 3 Words– wool.racing.worked
        </p>
        <h3>Times</h3>
        <p>
          Sunday: 10.00am - 12.00noon (Morning Sessions)
        </p>
        <p>
          Friday: 5.30pm – 7.30pm (Evening Sessions)
        </p>
        <h3>Kit</h3>
        <p>
          All members should wear their football kits or suitable training clothes. 
          Adults and older juniors will train outside so warm clothing or sunscreen is advised where appropriate.
        </p>
        <p>
          Shin pads must be worn at all times. Football boots (moulded studs- not metal) should be worn when playing on grass. 
          Trainers or Astroturf boots can be worn for playing on indoor or outdoor courts.
        </p>
        <p>
          No jewellery or watches should be worn whilst playing football. Players should bring a drink in a named bottle. 
          This should be kept at the side of the court. No eating while playing football.
        </p>
      </div>
    </div>
  )
}
export default TrainingPage;