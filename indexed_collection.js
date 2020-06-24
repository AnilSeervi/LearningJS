// Array Obejct : An array is an ordered set of values that you refer to with a name and a index
// creating an array
let arr = new Array("element0", "element1", "element2");
let arr1 = Array("element0", "element1", "element2");
let arr2 = ["element0", "element1", "element2"];

// setting the length
let arr3 = new Array(20);
let arr4 = Array(20);
let arr5 = [];
arr5.length = 20;
console.log(arr3.length, arr4.length, arr5.length);

// Understanding length
let cats = [];
cats[30] = "Dusty";
console.log(cats.length);
let cat = ["Dusty", "Rony", "Bully"];
let caties = [...cat, ,];
let myCats = [...cat];
console.log(cat); // returns the whole array
cat.length = 2;
console.log(cat); //  logs 'Dusty' and 'Rony', 'Bully' is removed
cat.length = 0;
console.log(cat); // logs an empty array
cat.length = 3;
console.log(cat); // logs an array [<3 empty items]

// Iterating over arrays
// Using for loop
for (let i = 0; i <= caties.length - 1; i++) {
  console.log(caties[i]);
}
// Using forEach() method
caties.forEach(function (caties) {
  console.log(caties);
});
// using arrow function
caties.forEach((c) => console.log(c));
// elements that are not defined during the array is defined is not listed when iterating by 'forEach'
if (caties[3] === undefined) console.log(`${caties[3]} is undefined`);
caties[3] = undefined; // assigning the undefined element to 'undefined' will list the items when iterating by forEach
caties.forEach((c) => console.log(c));

// Array Methods
// concat() method : joins two or more arrays and returns a new array
let concatedArray = myCats.concat("Jhonny", "Roxy");
console.log(concatedArray);
// join() method : joins all the elements of an array into a string
let joinedArray = myCats.join(); // joins the array with ',' as the delimiter
let joinedWithADelimiter = myCats.join(" & "); // joins the array with the delimiter we pass in.
console.log(joinedArray, joinedWithADelimiter);
// push() method : adds one or more elements to the end of the array and returns the length of the array
myCats.push("Jixxy");
console.log(myCats.push("Roby"), myCats);
// pop() method : removes one element from the end of the array an returns that element
console.log(myCats.pop(), myCats);
// unshift() method : adds one or more element to the start of the array and returns the new length
console.log(myCats.unshift("Roby"), myCats);
// shift() method : removes the first element in the array and returns that element
console.log(myCats.shift(), myCats);
// slice(start_index, upto_index) method : extracts a section of an array and returns a new array
let slicedArray = myCats.slice(1, 4); // starts at index 1 and extracts all elements until index 3
console.log(slicedArray);
// splice(index,count_to_remove,addElement1,addElement2,...) method : removes elemets from an array and (optionally) replaces them.
let myArray = myCats.splice(1, 2, "Roby", "Rony"); // returns the elements that were removed
console.log(myArray, myCats);
// reverse() method : reverses the whole array
let reversedArray = myCats.reverse(); // returns a reference to the array
console.log(reversedArray, myCats);
// sort() method : sorts the elements of an array in pkace
let sortedArray = myCats.sort(); // returns a reference to the array
console.log(sortedArray, myCats);
// sort() can also take a callback function to determine how the array elememts are compared
let sortFun = myCats.sort((a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) return 1;
  if (a[a.length - 1] > b[b.length - 1]) return -1;
  if (a[a.length - 1] == b[b.length - 1]) return 0;
});
console.log(sortFun);
// indexOf(searchElement[, fromIndex]) : searches the array for searchElement and returns the index of the first match
console.log(myCats.indexOf("Roby", 3), myCats.indexOf("Roby", 2)); // returns -1 when search is not found and the 'index' of the first match element when the match is found
// lastIndexOf(searchIndex[, fromIndex]) : works like indexOf(), but starts at the end and searches backwards
console.log(myCats.lastIndexOf("Roby", 1), myCats.lastIndexOf("Roby", 3)); // starts searching from backwards
// forEach(callBack[, thisObject]) : executes the callBack on every array element and returns undefined
myCats.forEach((cats) => console.log(cats)); // iterates the callBack for every array element
// map(callBack[, thisObject]) ; returns a new array of the return value from executing callBack on every array item
let upCaseCats = myCats.map((c) => c.toUpperCase()); // executes the callBack for every array item an returns an array
console.log(upCaseCats);
// filter(callBack[,thisObject]) : returns a new array containing theitems for which the callBack returned true
let filterCats = myCats.filter((c) => c.startsWith("R"));
console.log(filterCats);
// every(callBack[, thisObejct]) : returns true if callBack returns true for every item in the array
let checkCats = myCats.every((c) => c.endsWith("y"));
console.log(checkCats);
// some(callBack[, thisObject]) : returns true if callBack returns true for at least one item in the array
let someCats = myCats.some((c) => c.startsWith("R"));
console.log(someCats);
// reduce(callBack[, initialValue]) : applies callBack(accumulator, currentValue[,currentIndex[,array]]) -
// for each value in the array for the purpose of reducing the list of items down to a single value
let a = [10, 20, 30];
let reduced = a.reduce((a, b) => {
  return a + b;
}, 0); // a : accumulator, b : currentValue(values of the array), 0 : initialValue of accumulator
let reducedAgain = a.reduce((a, b) => a + b); // when the initialValue is not passed accumulator is set to the first array item and currentItem to second array item
console.log(reduced, reducedAgain);
// reduceRight(callBack[, initialValue]) : works like reduce(), but starts with the last element
let lastReduced = a.reduceRight((a, b) => b - a, 0);
console.log(lastReduced);

// Multi-dimensional Arrays
let b = new Array(4);
for (let i = 0; i < 4; i++) {
  b[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    b[i][j] = `[ ${i},${j} ]`;
  }
}
console.log(b);

// Working with Array-like objects. array-like obejcts don't share all the methods of array.
// array prototype methods can be called against other array-like objects
function printArguments() {
  Array.prototype.forEach.call(arguments, function (item) {
    console.log(item);
  });
}
printArguments(1, 2, 3, 4, 0);

function printString() {
  Array.prototype.forEach.call("a string", function (chr) {
    console.log(chr);
  });
}
printString();
