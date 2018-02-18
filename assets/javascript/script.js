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

document.getElementById("reset").addEventListener("click",resetGame);

function CompGame() {
    randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
 
}

CompGame();
document.getElementById("win").textContent = winCounter;
document.getElementById("lost").textContent = lostCounter;

//Initiate function, grab info from Input area

document.onkeyup = function (event) {

    var userGuess = event.key; 

    //clear our input area once value is captured

    document.getElementById("userEntry").value = " ";

    // Validate Entry to be lowerCase

    var userGuessL = userGuess.toLowerCase();

    // Validate entry to be between a-z

   if(arrAbc.indexOf(userGuessL)>=0){ //if value is part of the "avalable variable array, start game"
   
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

        // winning algorith

        winCounter++;
        console.log(winCounter);
        document.getElementById("win").textContent = winCounter;
        CompGame();
       
        console.log(guessCounter);
        document.getElementById("guessP").textContent = guessCounter;
        guessCounter = 0;
        oppCounter = 9;
        document.getElementById("gameOutput").textContent = "You won! Im ready, enter your new guess to keep playing";
        resetGame();
        CompGame();
    }

    else {

        //entry not iqual to Computer Random letter

        console.log(oppCounter);
        document.getElementById("chancesLeft").textContent = oppCounter;
        console.log(guessCounter);
        document.getElementById("guessP").textContent = guessCounter;

        // user has guesses 9 times

        if (guessCounter < 9) {

            document.getElementById("gameOutput").textContent = "keep trying!";

        }
// user can continue guessing until reaching 9

        else {
            lostCounter++;
            document.getElementById("lost").textContent = lostCounter;
            CompGame();
            document.getElementById("gameOutput").textContent = "You Loose! enter your new guess to keep playing";
            resetGame()
        }
    }
   }

   else { 

    // user entry is not valid (numbers, symbols, other entries (tab, return))
    
    document.getElementById("gameOutput").textContent = "Invalid Entry! Your Entry must be between a-z";
    return;
   }

}




function resetGame() {

    guessCounter = 0;
    oppCounter = 9;
    ansArr.splice(0, ansArr.length);

}





