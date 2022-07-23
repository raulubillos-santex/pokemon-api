const { writeFile } = require("../providers/file");

const writeFileForGetPokemon = async (name) => {
  const message = "Intento recuperar el pokemon: " + name;
  try {
    await writeFile("./log", message);
    return message;
  } catch (err) {
    return "";
  }
};

const writeFileForPostPokemon = async (name) => {
  const message = "Intento capturar el pokemon: " + name;
  try {
    await writeFile("./log", message);
    return message;
  } catch (err) {
    return "";
  }
};

const writeFileForPutPokemon = async (name) => {
  const message = "Intento actualizar el pokemon: " + name;
  try {
    await writeFile("./log", message);
    return message;
  } catch (err) {
    return "";
  }
};

const writeFileForDeletePokemon = async (name) => {
  const message = "Intento borrar el pokemon: " + name;
  try {
    await writeFile("./log", message);
    return message;
  } catch (err) {
    return "";
  }
};

module.exports = {
  writeFileForGetPokemon,
  writeFileForPostPokemon,
  writeFileForPutPokemon,
  writeFileForDeletePokemon,
};
