import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      origin: "BOS",
      destination: "LON",
      departure_date: "2018-08-01",
      return_date: "2018-08-10",
      adults: "1",
      children: "0",
      max_price: "1000",
      currency: "USD"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
    // this.sendFlightData = this.sendFlightData.bind(this);
  }

  // sendFlightData(flightsData) {
  //   this.props.receiver(flightsData);
  // }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handelSubmit(event) {
    event.preventDefault();
    fetch(
      `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=yCrg1AtzcO3WOHM31Sq1Qd3iuOsiCSbR&origin=${
        this.state.origin
      }&destination=${this.state.destination}&departure_date=${
        this.state.departure_date
      }&return_date=${this.state.return_date}&adults=${
        this.state.adults
      }&max_price=${this.state.max_price}&currency=${this.state.currency}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(data => {
        this.props.receiver(data);
        // this.setState({
        //   flightsData: data
        // });
        // this.sendFlightData(data);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <p>Please fill in all the boxes using format provided and hit search</p>
        <form className="search" onSubmit={this.handelSubmit}>
          <input
            type="text"
            name="origin"
            placeholder="LON"
            value={this.state.origin}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="BOS"
            value={this.state.destination}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="departure_date"
            placeholder="2018-07-05"
            value={this.state.departure_date}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="return_date"
            placeholder="2018-07-10"
            value={this.state.return_date}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="adults"
            placeholder="Number of adults"
            value={this.state.adults}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="children"
            placeholder="Number of children"
            value={this.state.children}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="max_price"
            placeholder="Max Price"
            value={this.state.max_price}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="currency"
            placeholder="USD"
            value={this.state.currency}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
