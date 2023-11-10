var passwordText = document.querySelector('#password');
var generateClick = document.querySelector('#generate');

// variables for characters
var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numberSelector = '0123456789';
var symbolSelector = '{}#,!_@/();:.|%$=+-*[]^?&~';
var passwordGenerater = '';
var finalGenerator = '';

// Prompt for user for password criterias
var passwordQuestions = function () {
  // Question to user about the use of upper case
  var upperQuestion = confirm('Would you like upper case letters?');
  if (upperQuestion) {
    alert('Your password will have upper case letters.');
  } else {
    alert('Your password will not have upper case letters.');
  }
  if (upperQuestion) {
    passwordGenerater = passwordGenerater.concat(upperLetters);
  }

  // Question to user about the use of lower case 
  var lowerQuestion = confirm('Would you like lower case letters?');
  if (lowerQuestion) {
    alert('Your password will have lower case letters.');
  } else {
    alert('Your password will not have lower case letters.');
  }
  if (lowerQuestion) {
    passwordGenerater = passwordGenerater.concat(lowerLetters);
  }

  // Question to user about the use of number
  var numberQuestion = confirm('Would you like numbers?');
  if (numberQuestion) {
    alert('Your password will have numbers.');
  } else {
    alert('Your password will not have numbers.');
  }
  if (numberQuestion) {
    passwordGenerater = passwordGenerater.concat(numberSelector);
  }

  // Question to user about the use of symbol 
  var symbolQuestion = confirm('Would you like symbols?');
  if (symbolQuestion) {
    alert('Your password will have symbol.');
  } else {
    alert('Your password will not have symbol.');
  }
  if (symbolQuestion) {
    passwordGenerater = passwordGenerater.concat(symbolSelector);
  }

  // Question to user about number of characters
  numberCharactersQuestion = prompt('How many characters would you like in your password?\nYour choose needs to be at least 8 characters and no more then 128 characters');
  if (numberCharactersQuestion > 8 || numberCharactersQuestion < 128) {
    alert('You have choosen a input of ' + numberCharactersQuestion);
  } else if  (!numberCharactersQuestion) {
    alert('You have choosen a unvalid input! Please use a valid input.');
    return;
  } else {
    alert('You have not choosen a input! Please use a valid input.');
  }

  // Uses the choosen number of character to generate password
  for (var i = 0; i < numberCharactersQuestion; i++) {
    var random = [Math.floor(Math.random() * passwordGenerater.length)]
    finalGenerator = finalGenerator + passwordGenerater[random];
  }
 
  // Created random password generated return
  return finalGenerator;
}

// Function to display random password
function displayPassword() {
  var passwordDisplay = passwordQuestions();
  passwordText.value = passwordDisplay;
}

// Password generater click event
generateClick.addEventListener('click', displayPassword);