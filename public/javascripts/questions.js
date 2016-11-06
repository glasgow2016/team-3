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
    socket.emit("getNewQuestion",{});
}

function onNewQuestion(data){
    console.log("New question!");
    var pageQuestion = document.getElementById("question");
    var answerContainer = document.getElementById("answers");

    if(data.question){
        console.log(data.question)
        correctAnswer = data.question.questionAnswer;
        pageQuestion.innerHTML = data.question.questionText;
    }

    if(data.answers){
        console.log(data.answers);

        for(var answer in data.answers){
            console.log(data.answers[answer]);
            answerContainer.innerHTML += "<li><input type=\"submit\" id=" + data.answers[answer].id + " value="+data.answers[answer].answerText+"/></li>";
        }
    }
}

function postAnswer(answer){
    socket.emit('postQuestionAnswer', answer);
}

onLoad();