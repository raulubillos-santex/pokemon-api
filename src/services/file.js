const { writeFile } = require('../providers/file')

const writeFileForGetPokemon = async (name) => {
    const menssage = 'Intento obtener el pokemon: ' + name
    try {
        await writeFile('./log', menssage)
        return menssage
    } catch (error) {
        return ""
    }
}

const writeFileForPostPokemon = async (name) => {
    const menssage = 'Intento capturar el pokemon: ' + name
    try {
        await writeFile('./log', menssage)
        return menssage
    } catch (error) {
        return ""
    }
}

const writeFileForPutPokemon = async (name) => {
    const menssage = 'Intento actualizar el pokemon: ' + name
    try {
        await writeFile('./log', menssage)
        return menssage
    } catch (error) {
        return ""
    }
}

const writeFileForDeletePokemon = async (name) => {
    const menssage = 'Intento borrar el pokemon: ' + name
    try {
        await writeFile('./log', menssage)
        return menssage
    } catch (error) {
        return ""
    }
}

module.exports = {
    writeFileForGetPokemon,
    writeFileForPostPokemon,
    writeFileForPutPokemon,
    writeFileForDeletePokemon
}