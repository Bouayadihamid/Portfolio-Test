import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    const toggeleNavbar = () => {
        setIsOpen(!isOpen);
    };
  return (

    <nav className="Navbar-nav">
      <header className="Navbar-header">
        <div className="logo"><Link to="/"><h1>Statify</h1></Link></div>
        <ul className="center-item">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <div className="menu-button">
          <button onClick={toggeleNavbar}>{isOpen ? <X/> : <Menu/>}</button>
        </div>
        {isOpen && (
          <ul className="sidebar">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            </ul>
        )}
      </header>
    </nav>
  );
};

export default Navbar;