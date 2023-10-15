const express = require("express")

const Plans = express.Router()
const plansArray = require("../models/plan.model.js")

Plans.get("/", (request, response)=>{
    response.json(plansArray)
})



module.exports = Plans