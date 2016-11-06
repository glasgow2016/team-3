/**
 * Created by tom on 06/11/16.
 */

var socket;
var correctAnswer = null;

function onLoad() {
    console.log("On load");
    socket = io.connect("http://localhost:8080", {transports: ["websocket"]});
    setEventHandlers();
}

function setEventHandlers() {
    console.log("Event handlers set");
    socket.on("connect", this.onSocketConnected);
    socket.on("newQuestion", this.onNewQuestion);
}

function onSocketConnected() {
    console.log("Socket connected wew");
    socket.emit("getNewQuestion");
}

function onNewQuestion(data){
    console.log("New question!");
    var pageQuestion = document.getElementById("question");
    var answerContainer = document.getElementById("answers");

    if(data.question){
        correctAnswer = data.question.questionAnswer;
        pageQuestion.innerHTML = data.question;
    }

    if(data.answers){
        for(var answer in data.answers){
            answerContainer.innerHTML += "<li id=" + answer.id + ">"+answer.answerText+"</li>";
        }
    }
}

function postAnswer(answer){
    socket.emit('postQuestionAnswer', answer);
}

onLoad();