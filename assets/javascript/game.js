//JavaScript Document
var $ = function (id) {
    return document.getElementById(id);
}

//declare and initialize array
var game = ["LUMOS", "ALOHOMORA", "QUIDDITCH", "GRYFFINDOR", "RAVENCLAW", "HUFFLEPUFF", "EXPECTO PATRONUM", "HOGWARTS", "DUMBLEDORE", "SLYTHERIN"]
var choice = Math.floor(Math.random()*11);
var answer = game[choice];
var myLength = answer.length;
var win = myLength;
var letters = answer.split('');
var attemptsLeft= 15;
var output="";
var userLetter="";


var setup = function()
{
    for (var i=0; i< answer.length; i++)
    {
        display[i] = "- ";
        output = output + display[i]
    }
    document.getElementById("game").innerHTML= output;
    output="";
}

var submit = function()
{
    output = "";
    userLetter=$("letter").nodeValue;
    $("letter").value ="";

    for (var c= 0; c< answer.length; c++)
    {
        console.log(letters[c]);
        if (userLetter.toUpperCase() == letters[c])
        {
            display[c] = userLetter.toUpperCase();
            win--;
        }
            output = output + display[c] + " ";
    }
}

document.getElementById("guesses").innerHTML= output;
output="";
attemptsLeft--;

if (win < 1)
{
    document.getElementById("guesses").innerHTML = "YOU'RE A PREFECT!!!";
}
else if (attemptsLeft < 1)
{
    document.getElementById("guesses").innerHTML = "ROTTEN LUCK! TRY AGAIN!"
}
else 
{
    document.getElementById("guesses").innerHTML = "You have" + attemptsLeft + "guesses left";
}

