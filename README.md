# RockPaperScissors_Project
A beginner-friendly Rock-Paper-Scissors game built using HTML, CSS, and JavaScript. The player selects a move, the computer randomly picks its move, and the result is displayed instantly.

Features:
. Player vs Computer mode
. Real-time results: win, lose or draw
. Randomized computer moves
. Simple and Responsive UI
. Score tracking (optional, if implemented)

Technologies used:
. HTML
. CSS
. Java Script

How to play:
1. Click Rock, Paper and Scissors.
2. The computer picks a random move.
3. The winner is shown immediately.

Screenshot:


Folder Structure:
/
├── index.html
├── style.css
└── script.js

Psuedocode:

FUNCTION getComputerChoice
    SET choices = ["rock", "paper", "scissors"]
    RETURN a random choice from choices

FUNCTION getHumanChoice
    PROMPT player to enter "rock", "paper", or "scissors"
    RETURN player's choice

FFUNCTION playRound(humanChoice, computerChoice)
    CONVERT humanChoice and computerChoice to lowercase

    IF humanChoice == computerChoice THEN
        DISPLAY "It's a draw! You both chose [humanChoice]"
        RETURN "draw"

    ELSE IF (humanChoice == "rock" AND computerChoice == "scissors") THEN
        DISPLAY "You win! Rock beats Scissors"
        RETURN "human"

    ELSE IF (humanChoice == "paper" AND computerChoice == "rock") THEN
        DISPLAY "You win! Paper beats Rock"
        RETURN "human"

    ELSE IF (humanChoice == "scissors" AND computerChoice == "paper") THEN
        DISPLAY "You win! Scissors beats Paper"
        RETURN "human"

    ELSE
        DISPLAY "You lose! [computerChoice capitalized] beats [humanChoice capitalized]"
        RETURN "computer"

FUNCTION playGame
    SET playerScore = 0
    SET computerScore = 0
    SET totalRounds = 5

    FOR round = 1 TO totalRounds DO
        CALL getHumanChoice → store as humanChoice
        CALL getComputerChoice → store as computerChoice

        CALL playRound(humanChoice, computerChoice) → store as roundResult

        IF roundResult == "human"
            INCREMENT playerScore
            DISPLAY "You win this round!"

        ELSE IF roundResult == "computer"
            INCREMENT computerScore
            DISPLAY "Computer wins this round!"

        ELSE
            DISPLAY "This round is a draw."

        DISPLAY current score: "You: [playerScore] | Computer: [computerScore]"

    END FOR

    DISPLAY "Final Score - You: [playerScore], Computer: [computerScore]"

    IF playerScore > computerScore
        DISPLAY "🎉 You won the game!"

    ELSE IF playerScore < computerScore
        DISPLAY "😞 Computer won the game!"

    ELSE
        DISPLAY "🤝 The game is a draw!"

END FUNCTION


