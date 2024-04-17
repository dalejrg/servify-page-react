import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import ContactInfo from './components/ContactInfo';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <ContactInfo />
      <About />
      <Services />
      <Footer />
    </div>
  );
}



export default App;
