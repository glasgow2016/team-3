/**
 * Created by tom on 05/11/16.
 */

var sqlite = require("sqlite3").verbose();


//Fucking async programming why the fuck would anyone ever want to program like this

function QuestionGenerator(callback){
    var currentQuestion = null;
    var currentAnswers = null;
    var onCallback = callback;
    var db = null;

    var initDatabase = function(){
        db = new sqlite.Database("database.db", sqlite.OPEN_READONLY, function(err){
            console.log("halp");
            if(err){
                console.error(err.message);
            }else{
                getQuestion();
            }
        });
    };

    var getQuestion = function(){
        var statement = db.prepare("SELECT `id`, `questionText`, `questionAnswer` FROM `questions` ORDER BY RANDOM() LIMIT 1");
        statement.get(handleQuestion);
    };

    var handleQuestion = function(err, question){
        if(err){
            return console.error("Couldn't get question from db: " + err.message);
        }else{
            currentQuestion = question;
            getAnswers();
        }
    };

    var getAnswers = function(){
        var statement = db.prepare("SELECT `questionAnswers`.`id`, `answerText` FROM `questionAnswers` JOIN `questionQuestionAnswers` ON `questionAnswers`.`id`= `questionQuestionAnswers`.`answerID` WHERE `questionID` = ?", currentQuestion.id);
        statement.all(handleAnswers);
    };

    var handleAnswers = function(err, rows){
        if(err){
            return console.error("Couldn't get answers from db: " + err.message);
        }else{
            currentAnswers = rows;
            onCallback(currentQuestion, rows);
        }
    };

    var verifyQuestion = function(answerID){
        return (answerID == currentQuestion.questionAnswer);
    };

    return {
        initDatabase: initDatabase,
        getQuestion: getQuestion,
        handleQuestion: handleQuestion,
        getAnswers: getAnswers,
        handleAnswers: handleAnswers
    }

}

module.exports = QuestionGenerator;