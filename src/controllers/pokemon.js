const { v4 } = require('uuid');
const { addPokemon } = require('../providers/pokemon');

function generateRandom(min = 0, max = 100) {

    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;

    return rand;
}
//TODO: Añadir try catch para manejar este error
const capture = async(req, res, next) => {

    const pokemon = {
        Id: v4(),
        Name: req.body.name,
        Type: req.body.specie,
        Level: req.body.level,
        Strength: generateRandom(0, 255),
        Vitality: generateRandom(0, 255),
        Speed: generateRandom(0, 255),
        TrainerId: req.user.Id
    };

    const pokemonCreated = await addPokemon(pokemon);

    const mappedPokemon = {
        name: pokemonCreated.Name,
        specie: pokemonCreated.Type,
        level: pokemonCreated.Level,
        strength: pokemonCreated.Strength,
        vitality: pokemonCreated.Vitality,
        speed: pokemonCreated.Speed
    }

    res.status(200).send(mappedPokemon);

    return next();
};

module.exports = { capture }