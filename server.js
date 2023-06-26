// Import Express.js
import express from 'express';

// Import built-in Node.js package 'path' to resolve path of files that are located on the server
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// import uniqueId
import { v4 as uuidv4 } from 'uuid';
//  Import built-in Node.js package 'fs' to read/write files to the server
import fs from 'fs';
import path from 'path';

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Get the current file's path
const __filename = fileURLToPath(import.meta.url);
// Get the directory path
const __dirname = dirname(__filename);

// Serve static files
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());

// API Routes
app.get('/api/notes', (req, res) => {
  fs.readFile(path.resolve(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    try {
      const notes = JSON.parse(data);
      console.log('Parsed JSON data:', notes); // Log the parsed JSON data
      res.json(notes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

app.post('/api/notes', (req, res) => {
  const newNote = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  };

  fs.readFile(path.resolve(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    try {
      const notes = JSON.parse(data);
      notes.push(newNote);

      fs.writeFile(path.resolve(__dirname, 'db', 'db.json'), JSON.stringify(notes), (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }

        res.json(newNote);
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
});

// HTML Routes
app.get('/notes', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


