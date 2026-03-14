import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PageStyles/PlayersAndTrainingPage.css';

const PlayersAndTrainingPage: React.FC = () => {
    return (
        <div className="PlayersAndTrainingPage">   
            <h2>Players & Training</h2>
            
            <div className="directory-container">
                <Link to="/players/adults" className="directory-card">
                    <h3>Adults</h3>
                    <p>Information on our adult teams, match schedules, and inclusive training sessions for ages 16+.</p>
                    <span className="card-link">View Details →</span>
                </Link>

                <Link to="/players/juniors" className="directory-card">
                    <h3>Juniors</h3>
                    <p>Discover our youth programs designed to build confidence and skills in a fun, safe environment.</p>
                    <span className="card-link">View Details →</span>
                </Link>

                <Link to="/players/coaches" className="directory-card">
                    <h3>Coaches</h3>
                    <p>Access coaching resources, training guides, and essential club documentation for our staff.</p>
                    <span className="card-link">View Details →</span>
                </Link>
            </div>
        </div>
    );
}

export default PlayersAndTrainingPage;