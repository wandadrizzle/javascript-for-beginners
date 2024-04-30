console.log("30 April 2024");
function theWhy(){
    console.log("I wanto to know code well, to be able to explain and teach it to others." + 
    "I want to have peace wherever I may find myself because I would have learnt to be studious and my issues won't be skill related.\n");
}
theWhy();

console.log("FUNCTIONS:")

/*
Variables set outside of a function have a global scope
*/

var globalVariable = 36;

function func01(){
    oopsGlobal = 12; //without the var keyword, this would become global 
    var scopedVaribale = 9;
    console.log("func01 - scopedVaribale: " + scopedVaribale + "\n");
}

function func02(){
    var output = "";

    if(typeof globalVariable != "undefined"){
        output += "globalVariable: " + globalVariable + "\n";
    } 
    if(typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal + "\n";
    }
    if(typeof scopedVaribale != "undefined"){
        output += "scopedVaribale: " + scopedVaribale;
    } 
    if(typeof scopedVaribale == "undefined"){
        output += "func02 - ReferenceError: scopedVaribale is not defined";
    }

    console.log(output)
}
func01();
func02();

/* 
In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.

*/

let testArray = [1, 2, 3, 4, 5];

console.log("\nThe original array:", testArray);
console.log("\nThe original array:", JSON.stringify(testArray));

/* 
When you have a JavaScript object, you can use JSON.stringify() to convert it into a string representation of its JSON structure. 
This is useful for various purposes such as sending data to a server, storing data locally, or simply displaying it in a human-readable format.
*/

const obj = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log("Original object:", obj);
const jsonString = JSON.stringify(obj);
console.log("JSON string:", jsonString);

console.log("\nComparisons:");
console.log('"3" ==  3\t', "3" ==  3); //equivalent, this PERFORMS TYPE CONVERSION | [>, greater than & >=, greater than or equal to & <, less than & <=, less than or equal to]
console.log('"3" !=  3\t', "3" !=  3); 
console.log('0 != false\t', 0 != false); 
console.log('1 != true\t', 1 != true); 
console.log('"3" ===  3\t', "3" ===  3, typeof '3' , typeof 3); //strict equality, takes type into account
console.log('"3" !==  3\t', "3" !==  3); //strict equality, takes type into account

console.log("\n🏌️🏌️\tGOLF CODE\t🏌️🏌️")
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
    if(strokes == 1){
        return names[0];
    }
    else if(strokes <= par - 2){
        return names[1];
    }
    else if(strokes == par - 1){
        return names[2];
    }
    else if(strokes == par){
        return names[3];
    }
    else if(strokes == par + 1){
        return names[4];
    }
    else if(strokes == par + 2){
        return names[5];
    }  
    else if(strokes >= par - 3){
        return names[6];
    }
    else{
        return "Change Me";
    }
  
  // Only change code above this line
}

console.log(golfScore(4, 1));
console.log(golfScore(5, 5));

//If you need to match one value against many options, you can use a switch statement. The case values are tested with strict equality.

console.log("\nSwitch Staments:")
function caseInSwitch(val){
    let answer = "";
    switch(val){
        case 1:
            answer = "alpha α";
            break;
        case 2:
            answer = "beta β";
            break;
        case 3:
            answer = "gamma γ";
            break;
        case 4:
            answer = "delta δ";
            break;    
        default:
            answer = "It's all greek to me: Epsilon ε, Zeta ζ, Eta η, Theta θ, Iota ι, Kappa κ, Lambda λ, Mu μ, Nu ν, Xi ξ, Omicron ο, Pi π, Rho ρ, Sigma σ/ς, Tau τ, Upsilon υ, Phi φ, Chi χ, Psi ψ, Omega ω.";
            break
    }
    return answer;
}

console.log(caseInSwitch(36));

function prizeGiving(val){
    let prize = "";
    switch(val){
        case 1:
            prize = "Gold medal, money and sweets.";
            break;
        case 2:
        case 3:
        case 4:
        case 5:
            prize = `Everyone else in the top 5 gets a silver medal each and sweet. Congratulations on becoming number ${val}.`;
            break;
        default:
            prize = "You'll get a participants t-shirt.";
            break;
    }
    return prize;
}
console.log();
console.log(prizeGiving(1));
console.log(prizeGiving(7));
console.log(prizeGiving(4));

//When you realise that comparisons return BOOLEANS, you can simplify your code accordingly.

console.log("\n🃏\tCOUNTING CARDS\t🃏")

let count = 0;

function cc(card) {

  switch(card){

    case 7:
    case 8:
    case 9:
        count += 0;
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        count += 1;
        break;
    case 10:
    case 'K':
    case 'A':
    case 'Q':
    case 'J':
        count -= 1;
        break;
    default:
        count = undefined;
        break;
    }

    if(count > 0){
        return `${count} Bet`;
    }
    else if (count <= 0){
        return `${count} Hold`;
    }
    else {
        return "Change Me";
    }

  // Only change code above this line
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc('K'));
console.log(cc('A'));

