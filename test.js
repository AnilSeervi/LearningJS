var something = 1;
var something = 2;
console.log(something);
function do_something() {
	console.log(bar); // undefined
	console.log(typeof bar);
	// console.log(foo); // ReferenceError
	console.log(typeof foo);
	var bar = 1;
	var foo = 2;
}
// a = 1;
// var a;
// do_something();
// let b = 1;
// if (b) {
// 	let c = 2;
// 	console.log(b);
// 	console.log(typeof b);
// 	if (c) {
// 		console.log(c);
// 	}
// }
// console.log(b);
var x = 0; // Declares x within file scope, then assigns it a value of 0.

console.log(typeof z); // "undefined", since z doesn't exist yet

function a() {
	var y = 2; // Declares y within scope of function a, then assigns it a value of 2.

	console.log(x, y); // 0 2

	function b() {
		x = 3; // Assigns 3 to existing file scoped x.
		y = 4; // Assigns 4 to existing outer y.
		z = 5; // Creates a new global variable z, and assigns it a value of 5.
		// (Throws a ReferenceError in strict mode.)
	}

	b(); // Creates z as a global variable.
	console.log(x, y, z); // 3 4 5
}

a(); // Also calls b.
console.log(x, z); // 3 5
console.log(typeof y); // "undefined", as y is local to function a

const aVar = 34;
if (aVar) {
	const bVar = 33;
	console.log(aVar);
	console.log(bVar);
}
// console.log(bVar);
let lotsOfDecimal = 1.766584958675746364;
console.log(lotsOfDecimal);
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);
hey();
function hey() {
	console.log("Hey, How are you?\nWhat's your name");
}
