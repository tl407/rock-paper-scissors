
function getComputerChoice(){
    let num = Math.random()

    if (num <= .3) return "Rock";
    if (num <= .6) return "Paper";
    return "Scissors";
}



function getHumanChoice(){
    let choice = prompt("Choose one: rock, paper, scissors");
    if(choice.toLowerCase() == "rock"){
        console.log("rock")    
    }
    if(choice.toLowerCase() == "paper"){
        console.log("paper")
    }
    if(choice.toLowerCase() == "scissors"){
        console.log("scissors")
    }
    return choice;
}





const humanSelection = getHumanChoce();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            // a tie. no winner.
            console.log()
        }
        else if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                // human Lost. paper beats rock
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore+=1;
            }
            if(computerChoice == "scissors"){
                // human Wins. rock beats scissors
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore+=1;
            }
    
        }
        else if(humanChoice == "paper"){
            if (computerChoice == "rock"){
                //human Wins. paper beats rock.
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore+=1;
            }
            if(computerChoice == "scissors"){
                // human Loses. scissors beats paper
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore+=1;
            }
        }
        else{
            if(computerChoice == "rock"){
                // human loses. scissors loses to rock
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
                computerScore+=1;
            }
            if(computerChoice == "paper"){
                // human Wins. scissors beats paper
                console.log(`You win! ${humanChoice} beats ${computerChoice}`)
                humanScore+=1;
            }
        }
    
    }

}