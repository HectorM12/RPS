const getUserChoice = userInput => {
	userInput = userInput.toLowerCase();
	// Check valid input
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
		return userInput;
	} else {
		console.log("Not Valid Input!")
	}
};

function getComputerChoice() {
	var randomNum = Math.floor(Math.random() * 3);
	switch (randomNum) {
		case 0: return 'rock';
			break;
		case 1: return 'paper';
			break;
		case 2: return 'scissors';
			break;
		default:
			console.log("Uh oh...")
	}
};

// TEST getComputerChoice Function
// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
	if (userChoice === computerChoice) //all ties
	{
		return "It's a Tie";
	}
	else if (userChoice === 'rock') {
		if (computerChoice === 'paper') {
			return "Computer Won";
		} else {
			return "You Won";
		}
	}
	else if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return "Computer Won";
		} else {
			return "You Won";
		}
	}
	else if (userChoice === 'paper') {
		if (computerChoice === 'scissors') {
			return "Computer Won";
		} else {
			return "You Won";
		}
	}
}



function playGame() {
	var userChoice = getUserChoice("rock");
	var computerChoice = getComputerChoice();
	console.log("User=" + userChoice);
	console.log("Computer=" + computerChoice);
	console.log(determineWinner(userChoice, computerChoice));
}

