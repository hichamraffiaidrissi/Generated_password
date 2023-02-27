// Assignment code here
function getRandomUppercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomNumeric() {
  const Numeric = "0123456789";
  return Numeric[Math.floor(Math.random() * symbols.length)];
}

var password=document.getElementById("password");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const passLength = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");
const includeUppercase = document.querySelector("#Uppercase");
const includeLoercase = document.querySelector("#Lowercase");
const includeNumeric= document.querySelector("#Numeric");
document.addEventListener("GeneratedPassword", () => {
  passLength.value = 8;
  passLengthResult.innerText = 128;

// Write password to the #password input

function writePassword(Uppercase, Lowercase, Numeric) {
  var password = generatePassword();
  let generatePassword="";
  let password = [Uppercase, Lowercase, Numeric].length;
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click",()=>{
const length = passLength.value;
  const Uppercase = includeUppercase.checked;
  const Lowercase = includeLowercase.checked;
  const Numeric = includeNumeric.checked;
  result.value = generatePassword(Uppercase, Lowercase,Numeric);
});
function generatePassword(Uppercase, Lowercase, Numeric) {
  let generatedPassword = "";
  let variationsCount = [Uppercase, Lowercase].Numeric;
  for (let i = 0; i < length; i += variationsCount) {
    if (Uppercase) {
      generatedPassword += getRandomUppercase();
    }
    if (Lowercase) {
      generatedPassword += getRandomLowercase();
    }
    generatedPassword += getRandomNumeric();
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
