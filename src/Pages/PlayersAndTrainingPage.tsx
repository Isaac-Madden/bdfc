import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import '../Styles/PageStyles/PlayersAndTrainingPage.css';

const PlayersAndTrainingPage: React.FC = () => {
    return (
        <div className="PlayersAndTrainingPage">   
            <h2>Players & Training</h2>
            <div className="navigation-buttons">
                <Link title="Go to Adults Page" to="/players/adults" className="nav-button">
                    Adults
                </Link>
                <Link title="Go to Juniors Page" to="/players/juniors" className="nav-button">
                    Juniors
                </Link>
                <Link title="Go to Coaches Page" to="/players/coaches" className="nav-button">
                    Coaches
                </Link>
            </div>
        </div>
    );
}

export default PlayersAndTrainingPage;