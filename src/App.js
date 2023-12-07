import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Header } from './Components/Header';
import Footer from './Components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';




function App() {
  return (
    <div>
      <Router>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/booking' element = {<Appointment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
