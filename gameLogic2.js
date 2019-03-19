
//CANT DO SWITCH WITHIN A SWITCH?

function winOrLose(choice1, choice2)
  switch (choice1) {
    case 'paper':
      switch (choice2) {
        case 'paper':
          console.log('tie');
          break;
        case 'scissors':
          console.log('scissors wins');
          break;
        case 'rock':
          console.log('paper wins');
          break;
      }
    case 'scissors':
      switch (choice2) {
        case 'scissors':
          console.log('tie');
          break;
        case 'paper':
          console.log('scissors wins');
          break;
        case 'rock':
          console.log('rock wins');
          break;
      }
    case 'rock':
      switch (choice2) {
        case 'rock':
          console.log('tie');
          break;
        case 'scissors':
          console.log('rock wins')
          break;
        case 'paper':
          console.log('paper wins')
          break;
      }
    }
