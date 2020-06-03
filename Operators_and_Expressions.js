// Detructuring arrays or objects
var foo = ["one", "two", "three"];
var one = foo[0]; // Without destructuring
console.log(one);
var two = foo[1];
console.log(two);
var three = foo[2];
console.log(three);
var [one, two, three] = foo; // With Destructuring
console.log(one, two, three);

//Comma operator
var x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var a = [x, x, x, x, x];
for (var i = 0, j = 9; i <= j; i++, j--) {
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);
}

// Unary Operators
//delete : deletes an object, an object's property,or an element at a  specified index in an array
y = 10;
console.log(y);
obj1 = { name: "string", age: 0 };
console.log(obj1);
var obj = { name: "string", age: 40 };
delete obj.age;
console.log(obj);
delete obj; // cannot delete because declared with var keyword
delete foo; // cannot delete because declared with var keyword
console.log(obj);
console.log(foo);
delete y; // deletes y (implicitly declared)
// console.log(y); // returns error y not defined
delete obj1; //deletes obj1 (implicitly declared)
// console.log(obj1); //returns obj1 not defined
delete foo[1]; //deletes the element at the index of 1 in array(foo)
console.log(foo);
// typeof: returns the type of the operand passed
console.log(typeof foo);
console.log(typeof doesntexist);
console.log(typeof obj);
console.log(typeof Math);
console.log(typeof eval);
// void: specifies an expression to be evaluated without returning a value
{
  /* <a href='javascipt:void(0)'>Click here to do nothing</a> */
}
{
  /* <a href='javascript:void(document.form.submit())'>Click here to Submit</a> */
}
// Relational Operators: Compares its operands and returns boolean value
// in: returns true if the specified property is in the specified object
var trees = ["redwood", "bay", "oak", "cedar", "maple"];
console.log("maple" in trees); // Returns false because we must specify the index number not the value
console.log(0 in trees);
console.log(6 in trees);
console.log("length" in trees); // Returns true because length is an array property
console.log("PI" in Math); // Returns true
var myString = new String("coral");
console.log("length" in myString); //Returns true
var myCar = { make: "Honda", model: "Accord", year: 1998 };
console.log("make" in myCar); // Returns true
// instanceof: rturns true if the specified object is of the specified type.
console.log(myString instanceof String); // returns true
console.log(myString instanceof Number); // returns false
var theDay = new Date(2020, 06, 03);
console.log(theDay instanceof Date); // returns true

// Expressions: it is any vakid code that resolves to a value
// Primary Expressions
// this: used to refer the current object
function MyObj(name, age) {
  this.name = name;
  this.age = age;
}
var myObj = new MyObj("Anil", 5);
console.log(myObj);
// Left-Hand-Side expressions
// new: used to create an instance of user defined object type or built in object type
var objectName = new Object();
objectName.name = "anil";
objectName.age = 5;
console.log(objectName);
// super: used to call functions on an object's parent. usefulwith classes to call the parent constructor

// Spread Operator: Allows an expression to be expanded in places where multiple arguments(for function calls) or multiple elements(for array literals) are expected.
// Spread & Functions
const temparatures = [12, 32, 4, 54, 65, 57];
console.log(Math.min(temparatures)); // Returns NaN
console.log(Math.min(...temparatures)); // returns 4
console.log(temparatures); // returns the whole array
console.log(...temparatures); // returns the elements as in console.log(temparatures[0],temparatures[1],..)
console.log("this is a", ..."BANANA"); //  returns BANANA as in console.log(string[0], string[1],..)
//Spread & Array Literals
var parts = ["shoulders", "knees"];
var lyrics = ["head", ...parts, "and", "toes"]; // We can combine the Arrays Easily
var lyrics1 = lyrics;
lyrics1.push("tail"); // this would also change 'lyrics's as they both reference to a same memory
console.log(lyrics);
var lyrics2 = [...lyrics]; // Efficient way of copying an array(also it's a totally separate array)
lyrics2.unshift("forehead"); // this wouldn't change the 'lyrics' as both are separate independent variables
console.log(...lyrics);
// Spread & Object Literals
const lion = { hasTail: true, legs: 4 };
const eagle = { canFly: true };
const hybrid = { name: "Gryphon", ...lion, ...eagle };
console.log(hybrid);
