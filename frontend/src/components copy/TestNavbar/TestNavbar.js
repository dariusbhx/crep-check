import React, { useState,  } from 'react';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import './TestNavbar.css'
const TestNavbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleNavCollapse = () => setShowLinks(!showLinks)

 
  return ( 
         <nav >
            <div className="nav-header">
                <button className ="custom-toggler navbar-toggler display-none" type ="button" data-toggle ="collapse" data-target ="#navbar" aria-controls ="navbar" aria-expanded = {!showLinks ? true : false } aria-label ="toggle navigation" onClick ={handleNavCollapse}>
                    <FaBars />
                </button>
            </div>
            <div className ={`linksontainer ${showLinks ? 'collapse': ''} navbar-collapse`} id ="navbar" >
                <ul className ="links" >
                    <li className = "nav-links">
                        <a href="/" className = "nav-links home-btn">Crep Check</a>
                    </li>
                    <li className = "nav-links middle-links">
                        <a href="/createpost">Create a Post</a>
                    </li>
                    <li className = "nav-links middle-links">
                        <a href="/">About us</a>
                    </li>
                    <li className = "nav-links middle-links">
                        <a href="/contact">Contact us</a>
                    </li>
                    <li className = "nav-links flex-end">
                        <a href="/signup">Sign up</a>
                    </li>
                </ul>                
            </div>
         </nav>
  );
};

export default TestNavbar;

