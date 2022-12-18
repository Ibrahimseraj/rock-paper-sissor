const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
const result = document.querySelector('#result');
const choiceBtn = document.querySelectorAll('.choiceBtn');
let playerChoice;
let computerChoice;
let showResult;
let computerRandomChoice;

choiceBtn.forEach(choiceBtns => choiceBtns.addEventListener('click', () =>{
    playerChoice = choiceBtns.innerHTML;
    computerChoices();
    player.innerHTML = `Player: ${playerChoice}`;
    computer.innerHTML = `Computer: ${computerChoice}`;
    result.innerHTML = `${determineWinner()}`;
}));

const computerChoices = () => {
    let computerRandomChoice = Math.floor(Math.random() * 3);
    
    if (computerRandomChoice === 0) {
        computerChoice = 'Paper';
    } else if (computerRandomChoice === 1) {
        computerChoice = 'Sissors';
    } else if (computerRandomChoice === 2) {
        computerChoice = 'Rock';
    } else {
        computerChoice = 'We are fixing the error';
    }
}

const determineWinner = () => {
    if (playerChoice === computerChoice) {
        return 'Draw!';
    } else if (computerChoice === 'Paper') {
        return (playerChoice === 'Sissors') ? 'congratulations! You Win' : 'You Lose!';
    } else if (computerChoice === 'Rock') {
        return (playerChoice === 'Paper') ? 'congratulations! You Win' : 'You Lose!';
    } else if (computerChoice === 'Sissors') {
        return (playerChoice === 'Rock') ? 'congratulations! You Win' : 'You Lose!';
    }
}