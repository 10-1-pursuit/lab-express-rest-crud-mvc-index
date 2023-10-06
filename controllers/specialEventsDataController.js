const express = require('express');
const router = express.Router();

const specialEventsData = require('../models/plansData.js');

router.get('/', (req, res) => {
    res.json(specialEventsData);
})

module.exports = router;