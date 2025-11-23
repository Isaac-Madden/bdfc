import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'; // Make sure the path is correct

interface NavLink {
    name: string;
    url: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', url: '/' },
    { name: 'Juniors', url: '/juniors' },
    { name: 'Adults', url: '/adults' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Sponsors', url: '/sponsors' },
    { name: 'Newsletter', url: '/newsletter' },
    { name: 'Policies', url: '/policies' },
    { name: 'Contact', url: '/contact' }
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
                ☰
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