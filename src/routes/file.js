var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const { writefileDelete, writefilePut, writefilePost, writefileGet } = require('../controllers/file');


module.exports = router;
router.get('/writeFileGet', isAuthenticated, writefileGet);

router.post('/writeFilePost', isAuthenticated, writefilePost);

router.put('/:pokemonName/writeFilePut', isAuthenticated, writefilePut);

router.delete('/writeFileDelete', isAuthenticated, writefileDelete);

module.exports = router;