var express = require('express');
var router = express.Router();

var usersJson = require('../../data/users.json')

router.get('/:id', function(req, res, next) {
    res.send(usersJson.filter(u => u.id == req.params.id));
});

module.exports = router;
