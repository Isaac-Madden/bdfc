import React from 'react';
import '../Styles/PageStyles/SponsorsPage.css';

const SponsorsPage: React.FC = () => {
  return (
    <div className="SponsorsPage">   
      <h2>Sponsorships and Donations</h2>
      <div className='SponsorsText'>
        <p>
          Our There are no paid staff at BDFC, everything we do is powered by volunteers 
          — people giving their time, energy and passion to make a difference. 
        </p>
        <p>
          Our coaches are the only paid members of the team, helping us deliver the best possible sessions for everyone involved.
        </p>
        <p>
          If Our running costs are around £50k per year and we cover these with money raised from donations, fundraising, and grants. 
          We couldn’t do what we do without the incredible support around us.
        </p>
        <div className='theSponsors'>
          <h3>A huge thank you to our funders: </h3>
            <ul>
              <li>The National Lottery Community Fund</li>
              <li>The People’s Postcode Lottery</li>
              <li>The Wharfedale Foundation</li>
              <li>Sovereign Health Care</li>
            </ul>
            <p>We are always looking for a sponsor, so if you can support our great club, 
              please get in touch using the link bradforddisabilityfc@gmail.com 
            </p>
        </div>
        <p>
          You can also make a donation via our CAF Donate account using the link <a href="https://cafdonate.cafonline.org/9155" target="_blank" rel="noopener noreferrer"> https://cafdonate.cafonline.org/9155</a> or by clicking on the Donate Button on our website.
        </p>
      </div>
    </div>
  )
}
export default SponsorsPage;