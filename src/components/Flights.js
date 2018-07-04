import React from "react";

function Flights({ flights, currency }) {
  return (
    <div className="container">
      <h2> Your flights</h2>
      <ul>
        {flights.map((result, index) => {
          console.log(result.itineraries[0].outbound);
          console.log(result.itineraries[0].inbound);
          console.log(result.fare.total_price);
          return (
            <div key={index}>
              <h2>Holidays</h2>
              <li>Duration:{result.itineraries[0].outbound.duration} hrs</li>
              <p>
                Departs at:{
                  result.itineraries[0].outbound.flights[0].departs_at
                }
                Arrives at:{
                  result.itineraries[0].outbound.flights[0].arrives_at
                }
                Origin Airport:{
                  result.itineraries[0].outbound.flights[0].origin.airport
                }
                Destination Airport:{
                  result.itineraries[0].outbound.flights[0].destination.airport
                }
                Airline:{
                  result.itineraries[0].outbound.flights[0].operating_airline
                }
              </p>
              <h2>Coming back home</h2>
              <li>Duration:{result.itineraries[0].inbound.duration}</li>
              <p>
                Departs at:{result.itineraries[0].inbound.flights[0].departs_at}
                Arrives at:{result.itineraries[0].inbound.flights[0].arrives_at}
                Origin Airport:{
                  result.itineraries[0].inbound.flights[0].origin.airport
                }
                Destination Airport:{
                  result.itineraries[0].inbound.flights[0].destination.airport
                }
                Airline:{
                  result.itineraries[0].inbound.flights[0].operating_airline
                }
              </p>
              <h3>Total fare:{result.fare.total_price}</h3>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Flights;
