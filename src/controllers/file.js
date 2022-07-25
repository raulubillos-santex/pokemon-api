const {writeFileDeletePokemon, writeFileGetPokemon, writeFilePostPokemon, writeFilePutPokemon} = require('/../services/file');


const writeFileGet = (req,res,next) => {
    const returnedMessage = await writeFileGetPokemon(req.query.pokemonName);
    if(returnedMessage != ""){
        res.status(200).send("Intento recuperar el pokemon: " + req.query.pokemonName);
        return next();
    }else{
        res.status(204).send("Error");
        return next();
    }

}
const writeFilePost = (req,res,next) => {
    const returnedMessage = await writeFilePostPokemon(req.query.pokemonName);
    if(returnedMessage != ""){
        res.status(200).send("Intento capturar el pokemon: " + req.query.pokemonName);
        return next();
    }else{ 
        res.status(204).send("Error");
        return next();
    }

};
const writeFilePut = (req,res,next) => {
    const returnedMessage = await writeFilePutPokemon(req.query.pokemonName);
    if(returnedMessage != ""){
        res.status(200).send("Intento actualizar el pokemon: " + req.query.pokemonName);
        return next();
    }else{
        res.status(204).send("Error");
        return next();
    }
};
const writeFileDelete = (req,res,next) => {
    const returnedMessage = await writeFileDeletePokemon(req.query.pokemonName);
    if(returnedMessage != ""){
        res.status(200).send("Intento borrar el pokemon: " + req.query.pokemonName);
        return next();
    }else{
        res.status(204).send("Error");
        return next();
    }
}

module.exports = {
    writeFileGet,
    writeFilePost,
    writeFilePut,
    writeFileDelete
}