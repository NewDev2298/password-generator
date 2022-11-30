// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // TODO: CODE GOES HERE
  

  var isUppercase = confirm('Would you like to use uppercase?');
  var isLowercase = confirm('Would you like to use lowercase?');
  var isSpecial = confirm('Would you like to use special characters?');
  var isNumber = confirm('Would you like to you numbers?');

  if (isUppercase) {
    // USE UPPERCASE LETTERS
    console.log('uppercase');
  }

  if (isLowercase) {
    // USE LOWERCASE LETTERS
    console.log('lowercase');
  }

  if (isSpecial) {
    // USE SPECIAL LETTERS
    console.log('special');
  }

  if (isNumber) {
    // USE NUMBERS
    console.log('number');
  }

  return '';

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
