// Contains indexOf, slice, toUpperCase and toLowerCase, and Replace.
var name = "Google";
console.log(name[name.length - 1]);
console.log(name.indexOf("e")); // indexOf returns the position of the argument passed, in the variable
console.log(name.indexOf("s"));

console.log(name.slice(0, 3)); // chops the variable from posix 0 to posix 3 : Goo
console.log(name.slice(2)); // chops the variable at posix 2 and returns the remaining variable : ogle

console.log(name.toUpperCase()); // returns the variable in the UpperCase
console.log(name.toLowerCase()); // returns the variable in the LowerCase

console.log(name.replace("gle", "girl")); // replaces the variable consisting the arg1 to arg2

console.log(name.repeat(2)); // repeats the variable certain amt of times as per the args value
