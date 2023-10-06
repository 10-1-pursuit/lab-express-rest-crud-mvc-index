const express = require('express');
const router = express.Router();

const personsData = require('../models/personsData.js');

router.get('/', (req, res) => {
    res.json(personsData);
})

module.exports = router;