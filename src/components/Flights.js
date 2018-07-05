import React from "react";
import { format } from "date-fns";

let airlines = require("airlines-iata-codes");

function Flights({ flights, currency }) {
  return (
    <div className="container">
      <ul>
        {flights.map((result, index) => {
          // console.log(result.itineraries[0].outbound);
          // console.log(result.itineraries[0].inbound);
          // console.log(result.fare.total_price);
          return (
            <div className="item" key={index}>
              <div className="item__wrap">
                <img
                  className="item__photo"
                  src="https://media1.tenor.com/images/44927216f95e80df438af6dcae6fc4c2/tenor.gif?itemid=4252193"
                  alt="holidays"
                />
                <div className="item__content">
                  <h2 className="list__bold">🛫 Holidays</h2>

                  <li className="list">
                    <p className="list__bold">Departs at: </p>
                    {format(
                      result.itineraries[0].outbound.flights[0].departs_at,
                      "MM/DD/YYYY hh mm"
                    )}
                    <p className="list__bold">Arrives at: </p>
                    {format(
                      result.itineraries[0].outbound.flights[0].arrives_at,
                      "MM/DD/YYYY hh mm"
                    )}
                  </li>
                  <li className="list">
                    <p className="list__bold">Origin Airport: </p>
                    {
                      result.itineraries[0].outbound.flights[0].origin.airport
                    }{" "}
                    <p className="list__bold">Destination Airport: </p>
                    {
                      result.itineraries[0].outbound.flights[0].destination
                        .airport
                    }
                  </li>
                  <li className="list">
                    <p className="list__bold">Airline: </p>
                    {airlines.getAirlineName(
                      result.itineraries[0].outbound.flights[0]
                        .operating_airline
                    )}
                  </li>
                  <li className="list">
                    <p className="list__bold">Duration: </p>
                    {result.itineraries[0].outbound.duration} hrs
                  </li>
                  <button className="search__submitbtn">Book now!</button>
                </div>
              </div>

              <div className="item__wrap">
                <img
                  className="item__photo"
                  src="https://media1.tenor.com/images/6f562438967451a19f398069fd8aac29/tenor.gif?itemid=5800644"
                  alt="coming-home"
                />
                <div className="item__content">
                  <h2 className="list__bold">🛬 Coming back home</h2>
                  <li className="list">
                    <p className="list__bold">Departs at: </p>
                    {format(
                      result.itineraries[0].inbound.flights[0].departs_at,
                      "MM/DD/YYYY hh mm"
                    )}
                    <p className="list__bold">Arrives at: </p>{" "}
                    {format(
                      result.itineraries[0].inbound.flights[0].arrives_at,
                      "MM/DD/YYYY hh mm"
                    )}
                  </li>
                  <li className="list">
                    <p className="list__bold">Origin Airport: </p>
                    {
                      result.itineraries[0].inbound.flights[0].origin.airport
                    }{" "}
                    <p className="list__bold">Destination Airport: </p>
                    {
                      result.itineraries[0].inbound.flights[0].destination
                        .airport
                    }
                  </li>
                  <li className="list">
                    <p className="list__bold">Airline: </p>
                    {airlines.getAirlineName(
                      result.itineraries[0].inbound.flights[0].operating_airline
                    )}
                  </li>
                  <li className="list">
                    <p className="list__bold">Duration: </p>
                    {result.itineraries[0].inbound.duration} hrs
                  </li>
                  <h3>
                    <p className="list__bold">Total fare:</p> {currency}{" "}
                    {result.fare.total_price}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Flights;
