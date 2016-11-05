var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/mobile", function(req, res, next) {
  res.render('index', { title: ''})
});

router.get("/rpitest", function(req, res, next) {
  res.render('rpi_touchscreen', { title: 'RPI Internal View Test'})
});

router.get("/instagramFeed", function(req,res,next) {
    res.send(GLOBAL.instagramDetails)
});

router.get("/questionGame", function(req, res, next){
  res.render('questionGame', { title: 'fuck'});
});

module.exports = router;