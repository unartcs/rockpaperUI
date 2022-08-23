/* RPS game - player has 3 choices, chooses one > the computer chooses randomly
and then we compare the winner gets a point and next round starts*/
const WEAPONS = ['Rock','Paper','Scissors'];
let playerScore = 0;
let computerScore = 0;
let maxRounds = 5;
let showScore = `Player score: ${playerScore} Computer score: ${computerScore}`;

// Rock = 1, Paper = 2, Scissors = 3.
function startGame() {
    startRound();
}

function startRound() {
    const button = document.querySelectorAll('.player-buttons button')
    let roundPlayed = false;
    button.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (roundPlayed != false) return;
            playerChoice = button.classList.value;
            playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
            roundPlayed = true;
            //console.log(playerChoice);
            getComputerChoice(playerChoice);
        })
    }
    )
}

function getComputerChoice(playerChoice) {
    ComputerChoice = Math.floor(Math.random() * WEAPONS.length+1);
    switch(ComputerChoice) {
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
        playerWin(computerChoiceStr,playerChoice);
    } else if (playerChoice == 'Rock' && computerChoiceStr == 'Paper' || playerChoice == 'Paper' && computerChoiceStr == 'Scissors' || playerChoice == 'Scissors' && computerChoiceStr == 'Rock') {
        computerWin(computerChoiceStr,playerChoice);
    } else {
        console.log('Its a tie!')
        startRound(); 
    }
}

function playerWin(computerChoice, playerChoice) {
    playerScore++;
    console.log(`You won the round! Computer chose ${computerChoice}! ${showScore}`)
    playerScoreHtml = document.querySelector('.player-score')
    playerScoreHtml.innerHTML = `Player Score: ${playerScore}`;
    if (playerScore == 5) {
        console.log(`Game over, you won! ${showScore}`)
    }
    else startGame();
}

function computerWin(computerChoice, playerChoice) {
    computerScore++;
    console.log(computerScore)
    console.log(`You lost the round! Computer chose ${computerChoice}! ${showScore}`)
    computerScoreHtml = document.querySelector('.computer-score')
    computerScoreHtml.innerHTML = `Computer Score: ${computerScore}`
    if (computerScore == 5) {
        console.log(`Game over, you lost! ${showScore}`)
    }
    else startGame();
}

startGame();