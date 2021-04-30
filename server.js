// Dependencies
const fs = require('fs');
const express = require('express');
const path = require('path');
const dbNotes = require('./db/db.json');
const { stringify } = require('querystring');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))


// res.send("This should be the note taking app")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


// api functionality 
app.get('/api/notes', (req, res) => res.json(dbNotes));
app.post('/api/notes', (req, res) => {
    // This is the naming of note
    let note = req.body;
    // This makes sure that notes are added and that they have values as IDS
    let id = JSON.stringify(dbNotes.length + 1)
    // This gives the notes a numeric value
    note.id = id 
    // Here we're pushing the notes to the db.json
    dbNotes.push(note)
    // This writes 
    fs.writeFileSync('./db/db.json', JSON.stringify(dbNotes));
    res.json(note);
})










// Routes




// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));