//declare and initialize array
var words = ["lumos",
    "mcgonagall", "alohomora",
    "hippogriff", "quidditch",
    "durmstrang", "gryffindor",
    "beauxbatons", "ravenclaw",
    "quibbler", "hufflepuff",
    "norbert", "patronus",
    "hagrid", "hogwarts",
    "harry", "dumbledore",
    "hermione", "ron",
    "gringotts", "slytherin",
    "neville", "luna",
    "potions", "dobby",
    "draco", "voldemort",
    "hogsmeade", "diagonalley",
    "hedwig", "ginny",
    "bellatrix", "snape",
    "nagini", "madeye",
    "sirius", "weaslytwins",
    "azkaban", "dementor",
    "headboy", "headgirl",
    "prefect", "maraudersmap",
    "umbridge", "horcrux",
    "accio", "riddikulus",
    "muggle"
]

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

    console.log(randWord)
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

//variables for audio function
var hedwig7 = document.getElementById("hedwig7");
var hedwig8 = document.getElementById("hedwig8");
var harrypotter = document.getElementById("harrypotter");
//audio function
function aud() {
    //lumos image
    if (randWord === words[0]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/lumos.gif";
    }
    //mcgonagall image
    else if (randWord === words[1]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/mcgonagall.gif";
    }
    //alohomora image
    else if (randWord === words[2]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/alohomora.gif";
    }
    //hippogriff image
    else if (randWord === words[3]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hippogriff.gif";
    }
    //quidditch image
    else if (randWord === words[4]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/quidditch.gif";
    }
    //durmstrang image
    else if (randWord === words[5]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/durmstrang.gif";
    }
    //gryffindor image
    else if (randWord === words[6]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/gryffindor.gif";
    }
    // image
    else if (randWord === words[7]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/beauxbatons.gif";
    }
    // image
    else if (randWord === words[8]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/ravenclaw.gif";
    }
    // image
    else if (randWord === words[9]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/quibbler.gif";
    }
    // image
    else if (randWord === words[10]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hufflepuff.gif";
    }
    // image
    else if (randWord === words[11]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/norbert.gif";
    }
    // image
    else if (randWord === words[12]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/patronus.gif";
    }
    // image
    else if (randWord === words[13]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hagrid.gif";
    }
    // image
    else if (randWord === words[14]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hogwarts.gif";
    }
    // image
    else if (randWord === words[15]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/harrypotter.gif";
    }
    // image
    else if (randWord === words[16]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/dumbledor.gif";
    }
    // image
    else if (randWord === words[17]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hermione.gif";
    }
    // image
    else if (randWord === words[18]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/ron.gif";
    }
    // image
    else if (randWord === words[19]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/gringots.gif";
    }
    // image
    else if (randWord === words[20]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/slytherin.gif";
    }
    // image
    else if (randWord === words[21]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/neville.gif";
    }
    // image
    else if (randWord === words[22]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/luna.gif";
    }
    // image
    else if (randWord === words[23]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/potions.jpeg";
    }
    // image
    else if (randWord === words[24]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/dobby.gif";
    }
    // image
    else if (randWord === words[25]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/dracomalfoy.gif";
    }
    // image
    else if (randWord === words[26]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/voldemort.gif";
    }
    // image
    else if (randWord === words[27]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hogsmeade.gif";
    }
    // image
    else if (randWord === words[28]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/diagonalley.gif";
    }
    // image
    else if (randWord === words[29]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/hedwig.gif";
    }
    // image
    else if (randWord === words[30]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/ginny.gif";
    }
    // image
    else if (randWord === words[31]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/bellatrix.gif";
    }
    // image
    else if (randWord === words[32]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/snapeapproves.gif";
    }
    // image
    else if (randWord === words[33]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/nagini.gif";
    }
    // image
    else if (randWord === words[34]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/madeyemoody.gif";
    }
    // image
    else if (randWord === words[35]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/sirius.gif";
    }
    // image
    else if (randWord === words[36]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/twins.gif";
    }
    // image
    else if (randWord === words[37]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/azkaban.gif";
    }
    // image
    else if (randWord === words[38]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/dementor.gif";
    }
    // image
    else if (randWord === words[39]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/headboy.jpeg";
    }
    // image
    else if (randWord === words[40]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/headgirl.jpeg";
    }
    // image
    else if (randWord === words[41]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/prefect.gif";
    }
    // image
    else if (randWord === words[42]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/maraudersmap.gif";
    }
    // image
    else if (randWord === words[43]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/umbridge.gif";
    }
    // image
    else if (randWord === words[44]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/horcrux.gif";
    }
    // image
    else if (randWord === words[45]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/accio.gif";
    } else if (randWord === words[46]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/riddikulus.gif";
    } else if (randWord === words[47]) {
        harrypotter.pause();
        hedwig7.play();
        document.getElementById("image").src = "./assets/images/muggle.gif";
    }
};

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
    } else {
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
        aud()
        reset()
        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        hedwig8.play();
        document.getElementById("image").src = "./assets/images/tryagain.jpg"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    document.getElementById("currentword").innerHTML = "  " + underScoresCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}

//start game function
Game()
document.onkeyup = function(event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guesses);
    complete();
    console.log(guesses);

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}