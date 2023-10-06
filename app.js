//DEP:
const express = require('express')
const app = express();

const locationsController = require('./controllers/locationsController.js')

//Routes:
app.use('/locations', locationsController)

app.get("*", ( req, res) => {                 //wildcard route
    res.status(404).json({error: 'me no work'});
});


module.exports = app;