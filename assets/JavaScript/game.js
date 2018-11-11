var alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var winPrompt = document.querySelector("#winPrompt");
var lossPrompt = document.querySelector("#lossPrompt");
var guessesRemainingPrompt = document.querySelector("#guessesRemainingPrompt");
var guessesAttemptedPrompt = document.querySelector("#guessesAttemptedPrompt")


var playerWinCount = 0;
var playerLossCount = 0;
var playerGuessesRemaining = 12;
var playerGuessesAttempted = [];
var randomChar = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];


document.addEventListener('keyup', function (event) {

    //If player uses a key that is not in array, the event will not execute
            if (alphabetArray.indexOf(event.key) > -1) {
            guessCheck();
    }
});

    function guessCheck(){
        if (event.key === randomChar) {

        //When the player wins, increase the Wins counter,
        playerWinCount++;
        winPrompt.textContent = playerWinCount;

        //and start the game over again
        reset();
        }   else {

            //When a guess is in correct, the guess should be be pushed into the guessesMade array and then displayed.
            playerguessesAttempted.push(event.key);
             guessesAttemptedPrompt.textContent = playerGuessesAttempted;

            //When a guess is incorrect, guesses left will reduce by one and then displayed.
            playerGuessesRemaining--;
            guessesRemainingPrompt.textContent = playerGuessesRemaining;

            //When the playerGuessesRemaining reaches 0, the userLossCount value will increase by one and then displayed.
            if (playerGuessesRemaining === 0) {
            playerLossCount++;
            lossPrompt.textContent = playerLossCount;

            //and start the game over again
            reset();
        }
    }
}

    function reset(){

        //Generate a new random number.
        randomChar = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];

        //When the game ends, guesses made should reset to null
        playerGuessesAttempted = [];
        guessesAttemptedPrompt.textContent = playerGuessesAttempted;

        //When the game ends, guesses left should reset to 12
        playerGuessesRemaining = 12;
        guessesRemainingPrompt.textContent = playerGuessesRemaining;
}