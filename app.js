const WEAPONS = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let maxRounds = 5;
let showScore = `Player score: ${playerScore} Computer score: ${computerScore}`;
const gameText = document.querySelector('.game-text');
const playerScoreHtml = document.querySelector('.player-score');
const computerScoreHtml = document.querySelector('.computer-score');
const restartButton = document.querySelector('.restart-button');
const startButton = document.querySelector('.start-button')
const imageContainer = document.querySelector('.image-container');


function startGame() {
    startButton.classList.remove('hide');
    startButton.addEventListener('click', function x() {
        imageContainer.classList.remove('hide');
        startButton.classList.add('hide');
        startButton.removeEventListener('click', x);
        startRound();
    })
}

function startRound() {
    const button = document.querySelectorAll(".image-content")
    let roundPlayed = false;
    gameText.style.color = 'black';
    button.forEach((button) => {
        button.addEventListener('click', (e) => {  
            if (roundPlayed != false) return;
            playerChoice = (e.path[0].attributes[0].nodeValue)
            //playerChoice = button.classList.value; - Old method of getting the choice
            //Changed to the above method in order to be able to press the image+text+image container itself to choose the weapon
            playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
            roundPlayed = true;
            getComputerChoice(playerChoice);
        })
    }
    )
}

function getComputerChoice(playerChoice) {
    let ComputerChoice = Math.floor(Math.random() * WEAPONS.length + 1);
    let computerChoiceStr;
    switch (ComputerChoice) {
        case 1:
            computerChoiceStr = 'Rock';
            break;
        case 2:
            computerChoiceStr = 'Paper';
            break;
        case 3:
            computerChoiceStr = 'Scissors';
            break;
    }
    if (computerChoiceStr == 'Rock' && playerChoice == 'Paper' || computerChoiceStr == 'Paper' && playerChoice == 'Scissors' || computerChoiceStr == 'Scissors' && playerChoice == 'Rock') {
        playerWin(computerChoiceStr, playerChoice);
    } else if (playerChoice == 'Rock' && computerChoiceStr == 'Paper' || playerChoice == 'Paper' && computerChoiceStr == 'Scissors' || playerChoice == 'Scissors' && computerChoiceStr == 'Rock') {
        computerWin(computerChoiceStr, playerChoice);
    } else {
        gameText.style.backgroundColor = 'yellow';
        gameText.innerHTML = 'Its a tie!'
        console.log('Its a tie!')
        startRound();
    }
}

function playerWin(computerChoice, playerChoice) {
    playerScore = playerScore + 1;
    console.log(`You won the round! Computer chose ${computerChoice}! ${showScore}`)
    gameText.style.backgroundColor = 'green';
    gameText.innerHTML = (`You won the round, Computer chose ${computerChoice}!`);
    playerScoreHtml.innerHTML = `Player Score: ${playerScore}`;
    if (playerScore == 5) {
        console.log(`Game over, you won! ${showScore}`)
        gameText.innerHTML = "You Won!"
        restartGame();
    }
    else startRound();
}

function computerWin(computerChoice, playerChoice) {
    computerScore = computerScore + 1;
    console.log(`You lost the round! Computer chose ${computerChoice}! ${showScore}`)
    gameText.style.backgroundColor = 'red';
    gameText.innerHTML = (`You lost the round, Computer chose ${computerChoice}!`);
    computerScoreHtml.innerHTML = `Computer Score: ${computerScore}`
    if (computerScore == 5) {
        console.log(`Game over, you lost! ${showScore}`)
        gameText.innerHTML = "You Lost!"
        restartGame();
    }
    else startRound();
}

function restartGame() {
    //When the game ends there will be a "Restart game pop" - maybe add a class to a hidden element?
    imageContainer.classList.add('hide')
    restartButton.classList.add('show');
    restartButton.addEventListener("click", function a () {
        restartButton.classList.remove('show');
        computerScore = 0;
        playerScore = 0;
        gameText.innerHTML = '';
        playerScoreHtml.innerHTML = `Player Score: 0`;
        computerScoreHtml.innerHTML = `Computer Score: 0`;
        console.log(computerScore)
        console.log(playerScore)
        restartButton.removeEventListener("click",a);
        startGame();
    });
    
}


startGame();