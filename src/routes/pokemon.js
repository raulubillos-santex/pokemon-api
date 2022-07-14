var express = require('express');
var router = express.Router();
var { validateCaptureBody, validatePokemonSpecie } = require('../middlewares/pokemon');
const { validateIfNotValidatorError, isAuthenticated } = require('../middlewares/general');
const {
    capture,
    getPokemonListForTrainer,
    getPokemonByNameForTrainer,
    release,
    getPokemonByName
} = require('../controllers/pokemon');

router.get('/', isAuthenticated, validateIfNotValidatorError, getPokemonListForTrainer);

router.post('/capture', isAuthenticated, ...validateCaptureBody, validatePokemonSpecie, validateIfNotValidatorError, capture);
router.get('/:name', isAuthenticated, getPokemonByNameForTrainer);
router.get('/:poqueName/pokename', isAuthenticated, getPokemonByName)
router.delete('/:name/release', isAuthenticated, release);

module.exports = router;