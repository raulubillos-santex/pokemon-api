var express = require('express');
var trainer = require('./trainer')
var user = require('./user')

var router = express.Router();

router.use('/trainer', trainer)
router.use('/user', user)

module.exports = router;