
const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
    mysql = require('mysql')
const db = require('./server/Database')

//connect to my sql

db.connection.connect(function(err) {

    if (err) throw err;

    console.log("Connecté à la base de données MySQL!");



});

// make server object that contain port property and the value for our server.
var server = {
    port: 4040
};

// use the modules

app.use(cors())
app.use(bodyParser.json());

//routes
require('./routes/movies.routes')(app);
// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));
