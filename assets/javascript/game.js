var letterBox = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var winText = document.getElementById("winTracker");
var lossText = document.getElementById("lossTracker");
var guessText = document.getElementById("guessTracker");
var triesText = document.getElementById("guessesLeft");

var wins = 0;
var losses = 0;
var tries = 9;
var guesses = "";

var cpuChoice = Math.floor(Math.random(letterBox) * letterBox.length);
console.log(letterBox[cpuChoice]);


document.onkeyup = function(event) {
    var pcGuess = event.key;
    var lowerPcGuess = pcGuess.toLowerCase();
    
    console.log(lowerPcGuess);


    if(lowerPcGuess === cpuChoice) {
        wins++;
        console.log(wins); 
        var cpuChoice = Math.floor(Math.random(letterBox) * letterBox.length);
        console.log(letterBox[cpuChoice]);
 

                  
    }
    else(lowerPcGuess !== cpuChoice); {
        tries--;
        guesses.append(lowerPcGuess);
        console.log(tries);
    }

    if(tries === 0) {
        losses++;
        var cpuChoice = Math.floor(Math.random(letterBox) * letterBox.length);
        console.log(letterBox[cpuChoice]);

    }
}

winText.textContent = "Wins: " + wins;
lossText.textContent = "Losses: " + losses;
triesText.textContent = "Attempts: " + tries;
guessText.textContent = "Guesses you have already made: " + guesses;