// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

 truly = {
'lowerCase':['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ],
'upperCase':['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ],
'Numeric':['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
'Symbols':['!', '@', '#', '$', '%','^', '&', '*', '(', ')', '_', '+', '/', '<', '>', '?', ';', '\'', '\"']
}

    let potChar = [];

  const  passLength = prompt('Your password must be at least 8 to 128 characters long');    
  const lowerCase = confirm('Would you like lowercase letters to be included? OK for yes, cancel for no');
  const  upperCase = confirm('Would you like uppercase letters to be included? OK for yes, cancel for no');
  const  Numeric = confirm('Would you like numbers to be included? Ok for yes, cancel for no');
  const  Symbols = confirm('Would you like special characters \"!@#$%\" to be included');

if (lowerCase === true){
   potChar = potChar.concat(truly.lowerCase)
}
if (upperCase === true){
   potChar = potChar.concat(truly.upperCase)
}
if (Numeric === true){
   potChar = potChar.concat(truly.Numeric)
}
if (Symbols === true){
  potChar =  potChar.concat(truly.Symbols)
}
console.log(potChar);

    function generatePassword(){

        let newPassword = "";
        

        if (passLength < 8 || passLength > 128){
            alert('your password does not meet requirements for a new generated password');
        }
        else {
            for (i = 0; i < passLength; i++) {
                newPassword += potChar[Math.floor(Math.random() * potChar.length)];
              
            }
        }
        return newPassword;
    }
 
   let password = generatePassword();
   let passwordText = document.querySelector("#password");
    passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
