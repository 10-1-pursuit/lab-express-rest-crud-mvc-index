const express = require('express');
const router = express.Router();

const plansData = require('../models/plansData.js');

router.get('/', (req, res) => {
    res.json(plansData);
})

module.exports = router;