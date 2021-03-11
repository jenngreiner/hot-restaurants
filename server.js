// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Listening at port ${PORT}`)
});

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route
app.get("/", function (req, res) {
    res.json(path.join(__dirname, "public/home.html"));
});
