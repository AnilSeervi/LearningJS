console.log(Math.sqrt(9));
console.log(Math.pow(2, 3));

let x1 = 3,
	y1 = 5;
let x2 = 7,
	y2 = 8;
let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log('Distance: ' + dist);

console.log('Random number ' + (Math.floor(Math.random() * 10) + 1));

let i = 1;
while (i < 1000) {
	console.log(i);
	i += i;
}
let myName = 'anil';
function hey() {
	myName += ' Seervi';
	console.log(myName);
}

console.log(myName.indexOf('S'));

var z = 6;
function zee() {
	let z = 7;
	console.log(z);
}
zee();
console.log(z);
zee();
