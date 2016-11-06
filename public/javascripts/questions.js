/**
 * Created by tom on 06/11/16.
 */
var socket = require("socket.io");

function getQuestion(){

}

function postAnswer(answer){
    socket.emit('postQuestionAnswer', answer);
}