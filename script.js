var generateBtn = document.querySelector("#generate");


var special = [":", ";", "<", "=", ">", "?", "@", "[", "!"];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var downLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// function gatherInfo() {
  function generatePassword() {

  var choices = ""
  var password = ""

  var requirement = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  if (isNaN(requirement) === true) {
    alert("Invalid response. Please enter a number.")
    return;
  }
  if (requirement > 128 || requirement < 8) {
    alert("Invalid response. Choose a password length between 8 and 128 characters.")
    return;
  }


  if (isUppercase) {
    choices += capLetters;
  }
  if (isLowercase) {
    choices += downLetters;
  }
  if (isSpecial) {
    choices += special;
  }
  if(isNumber) {
    choices += numbers;
  }
  
  var isUppercase = confirm("Would you like to include uppercase characters in your password? Click OK for Yes or Cancel for No.");
  var isLowercase = confirm("Would you like to include lowercase characters in your password? Click OK for Yes or Cancel for No.");
  var isSpecial = confirm("Would you like to include special characters characters in your password? Click OK for Yes or Cancel for No.");
  var isNumber = confirm("Would you like to include numbers in your password? Click OK for Yes or Cancel for No.");

  if (
    isUppercase === false &&
    isLowercase === false &&
    isSpecial === false &&
    isNumber === false
  ) {
    alert("Please choose at least one option. Click generate to try again.")
    return;
  }
 
  if (isUppercase || isLowercase || isNumber || isSpecial) {
    for (var i = 0; i < passwordLength; i++) {
      var random = Math.floor(Math.random() * choices.length );
      // password += 
      console.log(random);
    }
  }
}
// var userChoices = {
//   passwordLength: passwordLength,
//   isUppercase: isUppercase,
//   isLowercase: isLowercase,
//   isSpecial: isSpecial,
//   isNumber: isNumber
// }

// console.log(userChoices)

// return userChoices;

// }
// FUNCTION HERE TO PICK RANDOM OPTION FROM ARRAYS

// function generatePassword() {

// LOOP THRU EACH ARRAY USING RANDOM FUNCTION AND SAVE RESULT
// 



function writePassword() {
  var password = generatePassword();
  // var password = gatherInfo();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
