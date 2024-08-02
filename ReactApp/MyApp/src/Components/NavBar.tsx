import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home';
import AboutUs from './AboutUs';


function NavBar() {
    return (
      <>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Home</Link>
        </div>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </>
    );
}

export default NavBar