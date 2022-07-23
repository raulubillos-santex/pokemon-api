const { writeFileForGetPokemon, writeFileForPostPokemon, writeFileForPutPokemon, writeFileForDeletePokemon } = require('../services/file');

const writeFileGet = async (req,res,next) => {
        const returnedMessage = await writeFileForGetPokemon(req.query.pokemonName);
        if (returnedMessage !== "") {
            res.status(200).send(returnedMessage);
            return next(); 
        } else {
            res.status(500).send("Error");
            return next();
        }
}

const writeFilePost = async (req,res,next) => {
        const returnedMessage = await writeFileForPostPokemon(req.body.pokemonName);
        if (returnedMessage !== "") {
            res.status(200).send(returnedMessage);
            return next(); 
        } else {
            res.status(500).send("Error");
            return next();
        }
}

const writeFilePut = async (req,res,next) => {
        const returnedMessage = await writeFileForPutPokemon(req.params.pokemonName);
        if (returnedMessage !== "") {
            res.status(200).send(returnedMessage);
            return next(); 
        } else {
            res.status(500).send("Error");
            return next();
        }
}

const writeFileDelete = async (req,res,next) => {
        const returnedMessage = await writeFileDelete(req.params.pokemonName);  
        if (returnedMessage !== "") {
            res.status(200).send(returnedMessage);
            return next(); 
        } else {
            res.status(500).send("Error");
            return next();
        }
}

module.exports = {
    writeFileGet,
    writeFilePost,
    writeFilePut,
    writeFileDelete
}