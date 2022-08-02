var express = require('express');
var router = express.Router();
var { validateCaptureBody, validatePokemonSpecie } = require('../middlewares/pokemon');
const { validateIfNotValidatorError, isAuthenticated } = require('../middlewares/general');
const {
    capture,
    getPokemonListForTrainer,
    getPokemonByNameForTrainer,
    release
} = require('../controllers/pokemon');

router.get('/', isAuthenticated, validateIfNotValidatorError, getPokemonListForTrainer);

router.post('/capture', isAuthenticated, ...validateCaptureBody, validatePokemonSpecie, validateIfNotValidatorError, capture);
router.get('/:name', isAuthenticated, getPokemonByNameForTrainer);


route.get ('/pokemonName/pokename', isAuthenticated, (req, res,next) => {
    res.status (200).send("Tarea 1 Pokeapi " + req.params.pokemonName);
    return next();
})

router.delete('/:name/release', isAuthenticated, release);

module.exports = router;