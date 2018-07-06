import React from 'react';
import NumbersOnly from './NumbersOnly';

class App extends React.Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <NumbersOnly />
      </div>
    )
  }
}

export default App;
