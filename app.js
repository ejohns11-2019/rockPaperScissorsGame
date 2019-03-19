var game = ['rock', 'paper', 'scissors']

var rock = document.getElementById('Rock');
  rock.addEventListener('click', function() {
    alert('good choice');
    var choice1 = 'rock';
    console.log(choice1);
    var choice2 = randomChoice2();
    winOrLose(choice1, choice2);
  });

var scissors = document.getElementById('Scissors');
  scissors.addEventListener('click', function(){
    alert('good choice');
    var choice1 = 'scissors';
    console.log(choice1);
    var choice2 = randomChoice2();
    winOrLose(choice1, choice2);
  });

  var paper = document.getElementById('Paper');
    paper.addEventListener('click', function(){
      alert('good choice');
      var choice1 = 'paper'
      console.log(choice1);
      var choice2 = randomChoice2();
      winOrLose(choice1, choice2);
    });
