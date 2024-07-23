console.log("Hello World")

function getComputerChoice(){
    let num = Math.random()

    if (num <= .3) return "Rock";
    if (num <= .6) return "Paper";
    return "Scissors";
}

let val = getComputerChoice();
console.log(val)
