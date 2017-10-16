//A random word is selected from the wordsGuess array and exported

var wordsGuess = ["Frankenstein", "Dracula", "Count Chocula", "Boogey Man", "Mummy", "Werewolf"];

var randomIndex = Math.floor(Math.random() * wordsGuess.length);

var randomWord = wordsGuess[randomIndex];

exports.randomWord = randomWord;