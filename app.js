const express =require('express')

const app = express()

const locationsController = require('./controllers/locations.controller');
app.use('/locations' , locationsController)

const machineController = require('./controllers/machines.controller');
app.use('/machines', machineController)



//Routes 

app.get('/', (req,res) =>{
    res.send('Hello, world!')
})


// EXPORT
module.exports = app;