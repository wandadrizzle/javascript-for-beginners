/*
JavaScript can be used to manipulate the DOM of a page dynamically to add, delete and modify elements.
It is important to understand the relationships between elements in an HTML document in order to be able to manipulate them with JavaScript.
*/

//IF YOU'RE NOT CAREFUL, THE LINE BELOW CAN OVERRIDE YOU INTENDED HTML PLANS
//document.body.innerHTML = "Some text"; //The innerHTML property can be used on almost all HTML elements to change its content.

var a = document.getElementById('new-girl');
var children = a.childNodes;
console.log("These are the children of id='new-girl'", children)

document.addEventListener("DOMContentLoaded", function() {
    var id = document.getElementById("select");
    var klass = document.getElementsByClassName("module-three");
    var tag = document.getElementsByTagName("p");

    console.log("Element with ID 'select':", id);
    console.log("Elements with class name 'module-three':", klass);
    console.log("Paragraph elements:", tag);

    klass[1].innerHTML = "<p>Random text here, for vibes</p>";
});

var elem = document.getElementById("demo");
elem.innerHTML = "Hello World<br>How you been";

var arr = document.getElementsByTagName("h4");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "I've taken your joy. You'll never get to laught at what your favourite New Girl characters said.";
}

/* 
Each element in the DOM has a set of properties and methods that provide information about their relationships in the DOM:

- element.childNodes returns an array of an element's child nodes.
- element.firstChild returns the first child node of an element.
- element.lastChild returns the last child node of an element.
- element.hasChildNodes returns true if an element has any child nodes, otherwise false.
- element.nextSibling returns the next node at the same tree level.
- element.previousSibling returns the previous node at the same tree level.
- element.parentNode returns the parent node of an element.

1. Chart.JS
2. JQuery
*/

var el = document.getElementById("myimg");
el.src = "assets/apple-svgrepo-com.svg";

var link = document.getElementsByTagName('a');
link[0].href = 'https://github.com/wandadrizzle'

var bodiyadi = document.getElementsByTagName('body')[0];
bodiyadi.style.color = '#6600FF'
bodiyadi.style.backgroundColor = 'black'

//CREATING ELEMENTS

