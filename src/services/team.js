const { v4 } = require('uuid');
const { insertTeam, selectTeam, searchTeamList, updateTeam, teamDelete } = require('../providers/team');
const { pokemonListByNameList } = require('../providers/pokemon');

const createTeam = (id, name, pokemonNames) => {
    const pokemonList = await pokemonListByNameList(id, pokemonNames);
    const pokemonNameList = pokemonNames;

    const teamToCreate = {
        Id: v4(),
        Name: name,
        TrainerId: id
    }

    const pokemonNotExisting = pokemonNameList.filter((name, index) => !pokemonList.find((pokemon) => pokemon.Name == name));

    const team = await insertTeam(pokemonList, teamToCreate);

    const pokemonsOnTeam = pokemonList.map((pokemon) => {
        return {
            name: pokemon.Name,
            specie: pokemon.Type,
            level: pokemon.Level,
            strength: pokemon.Strength,
            vitality: pokemon.Vitality,
            speed: pokemon.Speed
        }
    });

    return {
        nonExistentPokemon: pokemonNotExisting,
        teamName: team.Name,
        pokemonsOnTeam: pokemonsOnTeam
    }
}

const obtainTeam = (id, name) => {
    const team = await selectTeam(id, name);

    const mappedPokemonList = team.Pokemons.map((pokemon) => {
        return {
            name: pokemon.Name,
            specie: pokemon.Type,
            level: pokemon.Level,
            strength: pokemon.Strength,
            vitality: pokemon.Vitality,
            speed: pokemon.Speed
        }
    })

    const mappedTeam = {
        name: team.Name,
        pokemons: mappedPokemonList
    }

    return mappedTeam;
}

const obtainTeamList = (id) => {
    const list = await searchTeamList(id);

    const mappedTeams = list.map((team) => {
        const mappedPokemonList = team.Pokemons.map((pokemon) => {
            return {
                name: pokemon.Name,
                specie: pokemon.Type,
                level: pokemon.Level,
                strength: pokemon.Strength,
                vitality: pokemon.Vitality,
                speed: pokemon.Speed
            }
        })

        return {
            name: team.Name,
            pokemons: mappedPokemonList
        }
    })

    return mappedTeams;
}

const setNewDataOnTeam = (id, newName, oldName, pokemonNames) => {
    const pokemonList = await pokemonListByNameList(id, pokemonNames);

    const pokemonNotExisting = pokemonNames.filter((name, index) => !pokemonList.find((pokemon) => pokemon.Name == name));

    const updatedTeam = await updateTeam(pokemonList, newName, id, oldName);

    const pokemonsOnTeam = pokemonList.map((pokemon) => {
        return {
            name: pokemon.Name,
            specie: pokemon.Type,
            level: pokemon.Level,
            strength: pokemon.Strength,
            vitality: pokemon.Vitality,
            speed: pokemon.Speed
        }
    });

    if(updatedTeam){
        return {
            newName: updatedTeam.Name,
            pokemonsOnTeam: pokemonsOnTeam,
            nonExistentPokemon: pokemonNotExisting
        }
    }else{
        return null;
    }
}

const removeTeam = async (id, name) => {
    const deleted = await teamDelete(id, name);

    return deleted;
}

module.exports = {
    createTeam,
    obtainTeam,
    obtainTeamList,
    setNewDataOnTeam,
    removeTeam
}