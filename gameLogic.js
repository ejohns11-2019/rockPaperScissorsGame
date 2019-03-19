function winOrLose(choice1, choice2) {
  if (choice1 === choice2) {
    return 'Tie';
  }

  else if (choice1 === 'paper' && choice2 === 'rock') {
    return 'paper wins';
  }

  else if (choice1 === 'paper' && choice2 === 'scissors') {
    return 'scissors wins';
  }

  else if (choice1 === 'scissors' && choice2 === 'rock') {
    return 'rock wins';
  }

  else if (choice1 === 'scissors' && choice2 === 'paper') {
    return 'scissors wins';
  }

  else if (choice1 === 'rock' && choice2 === 'paper') {
    return 'paper wins';
  }

  else if (choice1 === 'rock' && choice2 === 'scissors') {
    return 'rock wins';
  }

  else {
    return 'invalid choice'
  }
}
