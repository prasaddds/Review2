import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';
import AllocatedWork from './App'; // Import AllocatedWork component from App.js
import './NavigationBar.css'; // Import the CSS file for styling

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        {/* Navigation bar */}
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            {isLoggedIn && (
              <li>
                <Link to="/allocated-work" className="nav-link">Allocated Work</Link>
              </li>
            )}
            {isLoggedIn ? (
              <li>
                <Link to="/" onClick={handleLogout} className="nav-link">Logout</Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li>
                  <Link to="/signup" className="nav-link">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Route components */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allocated-work" element={<AllocatedWork />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavigationBar;
