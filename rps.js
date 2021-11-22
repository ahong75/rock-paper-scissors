function computerPlay() {
    let rand = Math.floor(Math.random() * 3) + 1;
    switch(rand) {
        case(1): return "Rock";
        case(2): return "Paper";
        case(3): return "Scissors";
    }
    return;
}

function winMessage(hand1, hand2) {
    let message = `You Win! ${hand1} beats ${hand2}`
    return message;
}

function loseMessage(hand1, hand2) {
    let message = `You Lose! ${hand2} beats ${hand1}`;
    return message;
}

function playRPS(playerMove, computerSelection) {
    let playerSelection = playerMove.slice(0,1).toUpperCase() + playerMove.substr(1).toLowerCase();
    if(playerSelection == computerSelection) {
        return 2
    }
    else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Rock")
    ) {
        return 1
    }
    return 0
}

const playerSelection = "roCk";
const computerSelection = computerPlay();
console.log(playRPS(playerSelection, computerSelection));

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for(let i=1; i<=5; i++) {
        let playerSelection = prompt("Choose Rock, Paper, or Scissors");
        let computerSelection = computerPlay();
        let result = playRPS(playerSelection, computerSelection);
        if(result == 2) {
            console.log("It's a Tie");
        }
        if(result == 1) {
            playerScore++;
            console.log(winMessage(playerSelection, computerSelection));
        }
        if(result == 0) {
            computerScore++;
            console.log(loseMessage(playerSelection, computerSelection));
        }
    }
    if(playerScore > computerScore) {
        console.log("You win the game!");
    }
    else if(computerScore > playerScore) {
        console.log("Sorry, you lose");
    }
    else {
        console.log("The game ends in a draw");
    }
}
game();