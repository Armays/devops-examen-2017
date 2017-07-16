var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var urlDB = 'mongodb://admin:jesuisunepoule@35.158.252.204:27017/admin';

mongoClient.connect(urlDB, function (err, db) {
	if (err) {
		console.log(err);
	}
  console.log("Connection ok");
	// db.authenticate('admin', 'jesuisunepoule', function(err, res) {
	// 	if (err) console.log(err);
	// 	console.log("Connection ok");
	// });
});

router.get('/', function(req, res) {
	res.render("index");
});
router.get('/books', function(req, res) {
	app.db.collection('bibliotheque').find({}).toArray(function(err, livre) {
		if (err) console.log(err);
		res.render("books", {
      title: 'Liste des livres',
			'livres' : livre
		});
	});
});
router.post('/books/:id', function(req, res) {
	app.db.collection('bibliotheque').findOne({'_id': ObjectId(req.params.id)}, function(err, livre) {
		if (err) console.log(err);
		console.log(livre);
		res.render("book", {
      title: "Détails d'un livre",
			'livre' : livre
		});
	})
});
router.post('/books/delete/:id', function(req, res) {
	app.db.collection('bibliotheque').deleteOne({_id: ObjectId(req.params.id)}, function(err, response) {
    if (err) { console.log(err);}
	});
	res.status(204);
	res.redirect('/books');
});
router.post('/books/new', function(req, res) {
  	app.db.collection('bibliotheque').save({
		ISBN: req.body.isbn,
		titre: req.body.titre,
		auteur: req.body.auteur,
		etat: req.body.etat,
		date_achat: new Date(req.body.dateAchat),
		thematiques: req.body.thematiques.split(",")
	})
	res.redirect('/books')
});

module.exports = router;
