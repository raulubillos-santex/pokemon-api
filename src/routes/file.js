var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');

const fs = require('fs');
const { writefileDelete, writefilePut, writefilePost, writefileGet } = require('../controllers/file');

router.get('/writeFileGet',isAuthenticated, validateIfNotValidatorError, getPokemonListForTrainer);
router.post('/writeFilePost',isAuthenticated , ...validateCaptureBody, validatePokemonSpecie, validateIfNotValidatorError, capture);
router.put('/:pokemonName/writeFilePut',isAuthenticated, getPokemonByNameForTrainer);
router.delete('/writeFileDelete',isAuthenticated, release);

module.exports = router;
router.get('/writeFileGet',isAuthenticated , writefileGet);

router.post('/writeFilePost',isAuthenticated , writefilePost);

router.put('/:pokemonName/writeFilePut',isAuthenticated , writefilePut);

router.delete('/writeFileDelete',isAuthenticated , writefileDelete);

module.exports = router;