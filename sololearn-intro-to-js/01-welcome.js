/*Document Object Model

I can get, set and change DOM properties.
*/
document.getElementById('p1').textContent = "This is JavaScript, I've taken your original content hostage. The people will never know what you meant to say. 😈";

let ipsum = document.getElementById('ipsum')
console.log(ipsum);//The entire element will be printed

let heading = document.getElementById('heading-one');
let OriginalHeadingColour =  window.getComputedStyle(heading).color;
console.log("This is the original heading colour:", OriginalHeadingColour);

heading.style.color = 'red';
heading.style.border = 'solid';