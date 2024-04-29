/*
JavaScript provides eight different data types which are undefined, null, boolean, string, symbol, bigint, number, and object.
Variables allow computers to store and manipulate data in a dynamic fashion. 
Write your variables in camel-case.
Unlike var, when you use let, a variable with the same name can only be declared once.
*/

console.log("BEGIN - 29 April 2024");
var myName; //usable in who program
let _kingsName = "Your Majesty"; //usable within a scope
const PI = 3.14; //This is a read-ony variable
console.log(Math.PI)

const FAV_PET = "Cats";
//FAV_PET = "Dogs"; //TypeError: Assignment to constant variable.

countA = 36;
countB = 36;
countA+=1;
countB++;

console.log("Count A:", countA , "\nCount B:", countB)
console.log("The remainder of 10%3:", 10%3)
const badStr = 'Finn responds, "Let\'s go!"';

const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

/*
ESCAPE SEQUENCES:
\': Prints a single quote (')
"double quote": Prints a double quote (") within a string
\\: Prints a backslash ()
\n newline: Moves the cursor to the next line (newline)
\t tab: Creates a horizontal tab
\r carriage return: Moves the cursor to the beginning of the current line (carriage return)
\b backspace: Moves the cursor one position back (backspace)
\f form feed: (Not commonly used nowadays) Inserts a form feed, typically moving the printer to the next page.
*/

let part1 = "This is how it ended."
const story = part1 + " Before it began"; //CONCATENATION
part1 += " Before it began";
console.log(part1)

let artist = "Kahan";
console.log("The length of Noah's surname is", artist.length, "characters long.");
console.log("The first letter of Noah's surname is", artist[0]);
console.log("The last letter of Noah's surname is", artist[artist.length - 1]);
//console.log("The last letter of Noah's surname is", artist[-1]); - Note, JS doens't support negative indexing

let myString = "Bob"; 
myString[0] = "J"; //Strings are immutable
console.log(myString); //Bob

console.log("\nArrays:");
const languages = ["HTML", "CSS", "JavaScript", "JSON", "SQL", "Python", "C#", "Dart"];
const progress = [["Basic JavaScript", 35], ["Legacy Python", 46]]
progress.push(["Learn HTML", 13], ["Learn CSS", 3])
console.log("progress:",progress)
const oneDown =  progress.pop();
console.log("progress:",progress, "\none down from end:", oneDown)
const firstDown = progress.shift();
console.log("progress:",progress, "\none down from beginning:", firstDown)
progress.unshift(["Explore a Career in Front-End Web Development", 40]);
console.log("Updated progress:",progress)


//https://web.dev/learn/javascript

console.log("\nShopping List")
const myList = [["Light Meat Tuna in Brine", 3], ["2L Ice-Cream", 1], ["Crumbed Soya Bites", 2], ["Chenin Blanc", 6], ["Apples", 4]];

console.log('\nScope')