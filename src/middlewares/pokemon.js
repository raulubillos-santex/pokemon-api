const { check } = require('express-validator');
const { getPokemon } = require('../providers/api');

const validatePokemonSpecie = async(req, res, next) => {

    const pokemon = await getPokemon(req.body.specie);
    const pokemonData = pokemon.status !== 404 ? JSON.parse(pokemon.data) : {};
    if (pokemon.status === 404 || pokemonData.name !== req.body.specie.toLowerCase()) {
        return next({
            httpStatus: 404,
            errorCode: 'POKEMON_NOT_FOUND'
        })
    }

    return next();
}

const validateCaptureBody = [
    check('name').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'NAME_MISSING'
        }
    })
    .not().isEmpty().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'NAME_MISSING'
        }
    }),
    check('specie').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'SPECIE_MISSING'
        }
    }),
    check('level').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'LEVEL_MISSING'
        }
    })
    .isInt({ min: 0, max: 100 }).withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'INVALID_LEVEL'
        }
    }),
];

module.exports = { validateCaptureBody, validatePokemonSpecie };