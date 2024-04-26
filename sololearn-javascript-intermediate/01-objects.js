/* 
Objects contain many values, that are written in name:value pairs AKA property:property values. They are like normal variables but happen to contain named values.

This is how you access properties:
objectName.propertyName OR objectName['propertyName']

Methods are functions that are stored as object properties.
objectName.methodName()

methodName = function() { code lines }
*/

//HARDCODED - object litearal/initialiser syntax
var person = {
    name: "Wanda",
    surname: "Drizzle",
    age: 27,
    height: 156, //[cm]
    weight: 74, //[kg]
    favColour: "black",
    hobbies: ["Reading", "Coding", "Crochetting", "Singing", "Jogging", "Watching TV Shows"]
};

var x = person.age;
var y = person['age'];

//document.getElementById('output').innerText = "x: " + x + ", y: " + y;

console.log("x: " + x + ", y: " + y) //This is an example of an object method

//OBJECT TYPE via an OBJECT CONSTRUCTOR

function person2(name, surname, age, height, weight, favColour, hobbies){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height; //[cm]
    this.weight = weight; //[kg]
    this.favColour = favColour;
    this.hobbies = hobbies;

    //this.yearOfBirth = bornYear2.bind(this);
    this.yearOfBirth = bornYear2;

    this.changeWeight = function (weight){
        this.weight = weight;
    }

    this.BMI = function() {
        var mHeight = this.height / 100;
        var bmi = this.weight / (mHeight * mHeight);
        return bmi.toFixed(2);
    }

    this.bornYear =  function(){
        const now = new Date();
        const currentYear =  now.getFullYear();
        return currentYear - this.age;
    }
}

function bornYear2(){
    const now = new Date();
    const currentYear =  now.getFullYear();
    return currentYear - this.age;
}

var Me = new person2("Wanda", "Drizzle", 27, 156, 72, "black", ["Reading", "Coding", "Crochetting", "Singing", "Jogging", "Watching TV Shows"])
var Hobi = new person2("호석", "정", 30, 177, 65, "brown", ["Window Shopping", "Listening to Music"]) //J-HOPE - big news his fav colour is no longer green

console.log("\nIn the words of Beyonce, I'm a brown skin girl. I am dark, yet lovely - Song of Solomon 1:5 [Berean Standard Bible]")

currentBMI = Me.BMI()
Me.changeWeight(55)
goalBMI = Me.BMI()

console.log(`\nMy current BMI is ${currentBMI} but I would love it if it was ${goalBMI}.`)
console.log(`Hobi was born in ${Hobi.bornYear()}.`)
console.log(`Hobi was born in ${Hobi.yearOfBirth()}.`)
console.log(`${Me.name} has ${Me.hobbies.length} hobbies.`)

//===================================================================================================CONTACT MANAGER

function contact(name, number){
    this.name = name;
    this.number = number;
    this.dateAdded = new Date();

    this.changeNumber = function(number){
        this.number = number
    }

    this.print = function(){
        console.log(`\nName: ${this.name}\nNumber: ${this.number}\nDate Added: ${this.dateAdded}`)
    }
}

var emergency = new contact("The Popo", 911)
emergency.print()