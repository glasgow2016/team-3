/**
 * Created by tom on 05/11/16.
 */

var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database("../database.db");

function questionGenerator(){

    //Fucking async programming why the fuck would anyone ever want to program like this
    var currentQuestionId = null;
    var currentQuestionAnswer = null;

    this.getQuestion = function(){
        var statement = db.prepare("SELECT `id`, `questionText`, `questionAnswer` FROM `questions` ORDER BY RANDOM() LIMIT 1");

        statement.get(function(err, row){
            if(err){
                return console.error("Couldn't get question from db: " + err.message);
            }else{
                handleQuestion(row);
            }
        });
    };

    function getAnswers(questionId){
        var statement = db.prepare("SELECT `questionAnswers.id`, `answerText` FROM `questionAnswers` JOIN `questionQuestionAnswers`" +
                                        " ON `questionAnswers.id` = `questionQuestionAnswers.answerID` WHERE questionQuestionAnswers.questionID = ?", questionId);

        statement.get(function(err, rows){
            if(err){
                return console.error("Couldn't get answers from db: " + err.message);
            }else{
                handleAnswers(rows);
            }
        });
    }

    function handleQuestion(question){
        console.log(question);
        currentQuestionId = question.id;
        currentQuestionAnswer = question.questionAnswer;
        var questionBox = document.getElementbyId("question");

        if(questionBox){
            questionBox = question.questionText;
        }

        getAnswers(question.id);
    }

    function handleAnswers(answers){
        var answerList = document.getElementbyId("answers");

        for(var answer in answers){
            answerList.innerHTML += "<li id='"+ answer.id+"'>" + answer.answerText + "</li>";
        }
    }

    function verifyQuestion(answerID){
        return (answerID == currentQuestionId);
    }
};

var ridl = new questionGenerator();
ridl.getQuestion();