var express = require('express');
var routes = require('./routes/bibliotheque.js');
var consolid = require('consolidate');
var bodyParser = require('body-parser');

var app = express();

// Pour gérer les POST
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// La 404
app.get('*', function (req, res) {
    console.log("Not found.");
    res.status(404).send("Page not found.");
});

app.engine('html', consolid.pug);
app.set('view engine', 'html');
app.locals.pretty = true;
app.set('views',  __dirname +  '/views');

app.listen(8080);

console.log('Ecoute sur 8080');
