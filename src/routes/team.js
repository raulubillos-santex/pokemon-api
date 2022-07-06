var express = require('express');
var router = express.Router();
const { postTeam, getTeamList, getTeam, putTeam, deleteTeam } = require('../controllers/team');
const { validatePostTeam } = require('../middlewares/team');
const { isAuthenticated, validateIfNotValidatorError } = require('../middlewares/general');

/* GET home page. */
router.get('/', isAuthenticated, getTeamList);

router.post('/', isAuthenticated, ...validatePostTeam, validateIfNotValidatorError, postTeam);

router.put('/:name', isAuthenticated, putTeam);

router.get('/:name', isAuthenticated, getTeam);

router.delete('/:name', isAuthenticated, deleteTeam);
module.exports = router;