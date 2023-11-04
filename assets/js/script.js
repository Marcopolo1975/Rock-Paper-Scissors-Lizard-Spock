let userScore = 0;
let computerScore = 0;
let rounds = 0;
const maxRounds = 10;

const buttons = document.querySelectorAll('.buttons button');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const gameResultDisplay = document.getElementById('game-result');
const roundNumberDisplay = document.getElementById('round-number');
const gameWinnerDisplay = document.getElementById('game-winner-result');
const newGameButton = document.getElementById('new-game');


function playRound(playerSelection) {
    if (rounds >= maxRounds) {
        endGame();
        return;
    }

    rounds++;
    roundNumberDisplay.textContent = rounds;
}