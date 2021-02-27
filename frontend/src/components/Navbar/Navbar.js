import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleNavCollapse = () => setShowLinks(!showLinks)
  
  useEffect(()=> {
      if(window.innerWidth > '768px'){
          setShowLinks(false)
      }
  },[])
  return ( 
        
            <nav>
                <div className ="toggle">
                    <button onClick ={handleNavCollapse}  
                            className =" navbar-btn nav-items toggle custom-toggler "
                            type ="button" 
                            data-toggle ="collapse" data-target =".multi-collapse" 
                            aria-expanded ={showLinks? true : false}aria-controls ="item-collapse-1 item-collapse-2 item-collapse-3">
                        <FaBars />
                    </button>
                </div>

                <div  className ={`multi-collapse ${showLinks ? `collapse`: ''} crep-check-btn navbar-collapse nav-items `} id ="item-collapse-1">
                    <a href="/"  className ="nav-items">Crep Check</a>
                </div>
                    
                <div className ={`nav-links multi-collapse ${showLinks ? `collapse`: ''} navbar-collapse nav-items`} id ="item-collapse-2">
                        <a href="/createpost" className ="nav-items">Create a Post</a>    
                </div>
                <div className ={`nav-links multi-collapse ${showLinks ? `collapse`: ''} navbar-collapse nav-items`} id ="item-collapse-3">
                    <a href="/about" className ="nav-items">About us</a>
                </div>
                <div className ={`nav-links multi-collapse ${showLinks ? `collapse`: ''} navbar-collapse nav-items`} id ="item-collapse-4">
                    <a href="/" className ="nav-items">Contact us</a>
                </div>
                <div className ={`multi-collapse ${showLinks ? `collapse`: ''} navbar-collapse nav-items signup-btn`} id ="item-collapse-5">
                    <a href ="/signup" className ="nav-items">Sign up</a>
                </div>
            </nav>
  );
};

export default Navbar;

