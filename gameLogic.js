
var wins =0;
var losses =0;
var ties =0;

function randomChoice2 (){
  var choice = Math.random();
  if (choice <= 0.33){
    return 'rock';
  }
  else if (choice <= 0.66){
    return 'paper';
  }
  else {
    return 'scissors';
  }

}

function winOrLose(choice1, choice2) {
  if (choice1 === choice2) {
    ties = ties +1;
    return 'Tie';
  }

  else if (choice1 === 'paper' && choice2 === 'rock') {
    wins = wins +1;
    return 'paper wins';
  }

  else if (choice1 === 'paper' && choice2 === 'scissors') {
    losses = losses +1
    return 'scissors wins';
  }

  else if (choice1 === 'scissors' && choice2 === 'rock') {
    losses = losses +1;
    return 'rock wins';
  }

  else if (choice1 === 'scissors' && choice2 === 'paper') {
    wins = wins +1;
    return 'scissors wins';
  }

  else if (choice1 === 'rock' && choice2 === 'paper') {
    losses = losses +1;
    return 'paper wins';
  }

  else if (choice1 === 'rock' && choice2 === 'scissors') {
    wins = wins +1;
    return 'rock wins';
  }

  else {
    return 'invalid choice'
  }
}
