/**
 * Created by tom on 06/11/16.
 */

var io = require("io");
var socket;

function onLoad() {
    console.log("On load");
    socket = io.connect(SERVER, {transports: ["websocket"]});
    this.setEventHandlers();
    this.geoLocation();
}

function setEventHandlers() {
    console.log("Event handlers set");
    socket.on("connect", this.onSocketConnected);
    socket.on("newQuestion", this.onNewQuestion);
}

function onSocketConnected() {
    console.log("Socket connected");
}

function getQuestion(){

}

function postAnswer(answer){
    socket.emit('postQuestionAnswer', answer);
}