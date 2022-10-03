var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const fs = require('fs');

router.get('/writeFileGet', isAuthenticated,(req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento recuperar pokemon: " + req.query.pokemonName,() => {
            console.log("Intento recuperar pokemon: "+ req.query.pokemonName)
        });
        res.status(200).send("Intento recuperar pokemon: " + req.query.pokemonName);
        return next();
        } catch (err) {
            console.log(err);
            next();
        }
});

router.post('/writeFilePost', isAuthenticated,(req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento capturar pokemon: " + req.body.pokemonName,() => {
            console.log("Intento capturar pokemon: "+ req.body.pokemonName)
        });
        res.status(200).send("Intento capturar pokemon: " + req.body.pokemonName);
        return next();
        } catch (err) {
            console.log(err);
            next();
        }
});

router.put('/writeFilePut', isAuthenticated,(req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento actualizar pokemon: " + req.params.pokemonName,() => {
            console.log("Intento actualizar pokemon: "+ req.params.pokemonName)
        });
        res.status(200).send("Intento actualizar pokemon: " + req.params.pokemonName);
        return next();
        } catch (err) {
            console.log(err);
            next();
        }
});

router.delete('/writeFileDelete', isAuthenticated,(req,res,next) => {
    try {
        fs.writeFile('./log',
        "Intento eliminar pokemon: " + req.body.pokemonName,() => {
            console.log("Intento eliminar pokemon: "+ req.body.pokemonName)
        });
        res.status(200).send("Intento eliminar pokemon: " + req.body.pokemonName);
        return next();
        } catch (err) {
            console.log(err);
            next();
        }
});

module.exports = router;