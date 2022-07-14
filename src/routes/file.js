var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const { FileController } = require('../controllers/file');

router.get('/writeFileGet', isAuthenticated, FileController.writeFileGet);

router.post('/writeFilePost', isAuthenticated, FileController.writeFilePost);

router.put('/:pokemonName/writeFilePut', isAuthenticated, FileController.writeFilePut);

router.delete('/writeFileDelete', isAuthenticated, FileController.writeFileDelete);

module.exports = router;