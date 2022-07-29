const { writeFile } = require('../providers/file');

const getFile = async (pokemonName) => {
    const message = "Intento recuperar el pokemon: " + pokemonName;
    try {
        await writeFile('./log', message)
        return message; 
    } catch (err) {
        console.log(err);
    }
}

const postFile = async (pokemonName) => {
    const message = "Intento capturar el pokemon: " + pokemonName;
    try {
        await writeFile('./log', message)
        return message; 
    } catch (err) {
        console.log(err);
    }
}

const putFile = async (pokemonName) => {
    const message = "Intento actualizar el pokemon: " + pokemonName;
    try {
        await writeFile('./log', message)
        return message; 
    } catch (err) {
        console.log(err);
    }
}

const deleteFile = async (pokemonName) => {
    const message = "Intento borrar el pokemon: " + pokemonName;
    try {
        await writeFile('./log', message)
        return message; 
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getFile,
    postFile,
    putFile,
    deleteFile
}