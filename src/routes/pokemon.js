var express = require('express');
var router = express.Router();
var { validateCaptureBody } = require('../middlewares/pokemon');
const { validateIfNotError, isAuthenticated } = require('../middlewares/general');
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send({ title: 'Pokemon List' });
});

router.post('/capture', isAuthenticated, ...validateCaptureBody, validateIfNotError, function(req, res, next) {
    res.send({ title: 'Pokemon creation', ...req.body });
});
router.get('/:name', function(req, res, next) {
    res.send({ title: 'Pokemon individual', ...req.params });
});


router.delete('/:name/release', function(req, res, next) {
    res.send({ title: 'Pokemon Release', ...req.params });
});

module.exports = router;