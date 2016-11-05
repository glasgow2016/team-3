var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var instagram = require("./instagramWatcher");
GLOBAL.instagramDetails = [];
var questiongenerator = require("./questionGenerator");
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
var server = require("http").Server(app);
server.listen(8080);
var util = require("util"),
    io = require("socket.io")(server);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

var socket;

function init() {


  function onInstagramFetched(data) {
    // instag
    GLOBAL.instagramDetails = [];
    JSON.parse(data)["data"].forEach(function(item) {

      if (item["type"] == "image") {
        GLOBAL.instagramDetails.push({"thumb": item["images"]["thumbnail"]["url"], "image": item["images"]["standard_resolution"]["url"], url: item["link"], "username": item["user"]["username"]})
      }
    })
  }

  var inst = new instagram("beautiful", onInstagramFetched);
  inst.getPosts();

  function onQuestionFetched(question, answers){
    console.log(question);
    console.log(answers);
  }

  console.log("test")

  var questiongen = new questiongenerator(onQuestionFetched);
  questiongen.initDatabase();


  io.on("connection", onSocketConnection);
  beaconGenerator();
}

function onSocketConnection(client) {
  console.log("Socket connection");
  client.emit("newConnection");
}

function beaconGenerator(){

  var beacons = ["Falkirk Community Stadium","The Helix","The Kelpies Hub","The Wetland and River Carron","Abbotshaugh Woods","Dawson Mural","Carron Works","Forth & Clyde Canal","Rosebank Distillery","The Falkirk Wheel","Roughcastle Tunnel","Union Canal","Falkirk High Railway Station","Falkirk Tunnel","Callendar Park","Callendar House","Westquarter Glen","Primrose Road Underpass"]
  var beaconNo = range(0,beacons.length);
  var newBeaconTime = 30000;
  var currentBeacon = "";

  io.sockets.emit("newBeacon", beacons[getBeacon(beaconNo,currentBeacon)]);

  setInterval(function(){
      io.sockets.emit("newBeacon", beacons[getBeacon(beaconNo,currentBeacon)]);
  }, newBeaconTime);

  function getBeacon(listB,currentB) {
    if (currentB === "") {
      return listB[Math.floor(Math.random() * listB.length)];
    }
    var ranBea = listB[Math.floor(Math.random() * listB.length)];
    if (ranBea == currentB) {
      ranBea = getBeacon(listB, ranBea);
    }
    return ranBea;
  }


  function range(low,high){
    var arr = [];
    for (var i = low;i<high;i++){
      arr.push(i);
    }
    return arr;
  }
}


init();
module.exports = app;
