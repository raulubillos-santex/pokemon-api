const { check } = require('express-validator');

const validatePostTeam = [
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
    check('pokemonList').exists().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'POKEMON_LIST_MISSING'
        }
    })
    .not().isEmpty().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'POKEMON_LIST_MISSING'
        }
    }).isArray().withMessage((value, { req, location, path }) => {
        return {
            httpStatus: 400,
            errorCode: 'INVALID_POKEMON_LIST'
        }
    })
]

module.exports = { validatePostTeam }