// Import Express.js
import express from 'express';

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
import path from 'path';
import uniqueId from 'uniqueid';
import fs from 'fs';

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.Port || 3001;

// Static middleware pointing to the public folder
app.use(express.static('public'));

//this is  post endpoint adds a new note

app.post('/api/notes', (req, res) => {
  const newNote =  {notesid: uniqueId(), note: req.body}

  fs.writeFile( `${path.dirname("server.js")}/db/db.json`,`${newNote}`, function (err) {
    if (err) throw err;
   
  });
  res.send('successful send')
});

//this gets all of the notes

app.get('/api/notes', (req, res) => {
  fs.readFile(`${path.dirname("server.js")}/db/db.json`, function (err, data) {
    if (err) throw err;
    res.send(data)
  })
});



// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});



