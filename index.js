// Generate password | onclick event
const passwordOneEl = document.querySelector("#password-one-el");
const passwordTwoEl = document.querySelector("#password-two-el");
const inputLength = document.querySelector("#input-length");

function generateTwoPasswords() {
  let passwordLength = inputLength.value;
  let characters = createCharacters();
  let passwordOne = generatePassword();
  let passwordTwo = generatePassword();

  function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      let passwordIndex = Math.floor(Math.random() * characters.length);
      password += characters[passwordIndex];
    }
    return password;
  }

  passwordOneEl.textContent = passwordOne;
  passwordTwoEl.textContent = passwordTwo;
  return;
}

// Toggle settings | onclick event
let toggleNumbers = true;
let toggleSybols = true;

function toggle(settingTarget) {
  if (settingTarget === "number" && toggleNumbers) {
    return (toggleNumbers = false);
  } else if (settingTarget === "number" && !toggleNumbers) {
    return (toggleNumbers = true);
  }
  if (settingTarget === "symbol" && toggleSybols) {
    return (toggleSybols = false);
  } else if (settingTarget === "symbol" && !toggleSybols) {
    return (toggleSybols = true);
  }
}

// Create character array
const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; // prettier-ignore
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]; // prettier-ignore

let characters = [];

function createCharacters() {
  characters = [...alphabets];
  if (toggleNumbers) {
    characters = [...characters, ...numbers];
  }
  if (toggleSybols) {
    characters = [...characters, ...symbols];
  }
  return characters;
}

// Click to copy | onclick event
const noteEl = document.querySelector("#note-el");
function copy(that) {
  navigator.clipboard.writeText(that.textContent);

  noteEl.textContent = "Password copied to clipboard";
  noteEl.classList.add("active");
  setTimeout(function () {
    noteEl.textContent = "Click to copy your password";
    noteEl.classList.remove("active");
  }, 2500);
}
