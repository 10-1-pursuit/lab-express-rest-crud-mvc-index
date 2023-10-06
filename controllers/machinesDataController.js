const express = require('express');
const router = express.Router();

const machineData = require('../models/machinesData.js');

router.get('/', (req, res) => {
    res.json(machineData);
})

module.exports = router;