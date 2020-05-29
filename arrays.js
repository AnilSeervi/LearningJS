// split, join, toString, pop, push, unshift, shift
let dogNames = "Rocket; Flash; Bella; Slugger";
let myArray = dogNames.split(";"); // splits the string at ';' intervals and turns it into an array
console.log(myArray);

let dogsString = myArray.join("*"); //joins the array with the separator '*'
console.log(dogsString);

dogsString = myArray.toString(); //Converts the array to string, but always the string is separated by ','
console.log(dogsString);

myArray.push("Julia", "Systa"); // Pushes the elements at the end of the array.
console.log(myArray.push("1")); //The method's return value is the total length of the array after pushing.
console.log(myArray);

myArray.pop(); // Pops the last element from the array.
console.log(myArray);
console.log(myArray.pop()); //The method returns the element that was popped.

myArray.unshift("Boxer", "Slagger"); //Adds the elements to the start of the array.
console.log(myArray.unshift("Helio")); // unlike push, unshift doesn't return the length of the newly array
console.log(myArray);

myArray.shift(); // Pops an element from the start of the array
console.log(myArray);
console.log(myArray.shift()); //But the shift method returns the element that was pooped from the beginning of the array.

console.log(myArray.reverse()); // To reverse the arrray

//An array declared with const can change its value. But doing something like below does something weird
const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a === b); //returns false because they are not referencing the same memory(its comparing the references in memeory)
console.log(a == b); //returns also false

const c = a;
console.log(a === c); // returns true as c refers to a in memory

a.push(4);
console.log(a === c); //Still returns true

b.push(4);
console.log(a === b); //Still returns false

// Wroking with multi-dimension arrays
let tictac = [
  ["x", "x", "o"],
  ["o", "x", "x"],
  ["o", "x", "o"],
];
console.log(tictac);
tictac[1].push("x");
tictac[1][tictac[1].length - 1] = "o";
console.log(tictac[1]);
console.log(tictac);
