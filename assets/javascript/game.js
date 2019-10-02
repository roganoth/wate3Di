var letterBox = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var cpuChoice = Math.floor(Math.random(letterBox) * letterBox.length);

console.log(letterBox[cpuChoice]);

document.onkeyup = function(event) {
    var pcGuess = event.key;
    var lowerPcGuess = pcGuess.toLowerCase();
    var wins = 0;
    
    console.log(lowerPcGuess);


    if(lowerPcGuess === cpuChoice) {
        wins ++
       document.getElementById("winTracker").textContent(wins) 
       
    }
}