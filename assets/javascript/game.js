//declare and initialize array
var words = ["lumos", "alohomora", "quidditch", "gryffindor", "ravenclaw", "hufflepuff", "patronus", "hogwarts", "dumbledore","slytherin"]
//assigning variabls 
var randWord = "";
var lettersOfWord = []
var underScores = 0;
var underScoresCorrect = [];
var wrongGuess = [];

//assigned variables for restart game
var wins = 0;
var losses = 0;
var guessesRemaining = 15;

//choose word randomly, seperating each letter &
//adding underscores in place of each letter
function Game() {
    
    randWord = words[Math.floor(Math.random() * words.length)];

    lettersOfWord = randWord.split("");

    underScores = lettersOfWord.length;

    for (var i = 0; i < underScores; i++) {
        underScoresCorrect.push("_");
    }

    document.getElementById("currentword").innerHTML = "  " + underScoresCorrect.join("  ");

    console.log(randWord);
    console.log(lettersOfWord)
    console.log(underScores)
    console.log(underScoresCorrect)
}


//restarting the game after it has been lost or won
function reset() {
    guessesRemaining = 15;
    wrongGuess = [];
    underScoresCorrect = [];
    Game()
}

//this checks each letter guessed by player to see if its right or wrong
function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < underScores; i++) {
        if (randWord[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        for (var i = 0; i < underScores; i++) {
            if (randWord[i] == letter) {
                underScoresCorrect[i] = letter;
            }
        }
    }
   
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(underScoresCorrect);
}

//completing the game
function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)
//if all letters are guessed correctly then game resets and adds to winstracker
//if there are no remaining guesses left game resets and adds to losstracker
    if (lettersOfWord.toString() == underScoresCorrect.toString()) {
        wins++;
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    
    document.getElementById("currentword").innerHTML = "  " + underScoresCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


Game()
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses); 
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}