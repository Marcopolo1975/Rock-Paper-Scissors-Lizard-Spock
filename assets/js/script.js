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

    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    userChoiceDisplay.src = `assets/images/${playerSelection}.png`;
    computerChoiceDisplay.src = `assets/images/${computerSelection}.png`;

    if (playerSelection === computerSelection) {
        updateGameResult('It\'s a draw!');
    } else {
        const winConditions = {
            rock: ['scissors', 'lizard'],
            paper: ['rock', 'spock'],
            scissors: ['paper', 'lizard'],
            lizard: ['spock', 'paper'],
            spock: ['scissors', 'rock']
        };

        if (winConditions[playerSelection].includes(computerSelection)) {
            userScore++;
            updateGameResult(`You win this round! ${playerSelection} beats ${computerSelection}`);
        } else {
            computerScore++;
            updateGameResult(`Computer wins this round! ${computerSelection} beats ${playerSelection}`);
        }
    }
     
    
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;

    if (rounds >= maxRounds) {
        endGame();
    }
}

function endGame() {
    let resultMessage = '';

    if (userScore > computerScore) {
        resultMessage = 'You win the game!';
    } else if (userScore < computerScore) {
        resultMessage = 'Computer wins the game!';
    } else {
        resultMessage = 'It\'s a tie!';
    }

    gameWinnerDisplay.textContent = resultMessage;
    newGameButton.style.display = 'block';
}

function updateGameResult(result) {
    gameResultDisplay.textContent = result;
}

function startNewGame() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    userScoreDisplay.textContent = '0';
    computerScoreDisplay.textContent = '0';
    gameResultDisplay.textContent = '';
    userChoiceDisplay.src = 'assets/images/user.png';
    computerChoiceDisplay.src = 'assets/images/computer.png';
    roundNumberDisplay.textContent = '0';
    gameWinnerDisplay.textContent = '';
    newGameButton.style.display = 'none';
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.id);
    });
});

newGameButton.addEventListener('click', startNewGame);git
