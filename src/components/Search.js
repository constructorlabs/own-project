import React from "react";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      type: "",
      origin: "",
      destination: "",
      departure_date: "",
      return_date: "",
      adults: "",
      children: "",
      max_price: "",
      currency: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handelSubmit(event) {
    event.preventDefault();
    if (this.state.type.length > 0) {
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
          return response.json().then(json => {
            fetch("/flights", {
              method: "post",
              body: JSON.stringify(json),
              headers: {
                "Content-Type": "application/json"
              }
            });
          });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <p>Please fill in all the input areas and hit search</p>
        <form className="search" onSubmit={this.handelSubmit}>
          <input
            type="text"
            name="origin"
            placeholder="LON"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="destination"
            placeholder="BOS"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="departure_date"
            placeholder="2018-07-05"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="return_date"
            placeholder="2018-07-10"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="adults"
            placeholder="Number of adults"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="children"
            placeholder="Number of children"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="max_price"
            placeholder="Max Price"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="currency"
            placeholder="USD"
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
