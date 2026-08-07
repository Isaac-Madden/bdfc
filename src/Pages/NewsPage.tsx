import React from 'react';
import '../Styles/PageStyles/NewsPage.css';

const NewsPage: React.FC = () => {
    return (
    <div className="NewsPage">   
        <h2>News</h2>
        <p>
            Here you will find the latest updates and announcements from our club. 
            Stay tuned for exciting news, match results, player highlights, and upcoming events. 
            We are committed to keeping our community informed and engaged with all things related to our club. 
            Check back regularly for the most recent news and stories!
        </p>
        <div className="news-container">
            <h3>Latest Newsletters</h3>
            <ul>
                <li><a href="/newsletters/august-2026.pdf" target="_blank" rel="noopener noreferrer">August 2026</a></li>
            </ul>
        </div>
    </div>
    )
}
export default NewsPage;