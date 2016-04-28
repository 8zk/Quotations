var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');

router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM witticisms';
  connection.query(query, function(err, witticisms) {
    res.send(witticisms);
  });
});

module.exports = router;