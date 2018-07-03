const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use("/static", express.static("static"));
app.set("view engine", "hbs");

let flights = {};

app.post("/flights", function(req, res) {
  flights = req.body;
});

app.get("/flights", function(req, res) {
  res.send(json);
});

app.get("/", function(req, res) {
  res.render("index");
});

app.listen(8080, function() {
  console.log("Listening on port 8080");
});
