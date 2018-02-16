// JS File

var arrAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 //Then define counters for Win, Loose, # guesses, #opportunities left

var randomLetter = " ";
var userguess = " ";
var ansArr = [];
var winCounter = 0;
var lostCounter = 0;
var guessCounter = 0;
var oppCounter = 9;


 //Set up Initial Game Scores - pending


function CompGame() {

   // Computer with Random funtion will pick a letter randomly for a number between 0 & 25, assign value to
    var randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
    console.log(randomLetter); //remove this after game is running

     // Set Counters to start point

    document.getElementById("win").innerHTML = winCounter; 
    document.getElementById("lost").innerHTML = lostCounter;
    document.getElementById("guessP").innerHTML = guessCounter;
    document.getElementById("chancesLeft").innerHTML = oppCounter;
}

   
  
function userGame() {

   //Promt Player for input, 
    var userguess = prompt("Enter a letter between A & Z");
    console.log(userguess); 
    ansArr.push(userguess);
    console.log(ansArr);
    document.getElementById("yourPicks").innerHTML = ansArr;

    if (randomLetter === userguess) {
        winCounter++;
        console.log(winCounter);
        document.getElementById("win").innerHtml = winCounter;
        alert("GameOver!! Press Enter to Reset the Game")

    
        
          
    }
    else {
        guessCounter++;
        console.log(guessCounter);
        document.getElementById("guessP").innerHtml = winCounter;
        oppCounter--;
        console.log(oppCounter);
        document.getElementById("chancesLeft").innerHtml = winCounter;

        if (guessCounter === 9) {

            lostCounter++;
            alert("Click on Reset to Play Again")
        }

        else{
            userGame();
        }
    }
}

function ResetGame() {
    
    guessCounter = 0;
    oppCounter = 9;
    ansArr.splice(0, 9);
    alert("To play again, click on the Start sign")
    }

document.getElementById("start").addEventListener("click", CompGame);
document.getElementById("guessB").addEventListener("click", userGame);
document.getElementById("reset").addEventListener("click", ResetGame);
