import React from "react";
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super();
    
  }

 

  render() {
    return (
      <div >
      <Link to="/generator">
         <img src="./static/images/start.gif" className="homeImg" />
         </Link>
      </div>
    );
  }
}

export default Home;
