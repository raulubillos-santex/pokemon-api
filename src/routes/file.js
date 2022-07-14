var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const {writeFileGet} = require('../controllers/pokemon');
const {writeFilePost} = require('../controllers/pokemon');
const {writeFilePut} = require('../controllers/pokemon');
const {writeFileDelete} = require('../controllers/pokemon');
const fs = require('fs');

router.get('/writeFileGet',isAuthenticated, writeFileGet);

router.post('/writeFilePost',isAuthenticated , writeFilePost);

router.put('/:pokemonName/writeFilePut',isAuthenticated , writeFilePut);

router.delete('/writeFileDelete',isAuthenticated , writeFileDelete);

module.exports = router;