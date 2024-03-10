let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum];
    return compChoice;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Draw'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Draw'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'Draw'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You win! Rock beats scissors!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lost! Paper beats rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lost! Scissors beats paper!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You win! Paper beats rock!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        return 'You lost! Rock beats scissors!'    
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You win! Scissors beats paper!'    
    }    
}


const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose your throw').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log('1 ', playRound(playerSelection, computerSelection));
    }
    
    if (playerScore > computerScore) {
        return 'You win the game!'
    } else if (playerScore < computerScore) {
        return 'Sorry, you lose!'
    } else {
        return 'You tied!'
    }
} 

console.log(playGame())