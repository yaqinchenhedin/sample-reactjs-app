/*Arrow functions were introduced in ES6.*/

/*Arrow functions allow us to write shorter function syntax:*/

/*Before:*/
hello = function() {
  return "Hello World!";
}

/* With Arrow Function: */
hello = () => {
  return "Hello World!";
}

/* Arrow Functions Return Value by Default: */
hello = () => "Hello World!";

/* If you have parameters, you pass them inside the parentheses. Arrow Function With Parameters: */
hello = (val) => "Hello " + val;

/* In fact, if you have only one parameter, you can skip the parentheses as well: Arrow Function Without Parentheses:*/
hello = val => "Hello " + val;

/* In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.
With arrow functions the this keyword always represents the object that defined the arrow function. 
Both examples call a method twice, first when the page loads, and once again when the user clicks a button.
The first example uses a regular function, and the second example uses an arrow function.
The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.
*/

/* With a regular function this represents the object that calls the function: */
//Regular Function:
hello = function() {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

/* With an arrow function this represents the owner of the function: */
//Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

//The window object calls the function:
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);