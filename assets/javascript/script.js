// JS File

//onkeypressed

var arrAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Then define counters for Win, Loose, # guesses, #opportunities left

var ansArr = [];
var winCounter = 0;
var lostCounter = 0;
var guessCounter = 0;
var oppCounter = 9;
var randomLetter = "";

// Function for Random letter
function CompGame() {
    randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
    console.log(randomLetter); //remove this after game is running
}

CompGame();
document.getElementById("win").textContent = winCounter;
document.getElementById("lost").textContent = lostCounter;

document.onkeyup = function (event) {

    var userGuess = event.key; 

    document.getElementById("userEntry").value = " ";

    var userGuessL = userGuess.toLowerCase();

    ansArr.push(userGuessL);

    console.log(ansArr);

    document.getElementById("yourPicks").textContent = ansArr;

    guessCounter++;

    console.log(guessCounter);

    document.getElementById("guessP").textContent = guessCounter;

    oppCounter--;

    console.log(oppCounter);

    document.getElementById("chancesLeft").textContent = oppCounter;

    if (randomLetter === userGuessL) {

        winCounter++;
        console.log(winCounter);
        document.getElementById("win").textContent = winCounter;
        CompGame();
        console.log(randomLetter); //remove this after game is running
        console.log(guessCounter);
        document.getElementById("guessP").textContent = guessCounter;
        guessCounter = 0;
        oppCounter = 9;
        document.getElementById("gameOutput").textContent = "You won! Im ready, enter your new guess to keep playing";
        resetGame();
        CompGame();
    }
    else {
        console.log(oppCounter);
        document.getElementById("chancesLeft").textContent = oppCounter;
        console.log(guessCounter);
        document.getElementById("guessP").textContent = guessCounter;

        if (guessCounter < 9) {

            document.getElementById("gameOutput").textContent = "keep trying!";

        }


        else {
            lostCounter++;
            document.getElementById("lost").textContent = lostCounter;
            CompGame();
            document.getElementById("gameOutput").textContent = "You Loose! enter your new guess to keep playing";
            resetGame()
        }
    }


}




function resetGame() {

    guessCounter = 0;
    oppCounter = 9;
    ansArr.splice(0, 9);


}


document.getElementById("reset").addEventListener("click", resetGame);


