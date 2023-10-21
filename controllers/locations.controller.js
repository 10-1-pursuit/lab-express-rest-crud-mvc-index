const express = require("express");
const locations = express.Router();
const locationsArray = require("../models/location.model.js");
const people = require("../models/person.model.js");

locations.get("/locations", (req, res) => {
    res.send(locationsArray);
});

locations.get("/locations/people", (req, res) => {
    const allData = locationsArray.map((location) => {
      const peopleAtLocation = people.filter((person) => person.mainLocation === location.zip);
      return {
        street: location.street,
        city: location.city,
        state: location.state,
        zip: location.zip,
        people: peopleAtLocation,
      };
    });
    
    res.json(allData);
  });
  

module.exports = locations;
