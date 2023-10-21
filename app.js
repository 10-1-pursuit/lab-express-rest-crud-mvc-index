const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Hello, world!");
});

// ROUTES
const locationsController = require("./controllers/locations.controller.js");
const machinesController = require('./controllers/machines.controller.js');
const personsController = require('./controllers/persons.controller.js');
const plansController = require('./controllers/plans.controller.js');
const specialEventsController = require('./controllers/special-events.controller.js');

app.use(locationsController);
app.use(machinesController);
app.use(personsController);
app.use(plansController);
app.use(specialEventsController);

// 404 route
app.use((req, res) => {
    res.status(404).send("Sorry, no page found!");
});

// // 404 Page not found
// app.get("*", (req, res) => {
//     res.status(404).json({ error: "Page not found" });
//   });

// app.all("*", (req, res) => {
//     if (req.url === "/") {
//         res.send("Hello, world!");
//     } else {
//         res.status(404).send("Not Found");
//     }
// });


module.exports = app;