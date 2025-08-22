console.log("Hellow World!"); //script check

// Write the logic to get computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
console.log(getComputerChoice());

//Write the logic to get human choice
function getHumanChoice() {
    const input = prompt("Enter Rock, Paper, and Scissors:");
    return input.trim().toLowerCase(); //Case-insensitive
}
console.log(getHumanChoice());