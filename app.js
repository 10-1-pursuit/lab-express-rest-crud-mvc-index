const express = require("express");
const app = express()

const locationController = require("./controllers/locationController");
const machineController = require("./controllers/machineController");
const personController = require("./controllers/personController");
const planController = require("./controllers/planController");
const specialEventsController = require("./controllers/specialEventsController");

app.use("/location", locationController);
app.use("/machine", machineController);
app.use("/person", personController);
app.use("/plan", planController);
app.use("/specialEvents", specialEventsController);

app.get("", (req, res) => {
    res.send("Hello, World!");
});

app.get("*", (req, res) => {
    res.status(404).json({ error: "Sorry no page found" });
});



module.exports = app;