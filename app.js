const express = require("express")

const locationsController = require("./controllers/locations.controller"); 

const personsController = require("./controllers/persons.controller"); 

const machinesController = require("./controllers/machines.controller");

const plansController = require("./controllers/plans.controller"); 

const specialEventsController = require("./controllers/special-events.controller"); 

const app = express();

app.use("/locations", locationsController);

app.use("/people", personsController);

app.use("/equipment", machinesController);

app.use("/plans", plansController);

app.use("/special-events", specialEventsController);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("*", (req, res) => {
  res.status(404).send("Sorry no page found!");
});



module.exports = app;