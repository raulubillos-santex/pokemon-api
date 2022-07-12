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
router.get('/:name/data', isAuthenticated, async(req, res, next) => {
    const pokemon = await pokemonByTrainer(req.user.Id, req.params.name);
    if (pokemon) {
        res.status(200).send(
            `El pokemon es ${req.params.name}`
        );
        return next();
    }

    res.status(204).send({
        httpStatus: 204,
        errorCode: 'POKEMON_NOT_FOUND'
    });
    return next();
});


router.delete('/:name/release', isAuthenticated, release);

module.exports = router;