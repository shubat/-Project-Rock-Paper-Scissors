const game = {rock:"scissor", paper:"rock" , scissors:"paper"};

const gameChoices = Object.keys(game);






function getComputerChoice() {

let randomChoice = Math.floor(Math.random() * gameChoices.length)    
return gameChoices[randomChoice];


}




//function getHumanChoice() {
   // return gameChoices;
//}





function playgame(humanChoice,computerChoice ) {

if (humanChoice == computerChoice){
return 'it is a tie';}

    if (game[humanChoice] === computerChoice) {
    return 'you win';}
    
    else {
        return 'computer wins'
    }

    }


   
    function handleButtonClick(humanChoice) {
      const computerChoice = getComputerChoice();
      const result = playgame(humanChoice , computerChoice);
      
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
          You chose: ${humanChoice}<br>
          Computer chose: ${computerChoice}<br>
          Result: ${result}
      `;
    }
    


document.getElementById('rock').addEventListener('click', () => handleButtonClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleButtonClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleButtonClick('scissors'));