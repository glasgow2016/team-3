var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/rpitest", function(req, res, next) {
    console.log(req.query.tagId);
    res.render('rpi_touchscreen', { title: 'RPI Internal View Test' })
});

router.get("/mobile", function(req, res, next) {
    res.render('mobile', { title: 'Mobile'})
});


router.get("/instagramFeed", function(req,res,next) {
    res.send(GLOBAL.instagramDetails)
});

router.get("/questionGame", function(req, res, next){
  res.render('questionGame', { title: 'fuck'});
});

router.get("/bluemen", function(req, res, next){
    res.render('blueMen', { title: 'Blue Men of the Minch'});
});


module.exports = router;