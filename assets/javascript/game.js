var letterBox = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var winText = document.getElementById("winTracker");
var lossText = document.getElementById("lossTracker");
var guessText = document.getElementById("guessTracker");
var triesText = document.getElementById("guessesLeft");

var wins = 0;
var losses = 0;
var cpuChoice;
var tries = 9;
var guesses = [];

document.onkeyup = function (event) {
    var pcGuess = event.key;
    var lowerPcGuess = pcGuess.toLowerCase();

    if (lowerPcGuess === cpuChoice) {
        wins++;
        startGame()
    }
    else if (guesses.includes(lowerPcGuess)) {
        alert("You've already tried that")
    }
    else {
        tries--;
        guesses.push(lowerPcGuess);
    }
    if (tries === 0) {
        losses++;
        startGame()
        tries = 9;
    }

    winText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    triesText.textContent = "Attempts: " + tries;
    guessText.textContent = "Guesses you have already made: " + guesses;
}

winText.textContent = "Wins: " + wins;
lossText.textContent = "Losses: " + losses;
triesText.textContent = "Attempts: " + tries;
guessText.textContent = "Guesses you have already made: " + guesses;

function startGame() {
    cpuChoice = letterBox[Math.floor(Math.random() * letterBox.length)];
    tries = 9;
    guesses = [];
}

startGame()