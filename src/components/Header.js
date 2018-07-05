import React from "react";
// import logo from "/static/logo.png";

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className="header">
        <img className="logo" src="./static/logo.png" />
        <h1 className="title">
          <i>high</i>
          <i>fligher</i>
        </h1>
      </header>
    );
  }
}

export default Header;
