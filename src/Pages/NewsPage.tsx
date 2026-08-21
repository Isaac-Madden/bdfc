import React from 'react';
import '../Styles/PageStyles/NewsPage.css';

const NewsPage: React.FC = () => {
    const newsletters = [
        { month: 'August 2026', link: '/newsletters/newsletter-august-2026.pdf', isNew: true },
        { month: 'July 2026', link: '/newsletters/newsletter-july-2026.pdf' },
        { month: 'June 2026', link: '/newsletters/newsletter-june-2026.pdf' },
        { month: 'May 2026', link: '/newsletters/newsletter-may-2026.pdf' },
    ];

    return (
        <div className="NewsPage">
            <header className="newspage-header">
                <h2>All the latest news from our club!</h2>
                <div className="header-divider" />
            </header>

            <div className="newspage-content">
                <section className="news-text-container">
                    <h3>Welcome & Updates</h3>
                    <p>
                        We are committed to keeping our community informed and engaged with all things related to our club.
                    </p>
                    <p>
                        Stay tuned for exciting news, match results, player highlights, and upcoming events.
                    </p>
                    <p>
                        Check back regularly for the most recent news and stories!
                    </p>
                </section>

                <section className="newsletters-container">
                    <div className="newsletter-header">
                        <h3>Latest Newsletters</h3>
                        <span className="archive-badge">PDF Archive</span>
                    </div>

                    <ul className="newsletter-list">
                        {newsletters.map((item, index) => (
                            <li key={index}>
                                <a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="newsletter-card"
                                >
                                    <div className="newsletter-info">
                                        <svg className="pdf-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        <span>{item.month}</span>
                                        {item.isNew && <span className="new-tag">New</span>}
                                    </div>
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default NewsPage;