
function getComputerChoice(){
    let num = Math.random()
    let comp = '';
    if (num <= .3) {
        comp = "rock";
    }
    else if (num <= .6){
        comp = "paper";
    } 
    else{
        comp = "scissors";
    }
    console.log(`Computer choice: ${comp}`);
    return comp; 

}



function getHumanChoice(){
    let choice = prompt("Choose one: rock, paper, scissors");
    choice = choice.toLowerCase();
    console.log(`Your choice: ${choice}`);
    return choice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == computerChoice){
            // a tie. no winner.
            console.log("A tie! No points added.")
        }
        else if(humanChoice == "rock"){
            if(computerChoice == "paper"){
                // human Lost. paper beats rock
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            if(computerChoice == "scissors"){
                // human Wins. rock beats scissors
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
    
        }
        else if(humanChoice == "paper"){
            if (computerChoice == "rock"){
                //human Wins. paper beats rock.
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
            if(computerChoice == "scissors"){
                // human Loses. scissors beats paper
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
        }
        else{
            if(computerChoice == "rock"){
                // human loses. scissors loses to rock
                console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            if(computerChoice == "paper"){
                // human Wins. scissors beats paper
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }
    
    }
    // play 5 rounds 
    for (let i = 0; i < 5; i++){
        // get human choice
        // get computer choice
        // play a round with these choices
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }
    // print winner of game (5 rounds) with scores
    if (humanScore > computerScore){
        console.log(`You win! Your score: ${humanScore} Computer Score: ${computerScore}`)
    }
    else if (computerScore > humanScore){
        console.log(`You lost! Your score: ${humanScore} Computer Score: ${computerScore}`)
    }
    else {
        console.log(`It's a tie! Your score: ${humanScore} Computer Score: ${computerScore}`)
    }

}

playGame();
