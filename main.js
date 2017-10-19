//Modularization - required files and variables
var gameFile = require("./game.js");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var randomWord = gameFile.randomWord;
var myWord = new wordConstructor.wordConstructor(gameFile.randomWord);
var letterGuessed;
var maxGuess = 15;
exports.letter;

//NPM
var inquirer = require("inquirer");

function makeGuess(){
    console.log(myWord.toString());

    if(myWord.userGuesses.length >= maxGuess){
        console.log("You have NO more guesses");

        return;
    }

    inquirer.prompt([{
        name: "letter",
        type: "text",
        message: "Please enter a letter",
        // validate: function(str){
        //     if (str.length != 1) return false;
        //     var reject = new Reject("^[a-zA-Z\s]{1,1}$");
        //     return reject.test(str);
        // }
    }]).then(function(letterInput){
        var letter = letterInput.letter;
        myWord.findLetter(letter);

        if (myWord.isComplete()){
            console.log("Correct! The word was " + myWord.toString() + "!");
            return;
        }

        console.log("------Next guess------");
        console.log("You have " + (maxGuess - myWord.userGuesses.length) + " guesses left");
        makeGuess();
        });
}

//Starts the game:
makeGuess();


