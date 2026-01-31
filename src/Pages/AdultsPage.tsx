import React from 'react';
import '../Styles/PageStyles/AdultsPage.css';

const AdultsPage: React.FC = () => {
  return (
    <div className="AdultsPage">  
      <h2>Adults team</h2>
      <div className='AdultsText'>
        <h3>About Us</h3>
        <p>
          We welcome all players aged 16 to 65 to the adult section of our family friendly club. 
          We try to make our club a fun place to be and many of trustees have family members that play at the club
          We believe that all players with a disability should be able to enjoy playing in a football in a team, whatever their ability.
          Our professional coaching team is structured in a way that caters for all based on their individual strengths. 
          We have 4 ability levels which allow all individuals to play in a safe,controlled environment, we take safeguarding very seriously. 
        </p>
        <h3>League Matches</h3>
        <p>
          We play in the West Riding Ability Counts League (WRACL).
          This is a league solely set up for people with disabilities and is sanctioned by the Football Association (FA). 
          We always travel by coach to the fixtures which is very popular with members, as it gives them a sense of independence.
          The fixtures are designed so that our players compete against teams of a similar ability from other clubs.
        </p>
        <h3>BDFC Tournament</h3>
        <p>
          This is an annual event which we organise where over 50 other teams from all over the UK attend.
          It’s a great day and can attract over 800 people.
        </p>

        <h3>Away Trips</h3>
        <p>
          Every year we aim to attend a tournament somewhere in the UK.  
          This will involve an overnight stay and is eagerly anticipated by all of our members.
          In recent years we have attended tournaments in Belfast and Bridlington.
        </p>

        <h3>Contact Us</h3>
        <p>
          If any of the above appeals to you and you wish to try us out, please contact Andy Clayton at <a href="mailto:bradforddisabilityfc@gmail.com"> bradforddisabilityfc@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
export default AdultsPage;



