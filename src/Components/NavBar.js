import React from 'react';
import './NavigationBar.css'; 
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className='navbar-title'>
        <h1>ELAD</h1>
      </div>
      <div className="navbar-logo">
        <a href="#home"><img id= 'navbar-logo' src='Logo.png'></img></a>
        </div>
      <div className='links'>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className = "link"
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
          
          >Photos</Link>
        </li>
        <li className="navbar-item">
        <Link className = "link"
                        activeClass="active"
                        to="Events"
                        spy={true}
                        smooth={true}
                        duration={500}
          
          >Events</Link>

        </li>
        <li className="navbar-item">
        <Link className = "link"
                        activeClass="active"
                        to="Members"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
          
          >Members</Link>
        </li>
        <li className="navbar-item">
        <Link className = "link"
                        activeClass="active"
                        to="Footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
          
          >Contact</Link>

        </li>
      </ul>
        </div>
    </nav>
  );
};

export default NavigationBar;
