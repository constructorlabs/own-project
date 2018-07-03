import React from "react";
import Header from "./Header";
import Search from "./Search";
import Flights from "./Flights";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      flights: [],
      currency: ""
    };

    this.receiver = this.receiver.bind(this);
  }

  receiver(data) {
    this.setState({ flights: data.results, currency: data.currency });
  }

  render() {
    return (
      <div>
        <Header />
        <Search receiver={this.receiver} />
        <Flights flights={this.state.flights} currency={this.state.currency} />
      </div>
    );
  }
}

export default App;
