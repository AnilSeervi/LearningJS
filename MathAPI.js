console.log(Math.sqrt(9)); // Math method to return the square root of a number passed as arg
console.log(Math.pow(2, 3)); // method to raise a power to a base

let x1 = 3,
  y1 = 5;
let x2 = 7,
  y2 = 8;
let dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log("Distance: " + dist);
// floor: to round the float to lower integer value. random: returns a random float value between 0 and 1
console.log("Random number " + (Math.floor(Math.random() * 10) + 1));

let i = 1;
while (i < 1000) {
  console.log(i);
  i += i;
}
let myName = "anil";
function hey() {
  myName += " Seervi";
  console.log(myName);
}

hey();
console.log(myName.indexOf("S"));

var z = 6;
function zee() {
  z = 7;
  console.log(z);
}
zee();
console.log(z);
zee();
