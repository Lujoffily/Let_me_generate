var passwordText = document.querySelector("#password");


var upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
var numberSelector = '0123456789';
var symbolSelector = '{}#,!_@/();:.|%$=+-*[]^?&~';
var lengthCharacter = upperLetters, lowerLetters, numberSelector, symbolSelector

var userOpt = function() {
  
  
}


function generatePassword(allElement) {
	
  userChooseupperLetters = prompt("Would you like to include uppercase characters? Please reply with yes or no.");
  if (userChooseupperLetters === "yes") {
    alert("We will uppercase Characters!");
    userChooseupperLetters = true;
  } else if (userChooseupperLetters !== "yes") {
    alert("We will not be adding uppercase Characters!");
    userChooseupperLetters = false;
  }
  
  userChooselowerLetters = prompt("Would you like to include lowercase characters? Please reply with yes or no.")
  if (userChooselowerLetters === "yes") {
    alert("We will lowercase Characters!");
    userChooselowerLetters = true;
  } else if (userChooselowerLetters !== "yes") {
    alert("We will not be adding lowercase Characters!");
    userChooselowerLetters = false;
  }
  
  userChoosenumberSelector = prompt("Would you like to include number characters? Please reply with yes or no.")
  if (userChoosenumberSelector === "yes") {
    alert("We will numbers Characters!");
    userChoosenumberSelector = true;
  } else if (userChoosenumberSelector !== "yes") {
    alert("We will not be adding number Characters!");
    userChoosenumberSelector = false;
}

userChoosesymbolSelector = prompt("Would you like to include symbol characters? Please reply with yes or no.")
  if (userChoosesymbolSelector === "yes") {
    alert("We will symbol Characters!");
    userChoosesymbolSelector = true;
  } else if (userChoosesymbolSelector !== "yes") {
    alert("We will not be adding symbol Characters!");
    userChoosesymbolSelector = false;
}

userChooselengthChar = prompt("How long would you like your passwored to be? Choose from 8 to 128 characters.");
if (userChooselengthChar < 8 || userChooselengthChar > 128) {
  alert("It needs to be between 8 and 128!");
  userChooselengthChar = true;
} else if (userChooselengthChar !== "yes") {
  alert("You have choosen " + userChooselengthChar);
  userChooselengthChar = false;
}

}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 passwordText.value = password;

 function userPassword() {
  var result = "";
  var length = userChooselengthChar;
  for (i = 0; i < length; i++) {
    lengthSelector(Math.floor(Math.random() * userChooselengthChar))
  }
  if (userChooseupperLetters === true) {
upperLetters[Math.floor(Math.random() * upperLetters.lenght)];
}
  if (userChooselowerLetters === true) {
lowerLetters[Math.floor(Math.random() * lowerLetters.lenght)];
}
  if (userChoosenumberSelector === true) {
numberSelector[Math.floor(Math.random() * numberSelector.lenght)];
}
  if (userChoosesymbolSelector === true) {
symbolSelector[Math.floor(Math.random() * symbolSelector.lenght)];
}

return userPassword
}
}

generateBtn.addEventListener("click", writePassword); 