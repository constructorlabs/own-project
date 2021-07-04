import React from 'react';
import Header from "./Header";
import Menu from "./Menu";

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div >
        <Header />
        <Menu />
        <div className="footer" />
      </div>
    )
  }
}

export default App;
