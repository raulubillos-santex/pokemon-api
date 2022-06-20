const { PokemonModel } = require('../models/index');

const addPokemon = async(pokemon) => {
    const pokemonCreated = await PokemonModel.create({
        ...pokemon
    }, { isNewRecord: true });

    return pokemonCreated.get();
}

const pokemonListForTrainer = async(trainerId) => {
    const pokemonList = await PokemonModel.findAll({
        where: {
            TrainerId: trainerId
        }
    });

    return pokemonList;
}

const pokemonByNameForTrainer = async(trainerId, name) => {
    const pokemonList = await PokemonModel.findOne({
        where: {
            TrainerId: trainerId,
            Name: name
        }
    });

    return pokemonList;
}

const deleteByPokemonName = async(trainerId, name) => {
    const deleted = await PokemonModel.destroy({
        where: {
            Name: name,
            TrainerId: trainerId
        }
    });

    return deleted;
}

module.exports = {
    addPokemon,
    pokemonListForTrainer,
    pokemonByNameForTrainer,
    deleteByPokemonName
};