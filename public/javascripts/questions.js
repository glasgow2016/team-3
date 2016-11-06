/**
 * Created by tom on 06/11/16.
 */

var socket;
var correctAnswer = null;

function onLoad() {
    console.log("On load");
    socket = io.connect(SERVERADDRESS, {transports: ["websocket"]});
    this.setEventHandlers();
    this.geoLocation();
}

function setEventHandlers() {
    console.log("Event handlers set");
    socket.on("connect", this.onSocketConnected);
}

function onSocketConnected(client) {
    console.log("Socket connected");
    client.on("newQuestion", this.onNewQuestion);
    client.emit("getNewQuestion");
}

function onNewQuestion(data){
    var pageQuestion = document.getElementByID("question");
    var answerContainer = document.getElementByID("answers");

    if(data.question){
        correctAnswer = question.questionAnswer;
        pageQuestion.innerHTML = data.question;
    }

    if(data.answers){
        for(answer in answers){
            answerContainer.innerHTML += "<li id=" + answer.id + ">"+answer.answerText+"</li>";
        }
    }
}

function postAnswer(answer){
    socket.emit('postQuestionAnswer', answer);
}