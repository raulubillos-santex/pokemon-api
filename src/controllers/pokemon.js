const { v4 } = require('uuid');
const {
    addPokemon,
    pokemonListForTrainer,
    pokemonByNameForTrainer,
    deleteByPokemonName
} = require('../providers/pokemon');

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

    const pokemonCreated = await addPokemon(pokemon);

    const mappedPokemon = {
        name: pokemonCreated.Name,
        specie: pokemonCreated.Type,
        level: pokemonCreated.Level,
        strength: pokemonCreated.Strength,
        vitality: pokemonCreated.Vitality,
        speed: pokemonCreated.Speed
    }

    res.status(200).send(mappedPokemon);

    return next();
};

const getPokemonListForTrainer = async(req, res, next) => {
    const pokemonList = await pokemonListForTrainer(req.user.Id);

    const mappedPokemon = pokemonList.map((pokemon, index) => {
        return {
            name: pokemon.Name,
            specie: pokemon.Type,
            level: pokemon.Level,
            strength: pokemon.Strength,
            vitality: pokemon.Vitality,
            speed: pokemon.Speed
        }
    });

    res.status(200).send(mappedPokemon);
    return next();
}

const getPokemonListByNameForTrainer = async(req, res, next) => {
    const pokemon = await pokemonByNameForTrainer(req.user.Id, req.params.name);
    if (pokemon) {
        const mappedPokemon = {
            name: pokemon.Name,
            specie: pokemon.Type,
            level: pokemon.Level,
            strength: pokemon.Strength,
            vitality: pokemon.Vitality,
            speed: pokemon.Speed
        };
        res.status(200).send(mappedPokemon);
        return next();
    }

    res.status(204).send({
        httpStatus: 204,
        errorCode: 'POKEMON_NOT_FOUND'
    });
    return next();
}

const release = async(req, res, next) => {
    const numberOfDeletions = await deleteByPokemonName(req.user.Id, req.params.name);

    res.status(200).send({
        pokemonsReleased: numberOfDeletions
    });

    return next();
}
module.exports = {
    capture,
    getPokemonListForTrainer,
    getPokemonListByNameForTrainer,
    release
}