  // Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var special = ':;<=>?@[\]^_{|}~!#$%&*+,-./';
  var numbers = '0123456789';
  var letters = 'abcdefghijklmnopqrstuvwxyz';
  var capLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var potential = '';
  var isUppercase = confirm('Would you like to use uppercase?');
  var isLowercase = confirm('Would you like to use lowercase?');
  var isSpecial = confirm('Would you like to use special characters?');
  var isNumber = confirm('Would you like to you numbers?');
  

  if (isUppercase) {
    // USE UPPERCASE LETTERS
    console.log('uppercase');
    potential += capLetters;
  }

  if (isLowercase) {
    // USE LOWERCASE LETTERS
    console.log('lowercase');
    potential += letters;
  }

  if (isSpecial) {
    // USE SPECIAL LETTERS
    console.log('special');
    potential += special;
  }

  if (isNumber) {
    // USE NUMBERS
    console.log('number');
    potential += numbers;
  }

    console.log(potential);

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
