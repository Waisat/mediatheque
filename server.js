
const express = require('express'),
    app = express(),
    cors = require('cors'),
    bodyParser = require('body-parser');
    mysql = require('mysql')
const db = require('./server/Database')


db.connection.connect(function(err) {

    if (err) throw err;

    console.log("Connecté à la base de données MySQL!");



});

// Objet server contenant le port
var server = {
    port: 4040
};

// module cors et body-parser

app.use(cors())
app.use(bodyParser.json());

//routes
require('./routes/movies.routes')(app);
require('./routes/auth.routes.js')(app);
// starting the server
app.listen( server.port , () => console.log(`Server started, listening port: ${server.port}`));
