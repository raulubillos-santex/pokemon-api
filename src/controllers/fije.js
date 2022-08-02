const writefileDelete = (req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento borrar el pokemon: " + req.params.pokemonName,() => {
            console.log("Intento borrar el pokemon: " + req.params.pokemonName)
        });   
        res.status(200).send("Borrar pokemon: " + req.params.pokemonName);
        return next(); 
    } catch (err) {
        console.log(err);
        next();
    }
};

module.exports={
    writefileDelete
} 