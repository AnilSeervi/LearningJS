// Number Object
// Properties of Number
var biggestNum = Number.MAX_VALUE; // The largest representable number ( ±1.7976931348623157e+308 )
var smallestNum = Number.MIN_VALUE; // The smallest representable number ( ±5e-324 )
var infiniteNum = Number.POSITIVE_INFINITY; // Special positive infinite value; returned on overflow
var negInfiniteNum = Number.NEGATIVE_INFINITY; // Special negative infinite value; returned on overflow
var notANum = Number.NaN; // Special "not a number" value
var epsilon = Number.EPSILON; // Difference between 1 and the smallest value greater than 1 that can be represented as a Number ( 2.220446049250313e-16 )
var minSafeInt = Number.MIN_SAFE_INTEGER; // Minimum safe integer in JavaScript (−2 + 1, or −9007199254740991 )
var maxSafeInt = Number.MAX_SAFE_INTEGER; // Maximum safe integer in JavaScript (+2 − 1, or +9007199254740991 )
console.log(
  biggestNum,
  smallestNum,
  infiniteNum,
  negInfiniteNum,
  notANum,
  epsilon,
  minSafeInt,
  maxSafeInt
);
// Methods of Number
console.log(Number.parseFloat("8734.93843489348394803840298340982048028340")); // Parses a string argument and returns a floating point number. Same as the global parseFloat() function.
console.log(Number.parseInt("83482.73947")); // Parses a string argument and returns an integer of the specified radix or base. Same as the global parseInt() function.
console.log(Number.isFinite(0 / 2)); // Determines whether the passed value is a finite number.
console.log(Number.isInteger(8323.4)); // Determines whether the passed value is an integer.
console.log(Number.isNaN(0 / 0)); // Determines whether the passed value is NaN . More robust version of the original global isNaN() .
console.log(Number.isSafeInteger(87497497347675675675677767)); // Determines whether the provided value is a number that is a safe integer.
// Methods of Number.prototype
console.log(biggestNum.toExponential(2)); // Returns a string representing the number in exponential notation.
console.log(maxSafeInt.toFixed(4)); // Returns a string representing the number in fixed-point notation.
var numb = 12.333232;
console.log(numb.toPrecision(4)); //  Returns a string representing the number to a specified precision in fixed-point notation.

// Math Object
console.log(parseFloat(Math.PI.toFixed(4))); // the Math.PI has the pi value(3.14159...)
console.log(Math.abs(-9475845)); // Returns the absolute value of the number
console.log(
  // Standard trigonometric functions; with the argument in radians.
  Math.sin((90 / 180) * Math.PI),
  Math.cos((0 / 180) * Math.PI),
  Math.tan((45 / 180) * Math.PI)
);
console.log(Math.asin(0), Math.acos(1), Math.atan(0)); // Inverse trigonometric functions; return values in radians.
console.log(Math.sinh(0), Math.cosh(0), Math.tanh(0)); // Hyperbolic functions; argument in hyperbolic angle.
console.log(Math.asinh(0), Math.acosh(1), Math.atanh(0)); // Inverse hyperbolic functions; return values in hyperbolic angle.
console.log(
  // Exponential and logarithmic functions.
  Math.pow(2, 4),
  Math.exp(1),
  Math.expm1(1),
  Math.log(1),
  Math.log10(10),
  Math.log2(2)
);
console.log(Math.floor(3434.734), Math.ceil(3434.234)); // Returns the largest/smallest integer less/greater than or equal to an argument.
var temparatures = [12, 3, 23, 23, 24, 34, 34, 34, 34, 1, 21, 23, 12];
console.log(Math.min(...temparatures), Math.max(...temparatures)); // Returns the minimum or maximum (respectively) value of a comma separated list of numbers as arguments.
console.log(Math.random()); // Returns a random number between 0 and 1.
console.log(Math.round(3434.59), Math.fround(3434.49), Math.trunc(3434.9)); // Rounding and truncation functions.
console.log(Math.sqrt(4), Math.cbrt(8), Math.hypot(2, 2, 2, 2)); // Square root, cube root, Square root of the sum of square arguments.
console.log(Math.sign(-856)); // The sign of a number, indicating whether the number is positive, negative or zero.

// Date  Object
const nowDate = Date(); // Not using the new keyword will return the current date in string
console.log(nowDate);
const todayIs = new Date(); // NO arguments returns today's date and time
console.log(todayIs);
const christmas = new Date("25 december 2020 12:00:00"); // string representation of date arguments
console.log(christmas);
const christmas1 = new Date(2020, 12, 25, 12, 30, 0, 0);
console.log(christmas1);
// Methods of Date Object
// 'set' methods is used to set date and time values
// 'get' methods is used to get date and time values
// 'to' methods, for returing string values from Date Object
// parse and UTC methods, for parsing Date strings
console.log(
  christmas.getDay(), // returns the Day : 0(Sunday) to 6(Saturday)
  christmas.getDate(), // returns the Date : 1 to 31(day of the month)
  christmas.getMonth(), // returns the Month : 0(January) to 11(December)
  christmas.getFullYear(), // returns the full year since 1990
  christmas.getHours(), // returns the hours : 0 to 23
  christmas.getMinutes(), // returns the minutes : 0 to 59
  christmas.getSeconds() // returns the seconds : 0 to 59
);
// similarly set method can be used to set the time and date
// A simple eg to display the number of days left in the current year
// getTime and setTime  methods are usefull in comparing dates.
var today = new Date();
var endYear = new Date(2020, 11, 31, 23, 59, 59, 999);
endYear.setFullYear(today.getFullYear());
var msPerDay = 24 * 60 * 60 * 1000;
var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay; // returns the daysLeft in ms
console.log(Math.round(daysLeft));
// parse method is useful for assigning values from date string to existing Date object
today.setTime(Date.parse("Aug 15, 2020"));
console.log(today);
