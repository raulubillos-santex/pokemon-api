const { createTeam, obtainTeam, obtainTeamList, setNewDataOnTeam, removeTeam } = require('../services/team')

const postTeam = async(req, res, next) => {
    const teamInformation = await createTeam(req.user.Id, req.body.name, req.body.pokemonList);

    res.status(200).send(teamInformation);

    return next();
}

const getTeamList = async(req, res, next) => {
    const mappedTeams = obtainTeamList(req.user.Id);

    res.status(200).send(mappedTeams);

    return next();
}

const getTeam = async(req, res, next) => {

    const mappedTeam = obtainTeam(req.user.Id, req.params.name);

    res.status(200).send(mappedTeam);

    return next();
}

const putTeam = async(req, res, next) => {

    const updateInformation = await setNewDataOnTeam(req.user.Id, req.body.name, req.params.name, req.body.pokemonList)

    if (updatedTeam) {
        res.status(200).send(updateInformation);
    } else {
        res.status(200).send("NOT_UPDATED");
    }

    return next();
}

const deleteTeam = async(req, res, next) => {
    const deleted = await removeTeam(req.user.Id, req.params.name);

    if (deleted > 0) {
        res.status(200).send("DELETED");
    } else {
        res.status(204).send("NOT_DELETED");
    }
}

module.exports = { 
    postTeam, 
    getTeamList, 
    getTeam, 
    putTeam, 
    deleteTeam 
}