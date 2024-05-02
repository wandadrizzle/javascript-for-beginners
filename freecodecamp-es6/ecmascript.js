console.log("ES6:")

var name = "Nozimoto" //var enale global tendencies?! Byang now?
//var name = "Nokuthula" 

let surname = "Freeman"
//eslint(no-redeclare) | Parsing error: Identifier 'surname' has already been declared | Cannot redeclare block-scoped variable 'surname'.
//let surname = "Green" //Apparently, through the let keyword. A variable with same name can only be declared once?

console.log("Name:", name)
console.log("Surname:", surname)

//After running it on my web console I got an Uncaught SyntaxError: Identifier 'surname' has already been declared

/*
1. npm install eslint --save-dev
2. npx eslint --init or npm init @eslint/config@latest
*/

//============================================================================================================================================
var numArray = [];
var i = 0;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);

var printNumTwo;
for (var j = 0; j < 3; j++) {
//for (let j = 0; j < 3; j++) {
  if (j === 1) {
    printNumTwo = function() {
      return j;
    };
  }
}
console.log(printNumTwo());

/*
Ungazixaki ngalento - use different variable names where possible.
You can't reassign a const value BUT you can mutate and modify it.
*/

const MYARRAY = [1, 2, 3];
//MYARRAY = [4, 5, 6]; //TypeError: Assignment to constant variable.
MYARRAY.push(4, 5, 6);
MYARRAY[0] = 36;
console.log("My array:", MYARRAY)

let contact = {
    name: "God",
    number: "The omniscient one can be reached via prayer"
};
Object.freeze(contact);
contact.number = 911;
console.log("Emergency contact",JSON.stringify(contact))

console.log("\nNameless Functions:")
const myFunc = () => new Date(); //This is a fuction that just returns a value
console.log(myFunc) //[Function: myFunc]
console.log(myFunc())

const multiplier = (item, multi) => item * multi;
console.log(multiplier(3, 6));

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2, 3], [4, 5, 6]))
//Default parameters
const hello = (name = "Lover!") => "Hello " + name;
console.log(hello())
console.log(hello("Sindiswa"))

console.log("\nUNKOWN NUMBER OF PARAMETERS")
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));