var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const {writeFileGet, writeFilePost, writeFileDelete,writeFilePut} = require('../controllers/pokemon');
const fs = require('fs');
// router.get('/writeFileGet',isAuthenticated ,(req,res,next) => {
//     try {
//         fs.writeFile('./log',
//         "Intento recuperar el pokemon: " + req.query.pokemonName,() => {
//             console.log("Intento recuperar el pokemon: " + req.query.pokemonName)
//         });   
//         res.status(200).send("Intento recuperar el pokemon: " + req.query.pokemonName);
//         return next(); 
//     } catch (err) {
//         console.log(err);
//         next();
//     }
// });
router.get('/writeFileGet',isAuthenticated, writeFileGet);
// router.post('/writeFilePost',isAuthenticated ,(req,res,next) => {
//     try {
//         fs.writeFile('./log',
//         "Intento capturar el pokemon: " + req.body.pokemonName,() => {
//             console.log("Intento capturar el pokemon: " + req.body.pokemonName)
//         });   
//         res.status(200).send("Intento capturar el pokemon: " + req.body.pokemonName);
//         return next(); 
//     } catch (err) {
//         console.log(err);
//         next();
//     }
// });
router.post('/writeFilePost',isAuthenticated , writeFilePost);
// router.put('/:pokemonName/writeFilePut',isAuthenticated ,(req,res,next) => {
//     try {
//         fs.writeFile('./log',
//         "Intento actualizar el pokemon: " + req.params.pokemonName,() => {
//             console.log("Intento actualizar el pokemon: " + req.params.pokemonName)
//         });   
//         res.status(200).send("Intento actualizar el pokemon: " + req.params.pokemonName);
//         return next(); 
//     } catch (err) {
//         console.log(err);
//         next();
//     }
// });
router.put('/:pokemonName/writeFilePut',isAuthenticated , writeFilePut);
// router.delete('/writeFileDelete',isAuthenticated ,(req,res,next) => {
//     try {
//         fs.writeFile('./log',
//         "Intento borrar el pokemon: " + req.params.pokemonName,() => {
//             console.log("Intento borrar el pokemon: " + req.params.pokemonName)
//         });   
//         res.status(200).send("Intento borrar el pokemon: " + req.params.pokemonName);
//         return next(); 
//     } catch (err) {
//         console.log(err);
//         next();
//     }
// });
router.delete('/writeFileDelete',isAuthenticated , writeFileDelete);

module.exports = router;