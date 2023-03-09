import React from 'react';
import './Header.scss';
import logo from '../images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className={isOpen ? "nav open" : "nav"}>
        <Link>About</Link>
        <Link>Products</Link>
        <Link>FAQ</Link>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </div>
    </header>
  );
}


export default Header;