import bcfcNewLogo from '../assets/bcfc-temp-logo.svg'
import '../Styles/Header.css'
import donateIcon from '../assets/donate.svg'

const Header = () => {

  return (
    <div className='Header'>
      <img src={bcfcNewLogo} alt="Bradford Disability Club Badge" className="HeaderLogo"/>
      <h1>Bradford Disability Football Club</h1>

      <a 
        className="HeaderDonate"
        href="https://www.bradforddfc.co.uk/"
        target="_blank"
        aria-label="Donate to Bradford Disability Football Club"
        >
        <img src={donateIcon} alt="Donate to Bradford Disability"/>
      </a>
    </div>
  )
}

export default Header