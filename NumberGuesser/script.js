let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//randomly generate random target value
const generateTarget = () => Math.floor(Math.random() *9);

//function to determine who is closer to out target. Added alert if input is out of range
const compareGuesses = (humanGuess,computerGuess,target1) => {
    if (humanGuess < 0 || humanGuess > 9){
        alert('Out of Range');
    }
    const humandif = Math.abs(humanGuess-target1);
    const computerdif = Math.abs(computerGuess-target1);
    return (humandif<=computerdif) ? true : false;
}

//function that update the scoreboard
const updateScore = str => {
    if (str==='human') humanScore++;
    else computerScore++;
}

//function to proceed to next round
const advanceRound = () => {
    currentRoundNumber++;
}

//const ex1 =generateTarget();
//console.log(ex1);
//console.log(compareGuesses(7,9,ex1));