import React from 'react';
import donateIcon from '../assets/donate-icon-temp-2.png'
import bdfcLogo from '../assets/bdfc_club_logo.png'
import { Link } from 'react-router-dom';
import '../Styles/Components/Header.css';

const donationLink = "https://cafdonate.cafonline.org/9155?fbclid=Iwb21leAOHB9djbGNrA4cH0WV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAhjYWxsc2l0ZQIyNQABHs-qwSeLD29W4dYRI0y8hy0evtFx_dyzBibBwJZzSZq2o-RPPrurziTyZsy9_aem__Fxw55ie619e9Vf87f_I_A#!/DonationDetails"

const Header: React.FC = () => {

  return (
    <div className='Header'>
      <Link to="/" className="homeLink" aria-label="Go to Bradford Disability Football Club homepage">
        <img src={bdfcLogo} alt="Bradford Disability Club Badge" className="logoIcon"/>
      </Link>
      <div className='headerText'>
        <h1>Bradford Disability Football Club</h1>
        <p>Registered Charity: 1158017</p>
      </div>
      <a
        className="HeaderDonate"
        href={donationLink}
        target="_blank"
        aria-label="Donate to Bradford Disability Football Club"
        >
        <img src={donateIcon} alt="Donate to Bradford Disability" className="donateIcon"/>
      </a>
  </div>
  )
}

export default Header