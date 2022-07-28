const { writeFile } = require("../providers/file");



const deleteFile = async(name) => {
    const message =  "Intento borrar el pokemon: " + req.params.pokemonName
    try{
     await writeFile('./log', message);
    }catch(err){
      console.log(err)
    }
}

const putFile = async (name) =>{
    const message = "Intento actualizar el pokemon: " + req.params.pokemonName
    try{
        await writeFile('./log',message);
    }catch(err){
        console.log(err)
    }
}

const postFile = async (name) =>{
    const message = "Intento liberar el pokemon: " + req.params.pokemonName
    try{
        await writeFile('./log',message);
    }catch(err){
        console.log(err)
    }
};

const getFile = async (name) =>{
    const message = "Intento recuperar el pokemon: " + req.params.pokemonName
    try{
        await writeFile('./log',message);
    }catch(err){
        console.log(err)
    }
};


module.exports = {
    getFile,
    postFile,
    putFile,
    deleteFile
} 