const express = require("express");
const persons = express.Router();
personsArray = require("../models/persons.model.js");

persons.get("/", (req, res) => {
    res.json(personsArray);
})
