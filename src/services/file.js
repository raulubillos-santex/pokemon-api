const {writeFile} = require ('../providers/file');

const writeFileGetPokemon = async (name) => {
    const message = "Intento recuperar el pokemon: " + name;
    try{
        await writeFile('../log', message);
        return message;
    }catch(error){
        console.error(error);
        next();
    }
}
const writeFilePostPokemon = async (name) => {
    const message = "Intento capturar el pokemon:: " + name;
    try{
        await writeFile('../log', message);
        return message;
    }catch(error){
        console.error(error);
        next();
    }
}
const writeFilePutPokemon = async (name) => {
    const message = "Intento actualizar el pokemon:: " + name;
    try{
        await writeFile('../log', message);
        return message;
    }catch(error){
        console.error(error);
        next();
    }
}
const writeFileDeletePokemon = async (name) => {
    const message = "Intento borrar el pokemon:: " + name;
    try{
        await writeFile('../log', message);
        return message;
    }catch(error){
        console.error(error);
        next();
    }
}

module.exports = {
    writeFileGetPokemon,
    writeFilePostPokemon,
    writeFilePutPokemon,
    writeFileDeletePokemon
} 