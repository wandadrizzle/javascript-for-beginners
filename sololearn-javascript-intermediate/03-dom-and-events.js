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

//CREATING ELEMENTS - 29 April 2024

//<body onload="doSomething()"> You could have put this on the HTML side
window.onload = function() {
  var p = document.createElement("p");
  var node = document.createTextNode("Some new text");

  p.appendChild(node);

  var div = document.getElementById("new-demo");
  div.appendChild(p);

  var newP2 = document.createElement('p');
  var node2 = document.createTextNode("An empty street, an empty house A hole inside my heart I'm all alone, the rooms are getting smaller I wonder how, I wonder why I wonder where they are The days we had, the songs we sang together Oh, yeah");
  newP2.appendChild(node2);

  var parent = document.getElementById("new-demo");
  var child = document.getElementById("p1");
  //child.parentNode.removeChild(child);
  //parent.removeChild(child)
  parent.replaceChild(newP2, child)

  var btn = document.getElementById('listen')
  btn.addEventListener("click", myFunction);
  
  function myFunction() {
    alert(Math.random());
    BigInt.removeEventListeer("click", myFunction)
  }
}

// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");
var t = setInterval(move, 100);

function move() {
  if(pos >= 150) {
    clearInterval(t);
  }
  else {
    pos += 1;
    box.style.left = pos+"px";
  }
}

function show(){
  alert("Hi there!");
}
//The onchange event is mostly used on textboxes. The event handler gets called when the text inside the textbox changes and focus is lost from the element.
function change(){
  var x = document.getElementById('gama')
  x.value = x.value.toUpperCase();

}

//element.addEventListener(event, function, useCapture);

