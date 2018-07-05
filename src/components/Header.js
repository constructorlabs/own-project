import React from "react";
import { Link } from 'react-router-dom'

function Header(){

    return (
        <header>
          <span>  
          <span className="title1"> NOT SO </span> 
          <span className="title2"> Random Pair Generator </span>
          </span>
        
          <ul className="headerNav">
          <li className="headerList">
              <Link to="/">Home</Link>
            </li>
            <li className="headerList">
              <Link to="/generator">Start</Link>
            </li>
            <li className="headerList">
              <Link to="/history">History</Link>
            </li>
            <li className="headerList">
              <Link to="/sample">Sample</Link>
            </li>
          </ul>
        
      </header>
    );
  

}


export default Header;