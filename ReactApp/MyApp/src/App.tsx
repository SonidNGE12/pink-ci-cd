import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
      <div >
        <header>
          <h3>Empower the Artist within YOU</h3>
          <h4>List your own performances, gigs and much more!!!</h4>
          <h4>Enter your city and find the perfect venue for your show</h4>
        </header>
      </div>
    </>
  );
}

export default App
