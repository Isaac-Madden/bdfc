import bcfcNewLogo from '../assets/bcfc-temp-logo.png'
import '../Styles/Header.css'
import donateIcon from '../assets/donate-icon-temp-2.png'

const donationLink = "https://cafdonate.cafonline.org/9155?fbclid=Iwb21leAOHB9djbGNrA4cH0WV4dG4DYWVtAjExAHNydGMGYXBwX2lkDDM1MDY4NTUzMTcyOAhjYWxsc2l0ZQIyNQABHs-qwSeLD29W4dYRI0y8hy0evtFx_dyzBibBwJZzSZq2o-RPPrurziTyZsy9_aem__Fxw55ie619e9Vf87f_I_A#!/DonationDetails"

const Header = () => {

  return (
    <div className='Header'>
      <img src={bcfcNewLogo} alt="Bradford Disability Club Badge" className="logoIcon"/>
      <h1>Bradford Disability Football Club</h1>

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