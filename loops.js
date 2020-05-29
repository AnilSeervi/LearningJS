//Simple for loop
for (let i = 0; i <= 10; i++) {
  console.log(`i = ${i}`);
}
// do..while loop
let y = 0;
do {
  console.log(`y = ${y}`);
  y++;
} while (y <= 10);
//while loop
y = 0;
while (y <= 10) {
  console.log(`y = ${y}`);
  y++;
}
// labelling loops
markLoop: while (y <= 20) {
  console.log(`y = ${y}`);
  y++;
}
// break Statements(break with labels is usefull when breaking a nested loop, but for this eg. simple break statement is enough)
markedLoop: while (y <= 30) {
  if (y === 23) {
    break markedLoop;
  }
  console.log(`y = ${y}`);
  y++;
}
// Continue statement(basically restarts the loop if it is encountered)
markingLoop: while (y < 30) {
  y++;
  if (y === 25 || y === 27 || y === 29) {
    continue markingLoop;
  }
  console.log(`y = ${y}`);
}
/*for..in Loop
Basic Syntax:
for(variable in object)
statement*/
const obj = { a: 1, b: 2, c: 3 };
for (let prop in obj) {
  console.log(`${prop} = ${obj["prop"]}`); // obj[prop] returns the value of property, but obj.prop doesn't
  console.log(prop === "a");
}
console.log(`${obj["a"]}`);
/*for...of loop
Basic Syntax:
for(variable of object)
statements*/
const arry = [1, 2, 3];
arry.yo = 4;
for (let x in arry) console.log(x); // for..in kindof return the index
for (let x of arry) console.log(x); // while for..of returns the value?
console.log(arry);
