var express = require('express');
var router = express.Router();
var pokemon = require('./Pokemon/api/index')
var team = require('./Team/api/index')

/* GET home page. */
router.use('/pokemon', pokemon);
router.use('/team', team);


module.exports = router;
