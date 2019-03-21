var game = ['rock', 'paper', 'scissors']

var rock = document.getElementById('Rock');
rock.addEventListener('click', function(){choiceHandler('rock')});

var scissors = document.getElementById('Scissors');
scissors.addEventListener('click', function(){choiceHandler('scissors')});

var paper = document.getElementById('Paper');
paper.addEventListener('click', function(){choiceHandler('paper')});


function choiceHandler(choice){
  var choice1 = choice;
  console.log(choice1);
  var choice2 = randomChoice2();
  var result = winOrLose(choice1, choice2);
  document.getElementById("player").innerHTML = 'You Chose ' + choice1 + ".";
  document.getElementById("House").innerHTML = 'The House Chose ' + choice2 + ".";  
  document.getElementById("result").innerHTML = result;
  showScores();
}

function showScores(){
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;  
  document.getElementById("ties").innerHTML = ties;
}