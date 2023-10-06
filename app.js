//DEP:
const express = require('express');
const app = express();

const locationsController = require('./controllers/locations.controller.js');
const machinesController = require('./controllers/machines.controller.js');
const eventsController = require('./controllers/special-events.controller.js');
const personsController = require('./controllers/persons.controller.js')
const plansController = require('./controllers/plans.controller.js')

//Routes:
app.use('/locations', locationsController);
app.use('/machines', machinesController);
app.use('/special-events', eventsController);
app.use('/persons', personsController); 
app.use('/plans', plansController)

app.get('/', (req, res) => {
    res.status(200).send("Hello, world!")
})


app.get("*", ( req, res) => {                 //wildcard route
    res.status(404).json({error: 'me no work'});
});


module.exports = app;