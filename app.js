//DEP:
const express = require('express');
const app = express();

const locationsController = require('./controllers/locationsController.js');
const machinesController = require('./controllers/machinesController.js');
const eventsController = require('./controllers/eventsController.js');
const personsController = require('./controllers/personsController.js')
const plansController = require('./controllers/planscontroller.js')

//Routes:
app.use('/locations', locationsController);
app.use('/machines', machinesController);
app.use('/events', eventsController);
app.use('/persons', personsController); 
app.use('/plans', plansController)

app.get("*", ( req, res) => {                 //wildcard route
    res.status(404).json({error: 'me no work'});
});


module.exports = app;