const express = require("express");
const locations = express.Router();
const locationsArr = require("../models/location.model");
const personsArr = require("../models/person.model");

locations.get("/", (req,res) => {
    res.json(locationsArr);
})

locations.get("/people", (req,res) => {
    const organizedData = [];
    for (const location of locationsArr) {
        const locationWithPeople = {...location, people: []};
        const peopleAtLocation = personsArr.filter((p) => p.mainLocation === location.zip);
        locationWithPeople.people = peopleAtLocation;
        organizedData.push(locationWithPeople);
    }
    res.json(organizedData)
})

module.exports = locations;