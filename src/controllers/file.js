const writefileDelete = (req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento borrar el pokemon: " + req.params.pokemonName,() => {
            console.log("Intento borrar el pokemon: " + req.params.pokemonName)
        });   
        res.status(200).send("Intento borrar el pokemon: " + req.params.pokemonName);
        return next(); 
    } catch (err) {
        console.log(err);
        next();
    }
};

const writefilePut = (req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento actualizar el pokemon: " + req.params.pokemonName,() => {
            console.log("Intento actualizar el pokemon: " + req.params.pokemonName)
        });   
        res.status(200).send("Intento actualizar el pokemon: " + req.params.pokemonName);
        return next(); 
    } catch (err) {
        console.log(err);
        next();
    }
};

const writefilePost = (req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento capturar el pokemon: " + req.body.pokemonName,() => {
            console.log("Intento capturar el pokemon: " + req.body.pokemonName)
        });   
        res.status(200).send("Intento capturar el pokemon: " + req.body.pokemonName);
        return next(); 
    } catch (err) {
        console.log(err);
        next();
    }
};

const writefileGet = (req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento recuperar el pokemon: " + req.query.pokemonName,() => {
            console.log("Intento recuperar el pokemon: " + req.query.pokemonName)
        });   
        res.status(200).send("Intento recuperar el pokemon: " + req.query.pokemonName);
        return next(); 
    } catch (err) {
        console.log(err);
        next();
    }
};

module.exports={
    writefileDelete,
    writefilePut,
    writefilePost,
    writefileGet
}