const { v4 } = require('uuid');
const {
    capturePokemon,
    pokemonListByTrainer,
    pokemonByTrainer,
    deletePokemon
} = require('../services/pokemon');

function generateRandom(min = 0, max = 100) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;

    return rand;
}
//TODO: Añadir try catch para manejar este error
const capture = async(req, res, next) => {

    const pokemon = {
        Id: v4(),
        Name: req.body.name,
        Specie: req.body.specie,
        Level: req.body.level,
        Strength: generateRandom(0, 255),
        Vitality: generateRandom(0, 255),
        Speed: generateRandom(0, 255),
        TrainerId: req.user.Id
    };

    const createdPokemon = await capturePokemon(pokemon);

    res.status(200).send(createdPokemon);

    return next();
};

const getPokemonListForTrainer = async(req, res, next) => {
    const pokemonList = await pokemonListByTrainer(req.user.Id);

    res.status(200).send(pokemonList);
    return next();
}

const getPokemonByNameForTrainer = async(req, res, next) => {
    const pokemon = await pokemonByTrainer(req.user.Id, req.params.name);
    if (pokemon) {
        res.status(200).send(pokemon);
        return next();
    }

    res.status(204).send({
        httpStatus: 204,
        errorCode: 'POKEMON_NOT_FOUND'
    });
    return next();
}

const returnPokemonNameForTrainer = async(req, res, next) => {
    const {name} = await pokemonByTrainer(req.user.Id, req.params.pokemonName);
    if (name) {
        res.status(200).send(`El pokemon es ${name}`);
        return next();
    }

    res.status(204).send({
        httpStatus: 204,
        errorCode: 'POKEMON_NOT_FOUND'
    });
    return next();
}

const release = async(req, res, next) => {
    const numberOfDeletions = await deletePokemon(req.user.Id, req.params.name);

    res.status(200).send({
        pokemonsReleased: numberOfDeletions
    });

    return next();
}
module.exports = {
    capture,
    getPokemonListForTrainer,
    getPokemonByNameForTrainer,
    returnPokemonNameForTrainer,
    release
}