const express = require("express");
const app = express();

const locationController= require("./controllers/locations.controllers")
const machineController=require("./controllers/machines.contoller")
const personController=require('./controllers/persons.controller')
const planController=require("./controllers/plans.controller")
const specialEventController=require("./controllers/special-events.controller")


app.use('/', locationController);

app.use('/', machineController);


app.use('/', personController);

app.use('/', planController);

app.use('/', specialEventController);

app.get('*', (req, res) => {
    res.status(404).json({ error: 'DOES NOT EXIST' });
  });






















module.exports = app;