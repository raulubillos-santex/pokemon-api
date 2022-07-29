var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const {
    writeFileGet,
    writeFilePost,
    writeFilePut,
    writeFileDelete
} = require('../controllers/file');

router.get('/writeFileGet',isAuthenticated ,writeFileGet);
router.post('/writeFilePost',isAuthenticated ,writeFilePost);
router.put('/:pokemonName/writeFilePut',isAuthenticated ,writeFilePut);
router.delete('/writeFileDelete',isAuthenticated ,writeFileDelete);

module.exports = router; 