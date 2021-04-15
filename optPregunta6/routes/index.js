var express = require('express');
var router = express.Router();

var usersJson = require('../../data/users.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(usersJson);
});

module.exports = router;
