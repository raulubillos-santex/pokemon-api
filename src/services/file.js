const fs = require('fs');

class FileServices {

    static writeFileGet(req, res) {
        const { pokemonName } = req.query;
        fs.writeFile('./log',
            `Intento recuperar el pokemon: ${pokemonName}`, () => {
                console.log(`Intento recuperar el pokemon:  ${pokemonName}`)
            });
    };

    static writeFilePost(req, res) {
        const { pokemonName } = req.query;
        fs.writeFile('./log',
            `Intento capturar el pokemon: ${pokemonName}`, () => {
                console.log(`Intento capturar el pokemon: ${pokemonName}`)
            });
    };

    static writeFilePut(req, res) {
        const { pokemonName } = req.query;
        fs.writeFile('./log',
            `Intento actualizar el pokemon: ${pokemonName}`, () => {
                console.log(`Intento actualizar el pokemon: ${pokemonName}`)
            });
    };

    static writeFileDelete(req, res) {
        const { pokemonName } = req.query;
        fs.writeFile('./log',
            `Intento borrar el pokemon: ${pokemonName}`, () => {
                console.log(`Intento borrar el pokemon: " + ${pokemonName}`)
            });
    }
}

module.exports = {
    FileServices
};