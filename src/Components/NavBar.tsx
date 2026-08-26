import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../Styles/Components/NavBar.css';
import type { NavLink } from '../Utils/Types.ts';

const navLinks: NavLink[] = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Players and Training', url: '/players' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Sponsorship and Donations', url: '/sponsors' },
    { name: 'Club Calendar', url: '/calendar' },
    { name: 'Safeguarding and welfare', url: '/safeguarding' },
    { name: 'News', url: '/news' },
    { name: 'Tournament', url: '/tournament' },
    { name: 'Club Documents', url: '/club-documents' }, 
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        window.scrollTo(0, 0);
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