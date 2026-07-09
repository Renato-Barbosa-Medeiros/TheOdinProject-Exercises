
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
    console.log("Your choice: " + humanChoice);
    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
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
                        humanScore += 1;
                        break;
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
            console.log("Computer's choice: " + computerChoice)
            console.log(result)
            console.log("Human Score: " + humanScore + " / Computer Score: " + computerScore)
        }
        

        computerSelection = getComputerChoice();
        humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a Tie!")
    }
}

playGame();

