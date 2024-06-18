const game = {rock:"rock" , paper:"paper" , scissors:"scissor"};

const gameChoices = Object.keys(game);

function getComputerChoice() {

let randomChoice = Math.floor(Math.random() * gameChoices.length)    
return gameChoices[randomChoice];


}


const computerChoice = getComputerChoice();
console.log(computerChoice);