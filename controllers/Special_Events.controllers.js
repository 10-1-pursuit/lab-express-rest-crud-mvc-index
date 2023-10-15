const express = require("express")

const Special_Events = express.Router()
const specialEventArray = require("../models/special-event.model.js")

Special_Events.get("/",(request, response)=>{
    response.json(specialEventArray)
})



module.exports = Special_Events