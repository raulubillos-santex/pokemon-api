const { TeamModel, PokemonModel } = require('../models');

const insertTeam = async(pokemonList, team) => {
    const teamCreated = await TeamModel.create({
        ...team
    }, { isNewRecord: true, include: PokemonModel });

    teamCreated.addPokemons(pokemonList);

    return teamCreated;
};

const searchTeamList = async(trainerId) => {
    const teamList = await TeamModel.findAll({
        where: {
            TrainerId: trainerId
        },
        include: PokemonModel
    });

    return teamList;
}

const selectTeam = async(trainerId, name) => {

    const team = await TeamModel.findOne({
        where: {
            TrainerId: trainerId,
            Name: name
        },
        include: PokemonModel
    });

    return team;
}

const updateTeam = async(pokemonList, newName, trainerId, name) => {
    const team = await TeamModel.findOne({
        where: {
            TrainerId: trainerId,
            Name: name
        },
        include: PokemonModel
    });
    
    await team.removePokemons(team.Pokemons);

    await team.addPokemons(pokemonList)

    await team.update({ Name: newName });

    const updated = await team.save();

    return updated;
}

const teamDelete = async(trainerId, name) => {
    const deleted = await TeamModel.destroy({
        where: {
            TrainerId: trainerId,
            Name: name
        }
    });

    return deleted;
}
module.exports = { insertTeam, searchTeamList, selectTeam, updateTeam, teamDelete };