const express = require("express");
const locations = express.Router();
const locationArr = require("../models/locationModel");
const personsArr = require("../models/personsModel");

locations.get("/", (req, res) => {
  res.json(locationArr);
});

locations.get("/people", (req, res) => {
  const peopleLocations = locationArr.map((location) => {
   
    const filteredPeople = personsArr.filter((person) => {
     person.mainLocation === location.zip;
    });
    console.log(filteredPeople)

    return  {
        ...location,
        people: filteredPeople
    };
   
  });
 
  res.json(peopleLocations)
});

module.exports = locations;
