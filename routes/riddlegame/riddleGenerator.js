/**
 * Created by tom on 05/11/16.
 */

var sqlite = require("sqlite3").verbose();
var db = new sqlite.Database("../database.db");

function riddleGenerator(){

    this.getRiddle = function () {
        var statement = db.prepare("SELECT `id`, `riddleText` FROM `riddles` ORDER BY RANDOM() LIMIT 1");

        var question;

        statement.get(function(err, row){
            question = row;
            console.log(question);
        });git

        console.log(question);
    }

    function verifyRiddle(riddleID, answerID){

    }
};

var ridl = new riddleGenerator();
ridl.getRiddle();