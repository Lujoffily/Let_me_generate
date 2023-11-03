var passwordText = document.querySelector('#password');
var generateClick = document.querySelector('#generate');

var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numberSelector = '0123456789';
var symbolSelector = '{}#,!_@/();:.|%$=+-*[]^?&~';
var passwordGenerater = [''];

var passwordQuestions = function () {
  var upperQuestion = confirm('Would you like upper case letters?');
  if (upperQuestion) {
    alert('Your password will have upper case letters.');
  } else {
    alert('Your password will not have upper case letters.')
  }
  if (upperQuestion) {
    passwordGenerater = passwordGenerater.concat(upperLetters);
  }

  var lowerQuestion = confirm('Would you like lower case letters?');
  if (lowerQuestion) {
    alert('Your password will have lower case letters.');
  } else {
    alert('Your password will not have lower case letters.')
  }
  if (lowerQuestion) {
    passwordGenerater = passwordGenerater.concat(lowerLetters);
  }

  var numberQuestion = confirm('Would you like numbers?');
  if (numberQuestion) {
    alert('Your password will have numbers.');
  } else {
    alert('Your password will not have numbers.')
  }
  if (numberQuestion) {
    passwordGenerater = passwordGenerater.concat(numberSelector);
  }

  var symbolQuestion = confirm('Would you like symbols?');
  if (symbolQuestion) {
    alert('Your password will have symbol.');
  } else {
    alert('Your password will not have symbol.')
  }
  if (symbolQuestion) {
    passwordGenerater = passwordGenerater.concat(symbolSelector);
  }

  numberCharactersQuestion = prompt('How many characters would you like in your password?\nYour choose needs to be at least 8 characters and no more then 128 characters');
  if (numberCharactersQuestion > 8 || numberCharactersQuestion < 128) {
    alert('You have choosen a input of ' + numberCharactersQuestion);
  } else if  (numberCharactersQuestion < 8 || numberCharactersQuestion > 128) {
    alert('You have choosen a unvalid input! Please use a valid input.');
    return;
  } else {
    alert('You have not choosen a input! Please use a valid input.');
  }
  for (i = 0; i < numberCharactersQuestion; i++) {
    let randomChoose = [Math.floor(Math.random() * numberCharactersQuestion.length)];
    generatedPassword = '';
    generatedPassword = generatedPassword + numberCharactersQuestion[randomChoose];
  }
  return generatedPassword;
}

function displayPassword() {
  var password = passwordQuestions();
  passwordText.value = password;
}

generateClick.addEventListener('click', displayPassword)