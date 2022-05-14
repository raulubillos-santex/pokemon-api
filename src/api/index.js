var express = require('express');
var trainer = require('./Trainer/api/index')
var user = require('./User/api/index')

var router = express.Router();

/* GET home page. */
router.use('/api/trainer',trainer)
router.use('/api/user',user)

module.exports = router;
