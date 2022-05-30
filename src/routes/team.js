var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Team list' });
});

router.post('/', function(req, res, next) {
  res.send({ title: 'Create Team' });
});

router.put('/:name', function(req, res, next) {
  res.send({ title: 'modify Team' });
});

router.get('/:name', function(req, res, next) {
  res.send({ title: 'Team data', ...req.params });
});

router.delete('/:name', function(req, res, next) {
  res.send({ title: 'Team remove', ...req.params });
});
module.exports = router;
