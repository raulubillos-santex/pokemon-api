const { writeFileForGetPokemon, writeFileForPostPokemon, writeFileForPutPokemon, writeFileForDeletePokemon } = require('../services/file')

const writeFileGet = async (req, res, next) => {

    const returnedMenssage = await writeFileForGetPokemon(req.query.pokemonName)

    if (returnedMenssage !== "") {
        res.status(200).send(returnedMenssage);
        return next();
    } else {
        res.status(500).send('Error');
        return next();
    }
};

const writeFilePost = async (req, res, next) => {

    const returnedMenssage = await writeFileForPostPokemon (req.query.pokemonName)

    if (returnedMenssage !== "") {
        res.status(200).send(returnedMenssage);
        return next();
    } else {
        res.status(500).send('Error');
        return next();
    }
};

const writeFilePut = async (req, res, next) => {

    const returnedMenssage = await writeFileForPutPokemon (req.query.pokemonName)

    if (returnedMenssage !== "") {
        res.status(200).send(returnedMenssage);
        return next();
    } else {
        res.status(500).send('Error');
        return next();
    }
};

const writeFileDelete = async (req, res, next) => {

    const returnedMenssage = await writeFileForDeletePokemon (req.query.pokemonName)

    if (returnedMenssage !== "") {
        res.status(200).send(returnedMenssage);
        return next();
    } else {
        res.status(500).send('Error');
        return next();
    }
};

module.exports = {
    writeFileGet,
    writeFilePost,
    writeFilePut,
    writeFileDelete
}