import React from "react";
import { Link } from 'react-router-dom'

function Header(){

    return (
        <header>
          <span>  
          <span className="title1"> NOT SO </span> 
          <span className="title2"> Random Pair Generator </span>
          </span>
        
          <ul className="header-nav">
          <li className="header-nav__list">
              <Link to="/">Home</Link>
            </li>
            <li className="header-nav__list">
              <Link to="/generator">Generator</Link>
            </li>
            <li className="header-nav__list">
              <Link to="/history">History</Link>
            </li>
            <li className="header-nav__list">
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        
      </header>
    );
  

}


export default Header;