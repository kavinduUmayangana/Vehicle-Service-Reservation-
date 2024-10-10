import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import React from 'react';
import { Element } from 'react-scroll';
const App = () => {
  return (
    <Element className="">
      <section>
        <Navbar/>
        <Element name="Home">
          <Home />
        </Element>
        <Element name="About" broder='20px'>
          <About />
        </Element>
        <Element name="Contact">
          <Contact />
        </Element>
        
       
        
      </section>
    </Element>
  );
};


export default App;


