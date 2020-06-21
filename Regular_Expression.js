// Regular expressions are patterns used to match character combinations in strings.
// In JS, Regular Expressions are also Objects.
// These patterns are used with the the exec() and test() methods of RegExp, and with match(), matchAll(), replace(), replaceAll(), search() and split() methods of String.
let re = /(a)(bc)/g; // Using a Regular expression literal
let regex = new RegExp("ab + c"); // calling constructor function of the RegExp Object
// Using Simple patterns
const word = `Hi, do, you know your abc's and 123's_\n\t\r\v\f?\b\0`;
const word1 = `The latest airplane designs evolved \n form slabcraft.`;
const word2 = `Grab crab`;
const code = `San Francisco CA 94103 CO81611 NY 10003 MT 59868 CA 92657`;
console.log(word.search(re), word1.search(re), word2.search(re)); // the regexp matches both word and word1 but not word2 because the regexp matches 'abc' not 'ab c'
// Using Special Characters
// When the search for a match requires more than a direct match we use special characters
// Using Character classes
// '.' Character => Matches any character except line terminators
console.log(word1.match(/./)); // Matches only the first character of any string except line breakers
console.log(word1.match(/./g)); // Matches any character in a string except line breakers
console.log(word1.match(/e./g)); // Matches character 'e' followed by any character except line breakers
console.log(word1.match(/.e/g)); // Matches character 'e' preceded by any character except line breakers
// '\d' Character => Matches any digit [0-9]
console.log(word.match(/\d/g)); // Matches any digits
// '\D' Character => Matches any character that is not a digit ^[0-9]
console.log(word.match(/\D/g)); // Matches any character except digits
// '\w' Character => Matches any alphanumeric character from the basic latin alphabet, including underscore [A-Za-z0-9_]
console.log(word.match(/\w/g)); // Matches alphanumeric charcters of range and underscore [A-Za-z0-9_]
// '\W' Character => Matches any character that is not word character of basic latin alphabet [^A-Za-z0-9_]
console.log(word.match(/\W/g)); // Matches any character except word character of basic latin alphabet [^A-Za-z0-9_]
// '\s' Character => Matches a single white space character including space, tab, form feed, line feed and other unicode spaces.[\f\n\r\t\v\u00a0]
console.log(word.match(/\s/g)); // Matches single white space characters(also \n \t etc)
// '\S' Character => Matches a single character other than white space [^\f\n\r\t\v\u00a0]
console.log(word.match(/\S/g)); // Matches single character other than white spaces
console.log(word.match(/\t/g)); // '\t' => Matches a horizontal tab
console.log(word.match(/\r/g)); // '\r' => Matches a carriage return
console.log(word.match(/\n/g)); // '\n' => Matches a linefeed
console.log(word.match(/\v/g)); // '\v' => Matches a vertical tab
console.log(word.match(/\f/g)); // '\f' => Matches a form feed
console.log(word.match(/[\b]/g)); // '[\b]' => Matches a backspace.
console.log(word.match(/\0/g)); // '\0' => Matches a null character.Do not follow it with another digit.

// Asertions
// Boundary-type assertions
console.log(word.match(/^a/g), word.match(/^H/g)); // Marches the beginning of the input
console.log(word1.match(/t$/g), word1.match(/.$/g)); // Matches the end of the input
console.log("Boundary-Type Assertions");
console.log(word.match(/Hi\b/g), word.match(/\byou/g)); // Matches a word boundary:Position where a word character is not followed or preceded by another word-character
console.log(word.match(/Hi,\B/g), word.match(/\Bour/g)); // Matches a non-word boundary: Position where the previous or the next character are of same type.
// Other Assertions
console.log(word.match(/y(?=o)/g)); // LookAhead Assertion
console.log(word.match(/y(?!r)/g)); // Negative LookAhead Assertion
console.log(word.match(/(?<=\s)y/g)); // LookBehind Assertion
console.log(word.match(/(?<!\s)o/g)); // Negative LookBehind Assertion

// Groups and Ranges
// x|y matches x or y.
console.log(word.match(/your | know/g), word.match(/know | your/g)); // if x is encountered first in the search then y,t then only x is returned and if y is encoumtered first then x, then both are returned
// [xyz] [a-z] => A Character Set.
console.log(word.match(/[abc]/g), word.match(/[a-cA-H]/g)); // Matches any one of the enclosed characters.
// [^xyz] [^a-z] => A negated or complimented Character set.
console.log(word.match(/[^abcdefghijxyz]/g), word.match(/[^A-Za-z]/g)); // Matches anything that is not enclosed in the brackets

// Capturing Groups
// We use parentheses to denote a capture group. Allow us to extract individual pieces of information from a matching string
console.log(code.match(/([A-Z][A-Z])\s(\d\d\d\d\d)/)); // returns a array where [0]: the whole match [1]...[n]: the capture groups in their parentheses order
console.log(code.match(/([A-Z][A-Z])\s(\d\d\d\d\d)/)[1]); // returns a array where [0]: the whole match [1]...[n]: the capture groups in their parentheses order
console.log(word.match(/Hi(,)\sdo\1/), word.match(/abc('s)(\s)and\2\d\d\d\1/)); // '\n': it's like numbering the capture groups from left to right(1...n) and accessing it later by using \n
console.log(word.match(/Hi(?<comma>,)\sdo/)); // (?<name>x): naming the capture group
console.log(word.match(/Hi(?:,)\sdo/)); // (?:x): declaring a non-capturing group. it doesn't remember the match

// Ouantifiers
console.log(word.match(/ab*/g)); // x* : Matches the preceding item x 0 or more times.
console.log(word.match(/ab+/g)); // x+ : Matches the preceding item x 1 or more times.
console.log(word.match(/ab?/g)); // x? : Matches the preceding ietm x 0 or 1 times.
console.log(word.match(/\d{3}/g)); //     x{n} : matches excatly n occurences of the preceding item x.
console.log(word.match(/\d{2,}/g)); //    x{n,} : matches at least n occurences of the preceding item x.
console.log(word.match(/\w{2,3}'/g)); //  x{n,m} : matches at least n and atmost m occurences of the preceding item x.
