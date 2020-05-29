// A simple if statement
var message = "helo";
if (message === "hello") {
  console.log(message);
}
//A simple if..else statement
if (message) {
  console.log(message);
} else {
  console.log("There was no message!");
}
// A if..else_if..else ladder
if (message === "hello") {
  console.log(message + " " + "World");
} else if (message !== "hello") {
  console.log(`The message was not hello, but: ${message}`);
} else {
  console.log("There was no message!");
}
// Use of for loops
for (let i = 0; i <= message.length; i++) {
  console.log(message[i]);
}
// Use of AND(&&) Logical Operator
if (message === "hello" && message) {
  console.log(message);
}
//Use of OR(||) Logical Operator
if (message === "hello" || message) {
  console.log(message);
}
//Usage of switch case statement
switch (message) {
  case "hello":
    console.log("Your message was Hello!");
    break;
  default:
    console.log(`Your message was ${message}`);
}
//Usage of ternary Operator. Syntax: (condition) ? run this code : run this code instead
var greetings = message
  ? `Your Greetings was ${message}`
  : `Your Greetings was ${message}`;
console.log(greetings);
