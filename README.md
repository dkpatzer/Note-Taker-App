# Note-Taker-App

## Description

The objective was to modify the starter code to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and it saves and retrieves note data from a JSON file.

The application’s front end was already created however it was partially modified for the delete method. The back end was built, the front end and back end were connected, and the entire application was deployed to Heroku

## Instructions for Use
When the note taker is opened the user is presented with a landing page with a link to a notes page. When the user clicks on the link to the notes page they are presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column. When the user enters a new note title and the note’s text a Save icon appears in the navigation at the top of the page. When the user clicks on the Save icon the new note the user has entered is saved and appears in the left-hand column with the other existing notes. When the user clicks on an existing note in the list in the left-hand column that note appears in the right-hand column. When the user clicks on the Write icon in the navigation at the top of the page the user is presented with empty fields to enter a new note title and the note’s text in the right-hand column.
>

## Code Explanation
### JavaScript
#### index.js
I modified the index.js file to set up the delete method.

Here is am explanation of the code:
 The index.js file sets up the Express.js server, specifies the port number, and sets up the Express.js app to handle data parsing. It also sets up the routes for the HTML and API routes. The HTML routes are for the index.html and notes.html files. The API routes are for the GET, POST, and DELETE methods. The GET method reads the db.json file and returns all saved notes as JSON. The POST method receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client. The DELETE method receives a query parameter containing the id of a note to delete. It reads all notes from the db.json file, removes the note with the given id property, and then rewrites the notes to the db.json file.

#### server.js
First, the Express.js library is imported which allows the creation of a web server and the handling of HTTP requests. Next the path modules are imported which provide utilities for working with file and directory paths. Then the v4 function is imported from the uuid library which generates a random unique id. Next, the fs module is imported which provides an API for interacting with the file system.
An instance of the Express.js application is created and saved to the app variable. Next, the port number is set to 3001. The fileURLToPath and dirname functions get the current file's path and its directory path. The middleware functions These lines configure the Express.js application to serve static files from the `public` directory and parse JSON data in incoming requests. The API routes are set up for the GET, POST, and DELETE methods. The GET method reads the db.json file and returns all saved notes as JSON. The POST method receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client. The DELETE method receives a query parameter containing the id of a note to delete. It reads all notes from the db.json file, removes the note with the given id property, and then rewrites the notes to the db.json file. Next, the routes for the HTML files are created. These routes are used to handle client-side routing in a single-page application.  First, a GET request is made to the api/notes endpoint and the callback function is executed. The POST request is made to the api/notes endpoint and the callback function is executed. The DELETE request is made to the api/notes/:id endpoint and the callback function is executed. The GET request is made to the /notes endpoint and the callback function is executed. The GET request is made to the * endpoint and the callback function is executed. Finally, the server is started and listens for requests on the port number.


## Screenshots

![Screenshot (161)](public/assets/images/Screenshot%20(161).png)
![Screenshot (162)](public/assets/images/Screenshot%20(162).png)
![Screenshot (163)](public/assets/images/Screenshot%20(163).png)
![Screenshot (164)](public/assets/images/Screenshot%20(164).png)

Building this app was useful in gaining experience and understanding of Express.js and building functional routes between the front end and back end. I have a better understanding of the GET, POST, and DELETE HTTP methods. I gained more experience with Postman testing my routes. I learned about using eventhandlers to work with the keyboard in my app.  I also gained experience in deploying an application to Heroku.















