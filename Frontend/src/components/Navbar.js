import React from 'react';
import Lanoslogo from '../assets/Lanos LOGO.png';
import AdminLogin from '../components/AdminLogin.js'

const Navbar = () => {
  return (
    <div className='navbar'>
            <img src= {Lanoslogo} className='logo'/>
            <div className='rightPt'>
                <a>Home</a>
                <a>Courses</a>
                <a>About</a>
                <div className='navBtn'>
                <AdminLogin/>
                    <button className='loginBtn'>Login</button>
                 
                    <button className='joinForFreeBtn'>Join for free</button>
                    
                </div>
            </div>
        </div>
  )
}

export default Navbar