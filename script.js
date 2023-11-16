let userChoice = '';
let compChoice = '';
let userScore = 0;
let compScore = 0;

const userScoreOutput = document.getElementById('score-user');
const compScoreOutput = document.getElementById('score-comp');
const decisionDisplay = document.getElementById('decision');
const winLossDisplay = document.getElementById('win-or-loss');

userScoreOutput.innerText = userScore;
compScoreOutput.innerText = compScore;

const weapons = ['Rock', 'Paper', 'Scissors'];

const playerChoice = (choice) => {
	userChoice = choice;
	compChoice = weapons[Math.floor(Math.random() * 3)];

	if (userChoice === 'Rock' && compChoice === 'Scissors') {
		decisionDisplay.innerText = `${userChoice}(user) beats ${compChoice}(comp)`;
		winLossDisplay.innerText = 'You Win!';
		userScoreOutput.innerText = ++userScore;
	} else if (userChoice === 'Paper' && compChoice === 'Rock') {
		decisionDisplay.innerText = `${userChoice}(user) beats ${compChoice}(comp)`;
		winLossDisplay.innerText = 'You Win!';
		userScoreOutput.innerText = ++userScore;
	} else if (userChoice === 'Scissors' && compChoice === 'Paper') {
		decisionDisplay.innerText = `${userChoice}(user) beats ${compChoice}(comp)`;
		winLossDisplay.innerText = 'You Win!';
		userScoreOutput.innerText = ++userScore;
	} else if (userChoice === 'Rock' && compChoice === 'Paper') {
		decisionDisplay.innerText = `${userChoice}(user) beat by ${compChoice}(comp)`;
		winLossDisplay.innerText = 'You Lose';
		compScoreOutput.innerText = ++compScore;
	} else if (userChoice === 'Paper' && compChoice === 'Scissors') {
		decisionDisplay.innerText = `${userChoice}(user) beat by ${compChoice}(comp)`;
		winLossDisplay.innerText = 'You Lose';
		compScoreOutput.innerText = ++compScore;
	} else if (userChoice === 'Scissors' && compChoice === 'Rock') {
		decisionDisplay.innerText = `${userChoice}(user) beat by ${compChoice}(comp)`;
		winLossDisplay.innerText = 'You Lose';
		compScoreOutput.innerText = ++compScore;
	} else if (userChoice === compChoice) {
		decisionDisplay.innerText = `${userChoice}(user) equals ${compChoice}(comp)`;
		winLossDisplay.innerText = "It's a Tie!";
	}
};
