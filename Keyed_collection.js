// Map object
// map object is a simple key/value map and can iterate its element in insertion order
let sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
console.log(sayings.size);
console.log(sayings);
console.log(
  sayings.get("elephant"),
  sayings.has("bird"),
  sayings.delete("cat")
);
for (let [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
sayings.clear();
console.log(sayings);

// Set Object
let mySet = new Set();
mySet.add(1);
mySet.add("some text");
console.log(mySet);
console.log(mySet.has(1));
console.log(mySet.size);
for (let item of mySet) console.log(item);

// Converting between Array and Set
let myArray = [...mySet];
console.log(myArray);