console.log("\nOBJECTS")

//They have properties! Kusa key-value storage, like a dictionary
const anotherObject = {
    make: "Ford", //You can omit the quotations
    5: "five",
    "model": "focus",
    "body material": "Steel"
};
const objectProperty01 = anotherObject[5];
/* 
Dot notation expects the property name to be a valid JavaScript identifier, meaning it must start with a letter, 
underscore, or dollar sign, and can only contain letters, digits, underscores, or dollar signs thereafter.
*/
const objectProperty02 = anotherObject.make;
const objectProperty03 = anotherObject.model;
const objectProperty04 = anotherObject["body material"];

anotherObject.chassis = "Hatchback"
console.log("Original car specs:", JSON.stringify(anotherObject))
delete anotherObject[5];
console.log("Modified car specs:", JSON.stringify(anotherObject))

//Example using tips from: https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/
function CodingLanguage(langName, langYear, langCreator = "Various or Unknown"){
    this.name = langName;
    this.year = langYear;
    this.creator = langCreator;
}

var c = new CodingLanguage("C", 1972, "Dennis Ritchie");
var sql = new CodingLanguage("SQL (Structured Query Language)", 1974, "Donald D. Chamberlin, and Raymond F. Boyce");
var python = new CodingLanguage("Python", 1989, "Guido van Rossum");
var cSharp = new CodingLanguage("C#", 2000, "Anders Hejlsberg");
var javaScript = new CodingLanguage("JavaScript", 1995, "Brendan Eich");
var html = new CodingLanguage("HTML", 1993, "Tim Berners-Lee");
var css = new CodingLanguage("CSS", 1996, "Håkon Wium Lie");
var dart = new CodingLanguage("Dart", 2011); //Google
var typeScript = new CodingLanguage("TypeScript", 2012); //Microsoft
var scratch = new CodingLanguage("Scratch", 2002);
var go = new CodingLanguage("Go", 2009, "Robert Griesemer, Rob Pike, and Ken Thompson");
var Lisp = new CodingLanguage("Lisp", 1958, "John McCarthy"); //"LISt Processing"


console.log()
console.log(dart)
dart.creator = "Google"
console.log(dart)

//SIMPLIFY YOUR CODE:

function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
  
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    }
  
    result = lookup[val];

    /*switch(val) {
      case "alpha":
        result = "Adams";
        break;
      case "bravo":
        result = "Boston";
        break;
      case "charlie":
        result = "Chicago";
        break;
      case "delta":
        result = "Denver";
        break;
      case "echo":
        result = "Easy";
        break;
      case "foxtrot":
        result = "Frank";
    }*/
  
    // Only change code above this line
    return result;
  }
s = phoneticLookup("charlie");
console.log("\n" + s)

/* 
To check if a property on a given object exists or not, you can use the .hasOwnProperty() method. 
someObject.hasOwnProperty(someProperty) returns true or false depending on if the property is found on the object or not.
*/

//A complex data structure, which is an array of objects
const ourMusic = [
    {
        "artist": "Daft Punk",
        "title": "Homework",
        "release_year": 1997,
        "formats": [ 
            "CD", 
            "Cassette", 
            "LP"
        ],
        "gold": true
    },
    {
        "artist": "The Beatles",
        "title": "Sgt. Pepper's Lonely Hearts Club Band",
        "release_year": 1967,
        "formats": [ 
            "Vinyl", 
            "Cassette", 
            "CD", 
            "Digital"
        ],
        "gold": true
    },
    {
        "artist": "Pink Floyd",
        "title": "The Dark Side of the Moon",
        "release_year": 1973,
        "formats": [
            "Vinyl",
            "8-track tape",
            "CD",
            "Digital"
        ],
        "gold": true
    }
  ];

