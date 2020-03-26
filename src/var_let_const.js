import React from 'react'; 

/* VAR */
/*

	If you use var outside of a function, it belongs to the global scope.
	If you use var inside of a function, it belongs to that function.
	If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

*/

/* GLOBAL SCOPE*/
var x = 2;       // Global scope
let x = 2;       // Global scope

/* Global variables defined with the var keyword belong to the window object: */
var carName = "Volvo";
// code here can use window.carName

/* Global variables defined with the let keyword do not belong to the window object: */
let carName = "Volvo";
// code here can not use window.carName

// code here can use carName

function myFunction() {
  // code here can also use carName
}

/* FUNCTION SCOPE */
// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

/* BLOCK SCOPE WITH VAR */
{
  var x = 2;
}
// x CAN be used here


/* BLOCK SCOPE WITH LET */
{
  let x = 2;
}
// x can NOT be used here

/* REDECLARING VARIABLES USING VAR */
var x = 10;
// Here x is 10
{
  var x = 2;
  // Here x is 2
}
// Here x is 2

/* REDECLARING VARIABLES USING LET */
var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10

/* REDECLARING DIFFERENCES BETWEEN VAR AND LET */ 
/* example with war */
var x = 2;

// Now x is 2
 
var x = 3;

// Now x is 3

/* Redeclaring a let variable with let, in the same scope, or in the same block, is not allowed: */
let x = 2;       // Allowed
let x = 3;       // Not allowed

{
  let x = 4;   // Allowed
  let x = 5;   // Not allowed
}

/* example with war and let */
var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

/* Redeclaring a var variable with let, in the same scope, or in the same block, is not allowed: */
var x = 2;       // Allowed
let x = 3;       // Not allowed

{
  var x = 4;   // Allowed
  let x = 5   // Not allowed
}

/* Redeclaring a variable with let, in another scope, or in another block, is allowed: */

let x = 2;       // Allowed

{
  let x = 3;   // Allowed
}

{
  let x = 4;   // Allowed
}

/* Variables defined with var are hoisted to the top. You can use a variable before it is declared: */
// you CAN use carName here
var carName;

/* Variables defined with let are not hoisted to the top.Using a let variable before it is declared will result in a ReferenceError.
The variable is in a "temporal dead zone" from the start of the block until it is declared:*/
// you can NOT use carName here
let carName;

/* LOOP SCOPE USING VAR */
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
// Here i is 10

/* LOOP SCOPE USING LET */
let i = 5;
for (let i = 0; i < 10; i++) {
  // some statements
}

// Here i is 5

/* FUNCTION SCOPE USING VAR OR LET */
function myFunction() {
  var carName = "Volvo";   // Function Scope
}

function myFunction() {
  let carName = "Volvo";   // Function Scope
}

/* Variables defined with const behave like let variables, except they cannot be reassigned: */
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

/* Declaring a variable with const is similar to let when it comes to Block Scope. The x declared in the block, in this example, is not the same as the x declared outside the block:*/
var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10

/* JavaScript const variables must be assigned a value when they are declared: */

//not correct
const PI;
PI = 3.14159265359;

//correct
const PI = 3.14159265359;

/* Not Real Constants
The keyword const is a little misleading.It does NOT define a constant value. It defines a constant reference to a value.
Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.*/

/* If we assign a primitive value to a constant, we cannot change the primitive value: */
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

/* You can change the properties of a constant object: */
// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

/*  But you can NOT reassign a constant object: */
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

/* You can change the elements of a constant array: */
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

/* But you can NOT reassign a constant array: */
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR

/* Redeclaring or reassigning an existing const variable, in the same scope, or in the same block, is not allowed: */
const x = 2;       // Allowed
const x = 3;       // Not allowed
x = 3;             // Not allowed
var x = 3;         // Not allowed
let x = 3;         // Not allowed

{
  const x = 2;   // Allowed
  const x = 3;   // Not allowed
  x = 3;         // Not allowed
  var x = 3;     // Not allowed
  let x = 3;     // Not allowed
}

/* Redeclaring a variable with const, in another scope, or in another block, is allowed: */
const x = 2;       // Allowed

{
  const x = 3;   // Allowed
}

{
  const x = 4;   // Allowed
}

/* Variables defined with const are not hoisted to the top. A const variable cannot be used before it is declared: */
carName = "Volvo";    // You can NOT use carName here
const carName = "Volvo";

