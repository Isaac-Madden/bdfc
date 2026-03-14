import React from 'react';
import '../Styles/PageStyles/CoachesPage.css';
import Breadcrumb from '../Components/Breadcrumb';
import tempPic from '../assets/bdfc_club_logo.png';

const CoachesPage: React.FC = () => {
  const coaches = [
    {
        name: "Indy",
        text: "Hello, I’m Inderjeet (Indy), Head coach at BDFC. I’m a qualified UEFA ‘A’ licenced coach. Previously I was a professional footballer, starting at Bradford City aged 12, before moving on aged 18 to play in Ireland, India, USA and Belgium. I commenced my coaching career aged 24 in Belgium where I combined playing and management, attaining my coaching badges as I progressed, to be fully prepared for my new role, once I retired from playing. I became a sports coach around 15 years ago at grassroots clubs before progressing to First team semi-professional clubs. I currently work as a coach for professional football clubs focussing on the academy level. I have worked at BDFC for 3 years, and have been involved with people with disabilities for a number of years. Here at BDFC we offer a fun, safe, inclusive environment where members can learn and practice playing their football. Training is for all ages, ability levels and we can cater for most disabilities. We are lucky to have first class facilities, both indoor and outside (4G), where our coaches bring their experience to provide unique and fun training sessions. All of our coaches are FA qualified and have DBS checks.",
        picutre: tempPic
    },
    {
        name: "Mo",
        text: "I have coached at BDFC for over 20 years, where I have been involved in training many players. I currently work with the intermediate group and some of the older juniors. I have also worked in schools assisting disabled children for many years. I aim to bring out the best in individuals by means of fun. I also have lots of experience dealing with their particular needs. I look forward to meeting you in the future and hope that you can come along to BDFC to enjoy playing football.",
        picutre: tempPic
    },
    {
        name: "Hollie",
        text: "Hi, I’m Hollie and I’m 19 years old. I first started with BDFC in 2020 as a volunteer aged 14 and helped out with our juniors. My role now is to coach the juniors and make sure their sessions are inclusive, engaging and most of all enjoyable, as that’s what matters most!",
        picutre: tempPic
    },
    {
        name: "Terry",
        text: "I help out as a coach at the club as a volunteer. I have years of experience in mainstream football and am involved at BDFC because my son plays for the senior team, and I just want to help. As the father of a boy with special needs, I understand that all of our players are unique and I aim to help bring out the best in them. Fun and good communication helps me to achieve the BDFC club goals.",
        picutre: tempPic
    }
  ];

  return (
    <div className="CoachesPage">
      <Breadcrumb />
      <h2>Meet our Coaching Team!</h2>
      <div className='CoachesList'>
        {coaches.map(coach => (
          <div key={coach.name} className="CoachCard">
            <div className="CoachImageContainer">
              <img 
                src={coach.picutre}
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