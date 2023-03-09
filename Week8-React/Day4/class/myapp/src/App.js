import './App.css';
import React from 'react';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import {Routes, Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/c'>Contact</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={
        <>
          <About/>
          <Contact/>
        </>
        } />
        <Route path='c' element={<Contact/>} />
      </Routes>
    </>
  )     
}

export default App;
