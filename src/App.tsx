import { BrowserRouter } from 'react-router-dom';
import './App.css';

// component imports
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import RouterConfig from './Utils/RouterConfig';
import Sponsors from './Components/Sponsors';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Navbar />
      <main className="main-content">
        <RouterConfig />
      </main>
      <Sponsors />
      <Footer />
    </BrowserRouter>
  )
}

export default App