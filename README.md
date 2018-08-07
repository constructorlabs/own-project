# My own project - Low fare flight search

- Using external API [https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=yCrg1AtzcO3WOHM31Sq1Qd3iuOsiCSbR&origin=BOS&destination=LON&departure_date=2018-08-01&return_date=2018-08-10&adults=1&max_price=1000&currency=USD] created a simple flight finder app.

- Used external API with 8 query parameters: origin, destination, departure_date, return_date, adults, children, max_price and currency.
- It was intended to create a flexible flight finder that can be used to answer questions such as "Where can I go within given travel budget?".
- Used grid to get the basic layout of search and flight details elements.
- Used validate function to check user's input in the form
- Application has been created using React.js, node.js and express.js.
- Application has a basic responsive design.

# Use

- Fill in all input fields with format provided and hit search

# Strech goals - possible extensions

- Add hotel top picks for a given destination using another fetch.
- Add a database to server that will allow IATA codes (3 letter airport names) to be transformed into full city names (or a similar functionality).
- Embed a video inside flight info element(currently animated gif).
- Enable users to buy tickets - redirect them to the correct address.
- Add social media buttons
