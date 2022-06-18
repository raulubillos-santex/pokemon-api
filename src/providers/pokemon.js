const { PokemonModel } = require('../models/index');

const addPokemon = async(pokemon) => {
    const pokemonCreated = await PokemonModel.create({
        ...pokemon
    }, { isNewRecord: true });

    return pokemonCreated.get();
}

module.exports = { addPokemon };