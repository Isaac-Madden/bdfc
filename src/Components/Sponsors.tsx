import React from 'react';
import '../Styles/Components/Sponsors.css';
import { SponsorData } from '../Utils/SponsorData';

const Sponsors: React.FC = () => {
    return (
        <div className="Sponsors" aria-label="Sponsors and Partners">
            {SponsorData.map((sponsor) => (
                <a 
                    key={sponsor.name} 
                    href={sponsor.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <img src={sponsor.logo} alt={sponsor.name} />
                </a>
            ))}
        </div>
    );
};

export default Sponsors;