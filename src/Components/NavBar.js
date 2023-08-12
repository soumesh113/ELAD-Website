import React from 'react';
import './NavigationBar.css'; 
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default NavigationBar;
