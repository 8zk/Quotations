var express = require('express');
var router = express.Router();
var connection = require('../mysqlConnection');
var moment = require('moment')

router.get('/', function(req, res, next) {
  var query = 'SELECT * FROM emotions';
  connection.query(query, function(err, emotions) {
    res.render('imgSend', {
      emotions: emotions
    });
  });
});

router.post('/', function(req, res, next) {
  var witticism = req.body.witticism;
  var imagePath = '/images/' + req.body.image_path;
  var emotionId = req.body.emotion_id;
  var createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
  var query = 'INSERT INTO witticisms (witticism, image_path, emotion_id, created_at) VALUES ("' + witticism + '", "' + imagePath + '", "' + emotionId + '", "' + createdAt + '")';
  connection.query(query, function(err, rows) {
    res.redirect('/imgSend');
  });
});

module.exports = router;
