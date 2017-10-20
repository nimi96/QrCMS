var bodyParser = require('body-parser');
var express = require('express');
var router = express.Router();

var qr = require('node-qr-image');
/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('respond with a resource');
});




router.post('/data',  function(req, res, next) {

var tep= req.body.data;

console.log(tep);


//res.send(tep);

var qr_svg = qr.image(tep, { type: 'png' }  );



qr_svg.pipe(require('fs').createWriteStream('public/images/new3.png'));


var svg_string = qr.imageSync('new3', { type: 'png' });

var n1=qr.svgObject(tep ,[ size='37' ]);
console.log(n1);


res.send(n1.path);








});


























router.get('/test',  function(req, res, next) {


res.send("hey");

});







module.exports = router;
