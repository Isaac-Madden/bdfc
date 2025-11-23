import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'

interface NavLink {
    name: string;
    url: string;
}

const navLinks: NavLink[] = [
    { name: 'Home', url: '/' }, // incorp about section?
    { name: 'Juniors', url: '/juniors' }, // incorp training? incorp match dates?
    { name: 'Adults', url: '/adults' },  // incorp training? incorp match dates?
    { name: 'Gallery', url: '/gallery' },
    { name: 'Sponsors', url: '/sponsors' },
    { name: 'Socials', url: '/socials' },
    { name: 'Newsletter', url: '/newsletter' },
    { name: 'Policies', url: '/policies' },  // incorp safefuarding?
    { name: 'Contact', url: '/contact' }
];

const Navbar: React.FC = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <Link to={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;