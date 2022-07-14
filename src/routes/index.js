var express = require('express');
var trainer = require('./trainer');
var file = require('./file');
var professor = require('./professor');
var { errorHandler } = require('../middlewares/general');
var router = express.Router();

router.use('/professor', professor);
router.use('/trainer', trainer)
router.use('/file', file);
router.use(errorHandler);

module.exports = router;