'use strict';

// google doc to notes on this section
// https://docs.google.com/document/d/1W6gmOdr6xNLVweD0uXPaxlubdxQENUQRXewkJJhdK2w/edit

// defined in a global scope
// top level scope
// function creates its own scope within the brackets
// function scope

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   console.log(firstName);

//   function printAge() {
//     const output = `you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       const firstName = `Steven`;
//       // can have repeating variable names b/c they are in different scopes
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       //   console.log(str);
//       console.log(firstName); // jS looks for variable name in current scope firstName === Steven != Joshua
//       console.log(millenial); // var variables are function scoped and ignore the block

//       function add(a, b) {
//         return a + b;
//       }
//     }
//   }
//   printAge();

//   return age;
// }

// // global variable
// // which means it is available inside the function
// // variable lookup
// const firstName = 'Joshua';
// calcAge(1993);

// // hoisting: makes somet ypes of variables accesible/usable in the code before they are actually decalred. Variables lifted to the top of their scope.

// // temporal dead zone
// const myName = `Joshua`;

// if (myName === `Joshua`) {
//   // temporal dead zone for job variable
//   //   console.log(`Joshua is a ${job}`);
//   const age = 2037 - 1989;
//   console.log(age);
//   // ---------------
//   // as if the variable didn't even exist
//   // every let and const variable has a temporal dead zone
//   // only safe to use after the tdz
//   const job = `teacher`;
//   //   console.log(x);
// }

// why TDZ? makes it easier to avoid and catch errors
// makes const variables actually work the way they are supposed too

// why hoisting? using functions before actual declaration.
// var hoisitng is just a byproduct
// jS was never intended to become to huge language that it is today

// console.log(me);
// undefined
// hoisted
// console.log(job);
// beginning of current scope send error
// console.log(year);
// dead zone again

// var me = `Jonas`;
// let job = `teacher`;
// const year = 1991;

// Functions
// console.log(addDecl(2, 3));
// able to call function declaration before it was actually called
// console.log(addExpr(2, 3));
// const variable temperal dead zone
// because it was defined with const
// console.log(addArrow(2, 3));
// same thing happens with the arrow

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// Example

// fictional tiny example
// var does not work with the imaginary function
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`all products deleted`);
// }

// what are the best practices?
// just do use var to declare variables
// use const by default let when needed
// should declare variables at the top of each scope
// always declare functions first and use them after the declaration

// var x = 1;
// let y = 2;
// const z = 3;

// variables declared with let or const do not show up in the window object

// the this keyword
// thi keyword/ variable: special variable that is created for every execution content (every function) takes the value of (points to) the 'owner' of the function in which the this keyword is used.

// this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

// method - this = <object that is calling the method>

// const jonas = {
//   name: `Joshua`,
//   year: 1999,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };

// console.log(jonas.calcAge());

// simple function call > this = undefined
// arrow function > this = <this surrounding function(lexical this)>
// arrow functions do not get their own this keyword
// event listener > this = <DOM element that the handler is attached to>
// new call, apply, bind method later in the course

// this does NOT point to the function itself, and also NOT the its variable environment

// the this keyword in action
// console.log(this); // the window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// inside function call this is undefined
// because we are in strict mode
// };

// calcAge(1993);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// this is window
// arrow function does not get its own this keyword
// };

// calcAge(1993);

// const matilda = {
//   year: 2027,
// };

// method borrowing
// from one object to another so we don't have to rewrite
// matilda.calcAge = jonas.calcAge;
// console.log(`here`);
// console.log(matilda.calcAge());

// Regular Functions vs. Arrow Functions

// not a code block but an object literal
// all still in the global scope including the greet message
// arrow function does not have a this
// window object
// const jonas = {
//   firstName: `Joshua`,
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);

// solution 1
//     const self = this; // self or that
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year < 1996);
//     };
//     isMillenial();
//   },

// solution 2
// uses this keyword from the parent scope
// in this case it is jonas
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year < 1996);
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`hey ${this.firstName}`),
// };

// jonas.greet();
// jonas.calcAge();

// arguements keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };

// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var AddArrow = (a, b) => a + b;

// arguements keyword only exist in regular functions
// not very important in modern javascript

// Primitives vs. Objects (primitive vs reference types)
