//declare and initialize array
const word = ["LUMOS", "ALOHOMORA", "QUIDDITCH", "GRYFFINDOR", "RAVENCLAW", "HUFFLEPUFF", "PATRONUS", "HOGWARTS", "DUMBLEDORE", "SLYTHERIN"];
//choose word randomly
let randWord = Math.floor(Math.random() * word.length);
let chosenWord = word[randWord];
let rightWord = [];
let wrongWord = [];
let underScore = [];

console.log(chosenWord);

// create underscores based on length of word
let generateUnderscore = () => {
    for(let i = 0; i < chosenWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(generateUnderscore());
// Get users guess
document.addEventListener('keyup', (event) => {
    let keycode = event.keyCode;
    let keyWord = String.fromCharCode(keycode);
    console.log(keyWord);
    console.log(chosenWord.indexOf(keyWord));
//if users guess is right
    if(chosenWord.indexOf(keyWord) > -1) {
        console.log(true);
    }
    // add to right words array
    rightWord.push(keyWord);
    console.log(rightWord); 
    wrongWord.push(keyWord);
    console.log(wrongWord);  
    }
  
    
);



