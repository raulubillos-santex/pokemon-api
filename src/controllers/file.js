const {
    getFile,
    postFile,
    putFile,
    deleteFile
} = require('../services/file');

const writeFileGet = async(req, res, next) => {
    const message = await getFile(req.query.pokemonName);
    if (message !== "") {
        res.status(200).send(message);
        return next(); 
    }
    else {
        res.status(500).send("Algo ocurrió!");
        return next();
    }
}

const writeFilePost = async(req, res, next) => {
    const message = await postFile(req.body.pokemonName);
    if (message !== "") {
        res.status(200).send(message);
        return next(); 
    }
    else {
        res.status(500).send("Algo ocurrió!");
        return next();
    }
}

const writeFilePut = async(req, res, next) => {
    const message = await putFile(req.params.pokemonName);
    if (message !== "") {
        res.status(200).send(message);
        return next(); 
    }
    else {
        res.status(500).send("Algo ocurrió!");
        return next();
    }
}

const writeFileDelete = async(req, res, next) => {
    const message = await deleteFile(req.params.pokemonName);
    if (message !== "") {
        res.status(200).send(message);
        return next(); 
    }
    else {
        res.status(500).send("Algo ocurrió!");
        return next();
    }
}

module.exports = {
    writeFileGet,
    writeFilePost,
    writeFilePut,
    writeFileDelete
}