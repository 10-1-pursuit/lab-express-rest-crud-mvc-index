const machineModel = require('../models/machines.model')

function getAllMachines(req, res) {
    const machines = machineModel.getAllMachines();
    res.json(machines)
}

module.exports = {getAllMachines}