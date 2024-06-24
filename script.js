const game = {rock:"scissor", paper:"rock" , scissors:"paper"}

const gameChoices = Object.keys(game);






function getComputerChoice() {

let randomChoice = Math.floor(Math.random() * gameChoices.length)    
return gameChoices[randomChoice];


}




function getHumanChoice() {
    let pickChoice = prompt("choose from rock, papar or scissor").toLowerCase();
    return pickChoice;
}


const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(humanChoice);
console.log(computerChoice);

function playgame() {


if (humanChoice == computerChoice){
return 'it is a tie';}

    if (game[humanChoice] === computerChoice) {
    return 'you win';}
    
    else {
        return 'computer wins'
    }

    }




const result = playgame();
console.log(result);
