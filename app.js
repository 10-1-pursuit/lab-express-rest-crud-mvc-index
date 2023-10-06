const express = require('express')
const app = express();



app.get('/', (req, res) => {
    res.status(200).send("Hello, world")
});

app.get("*", ( req, res) => {
    res.status(404).json({error: 'me no work'});
});


module.exports = app;