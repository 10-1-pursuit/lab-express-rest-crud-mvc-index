const express = require("express");
const PORT = 8888;
const app = express();
const router = express.Router();
const locationController = require('./controllers/locations.controller');
const machineController = require('./controllers/machines.controller');
const personController = require('./controllers/persons.controller');
const planController = require('./controllers/plans.controller');
const specialEventController = require('./controllers/specialevents.controller');

router.get('/locations', locationController.getAllLocations);
router.get('/machines', machineController.getAllMachines);
router.get('/persons', personController.getAllPersons);
router.get('/plans', planController.getAllPlans);
router.get('/specialEvents', specialEventController.getAllSpecialEvents);

app.use((req, res) => {
    res.status(404).send("Sorry, no page found!");
});
app.use('/', router); 

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



module.exports = app
