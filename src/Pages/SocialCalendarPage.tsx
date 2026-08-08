import React from 'react';
import '../Styles/PageStyles/ClubCalendarPage.css';
import bdfc_club_logo from '../assets/bdfc_club_logo.png';
import { calendarData } from '../Utils/calendarData';

const ClubCalendarPage: React.FC = () => {
  return (
    <div className="calendar-page">
      <header className="calendar-header">
        <img src={bdfc_club_logo} alt="Bradford Disability Football Club Logo" className="club-logo" />
        <h2>Club Calendar</h2>
        <p className="subtitle">Keep up to date with match days, tournaments, and social events.</p>
      </header>

      <div className="calendar-timeline">
        {calendarData.map((group, idx) => (
          <div key={idx} className="month-section">
            <h3 className="month-heading">{group.month}</h3>
            <div className="events-grid">
              {group.events.map((event, eventIdx) => (
                <div key={eventIdx} className={`event-card ${event.isHighlight ? 'highlight-card' : ''}`}>
                  
                  <div className="date-badge">
                    <span className="date-num">{event.date}</span>
                  </div>

                  <div className="event-details">
                    
                    <div className="event-header-row">
                      <h4>{event.title}</h4>
                      {event.tag && <span className={`tag tag-${event.tag.toLowerCase()}`}>{event.tag}</span>}
                    </div>
                    
                    {event.location && (
                      <p className="event-location">
                        {event.location}
                      </p>
                    )}
                    
                    {event.details && <p className="event-extra">{event.details}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubCalendarPage;