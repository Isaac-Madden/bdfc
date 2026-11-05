import React from 'react';
import bdfc_club_logo from '../../assets/bdfc_club_logo.png';

export const GalleryHeader: React.FC = () => (
  <header className="calendar-header">
    <img src={bdfc_club_logo} alt="Bradford Disability Football Club Logo" className="club-logo" />
    <h2>Club Gallery</h2>
    <p>Check out our latest photos from matches and events.</p>
  </header>
);