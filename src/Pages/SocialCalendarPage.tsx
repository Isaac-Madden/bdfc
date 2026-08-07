import React from 'react';
import '../Styles/PageStyles/ClubCalendarPage.css';
import bdfc_club_logo from '../assets/bdfc_club_logo.png';

interface EventItem {
  date: string;
  title: string;
  location?: string;
  tag?: 'Match' | 'Fundraiser' | 'Social' | 'Tournament' | 'Special';
  details?: string;
  isHighlight?: boolean;
}

interface MonthGroup {
  month: string;
  events: EventItem[];
}

const calendarData: MonthGroup[] = [
  {
    month: 'May 2026',
    events: [
      { date: '10th', title: 'Junior League Games', location: 'Leeds Fives, Limewood Approach, Seacroft, Leeds, LS14 1NH', tag: 'Match' },
      { date: '31st', title: 'Adult League Games', location: 'West Riding County FA, Fleet Lane, Woodlesford, Leeds, LS26 8NX', tag: 'Match' },
      { date: '31st', title: 'Junior League Games', location: 'Thornes', tag: 'Match' },
    ],
  },
  {
    month: 'June 2026',
    events: [
      { date: '6th', title: 'Bag Pack Fundraiser', location: 'ASDA, Girlington (10am - 3pm)', tag: 'Fundraiser' },
      { date: '28th', title: 'Adult League Games', location: 'Bradford & Bingley Sports Club, Wagon Lane, Bingley, BD16 1LT', tag: 'Match' },
    ],
  },
  {
    month: 'July 2026',
    events: [
      { date: '5th', title: 'Flamingoland Trip', tag: 'Social' },
      { date: '12th', title: 'Gomersal & Cleckheaton Tournament', tag: 'Tournament' },
      { date: '19th', title: 'Bridlington Tournament', details: 'Day trip with coach transfer provided.', tag: 'Tournament' },
    ],
  },
  {
    month: 'September 2026',
    events: [
      { date: '12th', title: 'Pre-Tournament Party', location: 'Bradford & Bingley Sports Club, Wagon Lane, BD16 1LT', tag: 'Social' },
      { date: '13th', title: 'BDFC Annual Tournament', location: 'Wagon Lane, BD16 1LT', tag: 'Tournament', isHighlight: true },
      {
        date: '18th',
        title: 'BDFC 25th Anniversary Night',
        location: 'Bradford & Bingley Sports Club, Wagon Lane, BD16 1LT',
        details: 'Formal sit-down meal celebrating 25 years. Special guests, live band, and founder Mr. Paul Squires in attendance!',
        tag: 'Special',
        isHighlight: true,
      },
    ],
  },
  {
    month: 'October 2026',
    events: [
      { date: '23rd', title: 'Presentation Evening', location: 'The New Tyke, Thornton Rd, BD13 3DG', tag: 'Social' },
    ],
  },
  {
    month: 'December 2026',
    events: [
      { date: '11th', title: 'Christmas Party', location: 'The New Tyke, Thornton Rd, BD13 3DG', tag: 'Social' },
    ],
  },
];

const ClubCalendarPage: React.FC = () => {
  return (
    <div className="calendar-page">
      <header className="calendar-header">
        <img src={bdfc_club_logo} alt="Bradford Disability Football Club Logo" className="club-logo" />
        <h2>Club Calendar 2026</h2>
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