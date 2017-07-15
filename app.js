var express = require('express');
var mongoClient = require('mongodb').MongoClient;
var consolid = require('consolidate');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser());
app.engine('html', consolid.pug);
app.set('view engine', 'html');
app.set('views',  __dirname +  '/views');

var urlDB = 'mongodb://35.158.252.204:27017/admin';

app.get('/', function(req, res) {
	res.render("index");
})
.get('/books', function(req, res) {
	app.db.collection('bibliotheque').find({}).toArray(function(err, livre) {
		if (err) console.log(err);
		console.log(livre);
		res.render("books", {
			'livres' : livre
		});
	});
})
.post('/books/new', function(req, res) {
  	app.db.collection('livre').save({
		ISBN: req.body.isbn,
		titre: req.body.titre,
		auteur: req.body.auteur,
		etat: req.body.etat,
		date_achat: new Date(req.body.dateAchat),
		thematiques: req.body.thematique.split(",")
	})
	res.redirect('/books')
});

mongoClient.connect(urlDB, function (err, db) {
	if (err) {
		console.log('test');
		console.log(err);
	}
	db.authenticate('admin', 'jesuisunepoule', function(err, res) {
		app.db = db;
		app.listen(8080);
		console.log("Express server started on 8080");
	});
});
