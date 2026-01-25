import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../Styles/Components/NavBar.css';
import type { NavLink } from '../Utils/Types.ts';

const navLinks: NavLink[] = [
    { name: 'Home', url: '/' },
    { name: 'Juniors', url: '/juniors' },
    { name: 'Adults', url: '/adults' },
    { name: 'Sponsorship and Donations', url: '/sponsors' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Newsletter', url: '/newsletter' },
    { name: 'Safeguarding and welfare', url: '/safeguarding' },
    { name: 'Policies', url: '/policies' },
    { name: 'News', url: '/news' },
    { name: 'Tournaments', url: '/tournaments' },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="main-nav">
            <button className="hamburger-icon" onClick={toggleMenu} aria-expanded={isOpen} aria-label="Toggle navigation menu">
                <FaBars aria-hidden="true" />
                <span className="icon-text">MENU</span>
            </button>

            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link to={link.url} onClick={closeMenu}>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;