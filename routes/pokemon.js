var express = require('express');
var router = express.Router();
var path = require('path');
var db = require('../models');  // dot ("./") used so that file will be searched for in our file system


// GET - return a page with favorited Pokemon
router.get('/', function(req, res) {
  db.pokemon.findAll().then(function(pokemons) {
  res.render('pokemon', {pokemons:pokemons});
  });
});

// GET - return a page with a specific Pokemon
router.get('/detail/:id', function(req, res){
  db.pokemon.findById(req.params.id).then(function(pokemons) {
  res.render('detail', {pokemons: pokemons})
  });
});

// POST - receive the name of a pokemon and add it to the database
router.post('/', function(req, res) {
  db.pokemon.create(req.body).then(function(pokemons) {
    res.redirect('/');
  });
});

router.delete('/detail/:id', function(req, res){
  db.pokemon.findById(req.params.id).then(function(pokemons) {
  pokemon.destroy();
  res.send({message: 'done'});
  });
});

module.exports = router;
