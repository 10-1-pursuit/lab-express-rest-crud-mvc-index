const express =require('express')

const app = express()

const locationsController = require('./controllers/locations.controller');
app.use('/locations' , locationsController)


//Routes 

app.get('/', (req,res) =>{
    res.send('Hello, world!')
})


// EXPORT
module.exports = app;