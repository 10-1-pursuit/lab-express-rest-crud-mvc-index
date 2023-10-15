const express = require("express")

const persons = express.Router()
const personArray = require("../models/person.model.js")

persons.get ("/", (request, response)=>{
    response.json(personArray)
})

module.exports = persons