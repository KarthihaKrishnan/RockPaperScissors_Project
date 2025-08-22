// console.log("Hellow World!"); //script check

/*  Declare the players score variables */
let humanScore = 0;
let computerScore = 0;

/* Get computer choice */
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
//console.log(getComputerChoice());

/* Get human choice */
function getHumanChoice() {
    const input = prompt("Enter Rock, Paper, and Scissors:");
    return input.trim().toLowerCase(); //Case-insensitive
}
//console.log(getHumanChoice());

/* Capitalize first letter for nice output */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

/* Play a single round */
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(`It's a draw! You both chose ${capitalize(humanChoice)}.`);
    return "draw";
  }else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
   ) {
    console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
    return "human";
  }
  else {
    console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
    return "computer";
  }
}

/* Play the entire game */
function playGame() {
const totalRounds = 5;
    for (let round = 1; round <= totalRounds; round++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === "human") {
            humanScore++;
            console.log(`You win this round!`);
        }else if (roundResult === "computer") {
            computerScore++;
            console.log(`Computer wins this round!`);
        }else {
            console.log(`This round is a draw`);
        }

        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}`);
    }
    console.log(`Final Score: You - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("🎉 You won the game!");
    }else if (humanScore < computerScore) {
        console.log("😞 Computer won the game!");
    }else {
        console.log("🤝 The game is a draw!");
    }
}

playGame();
