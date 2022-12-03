var generateBtn = document.querySelector("#generate");


var special = [":", ";", "<", "=", ">", "?", "@", "[", "!"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var downLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


function gatherInfo() {
  var passwordLength = parseInt(prompt("Choose a password length between 8 and 128 characters."));

  if (isNaN(passwordLength) === true) {
    alert("Invalid response. Please enter a number.")
    return;
  }

  if (passwordLength > 128 || passwordLength < 8) {
    alert("Invalid response. Choose a password length between 8 and 128 characters.")
    return;
  }

  var isUppercase = confirm('Would you like to use uppercase? Click.....');
  var isLowercase = confirm('Would you like to use lowercase?');
  var isSpecial = confirm('Would you like to use special characters?');
  var isNumber = confirm('Would you like to you numbers?');

  if (
    isUppercase === false &&
    isLowercase === false &&
    isSpecial === false &&
    isNumber === false
  ) {
    alert("Please choose OK for at least one option.")
    return;
  }

var userChoices = {
  passwordLength: passwordLength,
  isUppercase: isUppercase,
  isLowercase: isLowercase,
  isSpecial: isSpecial,
  isNumber: isNumber
}

console.log(userChoices)

return userChoices;

}
// FUNCTION HERE TO PICK RANDOM OPTION FROM ARRAYS

function generatePassword() {

// LOOP THRU EACH ARRAY USING RANDOM FUNCTION AND SAVE RESULT
// 

}

function writePassword() {
  // var password = generatePassword();
  var password = gatherInfo();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
