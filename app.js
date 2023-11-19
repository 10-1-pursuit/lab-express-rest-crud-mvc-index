const express =require('express')

const app = express()

const locationsController = require('./controllers/locations.controller');
app.use('/locations' , locationsController)

const machineController = require('./controllers/machines.controller');
app.use('/machines', machineController)

const personController = require('./controllers/persons.controller');
app.use('/persons', personController)

const plansController = require('./controllers/plans.controller');
app.use('/plans', plansController) 

const specialEventsController = require('./controllers/specialEvent.controller');
app.use('/specialEvents', specialEventsController) 



//Routes 

app.get('/', (req,res) =>{
    res.send('Hello, world!')
})


 // 404 PAGE
 app.get("*", (req, res) => {
    res.status(404).json({ error: " Sorry, no page found" });
  });
  

// EXPORT
module.exports = app;