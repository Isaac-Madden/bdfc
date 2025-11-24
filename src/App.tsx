import { BrowserRouter } from 'react-router-dom';
import './App.css';

// component imports
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/NavBar';
import RouterConfig from './Utils/RouterConfig';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <main className="main-content">
        <RouterConfig />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App