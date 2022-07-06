const { Axios } = require('axios');

const axios = new Axios({ baseURL: process.env.POKEMON });

const getPokemon = async(specie) => {

    const pokemon = await axios.get("pokemon/" + specie);

    return pokemon;
}

module.exports = { getPokemon };