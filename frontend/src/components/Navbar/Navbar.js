import React from 'react'
import './navbar.css'
const Navbar = () => {
    return (
        <div className>
            <nav className>
                    <a href="#" className = "nav-links home-btn">Creo Check</a>
                <ul>
                    <li className = "nav-links">
                        <a href="/createpost">Create a Post</a>
                    </li>
                    <li className = "nav-links">
                        <a href="/">About us</a>
                    </li>
                    <li className = "nav-links">
                        <a href="/contact">Contact us</a>
                    </li>
                </ul>
               
                    <a href="#" className = "nav-links signup-btn">Sign up</a>
                
            </nav>
        </div>
    )
}

export default Navbar
