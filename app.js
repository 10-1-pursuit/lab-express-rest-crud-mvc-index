const express = require("express");
const locationsController = require("./controllers/locations.controller.js")
const machinesController = require("./controllers/machines.controller.js")
const personsController = require("./controllers/persons.controller.js")
const plansController = require("./controllers/plans.controller.js")
const special_eventsController = require("./controllers/special-events.controller.js")
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.use("/locations", locationsController)

app.use("/people", personsController)

app.use("/equipment", machinesController)

app.use("/plans", plansController)

app.use("/special-events", special_eventsController)

app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry, no page found!" });
});

module.exports = app;