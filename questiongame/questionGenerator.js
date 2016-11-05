/**
 * Created by tom on 05/11/16.
 */

var sqlite = require("sqlite3").verbose();
var db;

//Fucking async programming why the fuck would anyone ever want to program like this

function QuestionGenerator(callback){
    this.currentQuestionId = null;
    this.currentQuestionAnswer = null;
    this.currentQuestion = null;
    this.currentAnswers = null;
    this.onCallback = callback;

    this.initDatabase = function(){
        db = new sqlite.Database("../database.db", sqlite.OPEN_READONLY, function(err){
            console.log("halp");
            if(err){
                console.error(err.message);
            }else{
                this.getQuestion();
            }
        }.bind(this));
    };

    this.handleQuestion = function(err, question){
        if(err){
            return console.error("Couldn't get question from db: " + err.message);
        }else{
            this.currentQuestion = question;
            this.getAnswers();
        }
    };

    this.getQuestion = function(){
        console.log("im trapped in a function");

        var statement = db.prepare("SELECT `id`, `questionText`, `questionAnswer` FROM `questions` ORDER BY RANDOM() LIMIT 1");

        statement.get(this.handleQuestion.bind(this));
    }

    this.getAnswers = function(){

        var statement = db.prepare("SELECT `questionAnswers`.`id`, `answerText` FROM `questionAnswers` JOIN `questionQuestionAnswers` ON `questionAnswers`.`id`= `questionQuestionAnswers`.`answerID` WHERE `questionID` = ?", this.currentQuestion.id);

        statement.all(this.handleAnswers.bind(this));
    };

    this.handleAnswers = function(err, rows){
        if(err){
            return console.error("Couldn't get answers from db: " + err.message);
        }else{
            this.currentAnswers = rows;
            this.onCallback(this.currentQuestion, rows);
        }
    };

    this.verifyQuestion = function(answerID){
        return (answerID == this.currentQuestionAnswer);
    };

}

module.exports = QuestionGenerator;