//JavaScript Arrays

function sayHello(){
    console.log("Sawubona, unjani? I hope JavaScript won't make your brain hurt.")
}


console.log("WELCOME")
setInterval(sayHello, 3000) //interval is in milliseconds - this will happen when it happens. When it does it'll happen again and again

var things = new Array("Make websites interactive", "Build mobile apps and games", "Develop server-side applications with Node.js")

console.log("This is what one can do with JavaScript:\n")
count = 1

things.forEach(thing => {
    
    console.log(`${count}. ${thing}`);
    count += 1;
}); 

console.log()
var courses = new Array("HTML", "CSS", "JS");
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element
courses[10] = "Dart"
console.log(courses[10])
console.log(courses[9]) //undefined

console.log()
var interests = new Array(7) //By choosing to not add an argument you can create your array dynamically
interests[0] = "Python";
interests[1] = "Dart";
interests[2] = "C#";
interests[3] = "JavaScript";
interests[4] = "HTML";
interests[5] = "CSS";
interests[6] = "C++";

//ARRAY LITERAL
var literalCourses = ["HTML", "CSS", "JS"]; //Recommended!

console.log(`Wanda has ${interests.length} coding interests at the moment.`); //Note: objects have properties

var codingLanguages = ["PHP", "TypeScript", "Go", "Java", "SQL", "Swift", "R", "Ruby", "C", "NoSQL"];
var code = interests.concat(codingLanguages);

code.forEach((language, index) =>{

    process.stdout.write(language);
    if (index < code.length - 1) {
        process.stdout.write(", ");
    }
})

//ASSOCIATIVE ARRAYS - I guess this is like Python's dictionary since it implies that the indexes can be named
console.log()
var movie = []; //Treating is as an object instead of an array, can't use array methods
movie["name"] = "Heart of the Hunter";
movie["genre"] = "Thriller/Action";
movie["year"] = 2024;
movie["director"] = "Mandla Walter Dube";

console.log(`A new movie was released in ${movie["year"]}!`)

//If you use a named index, JavaScript will redefine the array to a standard object.
//Math has no constructor. There's no need to create a Math object first.
console.log()
console.log("Euler's constant:", Math.E)
console.log("Natural log of the value 2:", Math.LN2)
console.log("Natural log of the value 10:", Math.LN10)
console.log("The base 2 log of Euler's constant (E):", Math.LOG2E)
console.log("The base 10 log of Euler's constant (E):", Math.LOG10E)
console.log("The constant PI:", Math.PI)

console.log()
const properties = Object.getOwnPropertyNames(Math)
console.log(properties); //This will output an array of method names
const keys = Object.keys(Math)
console.log(keys) //[]

console.log()
console.log("The square root of 25 is", Math.sqrt(25))
let lotto = Math.random() // Number between 0 and 1
lotto = Math.random() * 10 + 1 // Number between 1 and 10
lotto = Math.ceil(Math.random() * 10 + 1) // Makes number an integer
rando = parseInt(Math.random() * 10 + 1)
scattered = Math.floor(Math.random() * 10 + 1) //Using Math.floor(), Math.ceil(), or Math.round(): These functions can be used to round a number down (floor), up (ceil), or to the nearest integer (round).
erratic = (Math.random() * 10 + 1) | 0; //Using the bitwise OR operator (|)

console.log("You didn't ask for it but here's a random number:", lotto)
console.log("DJ Khaled said another one:", rando)
console.log("Another one:", scattered)
console.log("...and another one:", erratic)

console.log()

const prompt = require('prompt-sync')();

const n = prompt('Enter a number: ');
var answer = Math.sqrt(Number(n))
console.log(`The square root of ${n} is ${answer}.`)

console.log()

var d = new Date(); //d stores the current date and time
console.log("This is the current date and time:", d)

//Random Examples
var ms = new Date(86400000); //new Date(milliseconds)
var str = new Date("January 2, 2015 10:42:00"); //new Date(dateString)
var split = new Date(88,5,11,11,42,0,0); //new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log(`\n${ms}\n${str}\n${split}\n`)

function getCurrentDateTime() {
    var d = new Date();
    var milliseconds = d.getTime(); // milliseconds since Unix Epoch
    var dateString = d.toISOString(); // date string in ISO format
    var year = d.getFullYear(); // current year
    var month = d.getMonth(); // current month (0-indexed)
    var day = d.getDate(); // current day of the month
    var hours = d.getHours(); // current hour
    var minutes = d.getMinutes(); // current minute
    var seconds = d.getSeconds(); // current second
    var millisecondsPart = d.getMilliseconds(); // current millisecond

    return {
        milliseconds: milliseconds,
        dateString: dateString,
        year: year,
        month: month,
        day: day,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        millisecondsPart: millisecondsPart
    };
}

var dateTimeInfo = getCurrentDateTime();
console.log("Milliseconds since Unix Epoch:", dateTimeInfo.milliseconds);
console.log("Date string in ISO format:", dateTimeInfo.dateString);
console.log("Year:", dateTimeInfo.year);
console.log("Month (0-indexed):", dateTimeInfo.month); //+1 to get month as we normally write it down
console.log("Day of the month:", dateTimeInfo.day);
console.log("Hours:", dateTimeInfo.hours);
console.log("Minutes:", dateTimeInfo.minutes);
console.log("Seconds:", dateTimeInfo.seconds);
console.log("Milliseconds:", dateTimeInfo.millisecondsPart);

//=======================================================================================DATE OBJECT, PRACTICE

 function getWeekDay(year, month, day) {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(year, month, day);

     //complete the function
    var dayOfTheWeek = d.getDay();
    var dayName = daysOfWeek[dayOfTheWeek];
    console.log(dayName)
 }

 getWeekDay(1993, 7, 12)

//=======================================================================================STORE MANAGER


var increase = 9;
var prices = [98.99, 15.2, 20, 1026];
prices.forEach((price, index) => {
    prices[index] += increase;
});
console.log(prices);
