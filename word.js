//This compares the letters guessed to the selected random word

var letterConstructor = require("./letter.js");

function word(value){
    this.value = value;
    this.letters = [];
    this.userGuesses = "";
    for (var i = 0; i < this.value.length; i++){
        this.letters.push(new letterConstructor.letter(this.value[i]));
    }
};

word.prototype.isComplete = function(){
    for (var i = 0; i < this.letters.length; i++) {
        if (!this.letters[i].show) {
            return false;
        } 
    }
};

word.prototype.findLetter = function(letter){
    var lowerCaseLetter = letter.toLowerCase();

    if (this.userGuesses.indexOf(lowerCaseLetter) != -1){
        return "Duplicate";
    }
    //records the guess
    this.userGuesses += lowerCaseLetter; 
    
    for (var i = 0; i < this.letters.length; i++){
        if(this.letters[i].value.toLowerCase() == lowerCaseLetter){
            this.letters[i].show = true;
        }
    }
};

word.prototype.toString = function() {
    var output = "";

    for (var i = 0; i < this.letters.length; i++){
        output += this.letters[i].printInfo();
    }
    return output;
};

exports.wordConstructor = word;