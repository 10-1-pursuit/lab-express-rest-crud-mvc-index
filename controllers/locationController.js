const express = require("express");
const location = express.Router();
const locationData = require("../models/locationData.js");
const personData = require("../models/personData.js");

location.get("/", (req, res) => {
  res.send(locationData);
});

location.get("/people", (req, res) => {
  // console.log('This is the data for the personData Obj:', personData);
  // console.log('This is the mainLocation for the personData Obj:', personData.map((e)=>{e.mainLocation}));

  const result = locationData.map((location) => ({ ...location, people: [] }));
  console.log(result);

  // for (let i = 0; i < locationData.length; i++) {
  //   const locationZip = locationData[i].zip;
  //   console.log("The location data's zip:", locationZip);
  // }
  for (let i = 0; i < personData.length; i++) {
    const personLocation = personData[i].mainLocation;
    console.log("The person's location:", personLocation);

    const locationIndex = result.findIndex(
      (location) => location.zip === personLocation
    );
    console.log("This should be zero:", locationIndex);

    if (locationIndex !== -1) {
      result[locationIndex].people.push(personData[i]);
    }
  }

  res.send(result);
});

module.exports = location;
