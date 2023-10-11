const express = require('express');
const app = express();

const locationsController = require("./controllers/locationsController");
const machinesController = require("./controllers/machinesController");
const personsController = require("./controllers/personsController");
const plansController = require("./controllers/plansController");
const specialEventController = require("./controllers/specialEventController");

app.use("/locations", locationsController);
app.use("/machines", machinesController);
app.use("/persons", personsController);
app.use("/plans", plansController);
app.use("/specialEvent", specialEventController);

app.get('*', (req, res) => {
    res.status(404).json({ error: 'Error, try again' });
  });

  module.exports = app


