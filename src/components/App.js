import React from "react";
import Header from "./Header";
import Search from "./Search";
import Flights from "./Flights";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Search />
        <Flights />
      </div>
    );
  }
}

export default App;
