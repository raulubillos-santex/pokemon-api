const { v4 } = require('uuid');
const { createTeam, searchTeam, searchTeamList, updateTeam, teamDelete } = require('../providers/team');
const { pokemonListByNameList } = require('../providers/pokemon')

const postTeam = async(req, res, next) => {
    const pokemonList = await pokemonListByNameList(req.user.Id, req.body.pokemonList);
    const pokemonNameList = req.body.pokemonList;

    const pokemonNotExisting = pokemonNameList.filter((name, index) => !pokemonList.find((pokemon) => pokemon.Name == name));

    const teamToCreate = {
        Id: v4(),
        Name: req.body.name,
        TrainerId: req.user.Id
    }

    const team = await createTeam(pokemonList, teamToCreate);

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

    res.status(200).send({
        teamName: team.Name,
        pokemonsOnTeam: pokemonsOnTeam,
        nonExistentPokemon: pokemonNotExisting
    });

    return next();
}

const getTeamList = async(req, res, next) => {
    const list = await searchTeamList(req.user.Id);

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

    res.status(200).send(mappedTeams);

    return next();
}

const getTeam = async(req, res, next) => {
    const team = await searchTeam(req.user.Id, req.params.name);

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

    res.status(200).send(mappedTeam);

    return next();
}

const putTeam = async(req, res, next) => {

    const pokemonList = await pokemonListByNameList(req.user.Id, req.body.pokemonList);
    const pokemonNameList = req.body.pokemonList;

    const pokemonNotExisting = pokemonNameList.filter((name, index) => !pokemonList.find((pokemon) => pokemon.Name == name));

    const updatedTeam = await updateTeam(pokemonList, req.body.name, req.user.Id, req.params.name);

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

    if (updatedTeam) {
        res.status(200).send({
            newName: updatedTeam.Name,
            pokemonsOnTeam: pokemonsOnTeam,
            nonExistentPokemon: pokemonNotExisting
        });
    } else {
        res.status(200).send("NOT_UPDATED");
    }

    return next();
}

const deleteTeam = async(req, res, next) => {
    const deleted = await teamDelete(req.user.Id, req.params.name);

    if (deleted > 0) {
        res.status(200).send("DELETED");
    } else {
        res.status(204).send("NOT_DELETED");
    }
}

module.exports = { postTeam, getTeamList, getTeam, putTeam, deleteTeam }