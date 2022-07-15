const fs = require('fs');
const { getFile, putFile, deleteFile, postFile } = require('../services/file');


const writefileDelete = async(req, res, next) => {
    try {
        await deleteFile(req.params.pokemonName)
        res.status(200).send("Intento borrar el pokemon: " + req.params.pokemonName);
        return next();
    } catch (err) {
        console.log(err);
        next();
    }
};

const writefilePut = async(req, res, next) => {
    try {
        await putFile(req.params.pokemonName)
        res.status(200).send("Intento actualizar el pokemon: " + req.params.pokemonName);
        return next();
    } catch (err) {
        console.log(err);
        next();
    }
};

const writefilePost = async (req, res, next) => {
    try {
        await postFile(req.body.pokemonName)
        res.status(200).send("Intento capturar el pokemon: " + req.body.pokemonName);
        return next();
    } catch (err) {
        console.log(err);
        next();
    }
};

const writefileGet = async (req, res, next) => {
    
        const returnedMessage  = await getFile(req.query.pokemonName);
        if(returnedMessage !== ""){
        res.status(200).send(returnedMessage);
        return next();
        }else{
            res.status(500).send("Se rompió");
            return next();
        }
    
};

module.exports = {
    writefileDelete,
    writefilePut,
    writefilePost,
    writefileGet
}