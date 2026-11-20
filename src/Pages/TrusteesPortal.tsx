import React, { useState } from 'react';
import '../Styles/PageStyles/TrusteesPortal.css';

const TrusteesPortal: React.FC = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [passcode, setPasscode] = useState('');
    const [error, setError] = useState('');
    const PORTAL_PASSCODE = import.meta.env.VITE_TRUSTEES_PASSCODE;

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passcode === PORTAL_PASSCODE) {
            setIsAuthenticated(true);
            setError('');
        } 
        else setError('Incorrect - please try again');
    };

    if (!isAuthenticated) {
        return (
            <div className="TrusteesPortal">
                <h2>Trustees Portal</h2>
                <p>Restricted access for Bradford Disability FC Trustees.</p>
                <form onSubmit={handleLogin} className="PortalLoginForm">
                    <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter trustee passcode"
                    aria-label="Trustee passcode"
                    required
                    />
                    <button type="submit">Access Portal</button>
                </form>
                {error && <p className="PortalError">{error}</p>}
            </div>
        )
    }

    if (isAuthenticated) {
        return (
            <div className="TrusteesPortal">
                <div className="PortalContent">
                    <h2>Welcome to the Trustees Portal</h2>
                    <p>Here trustees can manage and view club information.</p>
                </div>
            </div>
        )
    }
}

export default TrusteesPortal;