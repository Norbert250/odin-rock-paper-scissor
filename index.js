const options = ["rock" , "paper" , "scissors"]

function getcomputerchoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    console.log
    return choice;
}

function checkwinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "player";
    }
    else {
        return "computer";
    }
}
function playRound(playerSelection, computerSelection) {
    const result = checkwinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie"
    }
    else if (result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose ${computerSelection} beats ${playerSelection} `
    }
  }
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));