const express = require("express");
const locations = express.Router();
const locationArr = require("../models/location.model");
const personsArr = require("../models/person.model");

locations.get("/", (req, res) => {
  res.json(locationArr);
});

locations.get("/people", (req, res) => {
  const peopleLocations = locationArr.map((location) => {
    const filteredPeople = personsArr.filter((person) => {
      return person.mainLocation === location.zip;
    });

    return {
      ...location,
      people: filteredPeople,
    };
  });

  res.json(peopleLocations);
});

module.exports = locations;
