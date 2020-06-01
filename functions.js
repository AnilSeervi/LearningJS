// Functions are also basically Objects!!
// A simple function Declaration
function square(numb) {
  return numb * numb;
}
console.log(square(3));
// Anonymous functions/Function Expression: these functions usually doesn't have a name
const squares = function (n) {
  return n * n;
};
var sqr = squares(4);
console.log(sqr);

const factorial = function fact(n) {
  // However a name can be given to anonymous functions to refer itself
  return n < 2 ? 1 : n * fact(n - 1);
};
console.log(factorial(4));
//Anonymous functions are convenient in passing a function as an argument to another function.
function map(f, a) {
  //the map itself is a function which takes a function and an array as arguments
  let result = [];
  for (let i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
const f = function (x) {
  return x * x * x;
};
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
console.log(cube);
// In JavaScript a function can be defined based on a condition.
var fuck;
if (numbers) {
  fuck = function () {
    return "hello mfucker";
  };
}
console.log(fuck());
// function hosting
console.log(hey());
function hey() {
  return "hello";
}
// Function hoisting only works with function declaration and not with function expression/anonymous functions
// console.log(yo());
// let yo = function () {
//   return "yo what up";
// };

//Recursive functions
function factorials(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorials(n - 1);
  }
}
let facts = factorials(5);
console.log(facts);

//Recursive functions and call stack
function foo(i) {
  if (i < 0) return;
  console.log("begin: " + i);
  foo(i - 1);
  console.log("end: " + i);
}
foo(3);

// Nested functions and closures
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
let fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
// it
let result = fn_inside(7); // returns 8
console.log(result);
let result1 = outside(6)(5); // returns 8
console.log(result1);

// Multiply nested functions
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1);

//Closures in JavaScript
var pet = function (name) {
  // The outer function defines a variable called "name"
  var getName = function () {
    return name; // The inner function has access to the "name" variable of the outer
    //function
  };
  return getName; // Return the inner function, thereby exposing it to outer scopes
};
let myPet = pet("Vivie");
console.log(myPet()); // Returns "Vivie"

//A much more complex code for closures
var createPet = function (name) {
  var sex;
  return {
    setName: function (newName) {
      name = newName;
    },
    getName: function () {
      return name;
    },
    getSex: function () {
      return sex;
    },
    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};
var pet = createPet("Vivie");
console.log(pet.getName());
pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex());
console.log(pet.getName());

var getCode = (function () {
  var apiCode = "khdflahdf"; // A code we do not want outsiders to be able to modify
  return function () {
    return apiCode;
  };
})();

var gotCode = getCode();
console.log(gotCode);

// Using the arguments object
// the arguments object can call the function with more arguments than it is formally declared to accept
// it is used in the case where we dont know how many arguments will be passed into the function
function myConcat(separator) {
  let result = "";
  for (var i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator; // arguements[0] or separator because the first arg is stored in the separator
  }
  return result;
}
let myVar = myConcat(",", "red", "orange", "green");
console.log(myVar);

// Function Parameters
// Function without default parameters(pre-ECMAScript-2015)
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}
console.log(multiply(2, 2));
console.log(5);
// Function without default parameters(post-ECMAScript-2015)
function multiple(a, b = 1) {
  return a * b;
}
console.log(multiple(2));
console.log(multiple(2, 2));
// Rest Parameters
function multiplie(mutiplier, ...theArgs) {
  return theArgs.map((x) => mutiplier * x);
}
var arr = multiplie(2, 1, 3, 4);
console.log(arr);

//Arrow Functions
var a = ["hydrogen", "helium", "lithium", "beryllium"];
var a2 = a.map(function (s) {
  return s.length;
});
console.log(a2);
var a3 = a.map((s) => s.length); // Arrow Function.
console.log(a3);

//Arrow functions doesn't have 'this' value and in the below eg. the arrow function using 'this' refers to person object
// function Person() {
//   this.age = 0;
//   setInterval(() => {
//     this.age++; // |this| properly refers to the person object
//   }, 100);
//
// console.log(this.age);
// }
// var p = new Person();
// console.log(p);

// Some Pre-defined functions
console.log(eval("a")); // evaluates JavaSript code represented as string

console.log(isFinite(3 / 0)); // checks whether the passed value is finite.

console.log(isNaN("hel")); // determines if the value passed is not a number

console.log(parseFloat("2.2222222")); // parses a string and returns a floating point number

console.log(parseInt("1001011", 2)); // parses a string and returns an integer number of the specified radix(base){2:binary, 10:decimal, 8:octal, 16:hexadecimal}
