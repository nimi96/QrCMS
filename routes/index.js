var express = require('express');
var qr = require('node-qr-image');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Index' });


  });






module.exports = router;
