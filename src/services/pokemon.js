
const {
    addPokemon,
    pokemonListForTrainer,
    pokemonByNameForTrainer,
    deleteByPokemonName
} = require('../providers/pokemon');

const capturePokemon = async (pokemon) => {
    const pokemonCreated = await addPokemon(pokemon);

    const mappedPokemon = {
        name: pokemonCreated.Name,
        specie: pokemonCreated.Type,
        level: pokemonCreated.Level,
        strength: pokemonCreated.Strength,
        vitality: pokemonCreated.Vitality,
        speed: pokemonCreated.Speed
    }

    return mappedPokemon;
}

const pokemonListByTrainer = async (id) => {
    const pokemonList = await pokemonListForTrainer(id);

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

    return mappedPokemon;
}

const pokemonByTrainer = async (id, name) => {
    const pokemon = await pokemonByNameForTrainer(id, name);

    if(pokemon){
        const mappedPokemon = {
            name: pokemon.Name,
            specie: pokemon.Type,
            level: pokemon.Level,
            strength: pokemon.Strength,
            vitality: pokemon.Vitality,
            speed: pokemon.Speed
        };
    
        return mappedPokemon;
    }

    return null;
}

const deletePokemon = async (id, name) => {
    
    const numberOfDeletions = await deleteByPokemonName(id, name);
    return numberOfDeletions;
}

module.exports = {
    capturePokemon,
    pokemonListByTrainer,
    pokemonByTrainer,
    deletePokemon
}