const specialEventModel = require('../models/specialEvents.model')

function getAllSpecialEvents(req, res) {
    const specialEvent = specialEventModel.getAllSpecialEvents();
    res.json(specialEvent)
}

module.exports = {getAllSpecialEvents}