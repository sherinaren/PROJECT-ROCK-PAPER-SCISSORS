function computerPlay() 
{
    let rng = Math.random(); 
    if (rng<=.33) {
        return 'rock';
    } else if (rng<=.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(playerSelection, computerSelection) {
    let r = 'rock';
    let p = 'paper'; 
    let s = 'scissors';
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'You\'re both winners!';
    } else if (playerSelection ===  r) {
        if (computerSelection === p) {
            return 'You lost'
        } else {return "You win"};
    } else if (playerSelection === s) {
        if (computerSelection === r) {
            return 'You lost'
        } else {return "You win"};
    } else if (playerSelection === p) {
        if (computerSelection === s) {
            return 'You lost'
        } else {return "You win"};
    } 
  };
  
function game() {
    let score = 0;
    let cscore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What move do you want to make?");
        let computer = computerPlay();
        let result = playRound(playerSelection, computer); 
        console.log(result);
        if (result === "You win" && "You're both winners!") {score++};
        if (result === "You lost" && "You're both winners!") {cscore++};
    }
    if (score > cscore) {
        console.log("Yay! You beat the computer");
    } else if (score === cscore) {
        console.log("Woohoo! You're both winners");
    } else {
        console.log("Boohoo! You lost!");
    }

};

game()


