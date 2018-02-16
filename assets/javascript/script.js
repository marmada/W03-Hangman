// First Set up Array for Letters A-Z
var arrAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Then define counters for Win, Loose, # guesses, #opportunities left

var randomLetter = " ";
var userguess = " ";
var incorrect = [];
var winCounter = 0;
var lostCounter = 0;
var guessCounter = 0;
var oppCounter = 9;


// Set up Initial Game Scores - pending

// randomizer

function CompGame() {

    //Computer with Random funtion will pick a letter randomly for a number between 0 & 25, assign value to
    var randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
    console.log(randomLetter); //remove this after game is running
}

function userGame() {

    // c) Promt Player for input, 
    var userguess = prompt("Enter a letter between A & Z");

    console.log(userguess); 
    
    // remove this after game is running
    document.getElementById("win").innerHTML = winCounter; 
    
    // win is the id from the HTML Element
 
    //document.getElementById("yourPicks").innerHTML = incorrect;

    if (randomLetter == userguess) {

        //Winning Algorithm

        winCounter++;
        console.log(winCounter);
    
        alert("You have won " + winCounter + " games");

        //  getElementById("win").innerHtml = winCounter;

        var playAgain = confirm("Do you want to play again, click on the Magic Ball?");
        if (playAgain = true) {
            ResetGame();
            CompGame();
            userGame();
          
        }
        else {
            alert("'Game Over! You Won ' + winCounter + ' times, You Lost ' + lostCounter + ' times'");
            //getElementbyid(IMAGE), change for a GAME OVER 

        }

        //Try Again
    }
    else {
        guessCounter++;
        console.log(guessCounter);

        oppCounter--;
        console.log(oppCounter);

        if (guessCounter = 9) {
            ResetGame();
        }

        else {
            userGame();
        }
    }
}

function ResetGame() {

    alert("Game Over! You Have Won " + winCounter + " times, You Have Lost " + lostCounter + " times");
    guessCounter = 0;
    oppCounter = 9;
    incorrect.splice(0, incorrect.length);
    var playAgain = confirm("Do you want to play again, click on the Magic Ball?");
    if (playAgain = true) {
        CompGame();
        userGame();
    }
    else {
        alert("Game Over! You Won " + winCounter + " times, You Lost " + lostCounter + " times");

    }

}


CompGame();
userGame();

     //


    //if input = to Randomw Variable: winCounter++, Alert Player "You won", prompt play again? , go back to random funtion
    //if not guess counter ++, oppCounter-1, cycle runs until winCounter is true or guessCounter = 9
//    if Guess counter is = to 9 then lostCounter + 1, Alert Player "you lost" play again? OK prompt randomize, pick new value, cancel "GameOVer" , reset value



