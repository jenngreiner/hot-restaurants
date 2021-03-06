// Dependencies

const express = require('express');
const nodemon = require('nodemon');
const path = require('path')


// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3000;


const tables = []

const waitList = []

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route
// app.get('/', (req, res) => res.send("it works"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));
app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));
app.get('/api/tables', (req, res) => res.json(tables));
app.get('/api/waitlist', (req, res) => res.json(waitList));

// Create New Reservation - takes in JSON input

console.log(tables.length)

app.post('/api/tables', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newTable = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.name.replace(/\s+/g, '').toLowerCase();
    console.log(newTable);
    if (tables.length < 5) {

        tables.push(newTable);
        res.json(newTable);
    } else {

        waitList.push(newTable)
        res.json(waitList)
    }
})

app.listen(PORT, function () {
    console.log(`Listening at port ${PORT}`)
});
