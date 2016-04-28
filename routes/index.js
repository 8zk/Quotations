var express = require('express');
var router = express.Router();
var moment = require('moment');
var connection = require('../mysqlConnection');

//  ＊情報を取得するとき
router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM emotions';
  connection.query(query, function(err, emotions) {
    var query = 'SELECT * FROM witticisms';
    connection.query(query, function(err, witticisms) {
      var witticisms = witticisms.length ? witticisms : undefined;
      if (witticisms) {
        var length = witticisms.length;
        var random = Math.floor(Math.random() * length);
        res.render('index', {
          emotions : emotions,
          random : witticisms[random]
        });
      }
    });
  });
});

module.exports = router;
