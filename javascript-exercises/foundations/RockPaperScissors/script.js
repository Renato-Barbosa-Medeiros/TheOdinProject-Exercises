playerScoreEL = document.getElementById("player-score-el")
computerScoreEL = document.getElementById("computer-score-el")
resultsDisplayEL = document.getElementById("results-display-el")

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

    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = ""

        function playRound(humanChoice) {
            humanChoice = humanChoice.toLowerCase(); 
            computerChoice = getComputerChoice();
            let result = "";
            if (computerChoice == "Rock") {
                switch (humanChoice) {
                    case "rock":
                        result ="A tie! Both chose Rock!";
                        break;
                    case "paper":
                        result = "You win! Paper beats Rock!";
                        humanScore += 1;                            break;
                    case "scissors":
                        result = "You lose! Rock beats Scissors!";
                        computerScore += 1;
                        break;
                    default: result = "Invalid choice";
                }
            } else if (computerChoice == "Paper") {
                switch (humanChoice) {
                    case "rock":
                        result = "You lose! Paper beats Rock!";
                        computerScore += 1;
                        break;
                    case "paper":
                        result = "A tie! Both chose Paper!";
                        break;
                    case "scissors":
                        result = "You Win! Scissors beats Paper!";
                        humanScore += 1;
                        break;
                    default: result = "Invalid choice";
                }
            } else {
                switch (humanChoice) {
                    case "rock":
                        result = "You win! Rock beats Scissors!";
                        humanScore += 1;
                        break;
                    case "paper":
                        result = "You lose! Scissors beats Paper!";
                        computerScore += 1;
                        break;
                    case "scissors":
                        result = "A tie! Both chose Scissors!";
                        break;
                    default: result = "Invalid choice";
                }
            }
            
            if (humanScore === 5) {
                result = "The Player wins the game!";
                humanScore = 0;
                computerScore= 0;
            } else if (computerScore === 5) {
                result = "The Computer wins the game!";
                humanScore = 0;
                computerScore= 0;
            }
            resultsDisplayEL.innerText = result
            playerScoreEL.innerText = humanScore
            computerScoreEL.innerText = computerScore
            console.log("Computer's choice: " + computerChoice)
            console.log("Human Score: " + humanScore + " / Computer Score: " + computerScore)
        }
        