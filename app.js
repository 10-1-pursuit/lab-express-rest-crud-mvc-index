const express = require('express');
const app = express();

const locationController = require('./controllers/locationController');
const equipmentController = require('./controllers/machinesDataController');
const peopleController = require('./controllers/personsDataController');
const plansController = require('./controllers/plansDataController');
const specialEventsDataController = require('./controllers/specialEventsDataController');

app.get('/', (req, res) => {
    res.send('Hello world!');
})
console.log('Mounting location controller');
app.use('/locations', locationController);
app.use('/equipment', equipmentController);
app.use('/people', peopleController);
app.use('/plans', plansController);
app.use('/special-events', specialEventsDataController);

app.use('*', (req, res) => {
    res.status(404).json({ error: 'Oh naw!' });
  })

module.exports = app;