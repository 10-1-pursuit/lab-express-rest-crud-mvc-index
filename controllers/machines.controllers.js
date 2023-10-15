const express = require("express")

const machines = express.Router()
const machineArray = require("../models/machine.model.js")

machines.get("/", (request,response)=>{
    response.json(machineArray)
})

module.exports = machines