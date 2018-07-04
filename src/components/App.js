import React from "react";
import Header from "./Header";
import Search from "./Search";
import Flights from "./Flights";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      flights: [],
      currency: "",
      loading: false
    };

    this.receiver = this.receiver.bind(this);
    this.onAPILoading = this.onAPILoading.bind(this);
  }

  receiver(data) {
    this.setState({
      loading: false,
      flights: data.results,
      currency: data.currency
    });
  }

  onAPILoading() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Search receiver={this.receiver} onAPILoading={this.onAPILoading} />
        <Flights flights={this.state.flights} currency={this.state.currency} />
        {this.state.loading ? <p className="modal">loading</p> : null}
      </div>
    );
  }
}

export default App;
