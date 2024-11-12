import '../src/styles/App.css';
import Navbar from './components/Navbar.js';
import Herosection from './components/Herosection.js';
import CourseCard from './components/CourseCard.js';
import PercentageSec from './components/percentageSec.js';
import Growsection from './components/Growsection.js';
import ContactUs from './components/ContactUs.js';
import Footer from './components/Footer.js';
import AdminLogin from './components/AdminLogin.js';
import StudentAdminPanel from '../src/components/StudentAdminPanel.js';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import necessary components from react-router-dom
import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import StudentList from './components/Dashboard/StudentList';

import Java from '../src/assets/java-development.jpg';
import Mern from '../src/assets/MERN-stack-development.jpg';
import Python from '../src/assets/Python-development.jpg';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    // Sync login state when token changes
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  // Define styles for the app container and the logout button
  const appContainerStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const logoutButtonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#f44336', // red
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    marginBottom: '20px',
  };

  return (
    <div className="App">
      <Router basename="/admin"> {/* Set the base path for routing */}
        <div style={appContainerStyle}>
          {isLoggedIn ? (
            <>
              <button
                onClick={handleLogout}
                style={logoutButtonStyle}
                aria-label="Logout"
              >
                Logout
              </button>
              <StudentList />
            </>
          ) : (
            <Routes>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login by default */}
            </Routes>
          )}
        </div>
      </Router>
      <Navbar />
      <Herosection />
      <div className="course-container">
        <CourseCard
          image={Java}
          title="Full Stack Java Development 2024"
          instructor="Mr. Vinod Ahirwar"
          price="₹5500"
          discount="40% off"
          rating={4}
        />
        <CourseCard
          image={Mern}
          title="Full Stack Mern Development 2024"
          instructor="Mr. Yogesh Tiwari"
          price="₹3000"
          discount="40% off"
          rating={4}
        />
        <CourseCard
          image={Python}
          title="Full Stack Python Development 2024"
          instructor="Ms. Lilawati Shekhawat"
          price="₹6000"
          discount="40% off"
          rating={4}
        />
      </div>
      <PercentageSec />
      <Growsection />
      <ContactUs />
      <Footer />
      <StudentAdminPanel />
    </div>
  );
};

export default App;
