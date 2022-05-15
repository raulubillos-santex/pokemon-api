var express = require('express');
var trainer = require('./Trainer/api/index')
var user = require('./User/api/index')

var router = express.Router();

router.use('/trainer',trainer)
router.use('/user',user)

module.exports = router;
