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
