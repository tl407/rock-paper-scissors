console.log("Hello World")

function getComputerChoice(){
    let num = Math.random()

    if (num <= .3) return "Rock";
    if (num <= .6) return "Paper";
    return "Scissors";
}

let val = getComputerChoice();
console.log(val)

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

let humanChoice = getHumanChoice();
console.log(humanChoice)
