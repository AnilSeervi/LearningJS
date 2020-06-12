// HexaDecimal escape sequence
console.log("\xA9");
// Unicode escape sequence
console.log("\u00A9");

// String Objects
const foo = new String("bar");
console.log(foo, "TypeOf: " + typeof foo);
const firstString = "2+2"; // Creates a String literal value
const secondString = new String("2+2"); // Creates a String object
console.log(eval(firstString)); // returns number 4
console.log(eval(secondString));
// We can access strings using array bracket style but cannot change individual characters because strings are immutable array-like objects
var hello = "Hello World!";
var hellolength = hello.length;
console.log(hellolength);
console.log(hello[hellolength - 1]);
hello[0] = "h";
console.log(hello);

// Some of the string methods
console.log(hello.charAt(hellolength - 1));
console.log(hello.charCodeAt(hellolength - 1)); // retunrns unicode value of character at the specified positon
console.log(hello.codePointAt(hellolength - 1));
console.log(hello.indexOf("!"));
console.log(hello.lastIndexOf("l")); // returns the last occurence of the passed argument
console.log(hello.startsWith("He")); // returns true if the string starts with the provided substring
console.log(hello.endsWith("d!")); // returns true if the string ends with the provided substring
console.log(hello.includes(" W")); // returns true if the string includes the provided substring
console.log(hello.concat(" My ", "Name ", "is")); // takes in strings to concat at the end of the string and returns the whole concatenated string
console.log(hello.split(" ")); // splits the String object into array of strings by separating the string into substring
console.log(hello.slice(6, 12)); // extracts a seection of string and returns a new string
console.log(hello.substring(6, 12)); // returns the specified subset of string based on start and end zero-based indicies(start,end)
console.log(hello.substr(6, 6)); // returns the specified subset of string based on the start and length(start,length)
console.log(
  // works with regex expression
  hello.match(),
  hello.matchAll(),
  hello.replace("Hello", "hey"),
  // hello.replaceAll(),
  hello.search("Hello")
);
console.log(hello.toUpperCase(), hello.toLowerCase()); //  returns the string in upper and lower case
console.log(hello.normalize("NFC")); // returns the unicode normaliztion form of the calling string value
console.log(hello.repeat(3)); // Returns a string consisting of the elements of the object repeated the given times.
console.log(" hello world! 23    ".trim(), 3); // Trims whitespace from the beginning and end of the string.

// Multi-line template literals
console.log("string text line 1\n\
string text line 2");
console.log(`string text line 1
string text line 2`); // using template literals we can get the same effect with multi-line strings
// embedded expressions
const five = 5;
const ten = 10;
console.log(
  "fifteen is " + (five + ten) + " and not " + 2 * (five + ten) + "."
);
console.log(`fifteen is ${five + ten} and not ${2 * (five + ten)}.`); // template literals can be used to embed expressions as shown

// internationalization
// The 'Intl' object is the namespace for ECMAScript internationalization API, which provides language sensitive string comparision, number formatting and date and time formatting.
// The constructors 'Collator', 'NumberFormat', 'DateTimeFormat' objects are properties of the Intl object.
// Date and time formatting
const msPerDay = 24 * 60 * 60 * 1000;
const june122020 = new Date(msPerDay * (44 * 365 + 11 + 197));
const options = {
  year: "2-digit",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  timeZoneName: "short",
};
const indianDateTime = new Intl.DateTimeFormat("en-IN", options).format;
console.log(indianDateTime(june122020));
// Number Formatting
const gasPrice = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  minimumFractionDigits: 3,
});
console.log(gasPrice.format(5.249));
const hanDecimalRMBInChina = new Intl.NumberFormat("zh-CN-u-nu-hanidec", {
  style: "currency",
  currency: "CNY",
});
console.log(hanDecimalRMBInChina.format(1314.25));
// Collation
// The Collator object is useful for comparing and sorting strings.
// For example, there are actually two different sort orders in German, phonebook and dictionary. Phonebook sort emphasizes sound, and it’s as if “ä”, “ö”, and so on were expanded to “ae”, “oe”, and so on prior to sorting.
const names = ["Hochberg", "Hönigswald", "Holzman"];
const germanPhonebook = new Intl.Collator("de-DE-u-co-phonebk");
// as if sorting ["Hochberg", "Hoenigswald", "Holzman"]:
console.log(names.sort(germanPhonebook.compare).join(", ")); // logs "Hochberg, Hönigswald, Holzman"
// Some German words conjugate with extra umlauts, so in dictionaries it’s sensible to order ignoring umlauts (except when ordering words differing only by umlauts: schon before schön).
const germanDictionary = new Intl.Collator("de-DE-u-co-dict");
// as if sorting ["Hochberg", "Honigswald", "Holzman"]:
console.log(names.sort(germanDictionary.compare).join(", ")); // logs "Hochberg, Holzman, Hönigswald"
