// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// res.send("This should be the note taking app")
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/assets/css/style.css')));






// Routes





// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));