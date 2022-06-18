var express = require('express');
var router = express.Router();
var pokemon = require('./pokemon');
var team = require('./team');
const passport = require('passport');
const { signUp, login } = require('../controllers/trainer');
const { validateUserBody } = require('../middlewares/trainer');
const { validateIfNotError } = require('../middlewares/general');



router.use('/pokemon', pokemon);
router.use('/team', team);

router.post('/signup', ...validateUserBody, validateIfNotError, signUp);
router.post('/login', login);

module.exports = router;