import React from "react";
import { format } from "date-fns";

let airlines = require("airlines-iata-codes");

function Flights({ flights, currency }) {
  return (
    <div className="container">
      <ul>
        {flights.map((result, index) => {
          console.log(result.itineraries[0].outbound);
          console.log(result.itineraries[0].inbound);
          console.log(result.fare.total_price);
          return (
            <div className="item" key={index}>
              <div className="item__wrap">
                <iframe
                  className="item__photo"
                  src="https://www.youtube.com/embed/PAtu5ja1u70?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
                {/* <img //optional use of picture instead of a video iframe
                  className="item__photo"
                  src="./static/holidays.jpeg"
                  alt="holidays"
                /> */}
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
                <iframe
                  className="item__photo"
                  src="https://www.youtube.com/embed/KbN7eGL61sU?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />

                {/* <img //optional use of picture instead of a video iframe
                  className="item__photo"
                  src="./static/coming-back-home.jpeg"
                  alt="coming-home"
                /> */}
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
