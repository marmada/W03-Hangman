// JS File

var arrAbc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Then define counters for Win, Loose, # guesses, #opportunities left


var ansArr = [];
var winCounter = 0;
var lostCounter = 0;
var guessCounter = 0;
var oppCounter = 9;
var randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
console.log(randomLetter); //remove this after game is running



document.onkeyup = function(event) {


    var userGuess = event.key;
    console.log(randomLetter);
    document.getElementById("userEntry").value = " ";
    var userGuessL = userGuess.toLowerCase();
    document.getElementById("win").innerHTML = winCounter;
    document.getElementById("lost").innerHTML = lostCounter;
    console.log(userGuessL);
    ansArr.push(userGuessL);
    console.log(ansArr);
    document.getElementById("yourPicks").innerHTML = ansArr;
    guessCounter++;
    console.log(guessCounter);
    document.getElementById("guessP").textContent = guessCounter;
    oppCounter--;
    console.log(oppCounter);
    document.getElementById("chancesLeft").textContent = oppCounter;

    if (randomLetter == userGuessL) {

        winCounter++;
        console.log(winCounter);
        document.getElementById("win").innerHtml = winCounter;
        var randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
        console.log(randomLetter); //remove this after game is running
        console.log(guessCounter);
        document.getElementById("guessP").innerHtml = guessCounter;
        guessCounter=0;
        oppCounter=9;
        document.getElementById("gameOutput").textContent = "You won! Im ready, enter your new guess to keep playing";
        resetGame();
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
            var randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
            console.log(randomLetter); //remove this after game is running
            document.getElementById("gameOutput").textContent = "You Loose! enter your new guess to keep playing";
            var randomLetter = arrAbc[Math.floor(Math.random() * arrAbc.length + 1)];
            console.log(randomLetter); //remove this after game is running
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


