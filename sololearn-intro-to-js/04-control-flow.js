/*
An algorithm is a set of step-by-step instructions to complete a task, placed in a certain order.

In general, use for loops when you already know the number of iterations, and while loops when there is a condition that needs to be met.
*/

//================================================================================================================================XXXXXXX
let counter = 1;

while (counter < 5) {
  console.log("Message", counter);
  counter = counter + 1;
}
console.log()
// counter creation and initialisation; condition; counter updating
for( let i = 0; i < 3; i++){
    console.log("HHHEY WENA!")
}
console.log("Module Quiz")
ageMQ = 18
if (ageMQ > 18) {
    console.log("Regular price");
}
else {
    console.log("Discount");
}
console.log()
let items = 5;
let isCartEmpty = items > 0;
console.log("Is the cart empty: ", isCartEmpty);
//console.log(i) //ReferenceError: i is not defined

//================================================================================================================================CONSOLE
let userAge = 18;

if (userAge < 18) {
    console.log("Discount");
}
else {
    console.log("Regular price");
}


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('What is your name? ', name => {
    console.log(`Hello, ${name}!`);
    readline.close();
});

/*
⬆️ The method above won't work anymore.

Apparently you can ask for console inputs in JS via a node module called prompt-sync
1. Install Node and NPM
2. On console say, npm install prompt-sync

Notice the extra () after require(). 
The prompt-sync module is a function that creates prompting functions, so you need to call prompt-sync in order to get your actual prompting function.
Ctrl + C sends a signal interrupt
User input by default is a string
*/

//const prompt = require('prompt-sync')();
const prompt = require('prompt-sync')({sigint: true});

const name2 = prompt('What is your name? ');
console.log(`Hello, ${name2}!`);

const location = prompt('\nWhere are you from? ');
theirLocation = location[0].toUpperCase() + location.substring(1).toLowerCase();
console.log(`Ah, I know where ${theirLocation} is. 😊\n`);

const age = prompt('How old are you? ');
const now = new Date();
const currentYear = now.getFullYear();
yearOfBirth = currentYear - Number(age);
console.log(`You were you born in ${yearOfBirth}, I was born in 1996.\n`)


// #region A basic app from codecademy

//const prompt = require('prompt-sync')({sigint: true});

// Random number from 1 - 10
const numberToGuess = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

while (!foundCorrectNumber) {
  // Get user input
  let guess = prompt('Guess a number from 1 to 10: ');
  // Convert the string input to a number
  guess = Number(guess);

  // Compare the guess to the secret answer and let the user know.
  if (guess === numberToGuess) {
    console.log('Congrats, you got it!\n');
    foundCorrectNumber = true;
  } else {
    console.log('Sorry, guess again!\n');
  }
}
// #endregion
