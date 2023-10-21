const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.status(200).send("Hello, world!");
});

// 404 route
app.use((req, res) => {
    res.status(404).send("Sorry, no page found!");
});

// app.all("*", (req, res) => {
//     if (req.url === "/") {
//         res.send("Hello, world!");
//     } else {
//         res.status(404).send("Not Found");
//     }
// });


module.exports = app;