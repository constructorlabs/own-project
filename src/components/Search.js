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
      currency: "USD",
      errors: {
        origin: "",
        destination: "",
        deraprture_date: "",
        return_date: "",
        adults: "",
        children: "",
        max_price: "",
        currency: ""
      },
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);

    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  hasThreeCharacters(string) {
    return string.length === 3;
  }

  hasTenCharacters(string) {
    return string.length === 10;
  }

  // isNumber() {
  //   let { max_price, children, adults } = this.state;
  //   let x = this.state;

  //   if (isNaN(x)) {
  //     alert("Must input numbers only");
  //     return false;
  //   }
  // }

  isNumber(input) {
    return !isNaN(input) && input.length;
  }

  // isNumber(input) {
  //   if (typeof input === "number") {
  //     return input;
  //   }
  // }

  validate() {
    const { origin, destination, currency } = this.state;

    let formValid = true;

    if (!this.hasThreeCharacters(origin)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            origin: "Please use 3 character IATA code for your origin airport"
          })
        };
      });
      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            origin: ""
          })
        };
      });
    }

    if (!this.hasThreeCharacters(destination)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            destination:
              "Please use 3 character IATA code for your destination airport"
          })
        };
      });

      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            destination: ""
          })
        };
      });
    }

    if (!this.hasThreeCharacters(currency)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            currency:
              "Please enter a valid currency using following format e.g. USD"
          })
        };
      });
      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            currency: ""
          })
        };
      });
    }

    const { departure_date, return_date } = this.state;

    if (!this.hasTenCharacters(departure_date)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            departure_date: "Please use following format for dates: 2018-08-01"
          })
        };
      });

      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            departure_date: ""
          })
        };
      });
    }

    if (!this.hasTenCharacters(return_date)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            return_date: "Please use following format for dates: 2018-08-01"
          })
        };
      });

      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            return_date: ""
          })
        };
      });
    }

    const { adults, children, max_price } = this.state;

    if (!this.isNumber(adults)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            adults: "Please provide a valid number of adult passangers"
          })
        };
      });

      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            adults: ""
          })
        };
      });
    }

    if (!this.isNumber(children)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            children: "Please provide a valid number of children"
          })
        };
      });

      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            children: ""
          })
        };
      });
    }

    if (!this.isNumber(max_price)) {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            max_price: "Please provide a valid number for maxiumum price"
          })
        };
      });

      formValid = false;
    } else {
      this.setState(function(prevState) {
        return {
          errors: Object.assign({}, prevState.errors, {
            max_price: ""
          })
        };
      });
    }

    return formValid;
  }

  getURL() {
    // Produces "&origin=${origin}&destination=${destination}&departure_date=${departure_date}..."
    const keys = [
      "origin",
      "departure_date",
      "destination",
      "return_date",
      "adults",
      "max_price",
      "currency"
    ];
    const query = keys.reduce((acc, key) => {
      return acc + `&${key}=${this.state[key]}`;
    }, "");
    // return `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=yCrg1AtzcO3WOHM31Sq1Qd3iuOsiCSbR&origin=${origin}&destination=${destination}&departure_date=${departure_date}&return_date=${return_date}&adults=${adults}&max_price=${max_price}&currency=${currency}`;
    return `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=yCrg1AtzcO3WOHM31Sq1Qd3iuOsiCSbR${query}`;
  }

  handelSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      this.props.onAPILoading();
      fetch(this.getURL())
        .then(function(response) {
          return response.ok ? response.json() : Promise.reject(response);
        })
        .then(data => {
          if (data.results) {
            this.props.receiver(data);
          } else {
            alert("no results found");
          }
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <p>Please fill in all the boxes using format provided and hit search</p>
        <form className="search" onSubmit={this.handelSubmit}>
          <div>
            <input
              type="text"
              name="origin"
              placeholder="LON"
              value={this.state.origin}
              onChange={this.handleChange}
            />
            {this.state.errors.origin ? (
              <p>{this.state.errors.origin}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="destination"
              placeholder="BOS"
              value={this.state.destination}
              onChange={this.handleChange}
            />
            {this.state.errors.destination ? (
              <p>{this.state.errors.destination}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="departure_date"
              placeholder="2018-07-05"
              value={this.state.departure_date}
              onChange={this.handleChange}
            />
            {this.state.errors.departure_date ? (
              <p>{this.state.errors.departure_date}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="return_date"
              placeholder="2018-07-10"
              value={this.state.return_date}
              onChange={this.handleChange}
            />
            {this.state.errors.return_date ? (
              <p>{this.state.errors.return_date}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="adults"
              placeholder="Number of adults"
              value={this.state.adults}
              onChange={this.handleChange}
            />
            {this.state.errors.adults ? (
              <p>{this.state.errors.adults}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="children"
              placeholder="Number of children"
              value={this.state.children}
              onChange={this.handleChange}
            />
            {this.state.errors.children ? (
              <p>{this.state.errors.children}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="max_price"
              placeholder="Max Price"
              value={this.state.max_price}
              onChange={this.handleChange}
            />
            {this.state.errors.max_price ? (
              <p>{this.state.errors.max_price}</p>
            ) : null}
          </div>
          <div>
            <input
              type="text"
              name="currency"
              placeholder="USD"
              value={this.state.currency}
              onChange={this.handleChange}
            />
            {this.state.errors.currency ? (
              <p>{this.state.errors.currency}</p>
            ) : null}
          </div>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
