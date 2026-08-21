import React from 'react';
import { useAzureBlobs } from '../Hooks/useAzureBlobs';
import '../Styles/PageStyles/NewsPage.css';

const NewsPage: React.FC = () => {
  const { documents, loading, hasError } = useAzureBlobs('club-newsletters');

  return (
    <div className="NewsPage">
      <header className="newspage-header">
        <h2>All the latest news from our club!</h2>
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
        
            <h3>Latest Newsletters</h3>
            {loading && <div className="documents-loading">Loading newsletters...</div>}
            {hasError && !loading && <div className="documents-error">Unable to load newsletters.</div>}

            {!loading && !hasError && (
                <ul className="newsletter-list">
                    {documents.length > 0 ? (
                        documents.map((document, index) => {
                        const isNew = index === 0;

                        // Handles name formatting from filename to something user friendly
                        const formattedMonth = document.fileName
                            .split('.')[0]
                            .replace(/-/g, ' ')
                            .replace(/\b\w/g, char => char.toUpperCase());

                        return (
                            <li key={document.url}>
                                <a 
                                    href={document.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="newsletter-card"
                                >
                                    <div className="newsletter-info">
                                    <span>{formattedMonth}</span>
                                    {isNew && <span className="new-tag">New</span>}
                                    </div>
                                    <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </a>
                            </li>
                        );
                    })
                    ) : (
                        <p>No newsletters available - please check back later.</p>
                    )}
                </ul>
            )}
        </section>
      </div>
    </div>
  );
};

export default NewsPage;