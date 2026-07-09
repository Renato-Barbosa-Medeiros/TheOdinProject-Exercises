let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0: 
            computerChoice = "Rock";
            break;
        case 1: 
            computerChoice = "Paper";
            break;
        case 2: 
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");
    console.log("h " + humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); 
    let result = "";
    if (computerChoice == "Rock") {
        switch (humanChoice) {
            case "rock":
                result ="A tie! Both chose Rock!";
                break;
            case "paper":
                result = "You win! Paper beats Rock!";
                break;
            case "scissors":
                result = "You lose! Rock beats Scissors!";
                break;
            default: result = "Invalid choice";
        }
    } else if (computerChoice == "Paper") {
        switch (humanChoice) {
            case "rock":
                result = "You lose! Paper beats Rock!";
                break;
            case "paper":
                result = "A tie! Both chose Paper!";
                break;
            case "scissors":
                result = "You Win! Scissors beats Paper!";
                break;
            default: result = "Invalid choice";
        }
    } else {
        switch (humanChoice) {
            case "rock":
                result = "You win! Rock beats Scissors!";
                break;
            case "paper":
                result = "You lose! Scissors beats Paper!";
                break;
            case "scissors":
                result = "A tie! Both chose Scissors!";
                break;
            default: result = "Invalid choice";
        }
    }
    console.log(result)
}
  
computerSelection = getComputerChoice()
console.log(computerSelection)
humanSelection = getHumanChoice();
playRound(humanSelection, computerSelection); 




