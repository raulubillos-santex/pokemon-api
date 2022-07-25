var express = require('express');
var trainer = require('./trainer')
var { errorHandler } = require('../middlewares/general')

var router = express.Router();


router.use('/trainer', trainer)
router.use('/file', file)

router.use(errorHandler);
module.exports = router;