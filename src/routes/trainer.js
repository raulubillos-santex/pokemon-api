var express = require('express');
var router = express.Router();
var pokemon = require('./pokemon');
var team = require('./team');
const passport = require('passport');
const { signUp, userDeserializer, userSerializer, login } = require('../controllers/trainer');
const { validateUserBody } = require('../middlewares/trainer');
const { validateIfNotError } = require('../middlewares/general');
const { trainerIdStategy } = require('../utils/auth-strategies');

passport.use(trainerIdStategy);

passport.serializeUser(userSerializer);

passport.deserializeUser(userDeserializer);

router.use('/pokemon', pokemon);
router.use('/team', team);

router.post('/signup', ...validateUserBody, validateIfNotError, signUp);
router.post('/login', login);

module.exports = router;