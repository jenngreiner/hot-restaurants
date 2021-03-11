// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;

app.listen(PORT, function () {
    console.log(`Listening at port ${PORT}`)
});

const tables = [
    {
        routeName: 'dan',
        name: 'dan',
        phoneNumber: '8888888888',
        email: 'dan@dan.com',
        id: 'dan',
    },
]

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route
app.get("/", (req, res) => res.send(path.join(__dirname, "home.html")));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));