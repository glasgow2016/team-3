/**
 * Created by tom on 05/11/16.
 */

var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database("../database.db");

//Fucking async programming why the fuck would anyone ever want to program like this

function QuestionGenerator(callback){
    this.currentQuestionId = null;
    this.currentQuestionAnswer = null;
    this.onCallback = callback;
}

QuestionGenerator.prototype.getQuestion = function(){

    var $this = this;
    var statement = db.prepare("SELECT `id`, `questionText`, `questionAnswer` FROM `questions` ORDER BY RANDOM() LIMIT 1");

    statement.get(function(err, row){
        if(err){
            return console.error("Couldn't get question from db: " + err.message);
        }else{
            $this.handleQuestion(row);
        }
    });
};

QuestionGenerator.prototype.getAnswers = function(question){
    var $this = this;
    var statement = db.prepare("SELECT `questionAnswers`.`id`, `answerText` FROM `questionAnswers` JOIN `questionQuestionAnswers` ON `questionAnswers`.`id`= `questionQuestionAnswers`.`answerID` WHERE `questionID` = ?", question.id);

    statement.all(function(err, rows){
        if(err){
            return console.error("Couldn't get answers from db: " + err.message);
        }else{
            $this.handleAnswers(question, rows);
        }
    });
};

QuestionGenerator.prototype.handleQuestion = function(question){
    var $this = this;
    this.currentQuestionAnswer = question.questionAnswer;

    $this.getAnswers(question);
};

QuestionGenerator.prototype.handleAnswers = function(question, answers){
    var $this = this;
    $this.onCallback(question, answers)
};

QuestionGenerator.prototype.verifyQuestion = function(answerID){
    return (answerID == this.currentQuestionAnswer);
};

module.exports = QuestionGenerator;