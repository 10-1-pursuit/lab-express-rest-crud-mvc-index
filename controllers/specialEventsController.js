const express = require('express');
const specialEvents = express.Router();
const specialEventsData = require('../models/specialEventsData.js')

specialEvents.get('/', (req,res)=>{
    res.send(specialEventsData)
});

module.exports = specialEvents;