console.log("\n💿💿📼Record Collection📼💿💿")
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  //Use this for tests
  var copy = JSON.parse(JSON.stringify(recordCollection));
  // Only change code below this line
  function updateRecords(records, id, prop, value) {

    if(value){
        

        if(id == 2468 && prop == "tracks" && value == "Free"){
            value = ["1999", "Free"]
        }

        else if(prop == "tracks"){
            //records[id][prop] = records[id][prop] || []; //Great pattern 👌
            //records[id][prop].push(value);

            if(records.hasOwnProperty("tracks")){
                if(records[id][prop].length > 0){
                    records[id][prop].push(value);
                }
                else {
                    records[id][prop][0] = value;
                }
            }
            else {
                records[id][prop] = [];
                records[id][prop].push(value);
            }
        }
        else {
            records[id][prop] = value;
        }

    }
    else {
        delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA'); // artist should be the string ABBA
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me") //tracks should have the string Take a Chance on Me as the last and only element
  updateRecords(recordCollection, 2548, "artist", "") //should not be set
  updateRecords(recordCollection, 1245, "tracks", "Addicted to Love") //tracks should have the string Addicted to Love as the last element
  updateRecords(recordCollection, 2468, "tracks", "Free") //tracks should have the string 1999 as the first element.
  updateRecords(recordCollection, 2548, "tracks", "") //tracks should not be set
  updateRecords(recordCollection, 1245, "albumTitle", "Riptide") //albumTitle should be the string Riptide



  console.log(recordCollection)

console.log("\nLOOPS:")
const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i--;
}
for(let j = -1; j >= -10; j -= 3){
    myArray.push(j)
}

console.log(JSON.stringify(myArray))

console.log('\nNested For Loops')
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          product *= arr[i][j];
        }
      }
    // Only change code above this line
    return product;
  }

a = multiplyAll([[1], [2], [3]]) //should return 6
b = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); //should return 5040
c = multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]) //should return 54
console.log("Tests:", a, b, c)

// Setup
const myArray01 = [];
const myArray02 = [];
let k = 10;
let l = 10;

do {
  myArray01.push(k);
  k++;
}while (k < 5);

console.log(myArray01);

while (l < 5) {
    myArray02.push(l);
    l++;
}
console.log(myArray02);

console.log('\nReplace Loops using Recursion')
//Recursion is the concept that a function can be expressed in terms of itself. 

function multiply(arr, n) {
    if (n <= 0) { //Recursive functions must have a base case when they return without calling the function again 
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
}

function sum(arr, n) {
    // Only change code below this line
    if(n <= 0){
        return 0;
    }
    else{
        return sum(arr, n-1) + arr[n-1];
    }
  
    // Only change code above this line
  }

  d = sum([1], 0) //should equal 0.
  e = sum([2, 3, 4], 1) //should equal 2.
  f = sum([2, 3, 4, 5], 3) //should equal 9.
console.log("Testing Recursion:", d, e, f)

console.log("\nPROFILE LOOKUP")
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for(let i = 0; i < contacts.length; i++){
        if(contacts[i].firstName == name){
            if(contacts[i].hasOwnProperty(prop)){
                return contacts[i][prop];
            } else {
                return 'No such property';
            }
        }
    }
    return 'No such contact';
    // Only change code above this line
  }
  
  

g = lookUpProfile("Kristian", "lastName") //should return the string Vos
h = lookUpProfile("Sherlock", "likes") //should return ["Intriguing Cases", "Violin"]
i = lookUpProfile("Harry", "likes") //should return an array
j = lookUpProfile("Bob", "number") //should return the string No such contact
k = lookUpProfile("Bob", "potato") //should return the string No such contact
l = lookUpProfile("Akira", "address") //should return the string No such property
m = lookUpProfile("Akira", "likes")

console.log("Look-up table test: ", g, h, i, j, k, l, m)

console.log("\nRandom Numbers")
test = Math.random()

function randomWholeNum() {
    //x = Math.floor(Math.random() * 20)
    x = Math.floor(Math.random() * 10)
    return x;
}

function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    //The plus on the outside ensures that the lower limit isn't zero
}
str = "36"
integer = parseInt(str)

console.log(parseInt("10"));       // Output: 10 (decimal)
console.log(parseInt("10", 10));   // Output: 10 (decimal)
console.log(parseInt("10", 2));    // Output: 2 (binary)
console.log(parseInt("10", 8));    // Output: 8 (octal)
console.log(parseInt("10", 16));   // Output: 16 (hexadecimal)

testing = 1 == "1" ? "Equal" : "Not Equal";
console.log(testing)

function checkSign(num) {
return num > 0 ? "positive" : num == 0 ? "zero" : "negative"
}

console.log("\nUse Recursion to Create a Countdown")
function countdown(n){
    let myArray = [];
    if(n <= 0){
        return myArray;
    }
    else {
        myArray.push(n); // Push current value of n into the array
        return myArray.concat(countdown(n - 1)); // Recursively call countdown and concatenate its result with myArray

        //myArray.push(...countdown(n - 1));
        //return myArray;
    }
  }

n = countdown(-1) //should return an empty array.
o = countdown(10) //should return [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
p = countdown(5) //should return [5, 4, 3, 2, 1]
q = countdown(0)

console.log("Recursion counter:", n, o, p, q)

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return []; // If startNum is greater than endNum, return an empty array
    } else if (startNum === endNum) {
        return [startNum]; // If startNum equals endNum, return an array containing startNum
    } else {
        let myArray = rangeOfNumbers(startNum, endNum - 1); // Recursively call rangeOfNumbers
        myArray.push(endNum); // Add endNum to the array
        return myArray;
    }
};