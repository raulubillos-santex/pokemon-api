var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/signup', function(req, res, next) {
  res.send({ title: 'User signup', ...req.body});
});

router.post('/login', function(req, res, next) {
  res.send({ title: 'User login',...req.body});
});

module.exports = router;
