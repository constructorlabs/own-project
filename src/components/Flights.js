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
              <p>Holidays</p>
              <li>Duration:{result.itineraries[0].outbound.duration} hrs</li>
              <p>
                Departs at:{
                  result.itineraries[0].outbound.flights[0].departs_at
                }
              </p>
              <p>
                Arrives at:{
                  result.itineraries[0].outbound.flights[0].arrives_at
                }
              </p>
              <p>
                Origin Airport:{
                  result.itineraries[0].outbound.flights[0].origin.airport
                }
              </p>
              <p>
                Destination Airport:{
                  result.itineraries[0].outbound.flights[0].destination.airport
                }
              </p>
              <p>
                Airline:{
                  result.itineraries[0].outbound.flights[0].operating_airline
                }
              </p>
              <p>Coming back home</p>
              <li>Duration:{result.itineraries[0].inbound.duration}</li>
              <p>
                Departs at:{result.itineraries[0].inbound.flights[0].departs_at}
              </p>
              <p>
                Arrives at:{result.itineraries[0].inbound.flights[0].arrives_at}
              </p>
              <p>
                Origin Airport:{
                  result.itineraries[0].inbound.flights[0].origin.airport
                }
              </p>
              <p>
                Destination Airport:{
                  result.itineraries[0].inbound.flights[0].destination.airport
                }
              </p>
              <p>
                Airline:{
                  result.itineraries[0].inbound.flights[0].operating_airline
                }
              </p>
              <h2>Total fare:{result.fare.total_price}</h2>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Flights;
