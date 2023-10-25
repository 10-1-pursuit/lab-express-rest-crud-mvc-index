const express = require("express");
const app= express();

const locationsControllers = require("./controllers/locations.controllers");
const machinesControllers = require("./controllers/machines.controllers");
const personsControllers = require("./controllers/persons.controllers");
const plansControllers = require("./controllers/plans.controllers");
const specialEventsControllers = require("./controllers/Special_Events.controllers");

app.get("/", (request, response) => {
  response.send("Hello, World");
});

app.use("/locations", locationsControllers);
app.use("/machines", machinesControllers);
app.use("/persons", personsControllers);
app.use("/plans", plansControllers);
app.use("/special_Events", specialEventsControllers);

app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});

module.exports = app;
