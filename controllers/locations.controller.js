

const locationModel = require('../models/locations.model')

function getAllLocations(req, res) {
    const locations = locationModel.getAllLocations();
    res.json(locations)
}


module.exports = {getAllLocations}