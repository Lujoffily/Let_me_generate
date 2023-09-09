// Assignment code here

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const  lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numberSelector = '0123456789';
const symbolSelector= '{}#,!_@/();:.|%$=+-*[]^?&~`';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function randomLower() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
  }
  
  function randomUpper() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
  }
  
  passwordText.value = password;

}

function generatePassword() {
  if (userLower === true)
  randomLower();
  else {
  return
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//TODO:
//1. Create prompts for password criteria
//  a. length should be at least 8 characters and no more than 128 characters
//2. Need to create a generatePassword();
//  a. able to select criteria
//  b. validate input and at leaset one character type should be selected
//  c. generate password matching selection
//3. Password can be displayed as a alert or written to the page