const express = require("express");
const app = express();
const locationController = require('./models/location.model');
const plans = require("./models/plan.model");
const persons = require("./models/person.model");
const specialEvents = require("./models/special-event.model");
const machines = require("./models/machine.model");

app.use(express.json());

app.use('/', locationController);
app.use('/', persons);
app.use('/', machines);
app.use('/', plans);
app.use('/', specialEvents);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});


app.all("*", (req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});

module.exports = app;
