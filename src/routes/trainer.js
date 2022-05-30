var express = require('express');
var router = express.Router();
var pokemon = require('./pokemon')
var team = require('./team')

/* GET home page. */
router.use('/pokemon', pokemon);
router.use('/team', team);


module.exports = router;