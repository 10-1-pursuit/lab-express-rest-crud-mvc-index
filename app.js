// app.js
// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const PORT = 3006;
const locations = require("./controllers/locations.controller.js");
const machines = require("./controllers/machines.controller.js");
const persons = require("./controllers/persons.controller.js");
const plans = require("./controllers/plans.controller.js");
const specialEvents = require("./controllers/special-events.controller.js");
const app = express();

// ROUTES
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello, world!");
});

app.use("/locations", locations);
app.use("/machines", machines);
app.use("/persons", persons);
app.use("/plans", plans);
app.use("/special-events", specialEvents);

app.get("*", (request, response) => {
  response.status(404).json({ message: "page note found" });
});

// EXPORT
module.exports = app;
