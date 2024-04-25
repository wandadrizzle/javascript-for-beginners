console.log("5 < 9:", 5 < 9)
console.log("50 > 100:", 50 > 100, "\n")

console.log(5 === 5);   //true
console.log(5 == "5");  //true
console.log("5" === 5); //false

//The conditional (ternary) operator - condition ? valueIfTrue : valueIfFalse;

let x = confirm("Are you enjoying studying JavaScript with SoloLearn?")
x = true ? "Yes" : "No";
console.log("\nThe user said:", x, "they are enjoying their studies.")

function checkTicked(){
    let box = document.getElementById('c1');
    console.log("The box is ticked:", box.checked);
}

function insertdata(email, password, isSubscribed) {
    // Get a reference to the table
    let table = document.getElementById('dataTable');

    // Create a new row
    let newRow = table.insertRow();

    // Insert cells into the new row
    let emailCell = newRow.insertCell();
    let passwordCell = newRow.insertCell();
    let isSubscribedCell = newRow.insertCell();

    // Set the text content of each cell
    emailCell.textContent = email;
    passwordCell.textContent = password;
    isSubscribedCell.textContent = isSubscribed ? "Yes" : "No"; // Convert boolean to "Yes" or "No"
}


function clearFormData(){
    document.getElementById('email3').value = '';
    document.getElementById('newsletter-passkey').value = '';
    document.getElementById('subscribe').checked = false;
}

function processFormData(){
    let email = document.getElementById('email3').value;
    let password = document.getElementById('newsletter-passkey').value;
    let isSubscribed = document.getElementById('subscribe').checked;

    insertdata(email, password, isSubscribed);
    console.log(email, password, isSubscribed);

    clearFormData();
}

/* 
Objects have properties. The dot (.) notation is the simplest way to access the properties of an object
OBJECTNAME.PROPERTYNAME
*/

console.log(document.title)
document.title = "Changes in My Life"
let original = document.getElementById("strange");
console.log("This is the original strange ipsum:", original);
original.innerHTML = `Isn’t it strange <br>How people can change <br>From strangers to friends <br>Friends into lovers <br>And strangers again`
original.style.textAlign = "center";

function performAndOperation() {
    let input1 = document.getElementById('input1').checked;
    let input2 = document.getElementById('input2').checked;

    /*let result = input1 && input2;
    alert("Result of AND operation: " +  result);*/
    let result = input1 || input2;
    alert("Result of OR operation: " +  result);
}

//Note, prompt always turns the user input into a string

