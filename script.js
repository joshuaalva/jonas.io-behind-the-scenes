'use strict';

// google doc to notes on this section
// https://docs.google.com/document/d/1W6gmOdr6xNLVweD0uXPaxlubdxQENUQRXewkJJhdK2w/edit

// defined in a global scope
// top level scope
// function creates its own scope within the brackets
// function scope

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const firstName = `Steven`;
      // can have repeating variable names b/c they are in different scopes
      const str = `Oh, and you're a millenial, ${firstName}`;
      //   console.log(str);
      console.log(firstName); // jS looks for variable name in current scope firstName === Steven != Joshua
      console.log(millenial); // var variables are function scoped and ignore the block

      function add(a, b) {
        return a + b;
      }
    }
  }
  printAge();

  return age;
}

// global variable
// which means it is available inside the function
// variable lookup
const firstName = 'Joshua';
calcAge(1993);

// hoisting: makes somet ypes of variables accesible/usable in the code before they are actually decalred. Variables lifted to the top of their scope.

// temporal dead zone
const myName = `Joshua`;

if (myName === `Joshua`) {
  // temporal dead zone for job variable
  console.log(`Joshua is a ${job}`);
  const age = 2037 - 1989;
  console.log(age);
  // ---------------
  // as if the variable didn't even exist
  // every let and const variable has a temporal dead zone
  // only safe to use after the tdz
  const job = `teacher`;
  //   console.log(x);
}

// why TDZ? makes it easier to avoid and catch errors
// makes const variables actually work the way they are supposed too

// why hoisting? using functions before actual declaration.
// var hoisitng is just a byproduct
// jS was never intended to become to huge language that it is today
