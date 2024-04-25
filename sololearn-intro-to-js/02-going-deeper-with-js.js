/*
Dynamic interactive pages...
Separate concerns by typing JS in a separate file
use camelCase for naming variables
*/

let count = 0;
function sayHello(){
    count += 1;
    alert("Hello user! I hope you're well.");
    console.log(`I have greeted the user ${count} time(s).`)
}

const helloButton = document.getElementById('hello-button');
helloButton.addEventListener('click', sayHello);

function changeColour(){
    let text = document.getElementById('functions-text')
    text.style.color = 'purple'
}
changeColour()

//Vali variable names:

let _userName = "Thamsanqa1802"
let $bankBalance = 7
let balance_description = "Broke adjacent"
let angi$azi = [true, 5.8]

console.log(`${_userName} is ${balance_description.toLowerCase()} ngoba he only has R${$bankBalance} in his bank account.`)
console.log("Here's a random thing", angi$azi)

console.log(typeof angi$azi[1]);
console.log(typeof _userName);

console.log(typeof sayHello);

try {
    //let 2nd_show = "Gugu no Andile" //Note, syntax error can't be caught per se - invalid variable name
    let second_show = "uGugu no Andile";
    let rating_input = "78"
    let rating = parseInt(second_show)
    console.log(rating) //Kutholakala a NaN
    rating = parseInt(rating_input)
    console.log(rating)
} catch (error) {
    console.log(error)
}

function highlightText(){
    let titleElement = document.getElementById('second-module');
    titleElement.style.backgroundColor = 'lightblue';
    alert("The second module's heading was highlighted via JS")
}

highlightText()

function greet(){
    let userInput = prompt("What is your name?")
    alert(`Hello, ${userInput}.`)
    document.getElementById('user-name').textContent = "Please enter the rest of your details " + userInput
}

function changeStyle() {
    let divTwo = document.getElementById("module-two");
    let backgroundColour = document.getElementById('bg').value;
    let colour = document.getElementById('c').value;

    divTwo.style.backgroundColor = backgroundColour;
    divTwo.style.color = colour;

}